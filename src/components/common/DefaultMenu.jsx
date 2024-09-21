import { Link } from "react-scroll";

function DefaultMenu() {
  return (
    <>
      <li className="max-sm:hidden">
        <Link
          to="HeroSection"
          activeClass="text-[#212529] "
          className="cursor-pointer transition-all hover:text-[#212529] min-w-fit"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
        >
          صفحه اصلی
        </Link>
      </li>
      <li className="max-sm:hidden">
        <Link
          to="VideoSection"
          activeClass="text-[#212529]"
          className="cursor-pointer transition-all hover:text-[#212529] min-w-fit"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
        >
          ویدیوی معرفی
        </Link>
      </li>
      <li className="max-sm:hidden">
        <Link
          to="AchievementsSection"
          activeClass="text-[#212529]"
          className="cursor-pointer transition-all hover:text-[#212529] min-w-fit"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
        >
          دستاورد ها
        </Link>
      </li>
    </>
  );
}

export default DefaultMenu;
