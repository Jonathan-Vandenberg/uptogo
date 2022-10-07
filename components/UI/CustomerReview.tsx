import { Avatar, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useAppSelector } from "../../redux-hooks/hooks";

type Review = {
  name: string;
  review: string;
  image: string;
};

export default function MediaCard({ reviews }: { reviews: Review[] }) {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className="pb-6">
      <p className="text-2xl px-10">
        <i>
          {translate
            ? "What past pupils say..."
            : "Những gì học sinh trong quá khứ nói..."}
        </i>
      </p>
      <div className="flex items-center justify-between md:flex-row md:px-5 md:justify-evenly lg:px-0 md:space-x-2 flex-col space-y-6 pb-12 pt-6 md:space-y-0">
        {reviews.map((item) => (
          <Card
            key={item.name}
            sx={{
              maxWidth: 345,
              border: 4,
              borderRadius: 2,
              borderColor: "orange",
              boxShadow: "none",
            }}
            className="w-full h-full"
          >
            <CardContent>
              <div className="flex items-center justify-between py-4">
                <Avatar src={item.image} alt="avatar image" />
                <Rating name="read-only" value={5} readOnly />
              </div>
              <p className="py-3 text-2xl font-semibold">{item.name}</p>
              <p className="line-clamp-5">{item.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
