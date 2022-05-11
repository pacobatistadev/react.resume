import { FC } from "react";
import { useTranslation } from "react-i18next";

const fiveElArr = new Array(5).fill(1);

type SectionProps = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  translate?: boolean
  children?: React.ReactNode;
};

const Skill: FC<SectionProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="mb-3 flex flex-col">
      <h4 className="text-sm mb-1">{props.translate ? t(props.name) : props.name}</h4>
      <div className="skill-meter-container flex flex-row">
        {fiveElArr.map((_: any, index: number) => (
          <div key={index} className={`skill-meter shadow-md ${index < props.level ? 'bg-blue-600' : 'bg-slate-400'} }`} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
