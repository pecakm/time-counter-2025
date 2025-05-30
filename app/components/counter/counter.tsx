'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
        </Button>
        <Button onClick={handleNew}>
          {t('new')}
        </Button>
      </Buttons>
      <ContentWrapper>
        {event && <Title>{event}</Title>}
        <Countdown>
          <PointerWrapper>
            <Pointer />
          </PointerWrapper>
          <ClockWrapper>
            <Clock to={timestamp}>
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
