import styled, { keyframes } from 'styled-components';

import { Color } from '@/styles';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
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
  position: relative;
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
