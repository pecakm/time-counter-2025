export type Props = {
  searchParams: Promise<{
    timestamp?: string;
    event?: string;
  }>;
};
