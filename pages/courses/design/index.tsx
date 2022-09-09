import Link from "next/link";

export default function App() {
  return (
    <div className="divide divide-gray-400">
      <Link href={"/courses/design/fashion-design"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Fashion Design
        </div>
      </Link>
      <Link href={"/courses/design/landscape"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Landscape
        </div>
      </Link>
      <Link href={"/courses/design/music-and-audio"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Music & Audio
        </div>
      </Link>
      <Link href={"/courses/design/film-and-media"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Film & Media
        </div>
      </Link>
      <Link href={"/courses/design/graphic-design"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Graphic Design
        </div>
      </Link>
      <Link href={"/courses/design/interior-design"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Interiod Design
        </div>
      </Link>
      <Link href={"/courses/design/digital-media"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Digital Media
        </div>
      </Link>
      <Link href={"/courses/design/acting"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          Acting
        </div>
      </Link>
      <Link href={"/courses/design/3d-animation"}>
        <div className="text-lg p-4 text-darkBlue hover:border-2 hover:border-orange hover:rounded-lg">
          3D Animation
        </div>
      </Link>
    </div>
  );
}

// Thiết kế - Design
// •	Thiết kế thời trang – Fashion Design
// •	Kiến trúc môi trường – Landscape
// •	Âm nhạc & Âm thanh – Music & Audio
// •	Phim & Truyền thông – Film & Media
// •	Thiết kế đồ họa – Graphic Design
// •	Thiết kế nội thất – Interiod Design
// •	Truyền thông kỹ thuật số - Digital Media
// •	Diễn viên – Acting
// •	Hoạt hình & 3D – Animation 3D
