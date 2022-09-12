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
  BlogPost,
  useUpdateBlogPostMutation,
  useUpdateItMutation,
  It,
} from "../types";
import { options } from "../lib/categories";

interface IProps {
  details:
    | It
    | BlogPost
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
  const DtableContents1 = add ? "" : details?.tableContents1;
  const DtableContents2 = add ? "" : details?.tableContents2;
  const DtableContents3 = add ? "" : details?.tableContents3;
  const DtableContents4 = add ? "" : details?.tableContents4;
  const Dp1 = add ? "" : details?.p1;
  const Dp2 = add ? "" : details?.p2;
  const Dp3 = add ? "" : details?.p3;
  const Dp4 = add ? "" : details?.p4;
  const Dp5 = add ? "" : details?.p5;
  const Dl1 = add ? "" : details?.l1;
  const Dl2 = add ? "" : details?.l2;
  const Dl3 = add ? "" : details?.l3;
  const Dl4 = add ? "" : details?.l4;
  const Dl5 = add ? "" : details?.l5;
  const Dp6 = add ? "" : details?.p6;
  const Dp7 = add ? "" : details?.p7;
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
  const [tableContents1, setTableContents1] = useState(DtableContents1);
  const [tableContents2, setTableContents2] = useState(DtableContents2);
  const [tableContents3, setTableContents3] = useState(DtableContents3);
  const [tableContents4, setTableContents4] = useState(DtableContents4);
  const [p1, setP1] = useState(Dp1);
  const [p2, setP2] = useState(Dp2);
  const [p3, setP3] = useState(Dp3);
  const [p4, setP4] = useState(Dp4);
  const [p5, setP5] = useState(Dp5);
  const [l1, setL1] = useState(Dl1);
  const [l2, setL2] = useState(Dl2);
  const [l3, setL3] = useState(Dl3);
  const [l4, setL4] = useState(Dl4);
  const [l5, setL5] = useState(Dl5);
  const [p6, setP6] = useState(Dp6);
  const [p7, setP7] = useState(Dp7);
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

  const [addSoftwareDevelopment] = useAddSoftwareDevelopmentMutation();
  addSoftwareDevelopment;
  const [addComputerNetworking] = useAddComputerNetworkingMutation();
  const [addCloudComputing] = useAddCloudComputingMutation();
  const [addBusinessAnalysis] = useAddBusinessAnalysisMutation();
  const [addTelecommunication] = useAddTelecommunicationMutation();
  const [addGameProgramming] = useAddGameProgrammingMutation();
  const [addWebDevelopment] = useAddWebDevelopmentMutation();
  const [addMachineLearning] = useAddMachineLearningMutation();
  const [addDataManagement] = useAddDataManagementMutation();
  const [addBlockchain] = useAddBlockchainMutation();
  const [addAi] = useAddAiMutation();

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
    if (edit) setCategory(details?.category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      console.log(category);
      if (edit) {
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
      }

      if (add) {
        addSoftwareDevelopment(form);
      }
    }

    sendForm();

    setCategory("");
    setTitle("");
    setSubtitle1("");
    setSubtitle2("");
    setSubtitle3("");
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
    setP6("");
    setP7("");
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

        <div className="px-8 flex items-start space-y-3 justify-center flex-col">
          <input
            id="reference2"
            value={reference2 as string}
            placeholder="Reference URL Link #2"
            onChange={(e) => setReference2(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="w-full flex items-center justify-center pt-10">
          <button type="submit" className="px-10 h-10 rounded-full bg-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClientForm;
