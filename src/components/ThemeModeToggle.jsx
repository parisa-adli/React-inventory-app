import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeProvider";

function ThemeModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="h-5 w-5 text-secondary-900" />
      ) : (
        <HiOutlineMoon className="h-5 w-5 text-secondary-900" />
      )}
    </button>
  );
}
export default ThemeModeToggle;
