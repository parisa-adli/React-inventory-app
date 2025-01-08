import ThemeModeToggle from "./ThemeModeToggle";

function Navbar({ children }) {
  return (
    <div className="h-12 flex items-center justify-center gap-x-3 bg-secondary-600 text-secondary-200 font-bold mb-6">
      <ThemeModeToggle />
      {children}
    </div>
  );
}
export default Navbar;
