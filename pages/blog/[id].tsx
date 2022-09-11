import BlogMain from "../../components/Blog/BlogMain";
import { BlogPost, useBlogPostQuery } from "../../types";
import { useRouter } from "next/router";

export default function Blog() {
  const { asPath } = useRouter();
  const id = asPath.slice(6, 30);
  const { data, loading, error } = useBlogPostQuery({
    variables: {
      id: id,
    },
  });

  const handleEdit = () => {};
  const handleAdd = () => {};

  return (
    <BlogMain
      data={data?.blogPost}
      handleEdit={handleEdit}
      handleAdd={handleAdd}
    />
  );
}
