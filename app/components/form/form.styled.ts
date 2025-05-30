import styled from 'styled-components';
import { TextField, Button as ButtonMUI } from '@mui/material';
import { DateTimePicker as DateTimePickerMUI } from '@mui/x-date-pickers/DateTimePicker';

import { Color } from '@/styles';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: ${Color.BgPaper};
  border-radius: 16px;
  box-shadow: ${Color.ContainerBoxShadow};
  backdrop-filter: blur(8px);
  border: 1px solid ${Color.ContainerBorderColor};
`;

export const Title = styled.h1`
  color: ${Color.TextPrimary};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const Description = styled.p`
  color: ${Color.TextSecondary};
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  text-align: center;
`;

export const DateTimePicker = styled(DateTimePickerMUI)`
  .MuiPickersInputBase-root {
    background-color: ${Color.BgDefault};
    transition: all 0.2s ease;
    border-radius: 8px;
    font-size: 1rem;

    &:hover {
      background-color: ${Color.InputHoverBg};
    }

    &.Mui-focused {
      background-color: ${Color.InputFocusBg};
    }

    .MuiInputBase-input {
      padding: 1rem;
    }
  }

  .MuiInputLabel-root {
    color: ${Color.TextSecondary};
    font-size: 1rem;
  }
`;

export const Input = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${Color.BgDefault};
    border-radius: 8px;
    transition: all 0.2s ease;
    font-size: 1rem;

    &:hover {
      background-color: ${Color.InputHoverBg};
    }

    &.Mui-focused {
      background-color: ${Color.InputFocusBg};
    }

    .MuiInputBase-input {
      padding: 1rem;
    }
  }

  .MuiInputLabel-root {
    color: ${Color.TextSecondary};
    font-size: 1rem;
  }

  .MuiInputBase-input::placeholder {
    color: ${Color.TextSecondary};
    opacity: 0.7;
  }
`;

export const Button = styled(ButtonMUI)`
  && {
    background-color: ${Color.ButtonBg};
    color: ${Color.LimeGreen};
    font-weight: 500;
    padding: 0.75rem 2rem;
    transition: all 0.2s ease;
    text-transform: none;
    font-size: 1rem;
    border: 1px solid ${Color.ButtonBorderColor};
  }

  &:hover {
    && {
      background-color: ${Color.ButtonHoverBg};
      border-color: ${Color.ButtonHoverBorderColor};
    }
    transform: translateY(-2px);
    box-shadow: ${Color.ButtonBoxShadow};
  }

  &:active {
    transform: translateY(0);
  }
`;
