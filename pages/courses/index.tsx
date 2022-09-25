import CoursesDesktopPage from "../../components/Courses/CoursesDesktopPage";
import CoursesMobilePage from "../../components/MobileIconPages/Index";

export default function App() {
  return (
    <>
      <div className="md:hidden">
        <CoursesMobilePage />
      </div>
      <div className="hidden md:block">
        <CoursesDesktopPage />
      </div>
    </>
  );
}
