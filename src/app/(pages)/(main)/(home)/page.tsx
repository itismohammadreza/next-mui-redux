"use client"
import Button from '@mui/material/Button';
import { useLocales } from "@hooks/useLocales";
import { useUser } from "@hooks/useUser";
import { Page } from "@components/Page";
import { Typography } from "@mui/material";
import { authService } from "@services/authService";
import { useLazyGetProductsQuery } from "@services/dataService";
import { LoadingButton } from "@mui/lab";

const Home = () => {
  const user = useUser();
  const {changeLocale, currentLocale} = useLocales();
  const [trigger, {isLoading}] = useLazyGetProductsQuery();

  return (
      <Page title="Home">
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
