import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../components/Courses/CoursesMainPage";
import MainForm from "../components/MainForm";
import prisma from "../lib/prisma";
import { CurrentEvent } from "../types";

interface IProps {
  data: CurrentEvent;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.currentEvent.findUnique({
    where: {
      id: "632abe2db151d68f72493571",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`Trades with data not found.`, {
      code: "TRADES_NOT_FOUND",
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
    </div>
  );
}
