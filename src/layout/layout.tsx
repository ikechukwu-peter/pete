import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";
// import Loader from "../loader/Loader";
const Header = dynamic(() => import("@/navigation").then((mod) => mod.Header), {
  suspense: true,
  ssr: true,
});
// const Footer = dynamic(() => import("../Footer"), {
//   suspense: true,
//   ssr: true,
// });

const Layout = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<div>Loading</div>}>
    <Header />
    {children}
    {/* <Footer /> */}
  </Suspense>
);

export default Layout;
