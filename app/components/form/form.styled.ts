import styled from 'styled-components';
import { TextField, Button as ButtonMUI } from '@mui/material';

import { Color } from '@/styles';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background: ${Color.Gradient};
  border-radius: 10px;
  box-shadow: ${Color.BoxShadow};
  border: 1px solid ${Color.Gray};
`;

export const Input = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: ${Color.White};
    
    & fieldset {
      border-color: ${Color.Gray};
    }
    
    &:hover fieldset {
      border-color: ${Color.LimeGreen};
    }
    
    &.Mui-focused fieldset {
      border-color: ${Color.LimeGreen};
    }
  }

  & .MuiInputLabel-root {
    color: ${Color.White};
    
    &.Mui-focused {
      color: ${Color.LimeGreen};
    }
  }
`;

export const Button = styled(ButtonMUI)`
  && {
    background: ${Color.Gradient};
    color: ${Color.White};
    border: 1px solid ${Color.Gray};
    padding: 0.75rem;
    font-size: 1rem;
    text-transform: none;
    transition: all 0.2s ease;

    &:hover {
      background: ${Color.Gradient};
      border-color: ${Color.LimeGreen};
      box-shadow: 0 0 10px ${Color.LimeGreen};
    }
  }
`;
