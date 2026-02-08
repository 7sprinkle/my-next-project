import Hero from "../_componets/Hero";
import Sheet from "../_componets/sheet";

export const metadata = {
  title: "作例",
}

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="Portfolio" sub="作例" />
      <Sheet>{children}</Sheet>
    </>
  );
}