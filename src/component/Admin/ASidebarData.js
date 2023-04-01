import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
 
export const ASidebarData = [
  {
    title: "Check Users",
    path: "/ListUsers",
    icon: <BiIcons.BiUser />, 
    iconClosed: <RiIcons.RiArrowDownSFill />, 
    iconOpened: <RiIcons.RiArrowUpSFill />,
 
  },
  {
    title: "verify users",
    path: "/averify",
    icon: <BiIcons.BiUser />, 
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

  }, 
  {
    title: "check Donator",
    path: "/Donator",
    // icon: <AiIcons.AiOutlineLogin />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 
  

  {
    title: "User Feedbacks",
    path: "/UserFeedback",
    // icon: <AiIcons.AiOutlineLogin />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 

  {
    title: "Donator User",
    path: "/Dusers",
    // icon: <AiIcons.AiOutlineLogin />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 



];
