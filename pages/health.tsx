import Link from "next/link";
import { useAppSelector } from "../redux-hooks/hooks";
import Image from "next/image";

import agedCare from "../public/courseIcons/healthIcons/care.png";
import nutrition from "../public/courseIcons/healthIcons/nutrition.png";
import nursing from "../public/courseIcons/healthIcons/nurse.png";
import veterinary from "../public/courseIcons/healthIcons/veterinarian.png";
import medicine from "../public/courseIcons/healthIcons/healthMain.png";
import publicHealth from "../public/courseIcons/healthIcons/publicHealth.png";
import dental from "../public/courseIcons/healthIcons/floss.png";
import massage from "../public/courseIcons/healthIcons/massage.png";
import mentalHealth from "../public/courseIcons/healthIcons/mental-health.png";

import BWagedCare from "../public/courseIcons/BWIcons/healthBWicons/care.png";
import BWnutrition from "../public/courseIcons/BWIcons/healthBWicons/nutrition.png";
import BWnursing from "../public/courseIcons/BWIcons/healthBWicons/nurse.png";
import BWveterinary from "../public/courseIcons/BWIcons/healthBWicons/veterinarian.png";
import BWmedicine from "../public/courseIcons/BWIcons/healthBWicons/doctor.png";
import BWpublicHealth from "../public/courseIcons/BWIcons/healthBWicons/healthcare (1).png";
import BWdental from "../public/courseIcons/BWIcons/healthBWicons/dentist.png";
import BWmassage from "../public/courseIcons/BWIcons/healthBWicons/facial-massage.png";
import BWmentalHealth from "../public/courseIcons/BWIcons/healthBWicons/mental-health.png";

import landmarks from "../public/heroImages/heroTravel.jpg";

export const healthLinks = [
  {
    courseE: "Aged Care",
    course: "Chăm sóc người già",
    link: "/courses/health/aged-care",
    icon: agedCare,
    BWicon: BWagedCare,
  },
  {
    courseE: "Dentistry",
    course: "Nha khoa",
    link: "/courses/health/dental",
    icon: dental,
    BWicon: BWdental,
  },
  {
    courseE: "Massage",
    course: "Massage",
    link: "/courses/health/massage",
    icon: massage,
    BWicon: BWmassage,
  },
  {
    courseE: "Medicine",
    course: "Dược sĩ",
    link: "/courses/health/medicine",
    icon: medicine,
    BWicon: BWmedicine,
  },
  {
    courseE: "Mental Health",
    course: "Tâm lý học",
    link: "/courses/health/mental-health",
    icon: mentalHealth,
    BWicon: BWmentalHealth,
  },
  {
    courseE: "Nursing",
    course: "Y tá",
    link: "/courses/health/nursing",
    icon: nursing,
    BWicon: BWnursing,
  },
  {
    courseE: "Nutrition",
    course: "Dinh dưỡng",
    link: "/courses/health/nutrition",
    icon: nutrition,
    BWicon: BWnutrition,
  },
  {
    courseE: "Public Health",
    course: "Sức khỏe cộng đồng",
    link: "/courses/health/public-health",
    icon: publicHealth,
    BWicon: BWpublicHealth,
  },
  {
    courseE: "Veterinary",
    course: "Thú ý",
    link: "/courses/health/veterinary",
    icon: veterinary,
    BWicon: BWveterinary,
  },
];

export default function App() {
  const translate = useAppSelector((state) => state.translationState.translate);
  const bw = useAppSelector((state) => state.iconState.bw);
  const style = bw
    ? "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10 bg-bgUrl"
    : "fixed md:static md:z-0  md:w-auto md:h-auto top-0 left-0 w-screen h-screen z-10  bg-gradient-to-b from-sky-200 via-white to-white";
  return (
    <div className={style}>
      {bw ? (
        <div className="md:flex md:mt-12 bg-bgUrl md:items-center md:justify-center grid grid-cols-3 mt-20 w-screen h-auto z-40 ">
          {healthLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.BWicon}
                      alt="IT image"
                      width={60}
                      height={60}
                      priority
                    />
                  </div>
                  <div className="text-sm text-gray-700 w-full text-center px-6 py-1 leading-4">
                    {translate ? item.courseE : item.course}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="md:flex md:mt-12 md:items-center md:justify-center grid grid-cols-3 pt-20 w-screen h-auto z-40">
          {healthLinks.map((item, i) => (
            <div key={i} className="pb-7 z-10">
              <Link href={item.link}>
                <div className="flex items-center justify-center flex-col cursor-pointer">
                  <div className="w-auto h-full items-center flex justify-center mb-1">
                    <Image
                      src={item.icon}
                      alt="IT image"
                      width={60}
                      height={60}
                      priority
                    />
                  </div>
                  <div className="text-sm text-gray-700 w-full text-center px-6 py-1 leading-4">
                    {translate ? item.courseE : item.course}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {!bw && (
        <div className="fixed bottom-12 left-0 w-screen">
          <Image
            src={landmarks}
            alt="landmarks decorational"
            layout="responsive"
            priority
          />
        </div>
      )}
      <span className="fixed bottom-0 left-0 w-screen h-12 bg-orange md:hidden" />
    </div>
  );
}
