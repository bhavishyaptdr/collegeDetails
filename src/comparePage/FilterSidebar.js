import React, { useState } from "react";

const FilterSidebar = () => {
  const [fee, setFee] = useState(500000);

  return (
    <div className="w-64 bg-white shadow-lg p-4 fixed md:relative z-10">
      <h2 className="font-bold text-lg">Search By Filters</h2>

      {/* Study Mode */}
      <div className="mt-4">
        <h3 className="font-semibold">Study Mode</h3>
        <label className="block"><input type="checkbox" /> Online Programmes</label>
      </div>

      {/* Course Fee */}
      <div className="mt-4">
        <h3 className="font-semibold">Course Fee</h3>
        <input
          type="range" min="0" max="1000000" value={fee}
          onChange={(e) => setFee(e.target.value)}
          className="w-full mt-2"
        />
        <p>Selected Fee: ₹{fee}</p>
      </div>

      {/* Degree */}
      <div className="mt-4">
        <h3 className="font-semibold">Degree</h3>
        <label className="block"><input type="checkbox" /> MBA</label>
        <label className="block"><input type="checkbox" /> PGDM</label>
        <label className="block"><input type="checkbox" /> M.Com</label>
      </div>
    </div>
  );
};

export default FilterSidebar;
