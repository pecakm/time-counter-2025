'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { ParamName } from '@/enums';

import { Container } from './counter.styled';

export default function Counter() {
  const searchParams = useSearchParams();
  const [event, setEvent] = useState<string | null>(null);

  useEffect(() => {
    setEvent(searchParams.get(ParamName.Event));
  }, [searchParams]);

  if (!event) {
    return null;
  }

  return (
    <Container>
      <h1>{event}</h1>
    </Container>
  );
}
