import Footer from "./footer";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
}
