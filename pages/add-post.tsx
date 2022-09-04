import Head from "next/head";
import AddPostForm from "../components/UI/AddPostForm";

const NewSchool = () => {
  return (
    <>
      <Head>
        <title>Create a new post</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-20">
        <AddPostForm />
      </div>
    </>
  );
};

export default NewSchool;
