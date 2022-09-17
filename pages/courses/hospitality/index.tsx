import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import prisma from "../../../lib/prisma";
import { Hospitality } from "../../../types";

const cardData = [
  {
    course: "Commercial-cooking",
    link: "/courses/hospitality/commercial-cooking",
  },
  {
    course: "Baking",
    link: "/courses/hospitality/baking",
  },
  {
    course: "Events",
    link: "/courses/hospitality/events",
  },
  {
    course: "Hospitality Management",
    link: "/courses/hospitality/hospitality-management",
  },
  {
    course: "Hotel Management",
    link: "/courses/hospitality/hotel-management",
  },
  {
    course: "Travel & Tourism",
    link: "/courses/hospitality/travel-tourism",
  },
];

interface IProps {
  data: Hospitality;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.hospitality.findUnique({
    where: {
      id: "63259c79aa4a7bfef376d1d4",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`Hospitality with data not found.`, {
      code: "Hospitality_NOT_FOUND",
    });
  }

  return {
    props: { data },
  };
};

export default function App({ data }: IProps) {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();

  function Crubs() {
    return <p>home!{asPath}</p>;
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
        <CoursesNarrowCards cardData={cardData} />
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
