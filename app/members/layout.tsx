import Sheet from "../_componets/sheet";
import Hero from "../_componets/Hero";

export const metadata = {
  title: "メンバー",
}

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}