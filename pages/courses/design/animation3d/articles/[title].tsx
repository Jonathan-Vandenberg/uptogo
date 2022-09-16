import BlogMain from "../../../../../components/Blog/BlogMain";
import { useRouter } from "next/router";
import { useAnimation3DQuery } from "../../../../../types";
import { useState } from "react";
import MainForm from "../../../../../components/MainForm";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();
  const id = asPath.slice(37, 61);

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

  console.log(id);

  const { data, loading, error } = useAnimation3DQuery({
    variables: {
      id: id,
    },
  });

  return (
    <>
      <BlogMain
        data={data?.animation3D}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      {showForm && (
        <MainForm
          details={data?.animation3D}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
