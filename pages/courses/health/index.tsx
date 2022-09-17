import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import prisma from "../../../lib/prisma";
import { Health } from "../../../types";

const cardData = [
  {
    course: "Aged Care",
    link: "/courses/health/aged-care",
  },
  {
    course: "dentistry",
    link: "/courses/health/dental",
  },
  {
    course: "Massage",
    link: "/courses/health/massage",
  },
  {
    course: "Medicine",
    link: "/courses/health/medicine",
  },
  {
    course: "Mental Health",
    link: "/courses/health/mental-health",
  },
  {
    course: "Nursing",
    link: "/courses/health/nursing",
  },
  {
    course: "Nutrition",
    link: "/courses/health/nutrition",
  },
  {
    course: "Public Health",
    link: "/courses/health/public-health",
  },
  {
    course: "Veterinary",
    link: "/courses/health/veterinary",
  },
];

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
