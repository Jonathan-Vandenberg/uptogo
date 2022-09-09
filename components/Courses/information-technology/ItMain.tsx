import { SoftwareDevelopmentQuery } from "../../../types";

interface IProps {
  data: SoftwareDevelopmentQuery | undefined | null;
}

export default function ItMain({ data }: IProps) {
  return <div>Information technology: {data?.softwareDevelopment?.title}</div>;
}
