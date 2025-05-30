import { ParamName } from '@/enums';

import { Counter, Form, PageContent } from './components';
import { Props } from './page.types';

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const isDateSet = params[ParamName.Timestamp] !== undefined;

  return (
    <PageContent>
      {isDateSet ? <Counter /> : <Form />}
    </PageContent>
  );
}
