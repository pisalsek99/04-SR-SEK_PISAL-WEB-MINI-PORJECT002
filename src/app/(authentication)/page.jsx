import CardComponent from "@/components/card";
import FilterComponent from "@/components/FilterComponents";
import NewTaskButton from "@/components/NewTaskButton";
import SidebarlistComponent from "@/components/SidebarlistComponent";
import UserAccountComponent from "@/components/UserAccountComponent";

export default function Home() {
  return (
    <>
      <div className="flex h-screen font-sf-pro">
        <aside className="w-67 bg-white p-4 border-r-2 border-gray-300 flex-shrink-0">
          <SidebarlistComponent />
        </aside>

        <main className="flex-grow p-6 flex flex-col">
          <header className="flex justify-between items-center border-b-2 border-purple-500 pb-4 mb-6">
            <FilterComponent />
            <div className="flex items-center space-x-4">
              <UserAccountComponent />
            </div>
          </header>

          <div className="flex-grow bg-gray-50 p-4 rounded-lg shadow flex flex-col">
            {" "}
            {/* Ensure the main content is a flex column */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col items-start">
                <span className="text-red-500 font-semibold">Not Started</span>
                <hr className="w-93 border text-red-200" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-blue-500 font-semibold">In Progress</span>
                <hr className="w-93 border text-blue-300" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-teal-500 font-semibold">Finished</span>
                <hr className="w-93 border text-teal-200" />
              </div>
            </div>
            {/* Card Component Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <CardComponent />
              <CardComponent />
              <CardComponent />
              {/* <CardComponent />
              <CardComponent />
              <CardComponent /> */}
              {/* <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent /> */}
            </div>
            {/* NewTaskButton positioned at the bottom-right */}
            <div className="mt-auto self-end">
              {" "}
              <NewTaskButton />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
