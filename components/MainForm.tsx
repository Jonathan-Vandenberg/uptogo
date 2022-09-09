import { useState } from "react";
import { useAddBlogPostMutation } from "../types";
import { useAddSoftwareDevelopmentMutation } from "../types";
import { useAddAiMutation } from "../types";

const AddClientForm = () => {
  const [major, setMajor] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [subtitle2, setSubtitle2] = useState("");
  const [subtitle3, setSubtitle3] = useState("");

  const [tableContents1, setTableContents1] = useState("");
  const [tableContents2, setTableContents2] = useState("");
  const [tableContents3, setTableContents3] = useState("");
  const [tableContents4, setTableContents4] = useState("");

  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");
  const [p4, setP4] = useState("");
  const [p5, setP5] = useState("");
  const [l1, setL1] = useState("");
  const [l2, setL2] = useState("");
  const [l3, setL3] = useState("");
  const [l4, setL4] = useState("");
  const [l5, setL5] = useState("");
  const [p6, setP6] = useState("");
  const [p7, setP7] = useState("");

  const [conslusion1, setConclusion1] = useState("");
  const [conslusion2, setConclusion2] = useState("");
  const [conslusion3, setConclusion3] = useState("");

  const [reference1, setReference1] = useState("");
  const [reference2, setReference2] = useState("");

  const [authorName, setAuthorName] = useState("");
  const [authorAbout, setAuthorAbout] = useState("");
  const [authorLink, setAuthorLink] = useState("");

  const [editedBy, setEditedBy] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [photoCredit, setPhotoCredit] = useState("");

  const [addBlogPostMutation] = useAddBlogPostMutation();
  const [addAiMutation] = useAddAiMutation();
  const [addSoftwareDevelopmentMutation] = useAddSoftwareDevelopmentMutation();

  const onFinish = (e: { preventDefault: () => void }) => {
    if (major === "ai") {
      addAiMutation({
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
            conclusion1: conslusion1,
            conclusion2: conslusion2,
            conclusion3: conslusion3,
            reference1: reference1,
            reference2: reference2,
            authorName: authorName,
            authorAbout: authorAbout,
            authorLink: authorLink,
          },
        },
      });
    } else if (major === "sd") {
      addSoftwareDevelopmentMutation({
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
            conclusion1: conslusion1,
            conclusion2: conslusion2,
            conclusion3: conslusion3,
            reference1: reference1,
            reference2: reference2,
            authorName: authorName,
            authorAbout: authorAbout,
            authorLink: authorLink,
          },
        },
      });
    }
  };

  return (
    <form onSubmit={onFinish} className="space-y-3 py-12">
      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <input
          id="major"
          value={major}
          placeholder="Select Major"
          onChange={(e) => setMajor(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

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
          className="border-2 border-gray-200 p-3 rounded-xl w-full w-[500px]"
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
          value={conslusion1}
          placeholder="Conclusion #1"
          onChange={(e) => setConclusion1(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={conslusion2}
          placeholder="Conclusion #2"
          onChange={(e) => setConclusion2(e.target.value)}
          className="border-2 border-gray-200 p-3 rounded-xl w-full"
        />
      </div>

      <div className="px-8 flex items-start space-y-3 justify-center flex-col">
        <textarea
          rows={4}
          cols={50}
          value={conslusion3}
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

      <div className="w-full flex items-center justify-center">
        <button type="submit" className="px-10 h-10 rounded-full bg-white">
          Add Blogpost
        </button>
      </div>
    </form>
  );
};

export default AddClientForm;
