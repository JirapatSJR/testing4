"use client";
import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { postfetcher } from "@/lib/api";
import validator from "validator";
const Newsletter = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [Email, setEmail] = useState("");
  const [alert, setAlert] = useState(undefined);
  const postNewsletter = () => {
    if (first.length == 0) {
      setAlert("*First name is empty.");
      return;
    }
    if (last.length == 0) {
      setAlert("*Last name is empty.");
      return;
    }
    if (Email.length == 0) {
      setAlert("*Email is empty.");
      return;
    }
    if (!validator.isEmail(Email)) {
      setAlert("*Email is invalid");
      return;
    }
    setAlert("success");
    postfetcher("/newspaper-registers", {
      data: {
        FirstName: first,
        LastName: last,
        Email: Email,
        isActive: true,
      },
    });
  };

  return (
    <div className="w-full bg-white4wd bg-opacity-80 2xl:h-32 h-auto px-4 py-6 flex items-center justify-center">
      <div className="responsive flex 2xl:flex-row flex-col justify-between items-center gap-4">
        <span className="2xl:text-4xl md:text-3xl text-xl text-gray4wd text-center">
          SIGN UP FOR OUR NEWSLETTER
        </span>
        {alert === "success" ? (
          <div className="2xl:text-2xl md:text-xl text-lg text-gray4wd text-center">
            THANK YOU FOR SIGNED UP
          </div>
        ) : (
          <form className="flex md:flex-row flex-col flex-wrap gap-3 items-center justify-center">
            <div className="flex md:flex-row flex-col gap-2 ">
              <Input
                required
                className="bg-white4wd text-lg "
                type="text"
                name="firstName"
                value={first}
                label={"First Name"}
                onChange={(e) => setFirst(e.target.value)}
              />
              <Input
                required
                className="bg-white4wd text-lg "
                type="text"
                name="lastName"
                value={last}
                label={"Last Name"}
                onChange={(e) => setLast(e.target.value)}
              />
              <Input
                required
                className="bg-white4wd text-lg "
                type="email"
                name="email"
                value={Email}
                label={"Email Name"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Button
                className="w-40 h-9"
                color="deep-orange"
                onClick={() => postNewsletter()}
              >
                SUBMIT
              </Button>
              {alert && (
                <div className=" absolute text-red-700 md:text-base text-xs">
                  {alert}
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
