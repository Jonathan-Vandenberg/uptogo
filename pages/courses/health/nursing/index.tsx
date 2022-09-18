import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import CoursesMainPage from "../../../../components/Courses/CoursesMainPage";
import MainForm from "../../../../components/MainForm";
import prisma from "../../../../lib/prisma";
import { Nursing, useNursingCardQuery } from "../../../../types";

function Posts() {
  const { data, loading, error } = useNursingCardQuery();

  return (
    <div className="space-y-6 md:space-y-0">
      {data?.nursingCard
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

interface IProps {
  data: Nursing;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma?.nursing.findUnique({
    where: {
      id: "632568af1c5010b649ddea33",
    },
  });
  return {
    props: { data },
    revalidate: 3600,
  };
};

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
    <div className="container max-w-[678px] md:max-w-[900px] mx-auto md:pt-12 pb-8">
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
    </div>
  );
}