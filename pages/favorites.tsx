import BlogFavoriteCards from "../components/FavoritesPage/BlogFavoriteCards";
import Head from "next/head";

const FavoritesPage = () => {
  return (
    <main>
      <Head>
        <title>Uptogo | Favorites</title>
        <meta
          name="description"
          content="A place to find all your favorited news articles."
        />
        <link rel="shortcut icon" href="/uptogoFavicon.png" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="300char" />
        <meta property="og:url" content="https://www.uptogo.org/favorites" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://www.uptogo.org/fullLogo.png”"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Lotus Angel Logo of Uptogo" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_GB" />
      </Head>
      <BlogFavoriteCards />
    </main>
  );
};

export default FavoritesPage;
