import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";

import LanguageSelector from "./components/LanguageSelector";
import Section from "./components/Section";
import HistoryEntry from "./components/HistoryEntry";
import ReferenceEntry from "./components/ReferenceEntry";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

import referenceData from "./data/referenceData";
import skillsData from "./data/skillsData";
import languagesData from "./data/languagesData";
import personalData from "./data/personalData";

import profile from "./assets/profile.jpg";
import { useRef } from "react";
import DownloadPDF from "./components/DownloadPDF";
import ContactGroup from "./components/ContactGroup";

function App() {
  const { t, i18n } = useTranslation();
  const printRef = useRef(null);

  return (
    <div className="lg:py-4">
      <div className="fixed right-0 flex flex-col mr-4">
        <LanguageSelector />
        <DownloadPDF elementRef={printRef} />

      </div>
      <div ref={printRef} className="main-container">
        <header className="header">
          <div className="profile-pic">
            <img
              src={profile}
              alt="Profile photo"
              className="w-fit rounded-full"
            />
          </div>
          <div className="name">
            <h1 className="font-sans text-4xl text-white font-bold italic pb-4">
              {personalData.name}
            </h1>
            <h2 className="font-sans text-xs text-white tracking-widest italic uppercase">
              {t(personalData.title)}
            </h2>
          </div>
        </header>
        <div className="mx-16">
          <div className="py-4 flex items-center border-b-2 border-opacity-50 border-b-slate-400">
            <ContactGroup>
              <Contact type="email" value={personalData.email} />
              <Contact type="tel" value={personalData.tel} />
              <Contact type="linkedin" value={personalData.linkedin} />
            </ContactGroup>
          </div>
          <div className="grid grid-cols-3">
            <main className="main-body">
              <Section section="profile">
                <p className="text-sm text-justify">{t("profile.body")}</p>
              </Section>
              <Section section="job">
                <HistoryEntry type="job" place="wizeline" />
                <HistoryEntry type="job" place="ringo" />
                <HistoryEntry type="job" place="hmh" />
                <div className="break-before-page print:pt-20" />
                <HistoryEntry type="job" place="infomatika" />
              </Section>
              <Section section="education">
                <HistoryEntry type="education" place="degree" />
                <HistoryEntry type="education" place="highscool" />
              </Section>
              <Section section="references">
                {referenceData.map((data, index) => (
                  <div key={index} className="">
                    <ReferenceEntry {...data} />
                  </div>
                ))}
              </Section>
            </main>
            <div className="md:col-span-1 print:col-span-1 md:pl-8 print:pl-8 md:pt-4 print:pt-4 col-span-3 pl-0 pt-0 ">
              <Section section="skills">
                {skillsData.map((data, index) => (
                  <Skill key={index} {...data} />
                ))}
              </Section>
              <Section section="languages">
                {languagesData.map((data, index) => (
                  <Skill translate key={index} {...data} />
                ))}
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
