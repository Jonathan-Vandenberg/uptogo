import { useEffect, useState } from "react";
import { useAddUserInterestedMutation } from "../types";
import { options } from "../lib/categories";
import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import logo from "../public/uptogoFavicon.png";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import { useAppSelector } from "../redux-hooks/hooks";

const AddClientForm = () => {
  const [addUserInterested] = useAddUserInterestedMutation();
  const translate = useAppSelector((state) => state.translationState.translate);

  const [submitted, setSubmitted] = useState(false);

  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => setSubmitted(false), 2000);
  }, [submitted]);

  let form = {
    variables: {
      input: {
        id: uuidv4(),
        course: course,
        name: name,
        email: email,
        mobile: mobile,
      },
    },
  };

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      if (name !== "" && email !== "" && mobile !== "" && course !== "") {
        addUserInterested(form), setSubmitted(true);
      }
    }

    sendForm();

    setCourse("");
    setName("");
    setMobile("");
    setEmail("");
  };

  return (
    <div className="pt-8 max-w-[678px] md:max-w-[900px] mx-auto flex flex-col items-center juistify-center container">
      <div className="p-2 w-auto rounded-full bg-white shadow-md flex items-center justify-center -mb-6">
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
      <p className="pt-12 text-center px-5 pb-6 text-xl text-gray-700 container mx-auto logoFont">
        Để lại thông tin của bạn và chúng tôi sẽ liên hệ với bạn
      </p>
      <form onSubmit={onFinish} className="space-y-3 pb-12 w-full">
        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            required
            id="name"
            value={name as string}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            required
            id="email"
            value={email as string}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            required
            id="mobile"
            value={mobile as string}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <select
            value={course as string}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          >
            <option value="">
              {translate ? "Choose Your Major" : "Chọn Ngành Học"}
            </option>
            {options.map((o, i) => (
              <option key={i} value={o.value}>
                {translate ? o.Elabel : o.label}
              </option>
            ))}
          </select>
        </div>

        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center border-green-600 pt-10"
        >
          <button
            type="submit"
            className="flex items-center justify-center space-x-2 px-4 w-28 h-10 rounded-full text-green-500 bg-white border-2 border-green-500"
          >
            {submitted ? (
              <div className="flex items-center  justify-center">
                <CheckIcon className="text-green-500" fontSize="large" />
              </div>
            ) : (
              <BsPlus size={25} className="text-green-500 hover:text-white" />
            )}
            {submitted ? "" : "Submit"}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default AddClientForm;
