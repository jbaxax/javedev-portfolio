import React, { useState } from "react";

import Link from "next/link";
import { dataGoals } from "../../data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 4;

export default function Goals() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = dataGoals.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dataGoals.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className="flex flex-col gap-3 ">
      {currentItems.map((data) => (
        <div
          key={data.id}
          className="border border-primary py-2 px-4 rounded-lg shadow-lg"
        >
          <Link href={data.link} className="space-y-2">
            <p className="font-bold text-xl">{data.title}</p>
            <p>{data.description}</p>
          </Link>
        </div>
      ))}

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }
            />
          </PaginationItem>

          {currentPage > 2 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink href="#" className="font-bold">
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          {currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Última página (si estamos en página totalPages - 2 o antes, mostramos la última página) */}
          {currentPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem
            onClick={() => handlePageChange(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }
          >
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
