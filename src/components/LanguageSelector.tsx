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
    <button className='text-slate-800 opacity-20 hover:opacity-100 transition-opacity' onClick={changeLang}>
      {t('misc.language_selector.change_to')} {t(`misc.language_selector.${targetLang}`)}
    </button>
  )
}

export default LanguageSelector