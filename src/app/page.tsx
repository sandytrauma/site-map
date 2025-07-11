import Image from "next/image";
import DepotMap from "./components/DepotMap";
import TraceMap from "./components/TraceMap";
import SiteLayout from "./components/siteLayout";

export default function Home() {
  return (
   <main style={{ padding: '20px' }}>
      <h1>Traced Map – Ghuman Hera DTC Depot</h1>
      <DepotMap />
      <h1>DTC Depot Layout</h1>
      <SiteLayout />
    </main>
  );
}
