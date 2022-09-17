import { GraphQLYogaError } from "@graphql-yoga/node";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import CoursesMainPage from "../../../components/Courses/CoursesMainPage";
import CoursesNarrowCards from "../../../components/Courses/CoursesNarrowCards";
import MainForm from "../../../components/MainForm";
import { It } from "../../../types";
import prisma from "../../../lib/prisma";

const cardData = [
  {
    course: "Software Development",
    link: "/courses/information-technology/software-development",
  },
  {
    course: "Blockchain Technology",
    link: "/courses/information-technology/blockchain-technology",
  },
  {
    course: "Data Management",
    link: "/courses/information-technology/data-management",
  },
  {
    course: "Machine Learning",
    link: "/courses/information-technology/machine-learning",
  },
  {
    course: "Website Development",
    link: "/courses/information-technology/web-development",
  },
  {
    course: "Game Programming",
    link: "/courses/information-technology/game-programming",
  },
  {
    course: "Telecommunication",
    link: "/courses/information-technology/telecommunication",
  },
  {
    course: "Business Analysis",
    link: "/courses/information-technology/business-analysis",
  },
  {
    course: "Cloud Computing",
    link: "/courses/information-technology/cloud-computing",
  },
  {
    course: "Computer Networking",
    link: "/courses/information-technology/computer-networking",
  },
  {
    course: "A.I.",
    link: "/courses/information-technology/artificial-intelligence",
  },
];

interface IProps {
  data: It;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await prisma.it.findUnique({
    where: {
      id: "631f0640cb1d9c50bf6dd5a7",
    },
  });

  if (!data) {
    throw new GraphQLYogaError(`It with data not found.`, {
      code: "IT_NOT_FOUND",
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
              <p>Loading...</p>
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

// •	Phát triển phần mền – Software Development
// •	Mạng máy tính – Compute Networking
// •	Điện toán đám mây – Cloud Computing
// •	Phân tích kinh doanh – Business Analysis
// •	Viễn thông – Telecommunication
// •	Lập trình trò chơi - Game Programming
// •	Phát triển Website – Website Development
// •	Phương tiện máy móc – Machine Learing
// •	Quản lý dữ liệu – Data Management
// •	Công nghệ tiền ảo – Blockchain Technology
// •	Trí tuệ nhân tạo - Artificial Intelligence (AI)
