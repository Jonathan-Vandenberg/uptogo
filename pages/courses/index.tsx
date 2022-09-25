import { Prisma } from "@prisma/client";
import { GetStaticProps } from "next";
import CoursesDesktopPage from "../../components/Courses/CoursesDesktopPage";
import CoursesMobilePage from "../../components/MobileIconPages/Index";
import { It } from "../../types";
import prisma from "../../lib/prisma";

interface IProps {
  data: It;
}

export default function App({ data }: IProps) {
  return (
    <>
      <div className="md:hidden">
        <CoursesMobilePage />
      </div>
      <div className="hidden md:block">
        <CoursesDesktopPage data={data} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: It | null | undefined = await prisma?.it?.findUnique({
    where: {
      id: "631f0640cb1d9c50bf6dd5a7",
    },
  });
  return {
    props: {
      data,
    },
  };
};
