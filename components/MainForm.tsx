import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import {
  Acting,
  AgedCare,
  AgribusinessManagement,
  Ai,
  Animation3D,
  Automotive,
  Baking,
  BankingManagement,
  Beauty,
  Blockchain,
  BlogPost,
  BusinessAnalysis,
  BusinessManagement,
  Carpentry,
  CloudComputing,
  ComputerNetworking,
  Construction,
  Cookery,
  CurrentEvent,
  DataManagement,
  Dental,
  Design,
  DigitalMedia,
  Education,
  Events,
  FashionDesign,
  Film,
  Fitness,
  GameProgramming,
  GraphicDesign,
  Guidance,
  Hairdressing,
  Health,
  Horticulture,
  Hospitality,
  HospitalityManagement,
  HotelManagement,
  HumanResources,
  InteriorDesign,
  IntlBusiness,
  It,
  Landscape,
  LeadershipManagement,
  MachineLearning,
  Management,
  Massage,
  Medicine,
  MentalHealth,
  Music,
  Nursing,
  Nutrition,
  ProjectManagement,
  PublicHealth,
  SocialMediaMarketing,
  SoftwareDevelopment,
  SportDevelopment,
  SupplyManagement,
  Telecommunication,
  Trades,
  TravelTourism,
  useAddBlogPostMutation,
  useUpdateActingMutation,
  useUpdateAgedCareMutation,
  useUpdateAgribusinessManagementMutation,
  useUpdateAiMutation,
  useUpdateAnimation3DMutation,
  useUpdateAutomotiveMutation,
  useUpdateBakingMutation,
  useUpdateBankingManagementMutation,
  useUpdateBeautyMutation,
  useUpdateBlockchainMutation,
  useUpdateBlogPostMutation,
  useUpdateBusinessAnalysisMutation,
  useUpdateBusinessManagementMutation,
  useUpdateCarpentryMutation,
  useUpdateCloudComputingMutation,
  useUpdateComputerNetworkingMutation,
  useUpdateConstructionMutation,
  useUpdateCookeryMutation,
  useUpdateCurrentEventMutation,
  useUpdateDataManagementMutation,
  useUpdateDentalMutation,
  useUpdateDesignMutation,
  useUpdateDigitalMediaMutation,
  useUpdateEducationMutation,
  useUpdateEventsMutation,
  useUpdateFashionDesignMutation,
  useUpdateFilmMutation,
  useUpdateFitnessMutation,
  useUpdateGameProgrammingMutation,
  useUpdateGraphicDesignMutation,
  useUpdateGuidanceMutation,
  useUpdateHairdressingMutation,
  useUpdateHealthMutation,
  useUpdateHorticultureMutation,
  useUpdateHospitalityManagementMutation,
  useUpdateHospitalityMutation,
  useUpdateHotelManagementMutation,
  useUpdateHumanResourcesMutation,
  useUpdateInteriorDesignMutation,
  useUpdateIntlBusinessMutation,
  useUpdateItMutation,
  useUpdateLandscapeMutation,
  useUpdateLeadershipManagementMutation,
  useUpdateMachineLearningMutation,
  useUpdateManagementMutation,
  useUpdateMassageMutation,
  useUpdateMedicineMutation,
  useUpdateMentalHealthMutation,
  useUpdateMusicMutation,
  useUpdateNursingMutation,
  useUpdateNutritionMutation,
  useUpdateProjectManagementMutation,
  useUpdatePublicHealthMutation,
  useUpdateSocialMediaMarketingMutation,
  useUpdateSoftwareDevelopmentMutation,
  useUpdateSportDevelopmentMutation,
  useUpdateSupplyManagementMutation,
  useUpdateTelecommunicationMutation,
  useUpdateTradesMutation,
  useUpdateTravelTourismMutation,
  useUpdateVeterinaryMutation,
  useUpdateWebDevelopmentMutation,
  useUpdateYogaMutation,
  Veterinary,
  WebDevelopment,
  Yoga,
} from "../types";

interface IProps {
  details:
    | It
    | BlogPost
    | CurrentEvent
    | Telecommunication
    | BusinessAnalysis
    | CloudComputing
    | ComputerNetworking
    | SoftwareDevelopment
    | GameProgramming
    | WebDevelopment
    | MachineLearning
    | DataManagement
    | Blockchain
    | Ai
    | Design
    | Music
    | Landscape
    | FashionDesign
    | Film
    | GraphicDesign
    | InteriorDesign
    | DigitalMedia
    | Acting
    | Animation3D
    | Health
    | AgedCare
    | Nutrition
    | Nursing
    | Veterinary
    | Medicine
    | PublicHealth
    | Dental
    | Massage
    | MentalHealth
    | Baking
    | Cookery
    | HospitalityManagement
    | HotelManagement
    | TravelTourism
    | Events
    | Automotive
    | Beauty
    | Construction
    | Carpentry
    | Education
    | Fitness
    | Hairdressing
    | Horticulture
    | SportDevelopment
    | Yoga
    | ProjectManagement
    | BusinessManagement
    | HumanResources
    | BankingManagement
    | IntlBusiness
    | SocialMediaMarketing
    | AgribusinessManagement
    | SupplyManagement
    | LeadershipManagement
    | Hospitality
    | Management
    | Trades
    | Guidance
    | undefined
    | null;
  add: boolean;
  edit: boolean;
  handleClose: () => void;
}

const AddClientForm = ({ details, add, edit, handleClose }: IProps) => {
  const Dtitle = add ? "" : details?.title;
  const Dcategory = add ? "" : details?.category;
  const Dsubtitle1 = add ? "" : details?.subtitle1;
  const Dsubtitle2 = add ? "" : details?.subtitle2;
  const Dsubtitle3 = add ? "" : details?.subtitle3;
  const Dsubtitle4 = add ? "" : details?.subtitle4;
  const DtableContents1 = add ? "" : details?.tableContents1;
  const DtableContents2 = add ? "" : details?.tableContents2;
  const DtableContents3 = add ? "" : details?.tableContents3;
  const DtableContents4 = add ? "" : details?.tableContents4;
  const Dp1 = add ? "" : details?.p1;
  const Dp2 = add ? "" : details?.p2;
  const Dp3 = add ? "" : details?.p3;
  const Dp4 = add ? "" : details?.p4;
  const Dp5 = add ? "" : details?.p5;
  const Dp6 = add ? "" : details?.p6;
  const Dp7 = add ? "" : details?.p7;
  const Dp8 = add ? "" : details?.p8;
  const Dl1 = add ? "" : details?.l1;
  const Dl2 = add ? "" : details?.l2;
  const Dl3 = add ? "" : details?.l3;
  const Dl4 = add ? "" : details?.l4;
  const Dl5 = add ? "" : details?.l5;
  const Dl6 = add ? "" : details?.l6;
  const Dl7 = add ? "" : details?.l7;
  const Dl8 = add ? "" : details?.l8;
  const Dl9 = add ? "" : details?.l9;
  const Dl10 = add ? "" : details?.l10;
  const Dl11 = add ? "" : details?.l11;
  const Dl12 = add ? "" : details?.l12;
  const Dl13 = add ? "" : details?.l13;
  const Dl14 = add ? "" : details?.l14;
  const Dl15 = add ? "" : details?.l15;
  const Dconclusion1 = add ? "" : details?.conclusion1;
  const Dconclusion2 = add ? "" : details?.conclusion2;
  const Dconclusion3 = add ? "" : details?.conclusion3;
  const Dreference1 = add ? "" : details?.reference1;
  const Dreference2 = add ? "" : details?.reference2;
  const DauthorName = add ? "" : details?.authorName;
  const DauthorAbout = add ? "" : details?.authorAbout;
  const DauthorLink = add ? "" : details?.authorLink;
  const DeditedBy = add ? "" : details?.editedBy;
  const DpublishedDate = add ? "" : details?.publishedDate;
  const DmainImage = add ? "" : details?.mainImage;
  const DphotoCredit = add ? "" : details?.photoCredit;

  const id = details!.id;
  const [category, setCategory] = useState(Dcategory);
  const [title, setTitle] = useState(Dtitle);
  const [subtitle1, setSubtitle1] = useState(Dsubtitle1);
  const [subtitle2, setSubtitle2] = useState(Dsubtitle2);
  const [subtitle3, setSubtitle3] = useState(Dsubtitle3);
  const [subtitle4, setSubtitle4] = useState(Dsubtitle4);
  const [tableContents1, setTableContents1] = useState(DtableContents1);
  const [tableContents2, setTableContents2] = useState(DtableContents2);
  const [tableContents3, setTableContents3] = useState(DtableContents3);
  const [tableContents4, setTableContents4] = useState(DtableContents4);
  const [p1, setP1] = useState(Dp1);
  const [p2, setP2] = useState(Dp2);
  const [p3, setP3] = useState(Dp3);
  const [p4, setP4] = useState(Dp4);
  const [p5, setP5] = useState(Dp5);
  const [p6, setP6] = useState(Dp6);
  const [p7, setP7] = useState(Dp7);
  const [p8, setP8] = useState(Dp8);
  const [l1, setL1] = useState(Dl1);
  const [l2, setL2] = useState(Dl2);
  const [l3, setL3] = useState(Dl3);
  const [l4, setL4] = useState(Dl4);
  const [l5, setL5] = useState(Dl5);
  const [l6, setL6] = useState(Dl6);
  const [l7, setL7] = useState(Dl7);
  const [l8, setL8] = useState(Dl8);
  const [l9, setL9] = useState(Dl9);
  const [l10, setL10] = useState(Dl10);
  const [l11, setL11] = useState(Dl11);
  const [l12, setL12] = useState(Dl12);
  const [l13, setL13] = useState(Dl13);
  const [l14, setL14] = useState(Dl14);
  const [l15, setL15] = useState(Dl15);
  const [conclusion1, setConclusion1] = useState(Dconclusion1);
  const [conclusion2, setConclusion2] = useState(Dconclusion2);
  const [conclusion3, setConclusion3] = useState(Dconclusion3);
  const [reference1, setReference1] = useState(Dreference1);
  const [reference2, setReference2] = useState(Dreference2);
  const [authorName, setAuthorName] = useState(DauthorName);
  const [authorAbout, setAuthorAbout] = useState(DauthorAbout);
  const [authorLink, setAuthorLink] = useState(DauthorLink);
  const [editedBy, setEditedBy] = useState(DeditedBy);
  const [publishedDate, setPublishedDate] = useState(DpublishedDate);
  const [mainImage, setMainImage] = useState(DmainImage);
  const [photoCredit, setPhotoCredit] = useState(DphotoCredit);

  const [addBlogPost] = useAddBlogPostMutation();

  // const [addSoftwareDevelopment] = useAddSoftwareDevelopmentMutation();
  // addSoftwareDevelopment;
  // const [addComputerNetworking] = useAddComputerNetworkingMutation();
  // const [addCloudComputing] = useAddCloudComputingMutation();
  // const [addBusinessAnalysis] = useAddBusinessAnalysisMutation();
  // const [addTelecommunication] = useAddTelecommunicationMutation();
  // const [addGameProgramming] = useAddGameProgrammingMutation();
  // const [addWebDevelopment] = useAddWebDevelopmentMutation();
  // const [addMachineLearning] = useAddMachineLearningMutation();
  // const [addDataManagement] = useAddDataManagementMutation();
  // const [addBlockchain] = useAddBlockchainMutation();
  // const [addAi] = useAddAiMutation();

  /* Software Development */
  const [updateSoftwareDevelopment] = useUpdateSoftwareDevelopmentMutation();
  const [updateComputerNetworking] = useUpdateComputerNetworkingMutation();
  const [updateCloudComputing] = useUpdateCloudComputingMutation();
  const [updateBusinessAnalysis] = useUpdateBusinessAnalysisMutation();
  const [updateTelecommunication] = useUpdateTelecommunicationMutation();
  const [updateGameProgramming] = useUpdateGameProgrammingMutation();
  const [updateWebDevelopment] = useUpdateWebDevelopmentMutation();
  const [updateMachineLearning] = useUpdateMachineLearningMutation();
  const [updateDataManagement] = useUpdateDataManagementMutation();
  const [updateBlockchain] = useUpdateBlockchainMutation();
  const [updateAi] = useUpdateAiMutation();
  const [updateBlogPost] = useUpdateBlogPostMutation();
  const [updateIt] = useUpdateItMutation();

  /* Design */
  const [updateDesign] = useUpdateDesignMutation();
  const [updateMusic] = useUpdateMusicMutation();
  const [updateFashionDesign] = useUpdateFashionDesignMutation();
  const [updateLandscape] = useUpdateLandscapeMutation();
  const [updateFilm] = useUpdateFilmMutation();
  const [updateGraphicDesign] = useUpdateGraphicDesignMutation();
  const [updateInteriorDesign] = useUpdateInteriorDesignMutation();
  const [updateDigitalMedia] = useUpdateDigitalMediaMutation();
  const [updateActing] = useUpdateActingMutation();
  const [updateAnimation3D] = useUpdateAnimation3DMutation();

  /* Health */
  const [updateHealth] = useUpdateHealthMutation();
  const [updateAgedCare] = useUpdateAgedCareMutation();
  const [updateNutrition] = useUpdateNutritionMutation();
  const [updateNursing] = useUpdateNursingMutation();
  const [updateVeterinary] = useUpdateVeterinaryMutation();
  const [updateMedicine] = useUpdateMedicineMutation();
  const [updatePublicHealth] = useUpdatePublicHealthMutation();
  const [updateDental] = useUpdateDentalMutation();
  const [updateMassage] = useUpdateMassageMutation();
  const [updateMentalHealth] = useUpdateMentalHealthMutation();

  /* Hospitality */
  const [updateHospitality] = useUpdateHospitalityMutation();
  const [updateBaking] = useUpdateBakingMutation();
  const [updateCookery] = useUpdateCookeryMutation();
  const [updateHospitalityManagement] =
    useUpdateHospitalityManagementMutation();
  const [updateHotelManagement] = useUpdateHotelManagementMutation();
  const [updateTravelTourism] = useUpdateTravelTourismMutation();
  const [updateEvents] = useUpdateEventsMutation();

  /* Trades */
  const [updateTrades] = useUpdateTradesMutation();
  const [updateAutomotive] = useUpdateAutomotiveMutation();
  const [updateBeauty] = useUpdateBeautyMutation();
  const [updateConstruction] = useUpdateConstructionMutation();
  const [updateCarpentry] = useUpdateCarpentryMutation();
  const [updateEducation] = useUpdateEducationMutation();
  const [updateFitness] = useUpdateFitnessMutation();
  const [updateHairdressing] = useUpdateHairdressingMutation();
  const [updateHorticulture] = useUpdateHorticultureMutation();
  const [updateSportDevelopment] = useUpdateSportDevelopmentMutation();
  const [updateYoga] = useUpdateYogaMutation();

  /* Management */
  const [updateManagement] = useUpdateManagementMutation();
  const [updateProjectManagement] = useUpdateProjectManagementMutation();
  const [updateBusinessManagement] = useUpdateBusinessManagementMutation();
  const [updateHumanResources] = useUpdateHumanResourcesMutation();
  const [updateBankingManagement] = useUpdateBankingManagementMutation();
  const [updateIntlBusiness] = useUpdateIntlBusinessMutation();
  const [updateSocialMediaMarketing] = useUpdateSocialMediaMarketingMutation();
  const [updateAgribusinessManagement] =
    useUpdateAgribusinessManagementMutation();
  const [updateSupplyManagement] = useUpdateSupplyManagementMutation();
  const [updateLeadershipManagement] = useUpdateLeadershipManagementMutation();

  const [updateCurrentEvent] = useUpdateCurrentEventMutation();
  const [updateGuidance] = useUpdateGuidanceMutation();

  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);

  let form = {
    variables: {
      input: {
        id: id,
        category: category,
        editedBy: editedBy,
        publishedDate: publishedDate,
        mainImage: mainImage,
        photoCredit: photoCredit,
        title: title,
        subtitle1: subtitle1,
        tableContents1: tableContents1,
        tableContents2: tableContents2,
        tableContents3: tableContents3,
        tableContents4: tableContents4,
        p1: p1,
        p2: p2,
        p3: p3,
        subtitle2: subtitle2,
        p4: p4,
        p5: p5,
        l1: l1,
        l2: l2,
        l3: l3,
        l4: l4,
        l5: l5,
        subtitle3: subtitle3,
        p6: p6,
        p7: p7,
        l6: l6,
        l7: l7,
        l8: l8,
        l9: l9,
        l10: l10,
        l11: l11,
        l12: l12,
        l13: l13,
        l14: l14,
        l15: l15,
        p8: p8,
        subtitle4: subtitle4,
        conclusion1: conclusion1,
        conclusion2: conclusion2,
        conclusion3: conclusion3,
        reference1: reference1,
        reference2: reference2,
        authorName: authorName,
        authorAbout: authorAbout,
        authorLink: authorLink,
      },
    },
  };

  useEffect(() => {
    setCategory(details?.category ? details?.category : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      if (add) {
        if (category === "BLOG") {
          addBlogPost(form);
        }
      }
      if (edit) {
        if (category === "BLOG") updateBlogPost(form);
        if (category === "CURRENT_EVENT") updateCurrentEvent(form);
        if (category === "GUIDANCE") updateGuidance(form);

        /* Software Development */
        if (category === "SOFTWARE_DEVELOPMENT")
          updateSoftwareDevelopment(form);
        if (category === "COMPUTER_NETWORKING") updateComputerNetworking(form);
        if (category === "CLOUD_COMPUTING") updateCloudComputing(form);
        if (category === "BUSINESS_ANALYSIS") updateBusinessAnalysis(form);
        if (category === "TELECOMMUNICATION") updateTelecommunication(form);
        if (category === "GAME_PROGRAMMING") updateGameProgramming(form);
        if (category === "WEB_DEVELOPMENT") updateWebDevelopment(form);
        if (category === "MACHINE_LEARNING") updateMachineLearning(form);
        if (category === "DATA_MANAGEMENT") updateDataManagement(form);
        if (category === "BLOCKCHAIN_TECH") updateBlockchain(form);
        if (category === "AI") updateAi(form);
        if (category === "BLOG") updateBlogPost(form);
        if (category === "IT") updateIt(form);

        /* Design */
        if (category === "DESIGN") updateDesign(form);
        if (category === "MUSIC_AUDIO") updateMusic(form);
        if (category === "FASHION_DESIGN") updateFashionDesign(form);
        if (category === "LANDSCAPE") updateLandscape(form);
        if (category === "FILM_MEDIA") updateFilm(form);
        if (category === "GRAPHIC_DESIGN") updateGraphicDesign(form);
        if (category === "INTERIOR_DESIGN") updateInteriorDesign(form);
        if (category === "DIGITAL_MEDIA") updateDigitalMedia(form);
        if (category === "ACTING") updateActing(form);
        if (category === "ANIMATION_3D") updateAnimation3D(form);

        /* Health */
        if (category === "HEALTH") updateHealth(form);
        if (category === "AGED_CARE") updateAgedCare(form);
        if (category === "NUTRITION") updateNutrition(form);
        if (category === "NURSING") updateNursing(form);
        if (category === "VETENARY") updateVeterinary(form);
        if (category === "MEDICINE") updateMedicine(form);
        if (category === "PUBLIC_HEALTH") updatePublicHealth(form);
        if (category === "DENTAL") updateDental(form);
        if (category === "MASSAGE") updateMassage(form);
        if (category === "MENTAL_HEALTH") updateMentalHealth(form);

        /* Hospitality */
        if (category === "HOSPITALITY") updateHospitality(form);
        if (category === "BAKING") updateBaking(form);
        if (category === "COMMERCIAL_COOKING") updateCookery(form);
        if (category === "HOPITALITY_MANAGEMENT")
          updateHospitalityManagement(form);
        if (category === "INTL_HOTEL_MANAGEMENT") updateHotelManagement(form);
        if (category === "TRAVEL_TOURISM") updateTravelTourism(form);
        if (category === "EVENTS") updateEvents(form);

        /* Trades */
        if (category === "TRADES") updateTrades(form);
        if (category === "AUTOMOTIVE") updateAutomotive(form);
        if (category === "BEAUTY") updateBeauty(form);
        if (category === "CONSTRUCTION") updateConstruction(form);
        if (category === "CARPENTRY") updateCarpentry(form);
        if (category === "EDUCATION") updateEducation(form);
        if (category === "FITNESS") updateFitness(form);
        if (category === "HARIDRESSING") updateHairdressing(form);
        if (category === "HORTICULTURE") updateHorticulture(form);
        if (category === "SPORT") updateSportDevelopment(form);
        if (category === "YOGA") updateYoga(form);

        /* Management */
        if (category === "MANAGEMENT") updateManagement(form);
        if (category === "PROJECT_MANAGEMENT") updateProjectManagement(form);
        if (category === "BUSINESS_MANAGEMENT") updateBusinessManagement(form);
        if (category === "HUMAN_RESOURCES") updateHumanResources(form);
        if (category === "BANKING_MANAGEMENT") updateBankingManagement(form);
        if (category === "INTERNATIONAL_BUSINESS") updateIntlBusiness(form);
        if (category === "SOCIALMEDIA_MARKETING")
          updateSocialMediaMarketing(form);
        if (category === "AGRIBUSINESS_MANAGEMENT")
          updateAgribusinessManagement(form);
        if (category === "SUPPLYCHAIN_MANAGEMENT") updateSupplyManagement(form);
        if (category === "LEADERSHIP_MANAGEMENT")
          updateLeadershipManagement(form);
      }

      // if (add) {
      //   addSoftwareDevelopment(form);
      // }
    }

    sendForm();

    setTimeout(() => {
      setCategory("");
      setTitle("");
      setSubtitle1("");
      setSubtitle2("");
      setSubtitle3("");
      setSubtitle4("");
      setTableContents1("");
      setTableContents2("");
      setTableContents3("");
      setTableContents4("");
      setP1("");
      setP2("");
      setP3("");
      setP4("");
      setP5("");
      setL1("");
      setL2("");
      setL3("");
      setL4("");
      setL5("");
      setL6("");
      setL7("");
      setL8("");
      setL9("");
      setL10("");
      setL11("");
      setL12("");
      setL13("");
      setL14("");
      setL15("");
      setP6("");
      setP7("");
      setP8("");
      setConclusion1("");
      setConclusion2("");
      setConclusion3("");
      setReference1("");
      setReference2("");
      setAuthorName("");
      setAuthorAbout("");
      setAuthorLink("");
      setEditedBy("");
      setPublishedDate("");
      setMainImage("");
      setPhotoCredit("");
    }, 4000);
  };

  const titleStyle =
    title?.length !== undefined && title?.length > 40 && title?.length < 50
      ? "border-2 border-orange p-3 rounded-xl w-full"
      : title?.length !== undefined && title?.length > 50 && title?.length < 62
      ? "border-2 border-green-500 p-3 rounded-xl w-full"
      : title?.length !== undefined && title?.length > 62
      ? "border-2 border-red-500 p-3 rounded-xl w-full"
      : "border-2 border-gray-200 p-3 rounded-xl w-full";

  const descriptionStyle =
    subtitle1?.length !== undefined &&
    subtitle1?.length > 140 &&
    subtitle1?.length < 150
      ? "border-2 border-orange p-3 rounded-xl w-full"
      : subtitle1?.length !== undefined &&
        subtitle1?.length > 150 &&
        subtitle1?.length < 162
      ? "border-2 border-green-500 p-3 rounded-xl w-full"
      : subtitle1?.length !== undefined && subtitle1?.length > 162
      ? "border-2 border-red-500 p-3 rounded-xl w-full"
      : "border-2 border-gray-200 p-3 rounded-xl w-full";

  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
      <div className="flex items-center justify-center">
        <p className="text-3xl text-gray-700 font-bold text-center underline underline-offset-2">
          ADMIN
        </p>
      </div>
      <form onSubmit={onFinish} className="space-y-3 py-6">
        {/* {category === "ADVICE" ||
          ("GUIDANCE" && (
            <div className="px-8 ">
              <select
                value={category as string}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value={"GUIDANCE"}>
                  {translate ? "Career Guidance" : "Hướng dẫn nghề nghiệp"}
                </option>
                <option value={"ADVICE"}>
                  {translate ? "Career Advice" : "Lời khuyên nghề nghiệp"}
                </option>
              </select>
            </div>
          ))} */}

        {category === "BLOG" && (
          <>
            <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
              <input
                id="form"
                value={publishedDate as string}
                placeholder="Ngày xuất bản"
                onChange={(e) => setPublishedDate(e.target.value)}
                className="border-2 border-gray-200 p-3 rounded-xl w-full"
              />
            </div>
            <div className="px-8 flex items-start space-y-3 justify-center flex-col">
              <input
                id="authorName"
                value={authorName as string}
                placeholder="Tên tác giả"
                onChange={(e) => setAuthorName(e.target.value)}
                className="border-2 border-gray-200 p-3 rounded-xl w-full"
              />
            </div>
            <div className="px-8 flex items-start space-y-3 justify-center flex-col">
              <input
                id="authorAbout"
                value={authorAbout as string}
                placeholder="Thông tin về các Tác giả"
                onChange={(e) => setAuthorAbout(e.target.value)}
                className="border-2 border-gray-200 p-3 rounded-xl w-full"
              />
            </div>
            <div className="px-8 flex items-start space-y-3 justify-center flex-col">
              <input
                id="authorLink"
                value={authorLink as string}
                placeholder="Hồ sơ của tác giả / Liên kết trang web"
                onChange={(e) => setAuthorLink(e.target.value)}
                className="border-2 border-gray-200 p-3 rounded-xl w-full"
              />
            </div>
            <div className="px-8 flex items-start space-y-3 justify-center flex-col">
              <input
                id="editedBy"
                value={editedBy as string}
                placeholder="Sửa bởi"
                onChange={(e) => setEditedBy(e.target.value)}
                className="border-2 border-gray-200 p-3 rounded-xl w-full"
              />
            </div>
            <div className="px-8 flex items-start space-y-3 justify-center flex-col">
              <input
                id="photoCredit"
                value={photoCredit as string}
                placeholder="Tín dụng hình ảnh"
                onChange={(e) => setPhotoCredit(e.target.value)}
                className="border-2 border-gray-200 p-3 rounded-xl w-full"
              />
            </div>
          </>
        )}

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <label htmlFor="html">Ngoài ra SEO tiêu đề - max 60 char</label>
          <input
            id="title"
            value={title as string}
            placeholder="Tiêu đề"
            onChange={(e) => setTitle(e.target.value)}
            className={titleStyle}
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <label htmlFor="html">Ngoài ra mô tả SEO - max 160 char</label>
          <input
            id="subtitle1"
            value={subtitle1 as string}
            placeholder="Phụ đề 1"
            onChange={(e) => setSubtitle1(e.target.value)}
            className={descriptionStyle}
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="tableContents1"
            value={tableContents1 as string}
            placeholder="Mục lục 1"
            onChange={(e) => setTableContents1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents2"
            value={tableContents2 as string}
            placeholder="Mục lục 2"
            onChange={(e) => setTableContents2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents3"
            value={tableContents3 as string}
            placeholder="Mục lục 3"
            onChange={(e) => setTableContents3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents4"
            value={tableContents4 as string}
            placeholder="Mục lục 4"
            onChange={(e) => setTableContents4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p1 as string}
            placeholder="Đoạn văn 1"
            onChange={(e) => setP1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p2 as string}
            placeholder="Đoạn văn 2"
            onChange={(e) => setP2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p3 as string}
            placeholder="Đoạn văn 3"
            onChange={(e) => setP3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle2"
            value={subtitle2 as string}
            placeholder="Phụ đề 2"
            onChange={(e) => setSubtitle2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p4 as string}
            placeholder="Đoạn văn 4"
            onChange={(e) => setP4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p5 as string}
            placeholder="Đoạn văn 5"
            onChange={(e) => setP5(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l1"
            value={l1 as string}
            placeholder="Dấu kiểm màu xanh lá cây #1"
            onChange={(e) => setL1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l2"
            value={l2 as string}
            placeholder="Dấu kiểm màu xanh lá cây #2"
            onChange={(e) => setL2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l3"
            value={l3 as string}
            placeholder="Dấu kiểm màu xanh lá cây #3"
            onChange={(e) => setL3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l4"
            value={l4 as string}
            placeholder="Dấu kiểm màu xanh lá cây #4"
            onChange={(e) => setL4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l5"
            value={l5 as string}
            placeholder="Dấu kiểm màu xanh lá cây #5"
            onChange={(e) => setL5(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle3"
            value={subtitle3 as string}
            placeholder="Phụ đề 3"
            onChange={(e) => setSubtitle3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p6 as string}
            placeholder="Đoạn văn 6"
            onChange={(e) => setP6(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p7 as string}
            placeholder="Đoạn văn 7"
            onChange={(e) => setP7(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l6"
            value={l6 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL6(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l7"
            value={l7 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL7(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l8"
            value={l8 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL8(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l9"
            value={l9 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL9(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l10"
            value={l10 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL10(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l11"
            value={l11 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL11(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l12"
            value={l12 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL12(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l13"
            value={l13 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL13(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l14"
            value={l14 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL14(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l15"
            value={l15 as string}
            placeholder="Liệt kê mục"
            onChange={(e) => setL15(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p8 as string}
            placeholder="Đoạn văn 8"
            onChange={(e) => setP8(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle4"
            value={subtitle4 as string}
            placeholder="Phụ đề 4"
            onChange={(e) => setSubtitle4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={conclusion1 as string}
            placeholder="Sự kết luận 1"
            onChange={(e) => setConclusion1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={conclusion2 as string}
            placeholder="Sự kết luận 2"
            onChange={(e) => setConclusion2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={conclusion3 as string}
            placeholder="Sự kết luận 3"
            onChange={(e) => setConclusion3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="reference1"
            value={reference1 as string}
            placeholder="Liên kết tham khảo #1"
            onChange={(e) => setReference1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pb-10">
          <input
            id="reference2"
            value={reference2 as string}
            placeholder="Liên kết tham khảo #2"
            onChange={(e) => setReference2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center border-green-600"
        >
          <button
            type="submit"
            className="flex items-center justify-between space-x-2 px-4 h-10 rounded-full text-green-500 bg-white border-2 border-green-500"
          >
            <BsPlus size={25} className="text-green-500 hover:text-white" />
            Cập Nhật
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default AddClientForm;
