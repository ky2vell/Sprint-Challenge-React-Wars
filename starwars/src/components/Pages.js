import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pages = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink first onClick={() => paginate(1)} href='#' />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          href='#'
        />
      </PaginationItem>
      {pageNumbers.map(number => (
        <PaginationItem key={number} className='mb-1'>
          <PaginationLink
            onClick={() => paginate(number)}
            href='#'
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          next
          onClick={() =>
            currentPage < pageNumbers.length && paginate(currentPage + 1)
          }
          href='#'
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          onClick={() => paginate(pageNumbers.length)}
          href='#'
        />
      </PaginationItem>
    </Pagination>
  );
};

export default Pages;
