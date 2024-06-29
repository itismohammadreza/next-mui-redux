"use client"
import { LoadingButton } from "@mui/lab";
import { useRouter, useSearchParams } from "next/navigation";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { FormElements } from "@components/forms/FormElements";
import Link from "next/link";
import { useLazyGetProfileQuery, useLoginMutation } from "@services/dataService";
import { User } from "@models/business";
import { cookieService } from "@utils/coockieService";
import { updateUser } from "@redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { Page } from "@components/Page";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const onSubmit = async (value: User) => {
    try {
      const {data} = await login(value);
      cookieService.set('token', data.access_token, {maxAge: 36000});
      const {data: user} = await getProfile();
      dispatch(updateUser(user));
      router.push(searchParams.get('return') ?? '/');
    } catch {
    }
  }

  return (
      <Page>
        <Grid container sx={{height: '100vh'}}>
          <Grid item xs={12} sm={8} md={5}>
            <FormElements.Container onSuccess={onSubmit}>
              <Container maxWidth="xs">
                <Typography sx={{mt: 10, mb: 8}} component="h1" variant="h3" textAlign="center">
                  Sign in
                </Typography>
                <Stack spacing={2} maxWidth="xs">
                  <FormElements.TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      rules={{required: 'Required'}}/>
                  <FormElements.TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      rules={{required: 'Required'}}/>
                  <FormElements.Checkbox name="rememberMe" label="Remember me"/>
                  <LoadingButton fullWidth sx={{mt: 3, mb: 2}} loading={isLoading} type="submit" variant="contained">
                    Sign In
                  </LoadingButton>
                  <Stack justifyContent="space-between" direction={{md: 'row'}}>
                    <Link href="/auth/forget-password"> Forgot password? </Link>
                    <Link href="/auth/register"> Don't have an account? Sign up </Link>
                  </Stack>
                </Stack>
              </Container>
            </FormElements.Container>
          </Grid>
          <Grid item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(/images/login-bg.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    background: '-webkit-linear-gradient(left,rgba(0,168,255,0.5),rgba(185,0,255,0.5))',
                    pointerEvents: 'none',
                  }
                }}/>
        </Grid>
      </Page>
  )
}

export default Login;
