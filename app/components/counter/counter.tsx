'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import { ParamName } from '@/enums';

import { Container, Timer } from './counter.styled';

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
      <Timer>
        <FlipClockCountdown
          to={new Date().getTime() + 48 * 3600 * 1000 + 5000}
          labelStyle={{
            color: '#fff',
          }}
        />
      </Timer>
    </Container>
  );
}
