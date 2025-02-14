import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiArrowUp, FiRefreshCcw } from "react-icons/fi";
import {useSearchParams} from "react-router-dom"

const Filter = () => {
  const categories = [
    { categoryId: 1, categoryName: "Electronic" },
    { categoryId: 2, categoryName: "Laptop" },
    { categoryId: 3, categoryName: "Smartphone" },
    { categoryId: 4, categoryName: "Desktop" },
  ];
  useSearchParams()
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        {/* Search BAR */}
        <input
          type="text"
          placeholder="Search Products"
          className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <FaSearch className="text-slate-800 absolute left-3 size={20}" />
      </div>

      {/* Category filter */}
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <FormControl variant="outlined" size="small">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            labelId="category-select-label"
            className="text-slate-800 border-slate-700 min-w-[120px]"
            label="Category"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map(({ categoryId, categoryName }) => (
              <MenuItem key={categoryId} value={categoryId}>
                {categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* SORT & CLEAR Filter Button */}
        <Tooltip title="Sorted product by price: asc">
          <Button
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
          >
            Sort By
            <FiArrowUp size={20} />
          </Button>
        </Tooltip>

        <button className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in focus:outline-none shadow-md cursor-pointer">
            <FiRefreshCcw size={16} />
            <span className="font-semibold">Clear Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
