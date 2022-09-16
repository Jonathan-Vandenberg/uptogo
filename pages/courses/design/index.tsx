import { GraphQLYogaError } from "@graphql-yoga/node";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import { Design } from "../../../types";

const cardData = [
  {
    course: "Acting",
    link: "/courses/design/acting",
  },
  {
    course: "3d Animation",
    link: "/courses/design/animation3d",
  },
  {
    course: "Digital Media",
    link: "/courses/design/digital-media",
  },
  {
    course: "Fashion Design",
    link: "/courses/design/fashion-design",
  },
  {
    course: "Film",
    link: "/courses/design/film",
  },
  {
    course: "Graphic Design",
    link: "/courses/design/graphic-design",
  },
  {
    course: "Interior Design",
    link: "/courses/design/interior-design",
  },
  {
    course: "Landscaping",
    link: "/courses/design/landscape",
  },
  {
    course: "Music & Audio",
    link: "/courses/design/music",
  },
];

interface IProps {
  data: Design;
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.design.findUnique({
    where: {
      id: "63245ef7ef7048971301fdd9",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`Design with data not found.`, {
      code: "DESIGN_NOT_FOUND",
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
