import BlogMain from "../../../../../components/Blog/BlogMain";
import { useRouter } from "next/router";
import { useGraphicDesignQuery } from "../../../../../types";
import { useState } from "react";
import MainForm from "../../../../../components/MainForm";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();
  const id = asPath.slice(40, 64);

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

  const { data, loading, error } = useGraphicDesignQuery({
    variables: {
      id: id,
    },
  });

  return (
    <>
      <BlogMain
        data={data?.graphicDesign}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      {showForm && (
        <MainForm
          details={data?.graphicDesign}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
