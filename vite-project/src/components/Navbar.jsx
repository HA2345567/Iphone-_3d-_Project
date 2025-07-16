import { appleImg, searchImg, bagImg } from "../utils"
import { navLists } from "../constants"
export const Navbar = () => {
    return (
        <header className="flex justify-between items-center w-full py-5 sm:px-10 px-5 ">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="Apple" width={14} height={18} />

                <ul className="flex flex-1 justify-center max-sm:hidden">
                    {(navLists || []).map((nav, i) => (
                        <li key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white hover:underline transition-all ">
                            {nav}
                        </li>
                    ))}
                </ul>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" height={18} width={18} />
                    <img src={bagImg} alt="bag" height={18} width={18} />
                </div>
            </nav>
        </header>
    );
}