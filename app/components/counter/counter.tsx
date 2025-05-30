'use client';

import { useState } from 'react';
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
      <ContentWrapper>
        {event && <Title>{event}</Title>}
        <Countdown>
          <PointerWrapper $seconds={secondsLeft || 0}>
            {!!secondsLeft && <Pointer />}
          </PointerWrapper>
          <ClockWrapper $eventStarted={!secondsLeft}>
            <Clock
              to={timestamp}
              onTick={({ timeDelta }) => setSecondsLeft(timeDelta.total)}
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
