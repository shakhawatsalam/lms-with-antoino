import { db } from "@/lib/db";
import React from "react";
import { Categories } from "./_components/categories";
import { SearchInput } from "@/components/search-input";

const SearchPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <div className='px-6 pt-6 md:px-0 md:pt-0 md:invisible md:mb-0 visible'>
        <SearchInput />
      </div>
      <div className='p-6'>
        <Categories items={categories} />
      </div>
    </>
  );
};

export default SearchPage;
