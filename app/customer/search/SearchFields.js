import {Button} from "@/components/ui/button";

export default function SearchFields() {
    return (

         <div className="w-full ">
            <form className="flex gap-2" onSubmit={e => { e.preventDefault(); /* your submit logic */ }}>
              <input
                type="text"
                placeholder="Search vendors..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
              />
              <input
                type="date"
                name="startDate"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
              />
              <label htmlFor="startTime" className="sr-only">Start time</label>
              <input
                id="startTime"
                name="startTime"
                type="time"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
              />
              <input
                type="date"
                name="endDate"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
              />
              <label htmlFor="endTime" className="sr-only">End time</label>
              <input
                id="endTime"
                name="endTime"
                type="time"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
              />
              <Button type="submit" className="px-6 py-2">
                Search
              </Button>
            </form>
          </div>
    );
}