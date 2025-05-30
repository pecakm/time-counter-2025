import { ParamName } from '@/enums';

export type Props = {
  searchParams: Promise<{
    [ParamName.Params]?: string;
  }>;
};
