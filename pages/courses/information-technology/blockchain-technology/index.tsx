import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import { useBlockchainCardQuery, useBlockchainQuery } from "../../../../types";
import { useRouter } from "next/router";

function Posts() {
  const { data, loading, error } = useBlockchainCardQuery();

  return (
    <div className="space-y-3 md:space-y-0">
      {data?.blockchainCard
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

  const { data } = useBlockchainQuery({
    variables: {
      id: "631db438628acdf2748fc150",
    },
  });

  console.log(data?.blockchain?.category);
  return (
    <>
      <Crubs />
      <BlogMain
        data={data?.blockchain}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data?.blockchain}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
