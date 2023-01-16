import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "Donate",
    path: "/Login",
    icon: <AiIcons.AiOutlineLogin />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  }, 
  {
    title: "Need Donation",
    icon: <AiIcons.AiOutlineLogin />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Login",
        path: "/DLogin",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Register",
        path: "DRegister",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  }, 
  {
    title: "Contact",
    path: "/Contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Cause",
    path: "/Custcause",
    icon: <FaIcons.FaEnvelopeOpenText />,
 
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];