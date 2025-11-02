import { LocaleSwitcher, ThemeSwitcher } from "@/components/widgets";

export const Header = () => {
  return (
    <header className="flex items-center justify-end gap-2 p-4">
      <ThemeSwitcher />
      <LocaleSwitcher />
    </header>
  );
};
