import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SyncLoader from "react-spinners/SyncLoader";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reduxStore";

interface ButtonProps {
  title?: string | React.ReactNode;
  titleHovering?: string;
  className?: string;
  classNameIcon?: string;
  classNameArrows?: string;
  classNameArrowLeft?: string;
  classNameArrowRight?: string;
  type?: "button" | "submit" | "reset";
  iconCart?: React.ReactNode;
  iconFavorite?: React.ReactNode;
  iconFavoriteCounter?: boolean;
}

export default function Button({
  title,
  className,
  classNameIcon,
  classNameArrows,
  classNameArrowLeft,
  classNameArrowRight,
  type,
  titleHovering,
  iconCart,
  iconFavorite,
  iconFavoriteCounter
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const productsCartLenght = useSelector(
    (state: RootState) => state.productsCartSlice.productsCartLengthState
  );

  const favorites = useSelector(
    (state: RootState) => state.wishlistSlice.favoriteProducts
  );

  return (
    <>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type={type}
        className={`${className} relative focus:outline-none py-[8px] group flex justify-between items-center w-fit h-full hover:translate-y-[6px] bg-[var(--primary-color)] hover:bg-[var(--hovering-color)] tracking-wide px-3 rounded-lg text-[var(--hovering-color)] hover:text-[var(--primary-color)] transition-all duration-500 ease-in-out ring-2 ring-[var(--primary-color)] hover:ring-2 `}
        aria-label={typeof title === "string" ? title : undefined}
        title={titleHovering}>
        {iconCart && (
          <span className="absolute text-lg -top-[7px] left-[25px]">
            {productsCartLenght}
          </span>
        )}
        {iconFavorite && <span className="mr-2 pt-[2px]">{iconFavorite}</span>}
        {iconFavoriteCounter && (
          <span className="absolute text-lg -top-[7px] left-[27px]">
            {favorites.length}
          </span>
        )}
        {iconCart && <span className="mr-2 ml-2">{iconCart}</span>}
        {title === "load" ? (
          <SyncLoader
            size={9}
            loading
            color={isHovered ? "var(--primary-color)" : "white"}
            className="mx-auto flex justify-center items-center"
          />
        ) : (
          title
        )}

        <span
          className={`${classNameArrows} relative ml-2 w-7 h-7 overflow-hidden bg-[var(--hovering-color)] group-hover:bg-[var(--primary-color)] rounded-full`}>
          <span
            className={`${classNameIcon} ${classNameArrowRight} text-[var(--primary-color)] absolute -translate-x-[50%] group-hover:translate-x-[50%] transition-all duration-500 ease-in-out`}>
            <KeyboardDoubleArrowRightIcon fontSize="small" />
          </span>

          <span
            className={`${classNameIcon} ${classNameArrowLeft} absolute group-hover:-translate-x-[50%] -translate-x-[150%] transition-all duration-500 ease-in-out`}>
            <span className="text-[var(--primary-color)] group-hover:text-[var(--hovering-color)] transition-all duration-500 ease-in-out">
              <KeyboardDoubleArrowRightIcon fontSize="small" />
            </span>
          </span>
        </span>
      </button>
    </>
  );
}
