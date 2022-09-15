import { Prisma, PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import BlogMain from "../../components/Blog/BlogMain";
import MainForm from "../../components/MainForm";
import { BlogPost } from "../../types";

interface IBlogPost {
  data: BlogPost;
}

export default function Blog({ data }: IBlogPost) {
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

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = (context) => {
  const prisma = new PrismaClient();

  const params = context.params as IParams;

  let data = prisma.blogPost.findUnique({
    where: {
      id: params!.id,
    },
  });

  return {
    props: {
      data,
    },
  };
};
