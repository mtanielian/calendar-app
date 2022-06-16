import NavBar from "../components/navBar/NavBar"

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{
        margin: '80px auto',
        padding: '0px 30px'
      
      }}>

          {children}
      </main>
    </>
  )
}

export default MainLayout