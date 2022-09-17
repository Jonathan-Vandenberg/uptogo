import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import prisma from "../../../lib/prisma";
import { Trades } from "../../../types";

const cardData = [
  {
    course: "Automotive",
    link: "/courses/trades/automotive",
  },
  {
    course: "Beauty",
    link: "/courses/trades/beauty",
  },
  {
    course: "Construction",
    link: "/courses/trades/construction",
  },
  {
    course: "Carpentry",
    link: "/courses/trades/carpentry",
  },
  {
    course: "Education",
    link: "/courses/trades/education",
  },
  {
    course: "Fitness",
    link: "/courses/trades/fitness",
  },
  {
    course: "Hairdressing",
    link: "/courses/trades/hairdressing",
  },
  {
    course: "Horticulture",
    link: "/courses/trades/horticulture",
  },
  {
    course: "Sports Development",
    link: "/courses/trades/sport-development",
  },
  {
    course: "Yoga",
    link: "/courses/trades/yoga",
  },
];

interface IProps {
  data: Trades;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.trades.findUnique({
    where: {
      id: "6325de24aa4a7bfef376d1ef",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`Trades with data not found.`, {
      code: "Trades_NOT_FOUND",
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
