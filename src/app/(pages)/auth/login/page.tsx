"use client"
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/navigation";
import { Container, Grid, Typography } from "@mui/material";
import { FormElements } from "@components/forms/FormElements";
import Link from "next/link";
import { useLoginMutation } from "@services/dataService";

const Login = () => {
  const router = useRouter();
  const [trigger, {data, isLoading}] = useLoginMutation();

  const onSubmit = async (value: any) => {
    try {
      const res = await trigger(value);
      localStorage.setItem('token', res.token);
      router.push('/');
    } catch {
    }
  }

  return (
      <FormElements.Container onSuccess={onSubmit}>
        <Container component="main" maxWidth="xs" sx={{marginTop: 8}}>
          <Typography component="h1" marginBottom={2} variant="h5" textAlign="center"> Sign in </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormElements.TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  rules={{required: 'Required'}}/>
            </Grid>
            <Grid item xs={12}>
              <FormElements.TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  rules={{required: 'Required'}}/>
              <FormElements.Checkbox name="rememberMe" label="Remember me"/>
            </Grid>
          </Grid>
          <LoadingButton fullWidth sx={{mt: 3, mb: 2}} loading={isLoading} type="submit" variant="contained">
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="/auth/forget-password" variant="body2"> Forgot password? </Link>
            </Grid>
            <Grid item>
              <Link href="/auth/register" variant="body2"> Don't have an account? Sign Up </Link>
            </Grid>
          </Grid>
        </Container>
      </FormElements.Container>
  )
}

export default Login;
