import styled, { keyframes } from 'styled-components';
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
  padding: 3rem 1rem;
  background: ${Color.BgPaper};
  border-radius: 24px;
  box-shadow: ${Color.ContainerBoxShadow};
  backdrop-filter: blur(8px);
  border: 1px solid ${Color.ContainerBorderColor};
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

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

export const Countdown = styled.div`
  position: relative;
  max-width: 100%;
  width: 517px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const PointerWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  animation: ${rotate} 60s linear infinite;
`;

export const Pointer = styled.div`
  width: 20px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 -20px 20px 10px ${Color.LimeGreen};
  margin: 0 auto;
`;

export const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  background: ${Color.BgPaper};
  border: 3px solid ${Color.ContainerBorderColor};
  box-shadow: ${Color.ContainerBoxShadow};
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  width: 100%;
  overflow: hidden;
  position: absolute;
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
