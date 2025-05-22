import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Create an array of page numbers (e.g., [1, 2, 3, 4, 5])
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Pagination Navigation">
      <ul className="inline-flex space-x-1 text-sm h-10">

        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            className="px-4 h-10 rounded-s-lg border border-gray-300 bg-white text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-[#333333] dark:border-[#414141] dark:text-white"
          >
            Previous
          </button>
        </li>

        {/* Page Number Buttons */}
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`px-4 h-10 border border-gray-300 ${
                currentPage === page
                  ? "text-[#000] dark:bg-[#333333] hover:text-[#000]"
                  : "bg-white dark:text-white dark:bg-[#333333] dark:border-[#414141]  cursor-pointer"
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 h-10 rounded-e-lg border border-gray-300 bg-white text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-[#333333] dark:border-[#414141] dark:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
