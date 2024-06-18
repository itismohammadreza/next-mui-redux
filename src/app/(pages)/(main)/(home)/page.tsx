"use client"
import Button from '@mui/material/Button';
import { useApp } from "@hooks/useApp";
import { changePalette } from "@redux/slices/appSlice";
import { useLocales } from "@hooks/useLocales";
import { useUser } from "@hooks/useUser";
import { Page } from "@components/Page";
import { Typography } from "@mui/material";
import { authService } from "@services/authService";
import { useLazyGetProductsQuery } from "@services/dataService";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";

const Home = () => {
  const user = useUser();
  const {changeLocale, currentLocale} = useLocales();
  const dispatch = useDispatch();
  const {paletteMode} = useApp();
  const [trigger, {isLoading}] = useLazyGetProductsQuery();

  return (
      <Page title="Home">
        <Typography variant="h6" component="span"> Theme: </Typography>
        <Button onClick={() => dispatch(changePalette(paletteMode == "light" ? "dark" : "light"))}>
          {paletteMode}
        </Button>
        <br/>
        <Typography variant="h6" component="span"> Locale: </Typography>
        <Button onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <br/>
        <Typography variant="h6" component="span"> Request: </Typography>
        <LoadingButton loading={isLoading} onClick={() => trigger()}>
          Call
        </LoadingButton>
        <br/>
        {
            user && (
                <>
                  <Typography variant="h6" component="span"> Logged In User: </Typography>
                  {user.name} - {user.email}
                  <Button color="error" onClick={() => authService.logout()}> Logout </Button>
                </>
            )
        }
      </Page>
  )
}

export default Home;
