import { FC, useMemo } from "react";

import { MdEmail, MdPhone } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { useTranslation } from "react-i18next";

type ContactProps = {
  type: "tel" | "email" | "linkedin";
  value: string;
};

const Contact: FC<ContactProps> = (props) => {
  const { t, i18n } = useTranslation();

  const hrefValue = useMemo(() => {
    switch (props.type) {
      case "tel":
        return `tel:+52${props.value}`;
      case "email":
        return `mailto:${props.value}`;
      default:
        return props.value;
    }
  }, [props.type, props.value]);

  const displayValue = useMemo(() => {
    if (props.type === "linkedin") {
      return t("misc.linkedin");
    }

    return props.value;
  }, [props.type, props.value, i18n.language]);

  return (
    <>
      {props.type === "tel" && <MdPhone className="mr-1 text-blue-700 " />}
      {props.type === "email" && <MdEmail className="mr-1 text-blue-700 " />}
      {props.type === "linkedin" && (
        <AiFillLinkedin className="mr-1 text-blue-700 " />
      )}
      <a className="mr-4" href={hrefValue} target='_blank'>
        {displayValue}
      </a>
    </>
  );
};

export default Contact;