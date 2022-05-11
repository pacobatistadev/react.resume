import { FC } from "react";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

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
      <div className="mt-1 text-xs flex flex-row items-center">
        <MdEmail className="mr-1 text-blue-700" />
        <a className="mr-4" href={`mailto:${props.email}`}>
          {props.email}
        </a>
        {props.tel && (
          <>
            <MdPhone className="mr-1 text-blue-700 " />
            <a className="mr-4" href={`tel:+52${props.tel}`}>
              {props.tel}
            </a>
          </>
        )}
        {props.linkedin && (
          <>
            <AiFillLinkedin className="mr-1 text-blue-700 " />
            <a className="mr-4" href={props.linkedin}>
              {t('references.linkedin')}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ReferenceEntry;
