import BlogMain from "../../../../../components/Blog/BlogMain";
import { useRouter } from "next/router";
import { useInteriorDesignQuery } from "../../../../../types";
import { useState } from "react";
import MainForm from "../../../../../components/MainForm";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();
  const id = asPath.slice(41, 65);

  const handleAdd = () => {
    setShowForm(!showForm);
    setAdd(true);
    setEdit(false);
  };

  console.log(id);

  const handleEdit = () => {
    setShowForm(!showForm);
    setAdd(false);
    setEdit(true);
  };

  const { data, loading, error } = useInteriorDesignQuery({
    variables: {
      id: id,
    },
  });

  return (
    <>
      <BlogMain
        data={data?.interiorDesign}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      {showForm && (
        <MainForm
          details={data?.interiorDesign}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
