import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import CoursesMainPage from "../../../../components/Courses/CoursesMainPage";
import MainForm from "../../../../components/MainForm";
import {
  SoftwareDevelopment,
  useSoftwareDevelopmentCardQuery,
} from "../../../../types";
import prisma from "../../../../lib/prisma";

function Posts() {
  const { data, loading, error } = useSoftwareDevelopmentCardQuery();

  return (
    <div className="space-y-6 md:space-y-0">
      {data?.softwareDevelopmentCard
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
  const data = await prisma?.softwareDevelopment.findUnique({
    where: {
      id: "631d68109f9c5ab336b3d04e",
    },
  });
  return {
    props: { data },
    revalidate: 3600,
  };
};

interface IProps {
  data: SoftwareDevelopment;
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
      {/* <Posts /> */}
    </div>
  );
}
