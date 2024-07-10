import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <BsGraphUpArrow className="text-white size-5" />

        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
