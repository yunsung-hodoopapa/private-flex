import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import languageData from '../assets/languages.json';
import positionData from '../assets/positions.json';

interface FormBody {
  email: string;
  password: string;
  languageIds: string[];
  positionId: string;
}

const passwordRegExp = new RegExp(/(?=.*\d{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/);

const server = fastify();

server.register(fastifyCors);

server.get('/ping', async () => {
  return 'pong\n';
});

server.get('/api/v1/languages', async () => {
  return languageData;
});

server.get('/api/v1/positions', async () => {
  return positionData;
});

server.post<{
  Body: FormBody;
  Reply:
    | { accepted: true; body: FormBody }
    | { accepted: false; reason: string };
}>('/api/v1/submit', async (req, rep) => {
  const { body } = req;

  const { email = '', password = '', languageIds = [], positionId = '' } = body;

  if (email === '') {
    return rep.status(400).send({
      accepted: false,
      reason: '이메일 주소를 입력해주세요.',
    });
  }

  if (!passwordRegExp.test(password)) {
    return rep.status(400).send({
      accepted: false,
      reason:
        '규칙에 맞지 않는 비밀번호 데이터입니다. (최소 8자, 최대 50자, 1개 이상의 숫자와 2개 이상의 영문자)',
    });
  }

  if (!Array.isArray(languageIds)) {
    return rep.status(400).send({
      accepted: false,
      reason: '올바르지 않은 형식의 주 사용 언어 데이터입니다.',
    });
  }

  if (languageIds.length === 0) {
    return rep.status(400).send({
      accepted: false,
      reason: '주 사용 언어를 입력해주세요.',
    });
  }

  if (positionId === '') {
    return rep.status(400).send({
      accepted: false,
      reason: '지원 포지션을 입력해주세요.',
    });
  }

  rep.status(200).send({
    accepted: true,
    body,
  });
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
