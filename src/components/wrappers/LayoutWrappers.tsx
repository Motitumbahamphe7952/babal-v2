import ClientProviders from "@/providers/ClientProvider";
import Footer from "../reusables/Footer";
import Header from "../reusables/Header";
import Navbar from "../reusables/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="grow">
        <ClientProviders />
        {children}
      </main>
      <Footer />
    </div>
  );
}
