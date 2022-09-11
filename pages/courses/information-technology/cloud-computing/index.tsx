import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import {
  useCloudComputingCardQuery,
  useCloudComputingQuery,
} from "../../../../types";
import { useRouter } from "next/router";

function Posts() {
  const { data, loading, error } = useCloudComputingCardQuery();

  return (
    <>
      {data?.cloudComputingCard
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

  const { data } = useCloudComputingQuery({
    variables: {
      id: "631db6ab628acdf2748fc161",
    },
  });

  console.log(data?.cloudComputing?.category);
  return (
    <>
      <Crubs />
      <BlogMain
        data={data?.cloudComputing}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data?.cloudComputing}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
