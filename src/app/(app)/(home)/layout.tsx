import { getPayload } from "payload";

import configPromise from "@/payload.config";

import Footer from "./footer";
import { Navbar } from "./navbar";
import SearchFilters from "./search-filters";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <SearchFilters data={data} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
}
