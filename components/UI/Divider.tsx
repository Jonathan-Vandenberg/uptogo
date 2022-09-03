interface IProps {
  title: string;
}

export default function App({ title }: IProps) {
  return (
    <>
      <div className="relative">
        <div className="w-full h-12 md:h-32 rounded-br-full z-10 bg-white text-red-600"></div>
        <div className="bg-blueBody -z-10 h-12 md:h-32 absolute top-0 left-0 w-full"></div>
      </div>
      <div className="bg-blueBody -z-10 h-12 md:h-32 w-full"></div>
      <div className="relative">
        <div className="w-full h-12 md:h-32 rounded-tl-full z-10 bg-white flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold pt-16 text-center">
            {title}
          </h2>
        </div>
        <div className="bg-blueBody -z-10 h-12 md:h-32 absolute top-0 left-0 w-full"></div>
      </div>
    </>
  );
}
