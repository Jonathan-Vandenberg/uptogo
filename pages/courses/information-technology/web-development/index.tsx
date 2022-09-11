import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import {
  useWebDevelopmentCardQuery,
  useWebDevelopmentQuery,
} from "../../../../types";
import { useRouter } from "next/router";

function Posts() {
  const { data, loading, error } = useWebDevelopmentCardQuery();

  return (
    <div className="space-y-3 md:space-y-0">
      {data?.webDevelopmentCard
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

  const { data } = useWebDevelopmentQuery({
    variables: {
      id: "631db80a628acdf2748fc185",
    },
  });

  console.log(data?.webDevelopment?.category);
  return (
    <>
      <Crubs />
      <BlogMain
        data={data?.webDevelopment}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data?.webDevelopment}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
