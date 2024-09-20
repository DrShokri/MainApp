import { Outlet } from "react-router-dom";

// components:
import BottomFooter from "../components/common/Footer/BottomFooter";
import FooterSvg from "../components/common/Footer/FooterSvg";
import TopFooter from "../components/common/Footer/TopFooter";
import Header from "../components/common/Header";

function MainLayout() {
  return (
    <>
      <Header />

      <main className="">
        <Outlet />
      </main>

      <footer className="flex flex-col">
        <FooterSvg />
        <TopFooter />
        <BottomFooter />
      </footer>
    </>
  );
}

export default MainLayout;
