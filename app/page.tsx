import { ParamName } from '@/enums';

import { Counter, Form, PageContent } from './components';
import { Props } from './page.types';

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const timestamp = params[ParamName.Timestamp];
  const event = params[ParamName.Event];
  const decodedTimestamp = timestamp ? parseInt(timestamp, 36) : undefined;
  const decodedEvent = event ? atob(event) : undefined;

  return (
    <PageContent>
      {decodedTimestamp !== undefined ? (
        <Counter timestamp={decodedTimestamp} event={decodedEvent} />
      ) : (
        <Form />
      )}
    </PageContent>
  );
}
