import { CalendarMonthOutlined, LogoutOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"

const NavBar = () => {
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
          <Button 
          variant="outlined" color="inherit"
            startIcon={<LogoutOutlined />}
          >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar