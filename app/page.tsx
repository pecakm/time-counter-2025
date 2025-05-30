import { ParamName } from '@/enums';

import { Counter, Form, PageContent } from './components';
import { Props } from './page.types';

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const timestamp = params[ParamName.Timestamp];
  const event = params[ParamName.Event];

  return (
    <PageContent>
      {timestamp !== undefined ? (
        <Counter timestamp={Number(timestamp)} event={event} />
      ) : (
        <Form />
      )}
    </PageContent>
  );
}
