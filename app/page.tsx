import { ParamName } from '@/enums';

import { Counter, Form, PageContent } from './components';
import { Props } from './page.types';

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const hasEvent = params[ParamName.Event] !== undefined;

  return (
    <PageContent>
      {hasEvent ? <Counter /> : <Form />}
    </PageContent>
  );
}
