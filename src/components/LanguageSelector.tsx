import { FC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector: FC = () => {
  const { t, i18n } = useTranslation()

  const targetLang = useMemo(() => {
    console.log(i18n.language)
    if (i18n.language === 'en') return 'es'
    return 'en'
  }, [i18n.language])

  const changeLang = useCallback(() => {
    i18n.changeLanguage(targetLang)
  }, [targetLang, i18n.changeLanguage])

  return (
    <button className='text-slate-800 flex flex-row justify-end items-center gap-2 hover-opacity-controls' onClick={changeLang}>
      <span className='opacity-0 transition-opacity'>
        {t('misc.language_selector.change_to')}
      </span>
      <span>
        {t(`misc.language_selector.${targetLang}`)}
      </span>
    </button>
  )
}

export default LanguageSelector