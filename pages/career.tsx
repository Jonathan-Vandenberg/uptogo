import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import CoursesMainPage from "../components/Courses/CoursesMainPage";
import MainForm from "../components/MainForm";
import prisma from "../lib/prisma";
import { Guidance } from "../types";

export const getStaticProps: GetStaticProps = async () => {
  const guidanceData = await prisma?.guidance.findUnique({
    where: {
      id: "63391a56d3ce9c8710b5762a",
    },
  });
  return {
    props: { guidanceData },
    revalidate: 60,
  };
};

interface IProps {
  guidanceData: Guidance;
}

export default function App({ guidanceData }: IProps) {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

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
      <Head>
        <title>{`Uptogo | ${guidanceData?.title}`}</title>
        <meta
          name="description"
          content={`Uptogo | ${guidanceData?.subtitle1}`}
        />
        <link rel="shortcut icon" href="/uptogoFavicon.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Uptogo | ${guidanceData?.title}`} />
        <meta
          property="og:description"
          content={`Uptogo | ${guidanceData?.subtitle1}`}
        />
        <meta property="og:url" content="https://www.uptogo.org/career" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://www.uptogo.org/fullLogo.png”"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Lotus Angel Logo of Uptogo" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="container mx-auto md:pt-12 pb-8">
        <CoursesMainPage
          data={guidanceData}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
        {showForm && (
          <MainForm
            details={guidanceData}
            add={add}
            edit={edit}
            handleClose={() => setShowForm(false)}
          />
        )}
      </div>
    </>
  );
}
