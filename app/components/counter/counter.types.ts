export type Props = {
  timestamp: number;
  event?: string;
};

export type PointerWrapperProps = {
  $seconds: number;
};

export type ClockWrapperProps = {
  $eventStarted: boolean;
};
