import { LocaleSwitcher, ThemeSwitcher } from "@/ui";

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-2 py-8">
      <ThemeSwitcher />
      <LocaleSwitcher />
    </header>
  );
};
