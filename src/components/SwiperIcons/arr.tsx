//icons
import { MdPhoneIphone } from "react-icons/md";
import { TbDeviceWatch } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { PAGES_DASHBOARD } from "~/configs/pages";

export const arr = [
  { icon: <MdPhoneIphone />, title: "Phones", link: `${PAGES_DASHBOARD.CATALOG}/smartphones` },
  { icon: <TbDeviceWatch />, title: "Smart Watches", link: `${PAGES_DASHBOARD.CATALOG}/#` },
  { icon: <CiCamera />, title: "Cameras", link: `${PAGES_DASHBOARD.CATALOG}/#` },
  { icon: <CiHeadphones />, title: "Headphones", link: `${PAGES_DASHBOARD.CATALOG}/#` },
  { icon: <HiMiniComputerDesktop />, title: "Computers", link: `${PAGES_DASHBOARD.CATALOG}/#` },
  { icon: <MdOutlineVideogameAsset />, title: "Gaming", link: `${PAGES_DASHBOARD.CATALOG}/#` },
];
