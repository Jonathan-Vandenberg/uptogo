import { useEffect, useState } from "react";
import {
  ComputerNetworking,
  SoftwareDevelopment,
  useAddSoftwareDevelopmentMutation,
  useUpdateSoftwareDevelopmentMutation,
  CloudComputing,
  BusinessAnalysis,
  Telecommunication,
  GameProgramming,
  WebDevelopment,
  MachineLearning,
  DataManagement,
  Blockchain,
  Ai,
  useAddComputerNetworkingMutation,
  useAddAiMutation,
  useAddBlockchainMutation,
  useAddBusinessAnalysisMutation,
  useAddCloudComputingMutation,
  useAddDataManagementMutation,
  useAddGameProgrammingMutation,
  useAddMachineLearningMutation,
  useAddTelecommunicationMutation,
  useAddWebDevelopmentMutation,
  useUpdateAiMutation,
  useUpdateBlockchainMutation,
  useUpdateBusinessAnalysisMutation,
  useUpdateCloudComputingMutation,
  useUpdateComputerNetworkingMutation,
  useUpdateDataManagementMutation,
  useUpdateGameProgrammingMutation,
  useUpdateMachineLearningMutation,
  useUpdateTelecommunicationMutation,
  useUpdateWebDevelopmentMutation,
  useUpdateDesignMutation,
  useUpdateCurrentEventMutation,
  BlogPost,
  useUpdateBlogPostMutation,
  useUpdateItMutation,
  It,
  Design,
  Music,
  useUpdateMusicMutation,
  Acting,
  Animation3D,
  DigitalMedia,
  FashionDesign,
  Film,
  GraphicDesign,
  InteriorDesign,
  Landscape,
  Events,
  AgedCare,
  AgribusinessManagement,
  Automotive,
  Baking,
  BankingManagement,
  Beauty,
  BusinessManagement,
  Carpentry,
  Construction,
  Cookery,
  Dental,
  Education,
  Fitness,
  Hairdressing,
  Health,
  Horticulture,
  HospitalityManagement,
  HotelManagement,
  HumanResources,
  IntlBusiness,
  LeadershipManagement,
  Massage,
  Medicine,
  MentalHealth,
  Nursing,
  Nutrition,
  ProjectManagement,
  PublicHealth,
  SocialMediaMarketing,
  SportDevelopment,
  SupplyManagement,
  TravelTourism,
  Veterinary,
  Yoga,
  Hospitality,
  Trades,
  Management,
  CurrentEvent,
} from "../types";
import { options } from "../lib/categories";
import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";

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
  const [subtitle4, setSubtitle4] = useState(Dsubtitle3);
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
  const [updateDesign] = useUpdateDesignMutation();
  const [updateMusic] = useUpdateMusicMutation();

  const [updateCurrentEvent] = useUpdateCurrentEventMutation();
  const [authorNameLength, setAuthorNameLength] = useState(0);

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
      console.log(category);
      if (edit) {
        if (category === "BLOG") updateBlogPost(form);
        if (category === "CURRENT_EVENT") updateCurrentEvent(form);

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
        if (category === "DESIGN") updateDesign(form);
        if (category === "MUSIC_AUDIO") updateMusic(form);
      }

      // if (add) {
      //   addSoftwareDevelopment(form);
      // }
    }

    sendForm();

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
  };

  console.log(`The Authors\'s name takes up ${authorName?.length} characters`);

  return (
    <div className="px-5 max-w-[678px] md:max-w-[900px] mx-auto">
      <form onSubmit={onFinish} className="space-y-3 py-12">
        <div className="px-8 ">
          <select
            value={category as string}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {options.map((o, i) => (
              <option key={i} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            id="publishedDate"
            value={publishedDate as string}
            placeholder="Published Date"
            onChange={(e) => setPublishedDate(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="authorName"
            value={authorName as string}
            placeholder="Author Name"
            onChange={(e) => setAuthorName(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="authorAbout"
            value={authorAbout as string}
            placeholder="About the Author"
            onChange={(e) => setAuthorAbout(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="authorLink"
            value={authorLink as string}
            placeholder="Author's Profile/Website Link"
            onChange={(e) => setAuthorLink(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="editedBy"
            value={editedBy as string}
            placeholder="Edited By"
            onChange={(e) => setEditedBy(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="photoCredit"
            value={photoCredit as string}
            placeholder="Photo Credit"
            onChange={(e) => setPhotoCredit(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="title"
            value={title as string}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="subtitle1"
            value={subtitle1 as string}
            placeholder="Subtitle 1"
            onChange={(e) => setSubtitle1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="tableContents1"
            value={tableContents1 as string}
            placeholder="table of contents #1"
            onChange={(e) => setTableContents1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents2"
            value={tableContents2 as string}
            placeholder="table of contents #2"
            onChange={(e) => setTableContents2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents3"
            value={tableContents3 as string}
            placeholder="table of contents #3"
            onChange={(e) => setTableContents3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="tableContents4"
            value={tableContents4 as string}
            placeholder="table of contents #4"
            onChange={(e) => setTableContents4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p1 as string}
            placeholder="Paragraph #1"
            onChange={(e) => setP1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p2 as string}
            placeholder="Paragraph #2"
            onChange={(e) => setP2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p3 as string}
            placeholder="Paragraph #3"
            onChange={(e) => setP3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle2"
            value={subtitle2 as string}
            placeholder="Subtitle #2"
            onChange={(e) => setSubtitle2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p4 as string}
            placeholder="Paragraph #4"
            onChange={(e) => setP4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p5 as string}
            placeholder="Paragraph #5"
            onChange={(e) => setP5(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l1"
            value={l1 as string}
            placeholder="Green Check Mark #1"
            onChange={(e) => setL1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l2"
            value={l2 as string}
            placeholder="Green Check Mark #2"
            onChange={(e) => setL2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l3"
            value={l3 as string}
            placeholder="Green Check Mark #3"
            onChange={(e) => setL3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l4"
            value={l4 as string}
            placeholder="Green Check Mark #4"
            onChange={(e) => setL4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l5"
            value={l5 as string}
            placeholder="Green Check Mark #5"
            onChange={(e) => setL5(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle3"
            value={subtitle3 as string}
            placeholder="Subtitle #3"
            onChange={(e) => setSubtitle3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p6 as string}
            placeholder="Paragraph #6"
            onChange={(e) => setP6(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={p7 as string}
            placeholder="Paragraph #7"
            onChange={(e) => setP7(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l6"
            value={l6 as string}
            placeholder="List Item"
            onChange={(e) => setL6(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l7"
            value={l7 as string}
            placeholder="List Item"
            onChange={(e) => setL7(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l8"
            value={l8 as string}
            placeholder="List Item"
            onChange={(e) => setL8(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l9"
            value={l9 as string}
            placeholder="List Item"
            onChange={(e) => setL9(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l10"
            value={l10 as string}
            placeholder="List Item"
            onChange={(e) => setL10(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l11"
            value={l11 as string}
            placeholder="List Item"
            onChange={(e) => setL11(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l12"
            value={l12 as string}
            placeholder="List Item"
            onChange={(e) => setL12(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l13"
            value={l13 as string}
            placeholder="List Item"
            onChange={(e) => setL13(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l14"
            value={l14 as string}
            placeholder="List Item"
            onChange={(e) => setL14(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="l15"
            value={l15 as string}
            placeholder="List Item"
            onChange={(e) => setL15(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={p8 as string}
            placeholder="Paragraph #8"
            onChange={(e) => setP8(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <input
            id="subtitle4"
            value={subtitle4 as string}
            placeholder="Subtitle #4"
            onChange={(e) => setSubtitle4(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={conclusion1 as string}
            placeholder="Paragraph #8"
            onChange={(e) => setConclusion1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
          <textarea
            rows={4}
            cols={50}
            value={conclusion1 as string}
            placeholder="Conclusion #1"
            onChange={(e) => setConclusion1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={conclusion2 as string}
            placeholder="Conclusion #2"
            onChange={(e) => setConclusion2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={conclusion3 as string}
            placeholder="Conclusion #3"
            onChange={(e) => setConclusion3(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="reference1"
            value={reference1 as string}
            placeholder="Reference URL Link #1"
            onChange={(e) => setReference1(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pb-10">
          <input
            id="reference2"
            value={reference2 as string}
            placeholder="Reference URL Link #2"
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
            className="flex items-center justify-between space-x-2 px-4 h-10 rounded-full text-green-500 bg-white border-[1px] border-green-500"
          >
            <BsPlus size={25} className="text-green-500 hover:text-white" />
            Update
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default AddClientForm;
