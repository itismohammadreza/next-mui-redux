"use client"
import { useLocales } from "@hooks/useLocales";
import { Button } from "@mui/material";
import Link from "next/link";
import { useApp } from "@hooks/useApp";
import { useLazyGetMoviesQuery } from "@services/dataService";

// export const metadata: Metadata = {
//   title: 'About'
// };

const About = () => {
  const { t, changeLocale, currentLocale } = useLocales();
  const { paletteMode, setAppConfig } = useApp();
  const [trigger, {data, isLoading}] = useLazyGetMoviesQuery();

  const changeThemeClick = async () => {
    await trigger();
    setAppConfig({ paletteMode: paletteMode === 'dark' ? 'light' : 'dark' });
  }

  return (
    <>
      <h2>About Page</h2>
      <Link href="/">Home</Link>
      <Button variant="contained"
        onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
        {currentLocale}
      </Button>
      <h2>{t('title')}</h2>
    </>
  )
}

export default About;
