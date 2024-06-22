export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
  return <div className="min-h-[var(--main-height)]">{children}</div>;
};

export default MainWrapper;
