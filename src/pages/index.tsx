import { useLocales } from "@hooks/useLocales";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useApp } from "@hooks/useApp";
import { changePalette } from "@redux/slices/appSlice";
import Link from "next/link";
import { useGetMoviesQuery, useLazyGetMoviesQuery } from "@services/dataService";

const Home = () => {
  const {t, changeLocale, currentLocale} = useLocales();
  const dispatch = useDispatch();
  const {paletteMode} = useApp();
  const {data, error, isSuccess, isLoading} = useGetMoviesQuery();
  // const [trigger, {data, error, isLoading}] = useLazyGetMoviesQuery();

  const changeThemeClick = async () => {
    // const {data: movies} = await trigger();
    // console.log(movies)
    dispatch(changePalette(paletteMode == "light" ? "dark" : "light"));
  }

  return (
      <>
        <Link href="/auth/login">Link</Link>
        <Button variant="contained" onClick={changeThemeClick}>
          {paletteMode}
        </Button>
        <Button variant="contained"
                onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <h2>{t('demo.title')}</h2>
        {isLoading && <p>loading...</p>}
        {isSuccess && data && data.map((item, i) => (<p key={item.id}>{item.title}</p>))}
        تست فارسی 123
      </>
  )
}

export default Home;
