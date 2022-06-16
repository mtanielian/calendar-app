import { Calculate } from "@mui/icons-material"

const AuthLayout = ({ children }) => {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      height: '80vh',
    }}>
        {children}
    </main>
    )
}

export default AuthLayout