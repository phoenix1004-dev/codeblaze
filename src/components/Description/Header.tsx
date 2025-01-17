const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-outfit text-white text-[80px]">
      <b>{children}</b>
    </h1>
  );
};

export default Header;
