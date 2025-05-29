'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { useTranslations } from 'next-intl';
import { PlusIcon } from 'lucide-react';

import { ParamName } from '@/enums';
import { Color } from '@/styles';

import {
  Container,
  Button,
  Timer,
  Content,
  Title,
  Circle,
  CircleWrapper,
  Completed,
} from './counter.styled';

export default function Counter() {
  const t = useTranslations('homePage.counter');
  const router = useRouter();
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

  const handleNew = () => {
    setEvent(null);
    setTimestamp(null);
    router.push('/');
  };

  return (
    <Container>
      <Button onClick={handleNew}>
        {t('new')}
        <PlusIcon />
      </Button>
      <Title>{event}</Title>
      <Content>
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
              <Completed>Completed</Completed>
            </FlipClockCountdown>
          </Timer>
      </Content>
    </Container>
  );
}
