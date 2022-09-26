import { Prisma } from "@prisma/client";
import { GetStaticProps } from "next";
import CoursesDesktopPage from "../../components/Courses/CoursesDesktopPage";
import CoursesMobilePage from "../../components/MobileIconPages/Index";
import {
  Design,
  Health,
  Hospitality,
  It,
  Management,
  Trades,
} from "../../types";
import prisma from "../../lib/prisma";
import UserInterestedForm from "../../components/UserInterestedForm";

interface IProps {
  it: It;
  design: Design;
  hospitality: Hospitality;
  trades: Trades;
  health: Health;
  management: Management;
}

export default function App({
  it,
  design,
  hospitality,
  trades,
  health,
  management,
}: IProps) {
  return (
    <>
      <div className="md:hidden">
        <CoursesMobilePage />
      </div>
      <div className="hidden md:block">
        <CoursesDesktopPage
          it={it}
          design={design}
          hospitality={hospitality}
          trades={trades}
          health={health}
          management={management}
        />
      </div>
      <UserInterestedForm />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const it: It | null | undefined = await prisma?.it?.findUnique({
    where: {
      id: "631f0640cb1d9c50bf6dd5a7",
    },
  });
  const design: It | null | undefined = await prisma?.design?.findUnique({
    where: {
      id: "63245ef7ef7048971301fdd9",
    },
  });
  const hospitality: Hospitality | null | undefined =
    await prisma?.hospitality?.findUnique({
      where: {
        id: "63259c79aa4a7bfef376d1d4",
      },
    });
  const trades: Trades | null | undefined = await prisma?.trades?.findUnique({
    where: {
      id: "631f0640cb1d9c50bf6dd5a7",
    },
  });
  const health: Health | null | undefined = await prisma?.health?.findUnique({
    where: {
      id: "632559421c5010b649ddea07",
    },
  });
  const management: Management | null | undefined =
    await prisma?.management?.findUnique({
      where: {
        id: "6325e110aa4a7bfef376d238",
      },
    });

  return {
    props: {
      it,
      design,
      hospitality,
      trades,
      health,
      management,
    },
  };
};
