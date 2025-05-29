import styled, { keyframes } from 'styled-components';

import { Color } from '@/styles';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${Color.Black};
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${Color.White};
  text-align: center;
  margin-bottom: 2rem;
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
`;

export const TimerWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
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
  width: 100%;
  height: 100%;
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
