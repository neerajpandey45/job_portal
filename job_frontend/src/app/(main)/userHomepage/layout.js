import UserLayout from "@/app/(main)/layoutClient";
import { ThemeProvider } from "@/utils/screenTheme/themeContext";
export default function MainHome({ children }) {
  return (
    <>
    <ThemeProvider>
      <UserLayout>{children}</UserLayout>
    </ThemeProvider>
    </>
  );
}
