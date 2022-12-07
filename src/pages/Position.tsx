import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import Checkbox from '../components/Checkbox';
import Fieldset from '../components/Fieldset';

export default function PositionPage() {
  const { push } = useHistory();
  const [selectedItem, setSelectedItem] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(event.target.value);
  };

  const onClickRouteHandler = () => {
    if (selectedItem === '') {
      window.alert('하나 이상의 값을 선택해주세요');
    } else {
      push('/summary');
    }
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <PageLayout>
      <Header />
      <Section>
        <PageTitle>지원 포지션은 무엇인가요?</PageTitle>
        <Fieldset>
          {positionWrap.map((item, index) => {
            const { id, name } = item;
            return (
              <Checkbox
                type="radio"
                id={id}
                value={name}
                name="applied-position"
                label={name}
                onChange={onChangeHandler}
              />
            );
          })}
        </Fieldset>
      </Section>
      <Button onClick={() => onClickRouteHandler()}>다음</Button>
    </PageLayout>
  );
}

const positionWrap = [
  { id: '0', name: '프론트엔드' },
  { id: '1', name: '백엔드' },
  { id: '2', name: '플랫폼' },
  { id: '3', name: '보안' },
];
