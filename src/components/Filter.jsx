import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiArrowDown, FiArrowUp, FiRefreshCcw } from "react-icons/fi";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

const Filter = ({categories}) => {
 
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const navigate = useNavigate();
  const pathname = useLocation();

  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const currentCategory = searchParams.get("category") || "all";
    const currentSortOrder = searchParams.get("sortOrder") || "asc";
    const currentSearchTerm = searchParams.get("keyword") || "";

    setCategory(currentCategory);
    setSortOrder(currentSortOrder);
    setSearchTerm(currentSearchTerm);
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        params.set("keyword", searchTerm);
      } else {
        params.delete("keyword");
      }
      navigate(`${pathname.pathname}?${params.toString()}`);
    }, 700);
    return () => clearTimeout(handler);
  }, [searchTerm, navigate, pathname]);


  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    navigate(`${pathname.pathname}?${params.toString()}`);

    setCategory(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => {
      const newOrder = prevOrder === "asc" ? "desc" : "asc";
      params.set("sortOrder", newOrder); 
      navigate(`${pathname.pathname}?${params.toString()}`);
      return newOrder;
    });
  };


  const handleClearFilters = () => {
    navigate(window.location.pathname); 
    setCategory("all");
    setSortOrder("asc");
    setSearchTerm("");
  };



  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        {/* Search BAR */}
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
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
              <MenuItem key={categoryId} value={categoryName}>
                {categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* SORT & CLEAR Filter Button */}
        <Tooltip title="Sorted product by price: asc">
          <Button
            onClick={toggleSortOrder}
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
          >
            Sort By
            {sortOrder === "asc" ? (
              <FiArrowUp size={20} />
            ) : (
              <FiArrowDown size={20} />
            )}
          </Button>
        </Tooltip>

        <button 
        onClick={handleClearFilters}
        className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in focus:outline-none shadow-md cursor-pointer">
          <FiRefreshCcw size={16} />
          <span className="font-semibold">Clear Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
