import BlogMain from "../../../../../components/Blog/BlogMain";
import { useRouter } from "next/router";
import { useFashionDesignQuery } from "../../../../../types";
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

  const { data, loading, error } = useFashionDesignQuery({
    variables: {
      id: id,
    },
  });

  return (
    <>
      <BlogMain
        data={data?.fashionDesign}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      {showForm && (
        <MainForm
          details={data?.fashionDesign}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
