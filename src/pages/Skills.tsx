/* eslint-disable array-callback-return */
import { useHistory } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';
import Checkbox from '../components/Checkbox';
import Section from '../components/Section';
import Fieldset from '../components/Fieldset';

import { ChangeEvent } from 'react';

type CheckItemType = {
  id: string;
  name: any;
};

export default function SkillsPage() {
  const { push } = useHistory();
  const [checkList, setCheckList] = useState<CheckItemType[]>([]);

  const onCheckItem = (checked: boolean, name: any) => {
    if (checked) {
      setCheckList([...checkList, name]);
    } else if (!checked) {
      setCheckList(checkList.filter(el => el !== name));
    }
  };

  const onClickHandler = () => {
    if (!checkList.length) {
      window.alert('하나 이상의 값을 선택해주세요');
    } else {
      push('/position');
    }
  };

  useEffect(() => {
    if (checkList.length) {
      console.log(checkList);
    }
  }, [checkList]);

  return (
    <PageLayout>
      <Header />
      <Section>
        <PageTitle>주로 사용하는 언어는 무엇인가요?</PageTitle>
        <Fieldset>
          {myCheckBoxList.map((item: CheckItemType, index) => {
            const { name, id } = item;
            return (
              <Checkbox
                key={index}
                id={id}
                name={name}
                label={name}
                checked={checkList.includes(name) ? true : false}
                onChange={e => onCheckItem(e.target.checked, e.target.name)}
              />
            );
          })}
        </Fieldset>
      </Section>
      <Button onClick={() => onClickHandler()}>다음</Button>
    </PageLayout>
  );
}

const myCheckBoxList = [
  {
    id: '0',
    name: 'C',
  },
  {
    id: '1',
    name: 'JAVA',
  },
  {
    id: '2',
    name: 'JavaScript',
  },
  {
    id: '3',
    name: 'Python',
  },
  {
    id: '4',
    name: 'Haskell',
  },
  {
    id: '5',
    name: 'Scala',
  },
];
