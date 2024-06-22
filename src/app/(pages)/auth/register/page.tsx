"use client"
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@mui/lab";
import { FormElements } from "@components/forms/FormElements";
import Link from "next/link";
import { useRegisterMutation } from "@services/dataService";
import { Page } from "@components/Page";

const Register = () => {
  const router = useRouter();
  const [trigger, {isLoading}] = useRegisterMutation();

  const onSubmit = async (value: any) => {
    try {
      await trigger(value);
      router.push('/');
    } catch {
    }
  }

  return (
      <Page>
        <Grid container sx={{height: '100vh'}}>
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
          <Grid item xs={12} sm={8} md={5}>
            <FormElements.Container onSuccess={onSubmit}>
              <Container maxWidth="xs">
                <Typography sx={{mt: 10, mb: 8}} component="h1" variant="h3" textAlign="center">
                  Sign in
                </Typography>
                <Stack spacing={2} maxWidth="xs">
                  <FormElements.TextField
                      fullWidth
                      autoComplete="given-name"
                      name="firstName"
                      label="First Name"
                      rules={{required: 'Required'}}/>
                  <FormElements.TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      rules={{required: 'Required'}}/>
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
                  <LoadingButton loading={isLoading} type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                    Sign Up
                  </LoadingButton>
                  <Stack justifyContent="space-between" direction={{md: 'row'}}>
                    <Link href="/auth/forget-password"> Forgot password? </Link>
                    <Link href="/auth/login"> Already have an account? Sign in </Link>
                  </Stack>
                </Stack>
              </Container>
            </FormElements.Container>
          </Grid>
        </Grid>
      </Page>
  )
}

export default Register;
