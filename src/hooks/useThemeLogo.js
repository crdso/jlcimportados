import { useTheme } from '../context/ThemeContext.jsx'

export function useThemeLogo(){
  const { theme } = useTheme()
  return theme === 'light' ? '/logo-escura.png' : '/logo-clara.png'
}

export function getThemeLogo(theme){
  return theme === 'light' ? '/logo-escura.png' : '/logo-clara.png'
}
