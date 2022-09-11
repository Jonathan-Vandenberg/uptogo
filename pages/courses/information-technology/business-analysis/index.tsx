import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import {
  useBusinessAnalysisCardQuery,
  useBusinessAnalysisQuery,
} from "../../../../types";
import { useRouter } from "next/router";

function Posts() {
  const { data, loading, error } = useBusinessAnalysisCardQuery();

  return (
    <div className="space-y-3 md:space-y-0">
      {data?.businessAnalysisCard
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

  const { data } = useBusinessAnalysisQuery({
    variables: {
      id: "631db614628acdf2748fc15b",
    },
  });

  console.log(data?.businessAnalysis?.category);
  return (
    <>
      <Crubs />
      <BlogMain
        data={data?.businessAnalysis}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data?.businessAnalysis}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
