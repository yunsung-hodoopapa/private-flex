/* eslint-disable @typescript-eslint/no-shadow */
import {
  useState,
  ChangeEvent,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';

import { validators, debounce } from '../utils';

export default function MainPage() {
  const { push } = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | undefined>(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState<
    boolean | undefined
  >(false);

  const onChangeUserMail = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(setEmail(e.target.value), 5000);
  };

  const onChnageUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChageConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const getEmailValidation = (email: string) => {
    const result = validators.email(email)?.includes(email);
    return result;
  };

  const checkUserPassword = (password: string, confirmPassword: string) =>
    password === confirmPassword ? true : false;

  useEffect(() => {
    const bool = getEmailValidation(email);
    setIsValid(bool);
  }, [email]);

  useEffect(() => {
    const bool = checkUserPassword(password, confirmPassword);
    setIsPasswordConfirmed(bool);
  }, [password, confirmPassword]);

  console.log(password);
  console.log(confirmPassword);

  console.log(isPasswordConfirmed);

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
            validationState={isValid ? 'valid' : 'invalid'}
            bottomText={isValid ? '' : '이메일 주소를 확인해주세요'}
            onChange={onChangeUserMail}
            value={email}
          />
          <Input
            placeholder="비밀번호"
            style={{ marginTop: '16px' }}
            onChange={onChnageUserPassword}
          />
          <Input
            placeholder="비밀번호 확인"
            style={{ marginTop: '16px' }}
            onChange={onChageConfirmPassword}
            validationState={isPasswordConfirmed ? 'valid' : 'invalid'}
            bottomText={isPasswordConfirmed ? '' : '비밀번호를 확인해주세요'}
          />
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
