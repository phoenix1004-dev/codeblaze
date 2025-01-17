const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-outfit text-white text-[45px]">
      <b>{children}</b>
    </h1>
  );
};

export default Title;
