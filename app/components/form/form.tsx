'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ParamName } from '@/enums';

import { Container, Input, Button } from './form.styled';

export default function Form() {
  const [event, setEvent] = useState('');
  const router = useRouter();
  // const timestamp = new Date().getTime() + 48 * 3600 * 1000 + 5000;
  const timestamp = new Date().getTime() - 5000;

  const handleStart = () => {
    router.push(`?${ParamName.Event}=${encodeURIComponent(event)}&${ParamName.Timestamp}=${timestamp}`);
  };

  return (
    <Container>
      <Input
        type="text"
        label="Event name"
        placeholder="Enter event name"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <Button onClick={handleStart}>Start</Button>
    </Container>
  );
}
