import { ItQuery } from "../../types";

interface IProps {
  data: ItQuery | undefined | null;
}

export default function ItMain({ data }: IProps) {
  return (
    <>
      <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
        softwareDevId: {data?.it?.softwareDevelopmentId}
      </div>
    </>
  );
}
