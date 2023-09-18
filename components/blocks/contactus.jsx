"use client";
import { Card, Input, Typography, Textarea } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { postfetcher } from "@/lib/api";
import validator from "validator";

export default function ContactUs({ header }) {
  const [information, setInformation] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
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
    setAlert("success");
    postfetcher("/enquires", {
      data: {
        Firstname: information.firstname,
        Lastname: information.lastname,
        telephoneNumber: information.telephone,
        EmailAddress: information.email,
        Enquire: information.message,
        enquiredUrl: pathname,
      },
    });

    setInformation({
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      message: "",
    });
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
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-green4wd">
        {header}
      </Typography>
      <form className="2xl:mt-4 mt-2 mb-2 w-full">
        <div className="mb-4 flex flex-col 2xl:gap-6 md:gap-4 gap-2">
          <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-2">
            <Input
              size="lg"
              label="FIRST NAME"
              name="firstname"
              value={information.firstname}
              onChange={(e) => typing(e)}
            />
            <Input
              size="lg"
              label="LAST NAME"
              name="lastname"
              value={information.lastname}
              onChange={(e) => typing(e)}
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-2">
            <Input
              type="email"
              size="lg"
              label="EMAIL"
              name="email"
              value={information.email}
              onChange={(e) => typing(e)}
            />
            <Input
              type="tel"
              size="lg"
              label="TELEPHONE"
              name="telephone"
              value={information.telephone}
              onChange={(e) => typing(e)}
            />
          </div>
          <Textarea
            className="!h-60 "
            label="MESSAGE"
            name="message"
            value={information.message}
            onChange={(e) => typing(e)}
          />
          {alert === "success" ? (
            <div className="2xl:text-3xl md:text-2xl text-xl text-center font-extrabold text-green4wd">
              ENQUIRY SENT
            </div>
          ) : (
            <div>
              <InnerButton
                className="mt-6  px-20"
                href=""
                text="SEND"
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
  );
}
