import { useForm } from "react-hook-form";
import { Button, Chip, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error } = useSelector(state => state.auth)

  const onSubmit = (form) => {
    dispatch(doLogin(form))
  }

  
  return (
    <Grid container spacing={2} sx={{justifyContent: "center", alignItems: 'center'}}>
      <Grid item xs={3} textAlign='center'>
        <Typography variant="h6" component='h6'>LOGIN</Typography>
        {error && <Chip label="Email or password incorrect" color="error" />}
        <form onSubmit={handleSubmit(onSubmit)}>
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
                minLength: { value: 6, message: '+5 characters' }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Button
              variant='outlined'
              fullWidth
              type="submit" 
            >Login</Button>
          </Grid>
        </form>
        <Grid item xs={12} mt={2} textAlign='end'>
          <Button variant="text" onClick={ () => navigate("/auth/register") }>Sing Up</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginPage