import { FC } from "react";
import { useTranslation } from "react-i18next";

import profile from "../assets/profile.jpeg";
import personalData from '../data/personalData'

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: FC<HeaderProps> = (props) => {
  const { t } = useTranslation();

  return (
    <header className="bg-blue-700 px-16 py-14 flex flex-row shadow">
      <img
        height={75}
        width={75}
        src={profile}
        alt="Profile photo"
        className="rounded-full shadow-md mr-8"
      />
      <div className="flex flex-col content-start items-start">
        <h1 className="font-sans text-4xl text-white font-bold italic pb-4">
          {personalData.name}
        </h1>
        <h2 className="font-sans text-xs text-white tracking-widest italic uppercase">
          {t(personalData.title)}
        </h2>
      </div>
    </header>
  );
};

export default Header;
