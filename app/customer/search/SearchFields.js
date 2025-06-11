'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SearchFields({visits, setVisits}) {
  const handleSearch = (e) => {
    e.preventDefault();

    // collect values
    const formData = new FormData(e.target);
    const startDate = `${formData.get("startDate")}T${formData.get("startTime")}`;
    const endDate = `${formData.get("endDate")}T${formData.get("endTime")}`;
    const payload = {
      // service:     formData.get("search")     || "",
      location_lat: 0,
     location_lon: 0,
     service_type: "electrician",
      start_time: startDate  || "",
      end_time:    endDate    || "",
    };

    try {
      const res = fetch("http://localhost:8080/visits/search", {
        method: "POST",
        credentials: "include",           // ← this is critical
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json()).then((res) => {
        setVisits([...res])
      });
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div className="w-full">
      <form className="flex gap-2" onSubmit={handleSearch}>
        <input
          name="search"
          type="text"
          placeholder="Search vendors..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
        />

        <input
          name="startDate"
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
        />

        <input
          id="startTime"
          name="startTime"
          type="time"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
        />

        <input
          name="endDate"
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white focus:ring-yellow-500"
        />

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
