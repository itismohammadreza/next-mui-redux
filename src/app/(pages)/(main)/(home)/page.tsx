"use client"
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { useApp } from "@hooks/useApp";
import { changePalette } from "@redux/slices/appSlice";
import { useLocales } from "@hooks/useLocales";
import Link from "next/link";
import { useLazyGetMoviesQuery } from "@services/dataService";

const Home = () => {
  const {t, changeLocale, currentLocale} = useLocales();
  const dispatch = useDispatch();
  const {paletteMode} = useApp();
  const [trigger, {data, isLoading}] = useLazyGetMoviesQuery();

  const changeThemeClick = async () => {
    await trigger();
    dispatch(changePalette(paletteMode == "light" ? "dark" : "light"));
  }

  return (
      <>
        <Link href="/auth/login">Login</Link>
        <Link href="/about">About</Link>
        <Button variant="contained" onClick={changeThemeClick}>
          {paletteMode}
        </Button>
        <Button variant="contained"
                onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <h2>{t('title')}</h2>
        تست فارسی 123
      </>
  )
}

export default Home;
