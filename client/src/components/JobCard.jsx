import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="rounded shadow p-6 border">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} />
      </div>
      <h4 className="font-medium mt-2 text-xl">{job.title}</h4>
      <div className="text-xs mt-2 gap-3 flex items-center">
        <span className="rounded px-4 py-1.5 bg-blue-50 border-blue-200">
          {job.location}
        </span>
        <span className="rounded px-4 py-1.5 bg-red-50 border-red-200">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="flex gap-4 text-sm mt-4">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-blue-600 px-4 py-2 rounded text-white"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-500 px-4 py-2 border border-gray-500"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
