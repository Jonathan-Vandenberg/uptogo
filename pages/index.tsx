import Hero from "../components/HomePage/Hero";
import HomeMain from "../components/HomePage/HomeMain";

export default function App() {
  return (
    <>
      <div className="md:px-10 p-4 md:py-10 md:p-0 md:mb-6 bg-white">
        <Hero />
      </div>
      <HomeMain />
    </>
  );
}
