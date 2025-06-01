import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { scrollToTop } from "../ui/utils";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { setIsFooter } from "../../Redux/footerSlice";
import { motion } from "framer-motion";
import { BiSearchAlt2 } from "react-icons/bi";
import { setIsSearchOpen, setSearchQuery } from "../../Redux/searchSlice";

export default function Hamburger_Button_Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const menuButton = useRef<HTMLButtonElement | null>(null);

  const productsCartLength = useSelector(
    (state: RootState) => state.productsCartSlice.productsCartLengthState
  );

  const favorites = useSelector(
    (state: RootState) => state.wishlistSlice.favoriteProducts
  );

  const isNavbar = useSelector(
    (state: RootState) => state.footerSlice.isNavbar
  );

  const isSearchOpen = useSelector(
    (state: RootState) => state.searchSlice.isSearchOpen
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuRef.current &&
        !menuRef.current?.contains(target) &&
        !menuButton.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return (
    <>
      {/*================================== Hamburger Button ========================================*/}
      <div className="relative">
        <div className="xl:hidden flex items-center justify-between w-full space-x-4">
          {token && (
            <>
              {/* Counter For Products Cart. */}
              <Link
                to="/cart"
                onClick={() => {
                  scrollToTop();
                  dispatch(setIsFooter());
                  setIsOpen(false);
                  dispatch(setIsSearchOpen(false));
                }}>
                <Button
                  titleHovering="Go To Cart"
                  type="button"
                  iconCart={
                    productsCartLength > 0 ? (
                      <ShoppingCartRoundedIcon />
                    ) : (
                      <AddShoppingCartRoundedIcon />
                    )
                  }
                  className="pl-0 py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                />
              </Link>
            </>
          )}

          {/* Hamburger Button. */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              dispatch(setIsFooter());
              dispatch(setIsSearchOpen(false));
            }}
            ref={menuButton}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)] xl:hidden group flex flex-col justify-center items-center w-10 h-11 rounded-lg bg-[var(--primary-color)] hover:bg-transparent hover:translate-y-[6px] transition-all duration-500 ease-in-out ring-2 ring-[var(--primary-color)] hover:ring-2">
            <span
              className={`${
                isOpen ? "rotate-45 translate-y-2" : "rotate-0"
              } w-8 h-1 bg-white rounded-lg mb-1 group-hover:bg-[var(--primary-color)] transition-all duration-500 ease-in-out`}></span>
            <span
              className={`${
                isOpen ? "opacity-0" : "opacity-100"
              } w-8 h-1 bg-white rounded-lg mb-1 group-hover:bg-[var(--primary-color)] transition-all duration-500 ease-in-out`}></span>
            <span
              className={`${
                isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
              } w-8 h-1 bg-white rounded-lg group-hover:bg-[var(--primary-color)] transition-all duration-500 ease-in-out`}></span>
          </button>
        </div>

        {/*====================================== Hamburger Menu ========================================*/}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } xl:hidden border-l-[3px] border-[var(--primary-color)] absolute h-screen xs:w-screen sm:w-96 top-[63px] backdrop-blur-3xl shadow-xl bg-black/85 -right-5 transition-transform duration-500 ease-in-out rounded-tl-xl rounded-br-3xl`}
          ref={menuRef}>
          <div className="flex flex-col items-center ">
            {/* Logo & Site Name. */}
            <div className="flex space-x-4 rtl:space-x-reverse mt-4 pt-5">
              <Link
                to="/wishlist"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                  dispatch(setIsFooter());
                }}>
                <Button
                  title="Wishlist"
                  titleHovering="My Wishlist"
                  type="button"
                  iconFavorite={
                    favorites.length === 0 ? (
                      <FavoriteBorderOutlinedIcon />
                    ) : (
                      <FavoriteRoundedIcon />
                    )
                  }
                  iconFavoriteCounter={true}
                  className="hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                />
              </Link>

              <motion.div>
                <div
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                    dispatch(setIsFooter());
                    dispatch(setIsSearchOpen(!isSearchOpen));
                    dispatch(setSearchQuery(""));
                  }}>
                  <Button
                    title="Search"
                    titleHovering="Search Now"
                    type="button"
                    searchIcon={<BiSearchAlt2 fontSize="1.7em" />}
                    className="py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                  />
                </div>
              </motion.div>
            </div>

            {/* Navigation Links. */}
            {token && (
              <ul className="flex flex-col items-start tracking-widest p-4 px-[51.4px] mt-20 rounded-xl border-2 border-[var(--primary-color)]">
                {[
                  { itemName: "Home", itemLink: "/" },
                  { itemName: "Products", itemLink: "/products" },
                  { itemName: "Categories", itemLink: "/categories" },
                  { itemName: "About", itemLink: "/about" },
                  { itemName: "Contact", itemLink: "/contact" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.itemLink}
                      className={`block relative group mt-2 tracking-[0.09em] uppercase text-lg ${
                        location.pathname === item.itemLink && isNavbar === true
                          ? "text-[var(--primary-color)] "
                          : "text-white"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                        dispatch(setIsFooter());
                      }}>
                      {item.itemName}
                      <span
                        className={`${
                          location.pathname === item.itemLink &&
                          isNavbar === true
                            ? "scale-x-100"
                            : "scale-x-0"
                        } pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[var(--primary-color)] origin-center group-hover:scale-x-100 transition-transform duration-300`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Action Buttons. */}
            {token ? (
              <div className=" flex flex-row-reverse mt-[35%] gap-4 items-center justify-center gap-y-5 rtl:space-x-reverse ">
                <div>
                  <Link
                    to="/login"
                    onClick={() => {
                      setIsOpen(false);
                      sessionStorage.removeItem("token");
                      navigate("/login");
                      scrollToTop();
                      dispatch(setIsFooter());
                    }}>
                    <Button
                      title="Log Out"
                      titleHovering="Log Out"
                      type="button"
                      className="py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              //! If user is not logged in, show Log In and Sign Up buttons
              <div className="flex mt-[20%] space-x-4 rtl:space-x-reverse">
                <Link
                  to="/login"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                    dispatch(setIsFooter());
                  }}>
                  <Button
                    title="Log In"
                    titleHovering="Log In"
                    type="button"
                    className="py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                  />
                </Link>
                <Link
                  to="/signup"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                    dispatch(setIsFooter());
                  }}>
                  <Button
                    title="Sign Up"
                    titleHovering="Sign Up"
                    type="button"
                    className="py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
