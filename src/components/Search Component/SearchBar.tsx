import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { allProducts } from "../../Data/AllProducts_Data";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  addSearchResults,
  setIsSearchOpen,
  setSearchQuery
} from "../../Redux/searchSlice";
import { setIsFooter } from "../../Redux/footerSlice";
import { RiCloseFill } from "react-icons/ri";

import { RefObject } from "react";
import { toastError } from "../ui/utils";

interface SearchBarProps {
  props: {
    searchInputRef: RefObject<HTMLInputElement | null>;
    searchDivRef: RefObject<HTMLDivElement | null>;
  };
}

export default function SearchBar({
  props: { searchInputRef, searchDivRef }
}: SearchBarProps) {
  const dispatch = useDispatch<AppDispatch>();

  const isSearchOpen = useSelector(
    (state: RootState) => state.searchSlice.isSearchOpen
  );

  const searchQueryName = useSelector(
    (state: RootState) => state.searchSlice.searchQuery
  );

  const Navigate = useNavigate();

  const handleSearch = () => {
    const results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQueryName.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQueryName.toLowerCase())
    );

    if (searchQueryName.trim()) {
      Navigate(`/search`);
      dispatch(addSearchResults(results));
      dispatch(setIsSearchOpen(false));
      dispatch(setSearchQuery(searchQueryName));
    } else {
      toastError("Please enter a search query.");
    }
  };

  return (
    <>
      {/* Search Bar. */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed z-10 xl:top-[93.5px] xs:top-[78px] left-0 right-0 w-full h-screen bg-black/80 backdrop-blur-3xl">
            {/* Input with search icon inside */}
            <div className="relative top-[25%] -translate-y-[50%] left-1/2 -translate-x-1/2 xl:w-[50%] md:w-[60%] xs:w-[90%]">
              <div
                ref={searchDivRef}
                className="cursor-pointer"
                onClick={() => {
                  handleSearch();
                }}>
                <BiSearchAlt2 className="absolute right-4 top-1/2 -translate-y-1/2 text-[22px]" />
              </div>

              <input
                ref={searchInputRef}
                type="text"
                value={searchQueryName}
                onChange={(e) => {
                  dispatch(setSearchQuery(e.target.value));
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by product or category name..."
                className="h-12 w-full px-5 rounded-full ring-2 ring-[var(--primary-color)] outline-none bg-white text-black"
              />

              {/* Search Results */}
              {searchQueryName.trim() && (
                <div className="absolute z-50 w-full bg-white shadow-lg rounded-lg mt-2 max-h-[380px] overflow-y-auto">
                  {allProducts
                    .filter(
                      (product) =>
                        product.name
                          .toLowerCase()
                          .includes(searchQueryName.toLowerCase()) ||
                        product.category
                          .toLowerCase()
                          .includes(searchQueryName.toLowerCase())
                    )
                    .map((productFiltered, index) => (
                      <Link
                        key={index}
                        to={`/productDetails/${productFiltered.id}#productDetails`}
                        className="flex items-center space-x-4 p-2 hover:bg-gray-100 transition"
                        onClick={() => {
                          dispatch(setIsSearchOpen(false));
                          dispatch(setIsFooter());
                          dispatch(setSearchQuery(""));
                        }}>
                        <img
                          src={productFiltered.img}
                          alt={productFiltered.name}
                          className="w-10 h-10 object-contain rounded-full"
                        />
                        <span>
                          {(() => {
                            const name = productFiltered.name;
                            const query = searchQueryName.toLowerCase();
                            const lowerName = name.toLowerCase();
                            const matchIndex = lowerName.indexOf(query);

                            if (matchIndex === -1) {
                              return <span className="text-black">{name}</span>;
                            }

                            const before = name.slice(0, matchIndex);
                            const match = name.slice(
                              matchIndex,
                              matchIndex + query.length
                            );
                            const after = name.slice(matchIndex + query.length);

                            return (
                              <>
                                <span className="text-black">{before}</span>
                                <span className="text-[var(--primary-color)]">
                                  {match}
                                </span>
                                <span className="text-black">{after}</span>
                              </>
                            );
                          })()}
                        </span>
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Close button */}
            <button
              type="button"
              title="Close"
              className="fixed right-7 top-7 cursor-pointer rounded-full border border-[var(--primary-color)] bg-black"
              onClick={() => {
                dispatch(setIsSearchOpen(false));
                dispatch(setSearchQuery(""));
              }}>
              <RiCloseFill
                fontSize="2.2em"
                className="text-[var(--primary-color)]"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
