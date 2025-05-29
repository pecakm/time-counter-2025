'use client';

import { useSearchParams } from 'next/navigation';

import { ParamName } from '@/enums';

import { Container } from './counter.styled';

export default function Counter() {
  const searchParams = useSearchParams();
  const event = searchParams.get(ParamName.Event);

  return (
    <Container>
      <h1>{event}</h1>
    </Container>
  );
}
