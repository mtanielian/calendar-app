import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = (form) => {

  }

  return (
    <Grid container spacing={2} sx={{mt: 5 , justifyContent: "center", alignItems: 'center'}}>
      <Grid item xs={3} textAlign='center'>
        <Typography variant="h6" component='h6'>REGISTER</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} mt={2}>
            <TextField 
              type='text'
              fullWidth
              label='Username'
              { ...register('displayName', {
                required: 'Username is required',
                minLength: { value: 3, message: '+2 characters' }
              })}
              error={!!errors.displayName}
              helperText={errors.displayName?.message}
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField 
              type='text'
              fullWidth
              label='Email'
              { ...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField 
              type='password'
              fullWidth
              label='Password'
              { ...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: '+7 characters' }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField 
              type='password'
              fullWidth
              label='Confirm password'
              { ...register('confirmPass', {
                required: 'Password is required',
                validate: (value) => {
                  return value === getValues('password') || "The passwords do not match"
                }
              })}
              error={!!errors.confirmPass}
              helperText={errors.confirmPass?.message}
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              variant='outlined'
              fullWidth
              type="submit" 
            >Sign Up</Button>
          </Grid>
        </form>
        <Grid item xs={12} mt={2} textAlign='end'>
          <Button variant="text" onClick={ () => navigate("/auth/login") }>Already registered?</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RegisterPage