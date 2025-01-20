import LogoImage from "./LogoImage";
import MenuList from "./MenuList";
import SubMenu from "./SubMenu";

const FixedNav = () => {
  return (
    <div className="codeblaze-ogrscq-container hidden-5tblbe">
      <nav
        className="codeblaze-eE9h1 codeblaze-uKIIJ codeblaze-ux1xcs codeblaze-v-ux1xcs border border-solid border-[rgb(34,34,34)] bg-[rgb(15,15,15)] rounded-[10px]"
        data-border="true"
        data-codeblaze-name="Main"
      >
        <LogoImage />
        <MenuList />
        <SubMenu />
      </nav>
    </div>
  );
};

export default FixedNav;
