import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import {
  useSoftwareDevelopmentCardQuery,
  useSoftwareDevelopmentQuery,
} from "../../../../types";
import { useRouter } from "next/router";
import CoursesMainPage from "../../../../components/Courses/CoursesMainPage";

function Posts() {
  const { data, loading, error } = useSoftwareDevelopmentCardQuery();

  return (
    <div className="space-y-3 md:space-y-0">
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

export default function App() {
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

  const { data } = useSoftwareDevelopmentQuery({
    variables: {
      id: "631d68109f9c5ab336b3d04e",
    },
  });

  console.log(data?.softwareDevelopment?.category);
  return (
    <>
      {/* <Crubs /> */}
      <CoursesMainPage
        data={data?.softwareDevelopment}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data?.softwareDevelopment}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
