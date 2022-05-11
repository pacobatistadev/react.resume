import { useTranslation } from "react-i18next";

import Section from "./components/Section";
import HistoryEntry from "./components/HistoryEntry";
import ReferenceEntry from "./components/ReferenceEntry";
import { MdEmail, MdPhone } from "react-icons/md";

import referenceData from "./referenceData";

import profile from "./assets/profile.jpeg";

function App() {
  const { t, i18n } = useTranslation();

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className=" bg-slate-50 container mx-auto max-w-5xl shadow-lg min-h-screen">
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
              Francisco Batista
            </h1>
            <h2 className="font-sans text-xs text-white tracking-widest italic uppercase">
              Fullstack Developer
            </h2>
          </div>
        </header>
        <div className="mx-16">
          <div className="py-4 flex items-center border-b-2 border-opacity-50 border-b-slate-400">
            <div className="flex flex-row text-xs">
              <div className="flex flex-row items-center mr-8">
                <MdEmail className="mr-2 text-blue-700" />
                <a href="mailto:fbatista.fxbi@gmail.com">
                  fbatista.fxbi@gmail.com
                </a>
              </div>
              <div className="flex flex-row items-center mr-8 ">
                <MdPhone className="mr-2 text-blue-700 " />
                <a href="tel:+523121196780">3121196780</a>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <main className="main-body">
              <Section section="profile">
                <p className="text-sm text-justify">{t("profile.body")}</p>
              </Section>
              <Section section="job">
                <HistoryEntry type="job" place="wizeline" />
                <HistoryEntry type="job" place="ringo" />
                <HistoryEntry type="job" place="hmh" />
                <HistoryEntry type="job" place="infomatika" />
              </Section>
              <Section section="education">
                <HistoryEntry type="education" place="degree" />
                <HistoryEntry type="education" place="highscool" />
              </Section>
              <Section section="references">
                {referenceData.map((data, index) => (
                  <ReferenceEntry
                    key={index}
                    {...data}
                  />
                ))}
              </Section>
            </main>
            <div className="flex-1 pl-8 pt-4">
              <Section section="skills">

              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
