import { FC } from "react";
import { useTranslation } from "react-i18next";
import Contact from './Contact';
import { MdEmail, MdPhone } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import ContactGroup from "./ContactGroup";

type ReferenceEntryProps = {
  name: string;
  company: string;
  email: string;
  tel?: string;
  linkedin?: string;
};

const ReferenceEntry: FC<ReferenceEntryProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <h4 className="text-md">
        {props.name} {t("references.from")} {props.company}
      </h4>
      <ContactGroup compact>
        <Contact type="email" value={props.email}/>
        {props.tel && (
          <Contact type="tel" value={props.tel} />
        )}
        {props.linkedin && (
          <Contact type="linkedin" value={props.linkedin} />
        )}
      </ContactGroup>
    </div>
  );
};

export default ReferenceEntry;
