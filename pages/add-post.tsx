import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import AddPostForm from "../components/MainForm";
import { useSoftwareDevelopmentQuery } from "../types";

const NewSchool = () => {
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

  const { data } = useSoftwareDevelopmentQuery({
    variables: {
      id: "631d68109f9c5ab336b3d04e",
    },
  });
  return (
    <>
      <Head>
        <title>Create a new post</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-4 md:mt-20 bg-red-100 w-full md:w-2/3 mx-auto">
        <AddPostForm
          details={data?.softwareDevelopment}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      </div>
    </>
  );
};

export default NewSchool;
