import { PageContainer } from "@/components/page-container";
import dynamic from "next/dynamic";
import { ReactNode, Suspense } from "react";

const Header = dynamic(() => import("@/navigation").then((mod) => mod.Header), {
  suspense: true,
  ssr: true,
});

const Layout = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<div>Loading</div>}>
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  </Suspense>
);

export default Layout;
