import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../../components/Courses/CoursesMainPage";
import MainForm from "../../../../components/MainForm";
import prisma from "../../../../lib/prisma";
import { BusinessAnalysis } from "../../../../types";

interface IProps {
  data: BusinessAnalysis;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma?.businessAnalysis.findUnique({
    where: {
      id: "631db614628acdf2748fc15b",
    },
  });
  return {
    props: { data },
    revalidate: 60,
  };
};

export default function App({ data }: IProps) {
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

  return (
    <>
      <Head>
        <title>{`Uptogo | ${data?.title}`}</title>
        <meta name="description" content={`Uptogo | ${data?.subtitle1}`} />
        <link rel="shortcut icon" href="/uptogoFavicon.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Uptogo | ${data?.title}`} />
        <meta
          property="og:description"
          content={`Uptogo | ${data?.subtitle1}`}
        />
        <meta
          property="og:url"
          content="https://www.uptogo.org/courses/information-technology/business-analysis"
        />
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
      </Head>
      <div className="container mx-auto md:pt-12 pb-8">
        <CoursesMainPage
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
        {showForm && (
          <MainForm
            details={data}
            add={add}
            edit={edit}
            handleClose={() => setShowForm(false)}
          />
        )}
      </div>
    </>
  );
}
