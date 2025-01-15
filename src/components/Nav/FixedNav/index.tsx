import LogoImage from "./LogoImage";
import MenuList from "./MenuList";
import SubMenu from "./SubMenu";

const FixedNav = () => {
  return (
    <div className="framer-ogrscq-container hidden-5tblbe">
      <nav
        className="framer-eE9h1 framer-uKIIJ framer-ux1xcs framer-v-ux1xcs border border-solid border-[rgb(34,34,34)] bg-[rgb(15,15,15)] rounded-[10px]"
        data-border="true"
        data-framer-name="Main"
      >
        <LogoImage />
        <MenuList />
        <SubMenu />
      </nav>
    </div>
  );
};

export default FixedNav;
