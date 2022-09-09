import { useState } from "react";
import {
  SoftwareDevelopment,
  useUpdateSoftwareDevelopmentMutation,
} from "../types";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface IProps {
  details: SoftwareDevelopment | undefined | null;
}

const AddClientForm = ({ details }: IProps) => {
  const Dtitle = details?.title;
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

  const onFinish = (e: { preventDefault: () => void }) => {
    updateSoftwareDevelopment({
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
    });
  };

  return (
    <form onSubmit={onFinish} className="space-y-3 py-12">
      <Select options={options} />

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <input
          id="publishedDate"
          value={publishedDate}
          placeholder="Published Date"
          onChange={(e) => setPublishedDate(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="authorName"
          value={authorName}
          placeholder="Author Name"
          onChange={(e) => setAuthorName(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="authorAbout"
          value={authorAbout}
          placeholder="About the Author"
          onChange={(e) => setAuthorAbout(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="authorLink"
          value={authorLink}
          placeholder="Author's Profile/Website Link"
          onChange={(e) => setAuthorLink(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="editedBy"
          value={editedBy}
          placeholder="Edited By"
          onChange={(e) => setEditedBy(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="photoCredit"
          value={photoCredit}
          placeholder="Photo Credit"
          onChange={(e) => setPhotoCredit(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <input
          id="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="subtitle1"
          value={subtitle1}
          placeholder="Subtitle 1"
          onChange={(e) => setSubtitle1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <input
          id="tableContents1"
          value={tableContents1}
          placeholder="table of contents #1"
          onChange={(e) => setTableContents1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="tableContents2"
          value={tableContents2}
          placeholder="table of contents #2"
          onChange={(e) => setTableContents2(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="tableContents3"
          value={tableContents3}
          placeholder="table of contents #3"
          onChange={(e) => setTableContents3(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="tableContents4"
          value={tableContents4}
          placeholder="table of contents #4"
          onChange={(e) => setTableContents4(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <textarea
          rows={4}
          cols={50}
          value={p1}
          placeholder="Paragraph #1"
          onChange={(e) => setP1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={p2}
          placeholder="Paragraph #2"
          onChange={(e) => setP2(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={p3}
          placeholder="Paragraph #3"
          onChange={(e) => setP3(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <input
          id="subtitle2"
          value={subtitle2}
          placeholder="Subtitle #2"
          onChange={(e) => setSubtitle2(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <textarea
          rows={4}
          cols={50}
          value={p4}
          placeholder="Paragraph #4"
          onChange={(e) => setP4(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={p5}
          placeholder="Paragraph #5"
          onChange={(e) => setP5(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="l1"
          value={l1}
          placeholder="Green Check Mark #1"
          onChange={(e) => setL1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="l2"
          value={l2}
          placeholder="Green Check Mark #2"
          onChange={(e) => setL2(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="l3"
          value={l3}
          placeholder="Green Check Mark #3"
          onChange={(e) => setL3(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="l4"
          value={l4}
          placeholder="Green Check Mark #4"
          onChange={(e) => setL4(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="l5"
          value={l5}
          placeholder="Green Check Mark #5"
          onChange={(e) => setL5(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <input
          id="subtitle3"
          value={subtitle3}
          placeholder="Subtitle #3"
          onChange={(e) => setSubtitle3(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="pt-10 px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={p6}
          placeholder="Paragraph #6"
          onChange={(e) => setP6(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={p7}
          placeholder="Paragraph #7"
          onChange={(e) => setP7(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-10">
        <textarea
          rows={4}
          cols={50}
          value={conclusion1}
          placeholder="Conclusion #1"
          onChange={(e) => setConclusion1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={conclusion2}
          placeholder="Conclusion #2"
          onChange={(e) => setConclusion2(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={conclusion3}
          placeholder="Conclusion #3"
          onChange={(e) => setConclusion3(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="reference1"
          value={reference1}
          placeholder="Reference URL Link #1"
          onChange={(e) => setReference1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="reference2"
          value={reference2}
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
