'use client';

import { useTranslations } from 'next-intl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import {
  Container,
  Input,
  Button,
  DateTimePicker,
} from './form.styled';

export default function Form() {
  const t = useTranslations('homePage.form');

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker />
      </LocalizationProvider>
      <Input />
      <Button>{t('button')}</Button>
    </Container>
  );
}
