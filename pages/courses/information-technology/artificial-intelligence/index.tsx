import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import { useAiCardQuery, useAiQuery } from "../../../../types";
import { useRouter } from "next/router";

function Posts() {
  const { data, loading, error } = useAiCardQuery();

  return (
    <>
      {data?.aiCard
        ?.slice(0)
        .reverse()
        .map((post) => (
          <div key={post?.id}>
            <BlogPageHero data={post} />
          </div>
        ))}
    </>
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

  const { data } = useAiQuery({
    variables: {
      id: "631b37b1ca7c40b764a17122",
    },
  });

  return (
    <>
      <Crubs />
      <BlogMain data={data?.ai} handleEdit={handleEdit} handleAdd={handleAdd} />
      {showForm && (
        <MainForm
          details={data?.ai}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
