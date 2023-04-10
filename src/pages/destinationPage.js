import Navbar from "../components/navbar";

export default function DestinationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-mobile-destination w-full h-screen bg-no-repeat bg-cover -z-10 px-6 flex flex-col items-center justify-end">
        <div>
          <span className="font-barlow font-bold tracking-[2.7px] text-[#4D5157] mr-[18px]">
            01
          </span>
          <span className="font-barlow tracking-[2.7px] text-white">
            PICK YOUR DESTINATION
          </span>
        </div>
      </main>
    </>
  );
}
