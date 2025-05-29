'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ParamName } from '@/enums';

import { Container, Input, Button, Title, Description } from './form.styled';

export default function Form() {
  const t = useTranslations('homePage.form');
  const [event, setEvent] = useState('');
  const router = useRouter();
  const timestamp = new Date().getTime() + 48 * 3600 * 1000 + 5000;
  // const timestamp = new Date().getTime() - 5000;

  const handleStart = () => {
    router.push(`?${ParamName.Event}=${encodeURIComponent(event)}&${ParamName.Timestamp}=${timestamp}`);
  };

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <Input
        type="text"
        label="Event name"
        placeholder="Enter event name"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <Button onClick={handleStart}>{t('button')}</Button>
    </Container>
  );
}
