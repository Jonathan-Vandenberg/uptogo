import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { useAddPostMutation } from "../../types";

const AddClientForm = () => {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [addPostMutation] = useAddPostMutation();

  const onFinish = (e: { preventDefault: () => void }) => {
    if (slug !== "" && title !== "" && body !== "") {
      addPostMutation({
        variables: {
          input: {
            slug: slug,
            title: title,
            body: body,
          },
        },
      });
    }
    setSlug("");
    setTitle("");
    setBody("");
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
        label="Slug"
        name="slug"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={slug} onChange={(e) => setSlug(e.target.value)} />
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
        label="Body"
        name="body"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          cols={50}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 14,
          span: 16,
        }}
      >
        <Button htmlType="submit" className="px-10 h-10 rounded-full">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddClientForm;
