interface IProps {
  color: string;
}

export default function App({ color }: IProps) {
  const topStyle = `bg-${color} -z-10 h-12 md:h-20 w-full`;
  const bottomStyle = `bg-${color} -z-10 h-12 md:h-20 absolute top-0 left-0 w-full`;

  return (
    <>
      <div className={topStyle}></div>
      <div className="relative">
        <div className="w-full h-12 md:h-20 rounded-tl-full z-10 bg-white flex items-center justify-center"></div>
        <div className={bottomStyle}></div>
      </div>
    </>
  );
}
