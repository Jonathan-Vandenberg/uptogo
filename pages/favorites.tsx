import BlogFavoriteCards from "../components/FavoritesPage/BlogFavoriteCards";
import Head from "next/head";

const FavoritesPage = () => {
  return (
    <main>
      <Head>
        <title>Favorites</title>
        <meta
          name="description"
          content="Visit your favorited items from Uptogo"
        />
      </Head>
      <BlogFavoriteCards />
    </main>
  );
};

export default FavoritesPage;
