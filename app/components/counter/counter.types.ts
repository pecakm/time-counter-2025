export type Props = {
  timestamp: number;
  event?: string;
};

export type PointerWrapperProps = {
  $secondsLeft: number;
  $rotationSeconds: number;
};

export type ClockWrapperProps = {
  $eventStarted: boolean;
};

export type ClockProps = {
  $small: boolean;
};
