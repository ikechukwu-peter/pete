import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../loader/Loader";
const Header = dynamic(() => import("../Header"), {
  suspense: true,
  ssr: true,
});
const Footer = dynamic(() => import("../Footer"), {
  suspense: true,
  ssr: true,
});

const Layout = ({ children }) => (
  <Suspense fallback={<Loader />}>
    <Header />
    {children}
    <Footer />
  </Suspense>
);

export default Layout;
