import BlogMain from "../../components/Blog/BlogMain";
import { useBlogPostQuery } from "../../types";
import { useRouter } from "next/router";
import MainForm from "../../components/MainForm";
import { useState } from "react";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();
  const id = asPath.slice(6, 30);
  const { data, loading, error } = useBlogPostQuery({
    variables: {
      id: id,
    },
  });

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
    <>
      <BlogMain
        data={data?.blogPost}
        handleEdit={handleEdit}
        handleAdd={handleAdd}
      />
      {showForm && (
        <MainForm
          details={data?.blogPost}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
