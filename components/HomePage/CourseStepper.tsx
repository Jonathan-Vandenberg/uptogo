// import Check from "@mui/icons-material/Check";
// import Stack from "@mui/material/Stack";
// import Step from "@mui/material/Step";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";
// import { StepIconProps } from "@mui/material/StepIcon";
// import StepLabel from "@mui/material/StepLabel";
// import Stepper from "@mui/material/Stepper";
// import { styled } from "@mui/material/styles";
// import * as React from "react";
// import { AiOutlineLogin } from "react-icons/ai";
// import { FaGraduationCap } from "react-icons/fa";
// import { MdSubject } from "react-icons/md";
// import { useAppSelector } from "../../redux-hooks/hooks";

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
//   ({ theme, ownerState }) => ({
//     color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
//     display: "flex",
//     height: 22,
//     alignItems: "center",
//     ...(ownerState.active && {
//       color: "#784af4",
//     }),
//     "& .QontoStepIcon-completedIcon": {
//       color: "#784af4",
//       zIndex: 1,
//       fontSize: 18,
//     },
//     "& .QontoStepIcon-circle": {
//       width: 8,
//       height: 8,
//       borderRadius: "50%",
//       backgroundColor: "currentColor",
//     },
//   })
// );

// function QontoStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,#F69624 0% ,rgb(138,35,135) 100%)",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage: "linear-gradient( 95deg,#F69624 0%, #F69624 100%)",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled("div")<{
//   ownerState: { completed?: boolean; active?: boolean };
// }>(({ theme, ownerState }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
//   zIndex: 1,
//   color: "#fff",
//   width: 50,
//   height: 50,
//   display: "flex",
//   borderRadius: "50%",
//   justifyContent: "center",
//   alignItems: "center",
//   ...(ownerState.active && {
//     backgroundImage:
//       "linear-gradient( 136deg, rgb(19, 37, 83) 0%, rgb(0, 88, 161) 100%)",
//     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
//   }),
//   ...(ownerState.completed && {
//     backgroundImage: "linear-gradient( 136deg, #F8D117 0%,  #F69624 100%)",
//   }),
// }));

// function ColorlibStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   const icons: { [index: string]: React.ReactElement } = {
//     1: <FaGraduationCap size={30} />,
//     2: <MdSubject size={30} />,
//     3: <AiOutlineLogin size={30} color="white" />,
//   };

//   return (
//     <ColorlibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     >
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// interface IProps {
//   step: number;
// }

// export default function CustomizedSteppers({ step }: IProps) {
//   const translate = useAppSelector((state) => state.translationState.translate);
//   const subject = translate ? "Select Your Subject" : " Chọn môn học";
//   const major = translate ? "Select Your Major" : "Chọn ngành họ";
//   const steps = [subject, major];

//   return (
//     <Stack sx={{ width: "100%" }} spacing={4}>
//       <Stepper
//         alternativeLabel
//         activeStep={step}
//         connector={<ColorlibConnector />}
//       >
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Stack>
//   );
// }

export default function App() {
  return <div></div>;
}
