"use client";

import { table } from "@/utils/constants";
import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const data = table.data.results;

export default function About() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setCurrentPage(1); // Reset to first page when rows per page change
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full p-4">
      <table className="w-full rounded-full border-2">
        <thead className="border-2">
          <tr>
            <th className="p-4 text-primary">Thumbnail</th>
            <th className="w-64 text-left text-primary">Title</th>
            <th className="w-32 text-left text-primary lg:w-auto">Brand</th>
            <th className="hidden text-left text-primary lg:table-cell">
              Total ad spend
            </th>
            <th className="hidden text-left text-primary lg:table-cell">
              Ad spend 30
            </th>
            <th className="text-left text-primary">Publish Date</th>
            <th className="text-left text-primary">Duration</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr
              key={index}
              className="border-2 transition-all duration-300 hover:bg-gray-100"
            >
              <td className="relative">
                <img
                  src={row.thumbnail}
                  alt="thumbnail"
                  className="mx-auto h-12 w-12 rounded-full"
                />
              </td>
              <td className="line-clamp-4 flex items-center p-2 pl-0 pr-4 font-semibold">
                {row.title}
              </td>
              <td className="font-semibold text-[#3299eb]">{row.brandName}</td>
              <td className="hidden blur-sm lg:table-cell">
                {row.totalSpend || "None"}
              </td>
              <td className="hidden blur-sm lg:table-cell">
                {row.last30Days || "None"}
              </td>
              <td>{formatDate(row.publishedAt)}</td>
              <td>
                {parseInt(row.duration / 60)}:{row.duration % 60}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="relative flex items-center justify-center gap-4 rounded-b-md border-2 p-4">
        <button
          className={`rounded-lg border-2 px-4 py-2 ${
            currentPage === 1 ? "opacity-50" : ""
          }`}
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          <IoArrowBack size={22} />
        </button>
        <span>{currentPage}</span>
        <button
          className={`rounded-lg border-2 px-4 py-2 ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          <IoArrowForward size={22} />
        </button>
        <select
          name="rowsPerPage"
          id="rowsPerPage"
          onChange={handleRowsPerPage}
          className="absolute right-0 z-10 mr-4 w-20 rounded-md border-2 bg-white/10 p-2 backdrop-blur-md"
        >
          {[5, 10, 15, 20, 25, 30].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
