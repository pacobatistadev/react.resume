import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

type HistoryEntryProps = {
  type: 'job' | 'education'
  place: string;
};

const HistoryEntry: FC<HistoryEntryProps> = ({ type, place }) => {
  const { t, i18n } = useTranslation();

  const responsabilities = useMemo(() => {
    return (
      i18n.getResource(i18n.language, "default", `${type}.${place}.responsabilities`) ?? []
    );
  }, [type, place, i18n.language]);

  return (
    <div className="mb-4">
      <div className="mb-2">
        <h4 className="text-justify leading-3">{t(`${type}.${place}.title`)} @ {t(`${type}.${place}.company`)}</h4>
        <span className="text-xs text-gray-400">
          {t(`${type}.${place}.timespan`)}
        </span>
      </div>
      <ul className="text-sm list-disc ml-8 leading-6">
        {responsabilities.map((responsability: string) => (
          <li key={responsability}>
            {responsability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryEntry;
