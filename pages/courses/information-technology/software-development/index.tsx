import { PrismaClient, SoftwareDevelopment } from "@prisma/client";
import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import MainForm from "../../../../components/MainForm";

interface IProps {
  sd: SoftwareDevelopment;
}

export default function App({ sd }: IProps) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  // const { data } = useSoftwareDevelopmentQuery({
  //   variables: {
  //     id: ,
  //   },
  // });

  console.log(sd?.category);
  return (
    <>
      <BlogMain data={sd} handleUpdate={handleShowForm} />
      {showForm && <MainForm details={sd} />}
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const sd = await prisma.softwareDevelopment.findUnique({
    where: {
      id: "631ac80b8172747ab931f279",
    },
  });

  return {
    props: { sd },
  };
}
