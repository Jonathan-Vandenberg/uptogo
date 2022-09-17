import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import prisma from "../../../lib/prisma";
import { Management } from "../../../types";

const cardData = [
  {
    course: "Project Management",
    link: "/courses/management/project-management",
  },
  {
    course: "Business Management",
    link: "/courses/management/business-management",
  },
  {
    course: "Human Resources",
    link: "/courses/management/human-resources",
  },
  {
    course: "Banking Management",
    link: "/courses/management/banking-management",
  },
  {
    course: "Intl Business",
    link: "/courses/management/international-business",
  },
  {
    course: "Social Media Marketing",
    link: "/courses/management/social-media-marketing",
  },
  {
    course: "Agri business Management",
    link: "/courses/management/agriculture-business-management",
  },
  {
    course: "Supply Management",
    link: "/courses/management/supply-management",
  },
  {
    course: "Leadership Management",
    link: "/courses/management/leadership-management",
  },
];

interface IProps {
  data: Management;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.management.findUnique({
    where: {
      id: "6325e110aa4a7bfef376d238",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`management with data not found.`, {
      code: "management_NOT_FOUND",
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
