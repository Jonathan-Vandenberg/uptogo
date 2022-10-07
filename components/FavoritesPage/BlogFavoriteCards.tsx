import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux-hooks/hooks";
import { useBlogPostsQuery } from "../../types";
import BlogPageHero from "../Blog/BlogPageHero";
import FavoritesHeader from "./FavoritesHeader";

const FavoriteServicesCards = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);
  const translate = useAppSelector((state) => state.translationState.translate);

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
        favoriteType={translate ? "Blog Favorite" : "tin yêu thích"}
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
