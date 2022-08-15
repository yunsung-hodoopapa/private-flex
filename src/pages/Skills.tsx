import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';
import Checkbox from '../components/Checkbox';
import Section from '../components/Section';
import Fieldset from '../components/Fieldset';

export default function SkillsPage() {
  const { push } = useHistory();
  return (
    <PageLayout>
      <Header />
      <Section>
        <PageTitle>주로 사용하는 언어는 무엇인가요?</PageTitle>
        <Fieldset>
          <Checkbox id="C" name="applied-skills" label="C" />
          <Checkbox id="JAVA" name="applied-skills" label="JAVA" />
          <Checkbox id="JavaScript" name="applied-skills" label="JavaScript" />
          <Checkbox id="Python" name="applied-skills" label="Python" />
          <Checkbox id="Haskell" name="applied-skills" label="Haskell" />
          <Checkbox id="Scala" name="applied-skills" label="Scala" />
        </Fieldset>
      </Section>
      <Button onClick={() => push('/position')}>다음</Button>
    </PageLayout>
  );
}
