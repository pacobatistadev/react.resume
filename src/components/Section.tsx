import { FC } from "react";
import { useTranslation } from "react-i18next";

type SectionProps = {
  section: 'profile' | 'job' | 'education' | 'references' | 'skills'
  children?: React.ReactNode
}

const Section: FC<SectionProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <h3 className="mb-2 font-bold italic text-lg first-letter:uppercase">
        {t(`${props.section}.title`)}
      </h3>
      {props.children}
    </div>
  )
}

export default Section