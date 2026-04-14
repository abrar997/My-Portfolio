import axios from "axios";
import React, { FormEventHandler, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const useHandler = () => {
  const [isFixed, setISFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    isSend: false,
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setISFixed(true);
    } else {
      setISFixed(false);
    }
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("../api/email", {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
        message: userData.message,
      });
      setUserData((prev) => ({ ...prev, isSend: true }));
      toast("We will contact you within 48 hours", {
        className: "bg-transparent",
      });
      console.log(userData);

      resetSubmit();
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  const resetSubmit = () => {
    setUserData({
      name: "",
      phone: "",
      email: "",
      message: "",
      isSend: false,
    });
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [isFixed, handleScroll]);

  return {
    handleScroll,
    isFixed,
    isOpen,
    setIsOpen,
    onSubmit,
    userData,
    setUserData,
  };
};

export default useHandler;
