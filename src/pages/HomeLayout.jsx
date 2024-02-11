import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />    
      </section>
    </>
  )
}

export default HomeLayout