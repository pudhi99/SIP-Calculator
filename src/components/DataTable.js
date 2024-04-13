"use client";
import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 12 },
    },
    useSortBy,
    usePagination
  );

  // Calculate the range of page buttons to display
  const getPageRange = (pageCount, currentPage) => {
    const totalButtons = 5; // Total number of buttons to display
    const maxAdjacentButtons = Math.floor((totalButtons - 3) / 2); // Number of adjacent buttons on each side of current page

    let startPage = Math.max(0, currentPage - maxAdjacentButtons);
    let endPage = Math.min(pageCount - 1, startPage + totalButtons - 1);

    // Adjust startPage and endPage to ensure we always show the first and last page buttons
    if (endPage - startPage + 1 < totalButtons) {
      startPage = Math.max(0, endPage - totalButtons + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const displayedPages = getPageRange(pageCount, pageIndex);

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-x-auto mx-2 sm:mx-5 my-5">
      <table className="min-w-full leading-normal" {...getTableProps()}>
        {/* Table Header */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 bg-gray-700 text-left text-xs font-semibold uppercase tracking-wider"
                  key={column.id}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Table Body */}
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-gray-900" key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    className="px-6 py-4 whitespace-nowrap"
                    {...cell.getCellProps()}
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => gotoPage(0)}
          disabled={pageIndex === 0}
          className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-700"
        >
          First
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-700"
        >
          Previous
        </button>
        <div className="flex">
          {displayedPages.map((pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => gotoPage(pageIdx)}
              className={`px-3 py-1 mx-1 rounded-md ${
                pageIndex === pageIdx
                  ? "bg-gray-700"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {pageIdx + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-700"
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
          className="px-3 py-1 rounded-md bg-gray-600 hover:bg-gray-700"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default DataTable;
