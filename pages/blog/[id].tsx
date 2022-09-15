import { Prisma, PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import BlogMain from "../../components/Blog/BlogMain";
import MainForm from "../../components/MainForm";
import { BlogPost } from "../../types";

interface IProps {
  data: BlogPost;
}

export default function Blog({ data }: IProps) {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

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
    <>
      <BlogMain data={data} handleEdit={handleEdit} handleAdd={handleAdd} />
      {showForm && (
        <MainForm
          details={data}
          add={add}
          edit={edit}
          handleClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.blogPost.findMany();
  const paths = data?.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();

  const { id } = context.params as IParams;

  let data = prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      data,
    },
  };
};
