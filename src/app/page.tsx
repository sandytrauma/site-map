import Image from "next/image";
import DepotMap from "./components/DepotMap";
import DepotPolygonMap from "./components/DepotOverlayMap";
import DepotOutlinedMap from "./components/DepotOverlayMap";
import SiteLayoutMap from "./components/DepotOverlayMap";
import SiteLayout from "./components/DepotOverlayMap";



export default function Home() {
  return (
   <main style={{ padding: '20px' }}>
      <h1>Traced Map – Ghuman Hera DTC Depot</h1>
      <div>
      <DepotMap />
      <h1>DTC Depot Layout</h1>
      <SiteLayout/>
      </div>
    </main>
  );
}
