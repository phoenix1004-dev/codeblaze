import Logo from "../../Logo/Logo2";
import MenuList from "./MenuList";
import SubMenu from "./SubMenu";

const ToggleNav = () => {
  return (
    <div className="framer-83vgnn-container opacity-100 will-change-transform">
      <nav
        className="framer-xM5rw framer-uKIIJ framer-1gv67ej framer-v-1gv67ej !h-full !w-full"
        data-framer-name="Home"
      >
        <Logo />
        <MenuList />
        <SubMenu />
      </nav>
    </div>
  );
};

export default ToggleNav;
