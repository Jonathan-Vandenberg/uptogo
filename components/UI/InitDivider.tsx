interface IProps {
  color: string;
}

export default function App({ color }: IProps) {
  const style = `bg-${color} -z-10 h-12 md:h-32 absolute top-0 left-0 w-full`;

  return (
    <>
      <div className="relative">
        <div className="w-full h-12 md:h-32 rounded-tl-full z-10 bg-bgGradientStart flex items-center justify-center"></div>
        <div className={style}></div>
      </div>
    </>
  );
}
