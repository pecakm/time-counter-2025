import { ParamName } from '@/enums';

export type Props = {
  searchParams: Promise<{
    [ParamName.Timestamp]?: string;
    [ParamName.Event]?: string;
  }>;
};
