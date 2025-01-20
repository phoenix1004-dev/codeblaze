import Logo from "../../Logo/Logo2";
import MenuList from "./MenuList";
import SubMenu from "./SubMenu";

const ToggleNav = () => {
  return (
    <div className="codeblaze-83vgnn-container opacity-100 will-change-transform !hidden lg:!flex">
      <nav
        className="codeblaze-xM5rw codeblaze-uKIIJ codeblaze-1gv67ej codeblaze-v-1gv67ej !h-full !w-full"
        data-codeblaze-name="Home"
      >
        <Logo />
        <MenuList />
        <SubMenu />
      </nav>
    </div>
  );
};

export default ToggleNav;
