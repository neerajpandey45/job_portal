"use client";
import React from "react";
const EducationSection = ({formData,handleChange}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="bg-white border rounded-5 p-10 space-y-3 w-full"
      >
        <div>
          <label>Education (Degree)</label>
          <input
            type="text"
            name="degree"
            value={formData.degree||""}
            onChange={handleChange}
            placeholder="Enter degree"
            className="w-full border py-1 rounded-3"
            required
          />
        </div>
        <div>
          <label>University</label>
          <input
            type="text"
            name="institution"
            value={formData.institution||""}
            onChange={handleChange}
            placeholder="Enter university"
            className="w-full border py-1 rounded-3"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>From Year</label>
            <input
              type="date"
              name="startYear"
              value={formData.startYear ||""}
              onChange={handleChange}
              className="w-full border py-1 rounded-3"
              required
            />
          </div>
          <div>
            <label>To</label>
            <input
              type="date"
              name="endYear"
              value={formData.endYear||""}
              onChange={handleChange}
              className="w-full border py-1 rounded-3"
              required
            />
          </div>
        </div>
        <div>
          <label>Score (CGPA / %)</label>
          <input
            type="text"
            name="score"
            value={formData.score ||""}
            onChange={handleChange}
            placeholder="Enter score"
            className="w-full border py-1 rounded-3"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default EducationSection;
