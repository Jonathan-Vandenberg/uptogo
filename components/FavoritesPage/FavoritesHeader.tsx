import Link from "next/link";

interface IProps {
  localStorageKeys: string[];
  favoriteType: string;
  findMoreLink: string;
}

export default function FavoritesHeader({
  localStorageKeys,
  favoriteType,
  findMoreLink,
}: IProps) {
  return (
    <div className="mx-auto my-12 flex flex-col items-center space-y-3 bg-body px-3 py-8 shadow md:my-12 md:px-28 xl:flex xl:flex-row xl:items-center xl:justify-evenly">
      <div className="md:col-span-1 md:grid">
        <div className="flex items-center justify-start space-x-2">
          <p>You have </p>
          <p className="font-semibold text-iwanttoColor">
            {localStorageKeys.length}
          </p>{" "}
          <p>
            {favoriteType}
            {localStorageKeys.length === 1 ? "" : "s"}.
          </p>
        </div>
      </div>

      <div className="col-span-1 md:grid">
        <Link href={findMoreLink}>
          {localStorageKeys.length === 0 ? (
            <p className="cursor-pointer text-iwanttoColor">find some</p>
          ) : (
            <p className="cursor-pointer text-iwanttoColor">find more</p>
          )}
        </Link>
      </div>
    </div>
  );
}
