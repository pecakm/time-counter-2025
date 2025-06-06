'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickerValue } from '@mui/x-date-pickers/internals/models';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { encodeParams } from '@/utils';
import { ParamName } from '@/enums';

import {
  Container,
  Title,
  Description,
  Input,
  Button,
  DateTimePicker,
} from './form.styled';
import { schema } from './form.schema';
import { FormFields } from './form.types';
import { FieldName } from './form.enums';

export default function Form() {
  const t = useTranslations('homePage.form');
  const router = useRouter();
  const [dateNullError, setDateNullError] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const dateErrorText = errors[FieldName.Date]?.message && t(errors[FieldName.Date].message);
  const dateNullErrorText = dateNullError && t('date.required');
  const dateHelperText = dateErrorText || dateNullErrorText;

  const handleDateChange = (date: PickerValue) => {
    setValue(FieldName.Date, date?.toDate() || null, { shouldValidate: true });
    setDateNullError(date === null);
  };

  const onSubmit = ({ date, name }: FormFields) => {
    if (date === null) return;

    router.push(`?${ParamName.Params}=${encodeParams(date.getTime(), name)}`);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          onChange={handleDateChange}
          format="DD/MM/YYYY HH:mm"
          ampm={false}
          timeSteps={{ minutes: 1 }}
          label={t('date.placeholder')}
          slotProps={{
            textField: {
              error: !!errors[FieldName.Date] || dateNullError,
              helperText: dateHelperText,
              fullWidth: true,
            },
          }}
        />
      </LocalizationProvider>
      <Input
        {...register(FieldName.Name)}
        error={!!errors[FieldName.Name]}
        helperText={errors[FieldName.Name]?.message && t(errors[FieldName.Name].message)}
        label={t('name.placeholder')}
        fullWidth
      />
      <Button type="submit">{t('button')}</Button>
    </Container>
  );
}
