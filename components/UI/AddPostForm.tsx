import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { useAddBlogPostMutation } from "../../types";

const AddClientForm = () => {
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

  const onFinish = (e: { preventDefault: () => void }) => {
    if (title !== "") {
      addBlogPostMutation({
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

  const onFinishFailed = () => {
    console.log("Failed:", Error);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="space-y-12"
    >
      <Form.Item
        label="Date (2 September 2022)"
        name="publishedDate"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Edited By"
        name="editedBy"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={editedBy} onChange={(e) => setEditedBy(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Photo Credit"
        name="photoCredit"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={photoCredit}
          onChange={(e) => setPhotoCredit(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Subtitle 1"
        name="subtitle1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={subtitle1}
          onChange={(e) => setSubtitle1(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Table of content 1"
        name="tableContents1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={tableContents1}
          onChange={(e) => setTableContents1(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Table of content 2"
        name="tableContents2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={tableContents2}
          onChange={(e) => setTableContents2(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Table of content 3"
        name="tableContents3"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={tableContents3}
          onChange={(e) => setTableContents3(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Table of content 4"
        name="tableContents4"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={tableContents4}
          onChange={(e) => setTableContents4(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 1"
        name="p1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p1}
          onChange={(e) => setP1(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 2"
        name="p2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p2}
          onChange={(e) => setP2(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 3"
        name="p3"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p3}
          onChange={(e) => setP3(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Subtitle 2"
        name="subtitle2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={subtitle2}
          onChange={(e) => setSubtitle2(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 4"
        name="p4"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p4}
          onChange={(e) => setP4(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 5"
        name="p5"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p5}
          onChange={(e) => setP5(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="List Item 1"
        name="l1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={l1} onChange={(e) => setL1(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="List Item 2"
        name="l2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={l2} onChange={(e) => setL2(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="List Item 3"
        name="l3"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={l3} onChange={(e) => setL3(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="List Item 4"
        name="l4"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={l4} onChange={(e) => setL4(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="List Item 5"
        name="l5"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={l5} onChange={(e) => setL5(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Subtitle 3"
        name="subtitle3"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={subtitle3}
          onChange={(e) => setSubtitle3(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 6"
        name="p6"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p6}
          onChange={(e) => setP6(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Paragraph 7"
        name="p7"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={p7}
          onChange={(e) => setP7(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Conclusion 1"
        name="conclusion1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={2}
          cols={50}
          value={conslusion1}
          onChange={(e) => setConclusion1(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Conclusion 2"
        name="conclusion2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={2}
          cols={50}
          value={conslusion2}
          onChange={(e) => setConclusion2(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Conclusion 3"
        name="conclusion3"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={2}
          cols={50}
          value={conslusion3}
          onChange={(e) => setConclusion3(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Reference 1"
        name="reference1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={reference1}
          onChange={(e) => setReference1(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Reference 2"
        name="reference2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={reference2}
          onChange={(e) => setReference2(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Author Name"
        name="authorName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="About Author"
        name="authorAbout"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={authorAbout}
          onChange={(e) => setAuthorAbout(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Author Link"
        name="authorLink"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={authorLink}
          onChange={(e) => setAuthorLink(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 14,
          span: 16,
        }}
      >
        <Button htmlType="submit" className="px-10 h-10 rounded-full">
          Add Blogpost
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddClientForm;
