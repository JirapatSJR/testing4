"use client";
import { postfetcher } from "@/lib/api";
import {
  Card,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import validator from "validator";

export default function GetInTouch() {
  const { getCode } = require("country-list");
  const [information, setInformation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    country: "",
    interest: "",
    message: "",
  });
  const [alert, setAlert] = useState(undefined);
  const pathname = usePathname();

  const typing = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const postEnquire = () => {
    if (information.firstname.length == 0) {
      setAlert("*First name is empty.");
      return;
    }
    if (information.lastname.length == 0) {
      setAlert("*Last name is empty.");
      return;
    }
    if (information.email.length == 0) {
      setAlert("*Email is empty.");
      return;
    }
    if (information.country.length == 0) {
      setAlert("*Country is empty.");
      return;
    }
    if (information.interest.length == 0) {
      setAlert("*Area of interests is empty.");
      return;
    }
    if (information.telephone.length == 0) {
      setAlert("*Telephone is empty.");
      return;
    }
    if (information.message.length == 0) {
      setAlert("*Message is empty.");
      return;
    }
    if (!validator.isEmail(information.email)) {
      setAlert("*Email is invalid");
      return;
    }
    postfetcher("/enquires", {
      data: {
        Firstname: information.firstname,
        Lastname: information.lastname,
        country: information.country,
        telephoneNumber: information.telephone,
        EmailAddress: information.email,
        AreaOfInterest: information.interest,
        Enquire: information.message,
        enquiredUrl: pathname,
      },
    });
    setInformation({
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      country: "",
      interest: "",
      message: "",
    });
    setAlert("success");
  };

  const InnerButton = ({
    text = "ENQUIRE NOW",
    cssColor = "green4wd",
    onClick = undefined,
  }) => {
    return (
      <div className="w-full relative flex justify-center">
        <div className="md:w-auto w-full cursor-pointer" onClick={onClick}>
          <div
            className={`${
              cssColor === "green4wd" ? "bg-green4wd" : "bg-orange4wd"
            } bg-or md:h-16 2xl:w-60 md:w-48 w-full 2xl:py-8 md:py-6 py-3 px-3 md:rounded-lg text-white flex items-center justify-center 2xl:text-xl md:text-lg text-lg font-bold`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <Card color="transparent" shadow={false}>
        <form className="w-full flex flex-col items-center relative">
          <div className="flex flex-row w-fit">
            <div className="flex flex-row flex-wrap justify-center 2xl:px-2 md:px-2 px-6 2xl:gap-y-7 md:gap-y-5 gap-y-3 2xl:gap-x-5 gap-x-3 2xl:w-[1040px] md:w-[710px] w-full">
              <div className="2xl:w-[500px] md:w-[340px] w-full">
                <Input
                  size="lg"
                  label="FIRST NAME"
                  name="firstname"
                  value={information.firstname}
                  onChange={(e) => typing(e)}
                />
              </div>
              <div className="2xl:w-[500px] md:w-[340px] w-full">
                <Input
                  size="lg"
                  label="LAST NAME"
                  name="lastname"
                  value={information.lastname}
                  onChange={(e) => typing(e)}
                />
              </div>
              <div className="2xl:w-[500px] md:w-[340px] w-full">
                <Select
                  label="SELECT COUNTRY"
                  name="country"
                  value={information.country}
                  onChange={(e) => {
                    setInformation({
                      ...information,
                      country: e,
                    });
                  }}
                >
                  <Option value={getCode("United States of America")}>
                    United States
                  </Option>
                  <Option value={getCode("Canada")}>Canada</Option>
                  <Option value={getCode("France")}>France</Option>
                  <Option value={getCode("Germany")}>Germany</Option>
                  <Option value={getCode("Thailand")}>Thailand</Option>
                </Select>
              </div>
              <div className="2xl:w-[500px] md:w-[340px] w-full">
                <Input
                  type="tel"
                  size="lg"
                  label="TELEPHONE NUMBER"
                  name="telephone"
                  value={information.telephone}
                  onChange={(e) => typing(e)}
                />
              </div>
              <div className="2xl:w-[500px] md:w-[340px] w-full">
                <Input
                  type="email"
                  size="lg"
                  label="EMAIL ADDRESS"
                  name="email"
                  value={information.email}
                  onChange={(e) => typing(e)}
                />
              </div>
              <div className="2xl:w-[500px] md:w-[340px] w-full">
                <Input
                  type="tel"
                  size="lg"
                  label="AREA OF INTERESTS"
                  name="interest"
                  value={information.interest}
                  onChange={(e) => typing(e)}
                />
              </div>
              <div className="w-full">
                <Textarea
                  className="2xl:h-[300px] md:h-[250px] h-[200px]"
                  label="ENQUIRE"
                  name="message"
                  value={information.message}
                  onChange={(e) => typing(e)}
                />
              </div>
            </div>
          </div>
          <div className="2xl:mt-8 md:mt-6 mt-4 w-full px-6">
            {alert === "success" ? (
              <div className="2xl:text-5xl md:text-4xl text-3xl text-center font-extrabold text-green4wd">
                ENQUIRY SENT
              </div>
            ) : (
              <div>
                <InnerButton
                  className="mt-6  px-20"
                  href=""
                  text="ENQUIRE NOW"
                  onClick={() => postEnquire()}
                />

                {alert && (
                  <div className="absolute text-red-700 md:text-base text-xs">
                    {alert}
                  </div>
                )}
              </div>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
