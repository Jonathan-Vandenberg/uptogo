interface IProps {
  color: string;
}

export default function App() {
  const style = `bg-sky-50/90 -z-10 h-12 md:h-32 absolute top-0 left-0 w-full`;

  return (
    <>
      <div className="relative">
        <div className="w-full h-12 md:h-32 rounded-tl-full z-10 bg-gradient-to-b from-body to-white flex items-center justify-center"></div>
        <div className={style}></div>
      </div>
    </>
  );
}
