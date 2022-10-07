import { useAppSelector } from "../../redux-hooks/hooks";
import {
  CoursesIT,
  CoursesHealth,
  CoursesManagement,
  CoursesDesign,
  CoursesHospitality,
  CoursesTrades,
} from "../Global/Footer/CollapseMenus";
// import CourseStepper from "./CourseStepper";

interface IProps {
  handleMajorStepper: () => void;
  handleCategoryStepper: () => void;
  step: number;
}

export default function App({
  handleMajorStepper,
  handleCategoryStepper,
  step,
}: IProps) {
  const translate = useAppSelector((state) => state.translationState.translate);
  return (
    <div className=" w-full my-6 mx-auto container bg-sky-50">
      <div className="mb-6">
        <div className="pt-5 text-center ">
          <h2 className="logoFont text-3xl md:text-5xl text-gray-700 py-1 md:py-3">
            {translate
              ? "Ready to Explore?"
              : "Bạn đã sẵn sàng để khám phá chưa?"}
          </h2>
          {translate ? (
            <h2 className="logoFont text-xl md:text-3xl text-gray-700 py-1">
              Let&apos;s go step-by-step
            </h2>
          ) : (
            <h2 className="logoFont text-xl md:text-3xl text-gray-700 py-1">
              Hãy đi từng bước
            </h2>
          )}
        </div>
        <div className="flex flex-col items-center justify-center space-y-12 py-12 px-10">
          {/* <CourseStepper step={step} /> */}
          <div className="flex -tems-center-justify-center space-y-1 flex-col">
            <CoursesIT
              handleMajorStepper={handleMajorStepper}
              handleCategoryStepper={handleCategoryStepper}
            />
            <CoursesHealth
              handleMajorStepper={handleMajorStepper}
              handleCategoryStepper={handleCategoryStepper}
            />
            <CoursesManagement
              handleMajorStepper={handleMajorStepper}
              handleCategoryStepper={handleCategoryStepper}
            />
            <CoursesDesign
              handleMajorStepper={handleMajorStepper}
              handleCategoryStepper={handleCategoryStepper}
            />
            <CoursesHospitality
              handleMajorStepper={handleMajorStepper}
              handleCategoryStepper={handleCategoryStepper}
            />
            <CoursesTrades
              handleMajorStepper={handleMajorStepper}
              handleCategoryStepper={handleCategoryStepper}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
