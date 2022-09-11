import Head from "next/head";
import AddPostForm from "../components/MainForm";

const NewSchool = () => {
  return (
    <>
      <Head>
        <title>Create a new post</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-4 md:mt-20 bg-red-100 w-full md:w-2/3 mx-auto">
        <AddPostForm
          details={undefined}
          add={false}
          edit={false}
          handleClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </>
  );
};

export default NewSchool;
