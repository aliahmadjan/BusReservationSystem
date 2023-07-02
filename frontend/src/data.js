import React from "react";
import {
  FaComments,
  FaMale,
  FaRoute,
  FaBus,
  FaLongArrowAltRight,
  FaTicketAlt,
  FaHome
} from "react-icons/fa";
export const links = [
  {
    id: 0,
    url: "/adminDashboard",
    text: "Admin Home",
    icon: <FaHome />,
  },

  {
    id: 1,
    url: "/addbus",
    text: "Add bus",
    icon: <FaBus />,
  },
  {
    id: 2,
    url: "/viewbuses",
    text: "View Buses",
    icon: <FaBus />,
  },
  {
    id: 3,
    url: "/adddriver",
    text: "Add Drivers",
    icon: <FaMale />,
  },

  {
    id: 4,
    url: "/viewdrivers",
    text: "View Drivers",
    icon: <FaMale />,
  },

  {
    id: 5,
    url: "/addroute",
    text: "Add Route",
    icon: <FaRoute />,
  },

  {
    id: 6,
    url: "/viewroutes",
    text: "View Routes",
    icon: <FaRoute />,
  },
  {
    id: 7,
    url: "/managereservations",
    text: "Manage Reservations",
    icon: <FaTicketAlt />,
  },

  {
    id: 8,
    url: "/viewmessages",
    text: "View Messages",
    icon: <FaComments />,
  },

  {
    id: 9,
    url: "/",
    text: "Logout",
    icon: <FaLongArrowAltRight/>
  
  },


];

// export const social = [
//   {
//     id: 1,
//     url: "https://www.twitter.com",
//     icon: <FaFacebook />,
//   },
//   {
//     id: 2,
//     url: "https://www.twitter.com",
//     icon: <FaTwitter />,
//   },
//   {
//     id: 3,
//     url: "https://www.twitter.com",
//     icon: <FaLinkedin />,
//   },
//   {
//     id: 4,
//     url: "https://www.twitter.com",
//     icon: <FaBehance />,
//   },
//   {
//     id: 5,
//     url: "https://www.twitter.com",
//     icon: <FaSketch />,
//   },
// ];
