import { FC, MutableRefObject } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import {MdPrint} from 'react-icons/md'

type DownloadPDFType = {
  elementRef: MutableRefObject<any>
}

const DownloadPDF: FC<DownloadPDFType> = ({ elementRef }) => {
  const { t } = useTranslation();

  const handlePrint = useReactToPrint({
    content: () => elementRef.current,
    bodyClass: 'print-body',
    documentTitle: "Francisco's Resume",
    removeAfterPrint: true,
  });

  return (
    <button onClick={handlePrint} className="hidden md:flex flex-row justify-end items-center gap-2 hover-opacity-controls">
      <span className='opacity-0 transition-opacity'>
        {t('misc.download.print')}
      </span>
      <MdPrint className="text-lg"/>
    </button>
  )
}

export default DownloadPDF