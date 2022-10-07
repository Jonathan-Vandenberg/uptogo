import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import { healthLinks } from "../../../lib/links";
import prisma from "../../../lib/prisma";
import { Health } from "../../../types";

interface IProps {
  data: Health;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.health.findUnique({
    where: {
      id: "632559421c5010b649ddea07",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`Health with data not found.`, {
      code: "Health_NOT_FOUND",
    });
  }

  return {
    props: { data },
    revalidate: 60,
  };
};

export default function App({ data }: IProps) {
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
          content="https://www.uptogo.org/courses/health"
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
      <div className="mx-auto container">
        {data ? (
          <CoursesMainPage
            data={data}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
          />
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
        {showForm && (
          <div>
            {data ? (
              <MainForm
                details={data}
                add={add}
                edit={edit}
                handleClose={() => setShowForm(false)}
              />
            ) : (
              <div>
                <p>Loading..</p>
              </div>
            )}
          </div>
        )}
        {data ? (
          <CoursesNarrowCards cardData={healthLinks} />
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
}
