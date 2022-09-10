import { useEffect, useState } from "react";
import {
  SoftwareDevelopment,
  useUpdateSoftwareDevelopmentMutation,
} from "../types";
import Select from "react-select";

const options = [
  { value: "BLOG", label: "BLOG" },
  { value: "PROJECT_MANAGEMENT", label: "PROJECT_MANAGEMENT" },
  { value: "BUSINESS_MANAGEMENT", label: "BUSINESS_MANAGEMENT" },
  { value: "HUMAN_RESOURCES", label: "HUMAN_RESOURCES" },
  { value: "BANKING_MANAGEMENT", label: "BANKING_MANAGEMENT" },
  { value: "INTERNATIONAL_BUSINESS", label: "INTERNATIONAL_BUSINESS" },
  { value: "SOCIALMEDIA_MARKETING", label: "SOCIALMEDIA_MARKETING" },
  { value: "AGRIBUSINESS_MANAGEMENT", label: "AGRIBUSINESS_MANAGEMENT" },
  { value: "SUPPLYCHAIN_MANAGEMENT", label: "SUPPLYCHAIN_MANAGEMENT" },
  { value: "LEADERSHIP_MANAGEMENT", label: "LEADERSHIP_MANAGEMENT" },
  { value: "FASHION_DESIGN", label: "FASHION_DESIGN" },
  { value: "LANDSCAPE", label: "LANDSCAPE" },
  { value: "MUSIC_AUDIO", label: "MUSIC_AUDIO" },
  { value: "FILM_MEDIA", label: "FILM_MEDIA" },
  { value: "GRAPHIC_DESIGN", label: "GRAPHIC_DESIGN" },
  { value: "INTERIOR_DESIGN", label: "INTERIOR_DESIGN" },
  { value: "DIGITAL_MEDIA", label: "DIGITAL_MEDIA" },
  { value: "ACTING", label: "ACTING" },
  { value: "ANIMATION_3D", label: "ANIMATION_3D" },
  { value: "AGED_CARE", label: "AGED_CARE" },
  { value: "NUTRITION", label: "NUTRITION" },
  { value: "NURSING", label: "NURSING" },
  { value: "VETENARY", label: "VETENARY" },
  { value: "MEDICINE", label: "MEDICINE" },
  { value: "PUBLIC_HEALTH", label: "PUBLIC_HEALTH" },
  { value: "DENTAL", label: "DENTAL" },
  { value: "MASSAGE", label: "MASSAGE" },
  { value: "MENTAL_HEALTH", label: "MENTAL_HEALTH" },
  { value: "BAKING", label: "BAKING" },
  { value: "COMMERCIAL_COOKING", label: "COMMERCIAL_COOKING" },
  { value: "HOPITALITY_MANAGEMENT", label: "HOPITALITY_MANAGEMENT" },
  { value: "INTL_HOTEL_MANAGEMENT", label: "INTL_HOTEL_MANAGEMENT" },
  { value: "TRAVEL_TOURISM", label: "TRAVEL_TOURISM" },
  { value: "EVENTS", label: "EVENTS" },
  { value: "AUTOMOTIVE", label: "AUTOMOTIVE" },
  { value: "BEAUTY", label: "BEAUTY" },
  { value: "CONSTRUCTION", label: "CONSTRUCTION" },
  { value: "CARPENTRY", label: "CARPENTRY" },
  { value: "EDUCATION", label: "EDUCATION" },
  { value: "FITNESS", label: "FITNESS" },
  { value: "HARIDRESSING", label: "HARIDRESSING" },
  { value: "HORTICULTURE", label: "HORTICULTURE" },
  { value: "SPORT", label: "SPORT" },
  { value: "YOGA", label: "YOGA" },
  { value: "SOFTWARE_DEVELOPMENT", label: "SOFTWARE_DEVELOPMENT" },
  { value: "COMPUTER_NETWORKING", label: "COMPUTER_NETWORKING" },
  { value: "CLOUD_COMPUTING", label: "CLOUD_COMPUTING" },
  { value: "BUSINESS_ANALYSIS", label: "BUSINESS_ANALYSIS" },
  { value: "TELECOMMUNICATION", label: "TELECOMMUNICATION" },
  { value: "GAME_PROGRAMMING", label: "GAME_PROGRAMMING" },
  { value: "WEB_DEVELOPMENT", label: "WEB_DEVELOPMENT" },
  { value: "MACHINE_LEARNING", label: "MACHINE_LEARNING" },
  { value: "DATA_MANAGEMENT", label: "DATA_MANAGEMENT" },
  { value: "BLOCKCHAIN_TECH", label: "BLOCKCHAIN_TECH" },
  { value: "AI", label: "AI" },
];

interface IProps {
  details: SoftwareDevelopment | undefined | null;
}

const AddClientForm = ({ details }: IProps) => {
  const Dtitle = details?.title;
  const Dcategory = details?.category;
  const Dsubtitle1 = details?.subtitle1;
  const Dsubtitle2 = details?.subtitle2;
  const Dsubtitle3 = details?.subtitle3;
  const DtableContents1 = details?.tableContents1;
  const DtableContents2 = details?.tableContents2;
  const DtableContents3 = details?.tableContents3;
  const DtableContents4 = details?.tableContents4;
  const Dp1 = details?.p1;
  const Dp2 = details?.p2;
  const Dp3 = details?.p3;
  const Dp4 = details?.p4;
  const Dp5 = details?.p5;
  const Dl1 = details?.l1;
  const Dl2 = details?.l2;
  const Dl3 = details?.l3;
  const Dl4 = details?.l4;
  const Dl5 = details?.l5;
  const Dp6 = details?.p6;
  const Dp7 = details?.p7;
  const Dconclusion1 = details?.conclusion1;
  const Dconclusion2 = details?.conclusion2;
  const Dconclusion3 = details?.conclusion3;
  const Dreference1 = details?.reference1;
  const Dreference2 = details?.reference2;
  const DauthorName = details?.authorName;
  const DauthorAbout = details?.authorAbout;
  const DauthorLink = details?.authorLink;
  const DeditedBy = details?.editedBy;
  const DpublishedDate = details?.publishedDate;
  const DmainImage = details?.mainImage;
  const DphotoCredit = details?.photoCredit;

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

  const [updateSoftwareDevelopment] = useUpdateSoftwareDevelopmentMutation();

  let form = {
    variables: {
      input: {
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
    setCategory(details?.category);
  }, [details?.category]);

  const onFinish = (e: { preventDefault: () => void }) => {
    if (category === "SOFTWARE_DEVELOPMENT") updateSoftwareDevelopment(form);
  };

  return (
    <form onSubmit={onFinish} className="space-y-3 py-12">
      <div className="px-8 ">
        <Select options={options} />
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
  );
};

export default AddClientForm;
