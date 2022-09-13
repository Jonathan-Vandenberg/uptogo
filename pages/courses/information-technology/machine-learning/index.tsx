import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import {
  MachineLearning,
  useMachineLearningCardQuery,
  useMachineLearningQuery,
} from "../../../../types";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import CoursesMainPage from "../../../../components/Courses/CoursesMainPage";

function Posts() {
  const { data, loading, error } = useMachineLearningCardQuery();

  return (
    <div className="space-y-3 md:space-y-0">
      {data?.machineLearningCard
        ?.slice(0)
        .reverse()
        .map((post) => (
          <div key={post?.id}>
            <BlogPageHero data={post} />
          </div>
        ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const data = await prisma?.machineLearning.findUnique({
    where: {
      id: "631db7a3628acdf2748fc179",
    },
  });
  return {
    props: { data },
    revalidate: 3600,
  };
};

interface IProps {
  data: MachineLearning;
}

export default function App({ data }: IProps) {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();

  function Crubs() {
    return <p>home{asPath}</p>;
  }

  const handleAdd = () => {
    setShowForm(!showForm);
    setAdd(true);
    setEdit(false);
  };

  const handleEdit = () => {
    setShowForm(!showForm);
    setAdd(false);
    setEdit(true);
  };

  console.log(data?.category);
  return (
    <>
      {/* <Crubs /> */}
      <CoursesMainPage
        data={data}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
