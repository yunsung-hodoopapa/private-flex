import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';

export default function MainPage() {
  const { push } = useHistory();

  return (
    <PageLayout>
      <Header />
      <HeaderWrapper>
        <h1>flex 개발자 채용</h1>
      </HeaderWrapper>
      <Section>
        <StyledForm>
          <Input
            placeholder="이메일을 입력해주세요."
            validationState="invalid"
            bottomText="이메일 주소를 확인해주세요"
          />
          <Input placeholder="비밀번호" style={{ marginTop: '16px' }} />
          <Input placeholder="비밀번호 확인" style={{ marginTop: '16px' }} />
        </StyledForm>
      </Section>
      <Button onClick={() => push('/skills')}>다음</Button>
    </PageLayout>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  margin-top: auto;

  & label:last-of-type {
    margin-bottom: 52px;
  }
`;
