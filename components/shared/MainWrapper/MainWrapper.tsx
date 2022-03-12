export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-3 min-h-[var(--main-height)]">{children}</div>
}

export default MainWrapper
