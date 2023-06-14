import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import Quiz from '~/lib/components/quiz';
import Layout from '~/lib/layout';

function QuizPage() {
  return (
    <Layout>
      <NextSeo title="Two truth one lie" />
      <Quiz />
      <NavBar />
    </Layout>
  );
}

export default QuizPage;
