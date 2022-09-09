import {
  CoursesDesign,
  CoursesHealth,
  CoursesHospitality,
  CoursesIT,
  CoursesManagement,
  CoursesTrades,
} from "../components/Global/Footer/CollapseMenus";

export default function App() {
  return (
    <div className="space-y-3">
      <div className="p-3 ">Blog</div>
      <div className="p-3 ">Events</div>
      <div className="divide-y-2 divide-white">
        <CoursesIT handleStepper={() => {}} />
        <CoursesHealth handleStepper={() => {}} />
        <CoursesManagement handleStepper={() => {}} />
        <CoursesDesign handleStepper={() => {}} />
        <CoursesHospitality handleStepper={() => {}} />
        <CoursesTrades handleStepper={() => {}} />
      </div>
    </div>
  );
}
