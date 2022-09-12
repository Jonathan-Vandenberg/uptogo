import { useEffect, useState } from "react";
import { useBlogPostsQuery } from "../../types";
import BlogHeader from "../Blog/BlogHeader";
import BlogPageHero from "../Blog/BlogPageHero";
import FavoritesHeader from "./FavoritesHeader";

const FavoriteServicesCards = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteCards: string[] = [];
    allKeys.map((key) => {
      if (key.includes("BLOG")) {
        favoriteCards.push(key);
      }
    });
    setLocalStorageKeys(favoriteCards);
  }, []);

  const { data } = useBlogPostsQuery();

  return (
    <>
      <FavoritesHeader
        localStorageKeys={localStorageKeys}
        favoriteType="Blog Favorite"
        findMoreLink="/blogs"
      />
      <div className="md:px-12 lg:container lg:mx-auto lg:px-0">
        {localStorageKeys.length > 0 ? (
          <div className="px-4 space-y-8 ">
            {data?.blogPosts?.map((card) =>
              localStorageKeys.includes(`${card!.category} - ${card!.id}`) ? (
                <BlogPageHero data={card} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FavoriteServicesCards;
