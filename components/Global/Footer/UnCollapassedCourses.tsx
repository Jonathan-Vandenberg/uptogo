import Link from "next/link";

const it = [
  {
    subject: "Software Development",
    link: "/courses/information-technology/software-development",
  },
  {
    subject: "Computer Networking",
    link: "/courses/information-technology/computer-networking",
  },
  {
    subject: "Cloud Computing",
    link: "/courses/information-technology/cloud-computing",
  },
  {
    subject: "Business Analysis",
    link: "/courses/information-technology/business-analysis",
  },
  {
    subject: "Telecommunication",
    link: "/courses/information-technology/telecommunication",
  },
  {
    subject: "Game Programming",
    link: "/courses/information-technology/game-programmimg",
  },
  {
    subject: "Website Developmen",
    link: "/courses/information-technology/web-development",
  },
  {
    subject: "Machine Learing",
    link: "/courses/information-technology/machine-learning",
  },
  {
    subject: "Data Management",
    link: "/courses/information-technology/data-management",
  },
  {
    subject: "Blockchain Technology",
    link: "/courses/information-technology/blockchain-technology",
  },
  {
    subject: "Artificial Intelligence",
    link: "/courses/artificial-intelligence",
  },
];

interface IProps {
  handleCloseDropdowns: () => void;
}

const App = ({ handleCloseDropdowns }: IProps) => {
  return (
    <div className="hidden border-b-2 py-8 px-28 lg:container lg:mx-auto lg:grid lg:grid-cols-6 md:px-4">
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 pl-2 font-semibold">Công nghệ thông tin</p>
        </div>
        <div className="flex items-start justify-center flex-col">
          {it.map((item, i) => (
            <div
              onClick={() => handleCloseDropdowns()}
              key={i}
              className="cursor-pointer hover:bg-sky-100 w-full h-full"
            >
              <Link
                href={item.link}
                className="cursor-pointer text-sm text-gray-600 hover:text-iwanttoColor"
              >
                <p className="text-gray-600 hover:text-black p-2">
                  {item.subject}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Design</p>
        </div>
        <p className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor">
          Fashion Design
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Landscape
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Music & Audio
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Film & Media
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Graphic Design
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Interior Design
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Digital Media
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Digital Media
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Acting
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Animation 3D
        </p>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Health</p>
        </div>
        <p className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor">
          Aged Care
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Nutrition
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Nursing
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Veterinary
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Medicine
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Public health
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Dental
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Massage
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Mental Health
        </p>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Management</p>
        </div>
        <p className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor">
          Project Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Business Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Human Resources
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Banking Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          International Business
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Social Media & Marketing
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Agribusiness Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Supply chain Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Leadership & Management
        </p>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Hospitality</p>
        </div>
        <p className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor">
          Patisserie & Baking
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Commercial Cookery
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Hospitality Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Intl. Hotel Management
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Travel & Tourism
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Events
        </p>
      </div>
      <div className="col-span-1">
        <div className="flex items-center justify-between">
          <p className="text-md py-3 font-semibold">Trade & Sports</p>
        </div>
        <p className="cursor-pointer py-1 text-sm text-gray-600 hover:text-iwanttoColor">
          Automotive
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Beauty
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Building & Construction
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Carpentry
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Education
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Fitness
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Hairdressing
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Horticulture
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Sport Development
        </p>
        <p className="cursor-pointer py-1 text-sm  text-gray-600 hover:text-iwanttoColor ">
          Yoga
        </p>
      </div>
    </div>
  );
};

export default App;
