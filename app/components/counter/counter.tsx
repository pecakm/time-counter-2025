'use client';

import { useRouter } from 'next/navigation';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { useTranslations } from 'next-intl';

import {
  Container,
  Button,
  Title,
} from './counter.styled';
import { Props } from './counter.types';

export default function Counter({ timestamp, event }: Props) {
  const t = useTranslations('homePage.counter');
  const router = useRouter();

  const handleNew = () => {
    router.push('/');
  };

  return (
    <Container>
      <Button onClick={handleNew}>
        {t('new')}
      </Button>
      {event && <Title>{event}</Title>}
      <FlipClockCountdown to={timestamp} />
    </Container>
  );
}
