import Sheet from "../_componets/sheet";
import Hero from "../_componets/Hero";

export const metadata = {
  title: "プロフィール",
}

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Profile" sub="プロフィール" />
      <Sheet>{children}</Sheet>
    </>
  );
}