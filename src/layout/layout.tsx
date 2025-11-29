import { ReactNode } from "react";
import { Header } from "@/navigation/header";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Ikechukwu Peter. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
