import styled from 'styled-components';

import { Color } from '@/styles';

export const Container = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background-color: ${Color.BgDefault};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
