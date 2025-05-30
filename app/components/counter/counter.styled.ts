import styled from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import { Color, Media } from '@/styles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
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
    min-width: 160px;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background: ${Color.BgPaper};
  border-radius: 24px;
  box-shadow: ${Color.ContainerBoxShadow};
  backdrop-filter: blur(8px);
  border: 1px solid ${Color.ContainerBorderColor};
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  ${Media.Tablet} {
    padding: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${Color.TextPrimary};
  text-align: center;
  margin: 0;
  text-shadow: ${Color.TextShadow};

  ${Media.Tablet} {
    font-size: 2.5rem;
  }
`;

export const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 2rem;
  overflow: hidden;
  background: ${Color.BgPaper};
  border: 3px solid ${Color.ContainerBorderColor};
  box-shadow: ${Color.ContainerBoxShadow};
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 517px;
  overflow: hidden;
`;

export const Clock = styled(FlipClockCountdown)`
  transform: scale(0.60);
  transform-origin: center;

  ${Media.Mobile} {
    transform: scale(1);
  }
`;

export const Completed = styled.p`
  font-size: 1.5rem;
  color: ${Color.LimeGreen};
  text-align: center;
  margin: 0;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(50, 205, 50, 0.2);
`;
