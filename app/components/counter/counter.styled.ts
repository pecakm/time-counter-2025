import styled, { keyframes } from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';

import { Color, Media } from '@/styles';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 12rem);
  width: 100%;
  margin-top: 6rem;
`;

export const Button = styled(ButtonMUI)`
  && {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: ${Color.Gradient};
    color: ${Color.White};
    border: 1px solid ${Color.Gray};
    padding: 0.75rem;
    font-size: 1rem;
    text-transform: none;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: ${Color.Gradient};
      border-color: ${Color.LimeGreen};
      box-shadow: 0 0 10px ${Color.LimeGreen};
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  background: ${Color.Gradient};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: ${Color.BoxShadow};
  border: 1px solid ${Color.Gray};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  aspect-ratio: 1 / 1;
  padding: 2rem;
  background: ${Color.Gradient};
  box-shadow: ${Color.BoxShadow};
  border: 1px solid ${Color.Gray};
  position: relative;
  scale: 0.6;
  margin-top: -5rem;
  overflow: hidden;


  ${Media.Mobile} {
    scale: 0.9;
    margin-top: 1rem;
  }

  ${Media.Tablet} {
    scale: 1;
    margin-top: 2rem;
  }
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  padding: 2rem;
  background: ${Color.Gradient};
  box-shadow: ${Color.BoxShadow};
  border: 1px solid ${Color.Gray};
  position: relative;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CircleWrapper = styled.div`
  position: absolute;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0 -20px 20px ${Color.LimeGreen};
`;

export const Completed = styled.div``;
