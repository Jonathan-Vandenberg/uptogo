import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import MainForm from "../../../../components/MainForm";
import { useSoftwareDevelopmentQuery } from "../../../../types";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const { data } = useSoftwareDevelopmentQuery({
    variables: {
      id: "631ac80b8172747ab931f279",
    },
  });

  console.log(data?.softwareDevelopment?.category);
  return (
    <>
      <BlogMain
        data={data?.softwareDevelopment}
        handleUpdate={handleShowForm}
      />
      {showForm && <MainForm details={data?.softwareDevelopment} />}
    </>
  );
}
