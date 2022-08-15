import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';
import Checkbox from '../components/Checkbox';
import Fieldset from '../components/Fieldset';

export default function PositionPage() {
  const { push } = useHistory();
  return (
    <PageLayout>
      <Header />
      <Section>
        <PageTitle>지원 포지션은 무엇인가요?</PageTitle>
        <Fieldset>
          <Checkbox
            type="radio"
            id="frontend"
            name="applied-position"
            label="프론트엔드"
          />
          <Checkbox
            type="radio"
            id="backend"
            name="applied-position"
            label="백엔드"
          />
          <Checkbox
            type="radio"
            id="platform"
            name="applied-position"
            label="플랫폼"
          />
          <Checkbox
            type="radio"
            id="security"
            name="applied-position"
            label="보안"
          />
        </Fieldset>
      </Section>
      <Button onClick={() => push('/summary')}>다음</Button>
    </PageLayout>
  );
}
