import It from "../../../../components/Courses/information-technology/ItMain";
import { useSoftwareDevelopmentQuery } from "../../../../types";

export default function App() {
  const { data } = useSoftwareDevelopmentQuery({
    variables: {
      id: "631ac80b8172747ab931f279",
    },
  });
  console.log(data?.softwareDevelopment?.id);
  return <It data={data} />;
}
