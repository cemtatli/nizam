import { Counter } from "@/components/widgets";
import NextLogo from "@/assets/icons/next.svg";

export default async function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Counter />
      <NextLogo className="size-40" />
    </section>
  );
}
