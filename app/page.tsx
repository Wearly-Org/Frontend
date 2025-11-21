import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainDisplay from "./components/MainDisplay";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#E5E5E5]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Navbar (Floating) */}
        <div className="absolute top-0 left-0 right-0 z-10 px-8 pt-6">
          <Navbar />
        </div>

        {/* Main Display */}
        <div className="flex-1 pt-24">
          <MainDisplay />
        </div>
      </div>
    </div>
  );
}
