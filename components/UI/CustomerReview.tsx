import { Avatar, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type Review = {
  name: string;
  review: string;
  image: string;
};

export default function MediaCard({ customer }: { customer: Review[] }) {
  return (
    <div className="flex  items-center justify-between pb-12 md:flex-row md:justify-evenly md:space-x-2 flex-col space-y-6 md:space-y-0">
      {customer.map((item) => (
        <Card
          key={item.name}
          sx={{
            maxWidth: 345,
            border: 1,
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
  );
}
