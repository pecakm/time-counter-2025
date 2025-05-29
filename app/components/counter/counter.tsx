'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import { ParamName } from '@/enums';
import { Color } from '@/styles';

import { Container, Timer, Content, Title, Circle, TimerWrapper, CircleWrapper } from './counter.styled';

export default function Counter() {
  const searchParams = useSearchParams();
  const [event, setEvent] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<number | null>(null);

  useEffect(() => {
    setEvent(searchParams.get(ParamName.Event));
    setTimestamp(Number(searchParams.get(ParamName.Timestamp)));
  }, [searchParams]);

  if (!event || !timestamp) {
    return null;
  }

  return (
    <Container>
      <Title>{event}</Title>
      <Content>
        <TimerWrapper>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <Timer>
            <FlipClockCountdown
              to={timestamp}
              labelStyle={{
                color: Color.White,
              }}
              separatorStyle={{
                color: Color.White,
              }}
              dividerStyle={{
                color: 'transparent',
              }}
            >
              Completed
            </FlipClockCountdown>
          </Timer>
        </TimerWrapper>
      </Content>
    </Container>
  );
}
