'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Check, Copy, Plus } from 'lucide-react';

import {
  Container,
  Button,
  Title,
  Completed,
  Buttons,
  ContentWrapper,
  Clock,
  ClockWrapper,
  Countdown,
  PointerWrapper,
  Pointer,
} from './counter.styled';
import { Props } from './counter.types';

export default function Counter({ timestamp, event }: Props) {
  const t = useTranslations('homePage.counter');
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const daysLeftInSeconds = useMemo(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diff = timestamp - Date.now();
    const days = Math.floor(diff / oneDay);

    return days * oneDay / 1000;
  }, [timestamp]);

  const handleNew = () => {
    router.push('/');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  return (
    <Container>
      <Buttons>
        <Button onClick={handleCopyLink}>
          {isCopied ? t('copied') : t('copyLink')}
          {isCopied ? <Check /> : <Copy size={16} />}
        </Button>
        <Button onClick={handleNew}>
          {t('new')}
          <Plus />
        </Button>
      </Buttons>
      {event && (
        <ContentWrapper>
          <Title>{event}</Title>
        </ContentWrapper>
      )}
      <ContentWrapper>
        <Countdown>
          <PointerWrapper
            $rotationSeconds={secondsLeft ? secondsLeft - daysLeftInSeconds : 0}
            $secondsLeft={secondsLeft || 0}
          >
            {!!secondsLeft && <Pointer />}
          </PointerWrapper>
          <ClockWrapper $eventStarted={!secondsLeft}>
            <Clock
              to={timestamp}
              onTick={({ timeDelta }) => setSecondsLeft(timeDelta.total)}
              // 86400000 equals 1000 days in seconds
              $small={daysLeftInSeconds >= 86400000}
            >
              <Completed>
                {t('eventStarted')}
              </Completed>
            </Clock>
          </ClockWrapper>
        </Countdown>
      </ContentWrapper>
    </Container>
  );
}
