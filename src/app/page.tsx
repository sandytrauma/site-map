import RoadSidePart from '@/app/components/RoadSidePart';
import GhumanheraDepot1Part from '@/app/components/GhumanheraDepot1Part';
import GhumanheraDepot2Part from '@/app/components/GhumanheraDepot2Part';
import DTCDepotPart from '@/app/components/DTCDepotPart';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl border border-gray-400 shadow-lg flex flex-col rounded-lg overflow-hidden">
        {/* Top Green Field */}
        <div className="bg-green-300 p-4 text-center text-2xl font-bold text-green-800">
          Green Field
        </div>

        {/* Main Content Area: Two Columns */}
        <div className="grid grid-cols-[150px_1fr] flex-1 min-h-[900px]"> {/* Fixed width for left column, 1fr for right */}

          {/* Left Column: Road Side Part */}
          <RoadSidePart />

          {/* Right Column: Stacked Depots */}
          <div className="flex flex-col">
            <div className="relative border-b-2 border-dashed border-gray-400">
              <GhumanheraDepot1Part />
            </div>
            <div className="relative border-b-2 border-dashed border-gray-400">
              <GhumanheraDepot2Part />
            </div>
            <div className="relative flex-grow"> {/* DTC Depot takes remaining space */}
              <DTCDepotPart />
            </div>
          </div>

        </div>

        {/* Bottom Green Field */}
        <div className="bg-green-300 p-4 text-center text-2xl font-bold text-green-800">
          Green Field
        </div>
      </div>
    </div>
  );
}