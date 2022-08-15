import Button from '../components/Button';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';
import Section from '../components/Section';

export default function SummaryPage() {
  return (
    <PageLayout>
      <Header />
      <Section>
        <PageTitle>작성 내용 요약</PageTitle>
        <div>
          <h3>이메일</h3>
          <p>지원자 이메일 영역</p>
        </div>
        <div>
          <h3>주 사용 언어</h3>
          <p>주 사용 언어 영역</p>
        </div>
        <div>
          <h3>지원 포지션</h3>
          <p>지원 포지션 영역</p>
        </div>
      </Section>
      <Button onClick={() => alert('완료')}>제출 하기</Button>
    </PageLayout>
  );
}
