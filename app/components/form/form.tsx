'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { ParamName } from '@/enums';

import {
  Container,
  Input,
  Button,
  Title,
  Description,
  DateTimePicker,
} from './form.styled';

export default function Form() {
  const t = useTranslations('homePage.form');
  const [event, setEvent] = useState('');
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);
  const router = useRouter();

  const handleStart = () => {
    if (event && date) {
      const eventParam = `${ParamName.Event}=${encodeURIComponent(event)}`;
      const timestampParam = `${ParamName.Timestamp}=${date.unix() * 1000}`;
      router.push(`?${eventParam}&${timestampParam}`);
    }
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Event date"
          value={date}
          onChange={(value) => setDate(dayjs(value))}
        />
      </LocalizationProvider>
      <Button onClick={handleStart}>{t('button')}</Button>
    </Container>
  );
}
