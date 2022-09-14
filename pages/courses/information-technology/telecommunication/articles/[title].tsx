import BlogMain from "../../../../../components/Blog/BlogMain";
import { useRouter } from "next/router";
import { useTelecommunicationQuery } from "../../../../../types";
import { useState } from "react";
import MainForm from "../../../../../components/MainForm";

export default function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();
  const id = asPath.slice(59, 83);

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

  const { data, loading, error } = useTelecommunicationQuery({
    variables: {
      id: id,
    },
  });

  if (loading) {
    return console.log("loading");
  }

  if (error) {
    return console.log(error.message);
  }

  return (
    <>
      <BlogMain
        data={data?.telecommunication}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      {showForm && (
        <MainForm
          details={data?.telecommunication}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
