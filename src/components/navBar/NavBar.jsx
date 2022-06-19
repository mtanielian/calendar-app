import { useDispatch, useSelector } from "react-redux"
import { doLogout } from "../../actions/auth.actions"
import { CalendarMonthOutlined, LogoutOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"

const NavBar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  
  const logout = () => { 
    dispatch(doLogout())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CalendarMonthOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography variant="h6" component="div" mr={5}>
            { user.username } -
          </Typography>
          <Button 
            variant="outlined" color="inherit"
            startIcon={<LogoutOutlined />}
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar