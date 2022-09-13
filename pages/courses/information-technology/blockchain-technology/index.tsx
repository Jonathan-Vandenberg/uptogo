import { useState } from "react";
import BlogMain from "../../../../components/Blog/BlogMain";
import BlogPageHero from "../../../../components/Blog/BlogPageHero";
import MainForm from "../../../../components/MainForm";
import {
  Blockchain,
  useBlockchainCardQuery,
  useBlockchainQuery,
} from "../../../../types";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";

function Posts() {
  const { data, loading, error } = useBlockchainCardQuery();

  return (
    <div className="space-y-3 md:space-y-0">
      {data?.blockchainCard
        ?.slice(0)
        .reverse()
        .map((post) => (
          <div key={post?.id}>
            <BlogPageHero data={post} />
          </div>
        ))}
    </div>
  );
}

interface IProps {
  data: Blockchain;
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const data = await prisma?.blockchain.findUnique({
    where: {
      id: "631db438628acdf2748fc150",
    },
  });
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default function App({ data }: IProps) {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const { asPath } = useRouter();

  function Crubs() {
    return <p>home{asPath}</p>;
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

  console.log(data?.category);
  return (
    <>
      {/* <Crubs /> */}
      <BlogMain data={data} handleEdit={handleEdit} handleAdd={handleAdd} />
      {showForm && (
        <MainForm
          details={data}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
      <Posts />
    </>
  );
}
