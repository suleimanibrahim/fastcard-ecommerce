import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../Data/AllProducts_Data";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import Product from "../Product Component/Product";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import {
  setIsSureToClearAllProductsFromWishlist,
  clearAllProductsFromFavorite,
} from "../../Redux/wishlistSlice";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toastSuccess } from "../ui/utils";

export default function Wishlist() {
  const favorites = useSelector(
    (state: RootState) => state.wishlistSlice?.favoriteProducts
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();


  const isSureToClearAllProductsFromWishlist = useSelector(
    (state: RootState) =>
      state.wishlistSlice?.isSureToClearAllProductsFromWishlist
  );

  const isSureToRemoveProductFromWishlist = useSelector(
    (state: RootState) => state.wishlistSlice?.isSureToRemoveProductFromWishlist
  );

  function handleClearCart() {
    setIsLoading(true);
    dispatch(setIsSureToClearAllProductsFromWishlist(true));
  }

  const favRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (favRef.current && !favRef.current.contains(target)) {
        setIsLoading(false);
        dispatch(setIsSureToClearAllProductsFromWishlist(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    if (
      isSureToClearAllProductsFromWishlist ||
      isSureToRemoveProductFromWishlist
    ) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isSureToClearAllProductsFromWishlist, isSureToRemoveProductFromWishlist]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* In Case Wishlist is Empty. */}
      {favorites.length === 0 ? (
        <div className="relative flex justify-center items-center h-screen w-full bg-gray-200 tracking-wider overflow-hidden">
          {/* Glowing gradient balls */}
          <motion.div
            className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/25 to-emerald-400/15 -bottom-20 left-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/25 to-emerald-400/15 -top-5 bottom-26 -right-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              x: [0, 20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/25 to-emerald-400/15 bottom-10 right-10"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="flex flex-col justify-center items-center xl:w-[50%] lg:w-[65%] md:w-[85%] xs:w-[88%] ">
            {/* Broken Heart Image. */}
            <motion.div
              className="w-[70%] flex justify-center backdrop-blur-md"
              initial={{ opacity: 0, x: -30, rotate: -6 }}
              whileInView={{
                opacity: 1,
                x: [-30, 0, -30],
                rotate: [-6, 0, 6]
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                x: { repeat: Infinity, duration: 4 },
                rotate: { duration: 4, repeat: Infinity, repeatType: "reverse" }
              }}>
              <img
                src="/Cart & Favorite Photos/Broken Heart.png"
                alt="Empty Favorites Photo"
                className="md:w-[45%] xs:w-[65%] "
              />
            </motion.div>

            {/* Empty Wishlist Text */}
            <motion.div
              className="flex flex-col justify-center items-center gap-y-5 backdrop-blur-sm md:shadow-lg rounded-3xl md:pb-10 md:px-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              <motion.h2
                className="xs:text-3xl md:text-4xl text-gray-700 font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}>
                Your Wishlist is{" "}
                <span className="text-emerald-700">Empty!</span>
              </motion.h2>

              <motion.h2
                className="xs:text-xl md:text-[22px] text-gray-700 font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}>
                Your wishlist is a blank canvas — start filling it with what you
                truly love!
              </motion.h2>

              {/* Go Shopping Button. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}>
                <Link to="/products">
                  <Button
                    title="Go Shopping"
                    className="uppercase tracking-wider"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ) : (
        //! In Case Wishlist has Products.
        <section className="relative xs:pt-[100px] lg:pt-32 lg:pb-[50px] xs:pb-[30px] sm:px-10 xs:px-5 tracking-wider overflow-hidden">
          {/* Glowing gradient balls. */}
          <motion.div
            className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/25 to-emerald-400/15 -bottom-20 left-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/25 to-emerald-400/15 -top-5 bottom-26 -right-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              x: [0, 20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/25 to-emerald-400/15 bottom-10 right-10"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <div className="flex justify-between items-start w-full md:mb-12 xs:mb-8">
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                {/* Title Part. */}
                <motion.div
                  className="w-fit"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}>
                  <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
                    Wishlist
                  </h2>
                  <div className="h-[3px] w-[90%] mx-auto bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
                </motion.div>

                {/* Clear All Button. */}
                <motion.button
                  type="button"
                  title="Clear All"
                  onClick={handleClearCart}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}>
                  <Button title={isLoading ? "load" : "Clear All"} />
                </motion.button>
              </div>

              {/* Wishlist Items Count. */}
              <div className="w-fit mx-auto xs:mt-3 md:mt-0">
                <motion.h2
                  className="backdrop-blur-lg text-xl text-[#124030] font-semibold border-b-[3px] border-[#124030] rounded-lg p-1 pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}>
                  {favorites?.length} {favorites?.length > 1 ? "Items" : "Item"}{" "}
                  in Wishlist
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Wishlist Products Part. */}
          <motion.div
            className="gap-7 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {allProducts.map(
              (product) =>
                favorites.some(
                  (favorite) =>
                    favorite.productId === product.id &&
                    favorite.productName === product.name
                ) && (
                  <motion.div
                    className="border-2 bg-white rounded-lg w-full sm:max-w-[340px] backdrop-blur-sm"
                    variants={childVariants}>
                    <Product product={product} />
                  </motion.div>
                )
            )}
          </motion.div>

          {/* Sure To Clear All Products From Wishlist Part. */}
          <div
            className={`${
              isSureToClearAllProductsFromWishlist
                ? "1xl:top-[94px] xl:top-[93.5px] xs:top-[77.5px] translate-y-0"
                : "-top-[100%] -translate-y-[50%]"
            } fixed left-1/2 -translate-x-1/2 z-10 w-full pointer-events-auto transition-all duration-500 ease-in-out flex justify-center`}>
            <div
              className="lg:w-[35%] md:w-[50%] sm:w-[70%] xs:w-[90%] h-fit bg-gray-300 flex flex-col justify-between px-5 py-10 rounded-2xl "
              ref={favRef}>
              <h2 className="text-xl text-center font-bold text-gray-700 mb-8">
                Are you sure you want to clear all products from your wishlist?
              </h2>

              <div className="flex justify-around border-t-[1.6px] border-gray-500 pt-8">
                <div
                  onClick={() => {
                    dispatch(setIsSureToClearAllProductsFromWishlist(false));
                    dispatch(clearAllProductsFromFavorite());
                    setIsLoading(false);
                    toastSuccess("Your wishlist has been cleared!");
                  }}>
                  <Button title="Yes" />
                </div>

                <div
                  onClick={() => {
                    dispatch(setIsSureToClearAllProductsFromWishlist(false));
                    setIsLoading(false);
                  }}>
                  <Button title="No" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
