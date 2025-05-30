import { decodeParams } from '@/utils';

import { Counter, Form, PageContent } from './components';
import { Props } from './page.types';

export default async function Home({ searchParams }: Props) {
  const { p } = await searchParams;
  const decoded = p ? decodeParams(p) : { timestamp: undefined, event: undefined };

  return (
    <PageContent>
      {decoded.timestamp !== undefined ? (
        <Counter timestamp={decoded.timestamp} event={decoded.event} />
      ) : (
        <Form />
      )}
    </PageContent>
  );
}
