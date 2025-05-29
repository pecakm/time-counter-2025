'use client';

import { useState } from 'react';

import { Container, Input, Button } from './form.styled';

export default function Form() {
  const [event, setEvent] = useState('');

  const handleStart = () => {
    console.log(event);
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
