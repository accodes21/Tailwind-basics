import useDarkMode from "../hook/useDarkMode";
import {FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun} from 'react-icons/fa'

const Navigation = () => {
    return(
        <div className="navigation">
            <HashTag/>
            <ThemeIcon/>
            <Search/>
            <BellIcon/>
            <UserCircle/>
        </div>
    )
}

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

const Search = () => (
    <div className="search">
        <input type="text" name="search" className="search-input" placeholder="Search..." />
        <FaSearch size="18" className="text-secondary"/> 
    </div>
);

const BellIcon = () => {<FaRegBell size="18" className="navigation-icon"/>};
const UserCircle = () => {<FaUserCircle size="18" className="navigation-icon"/>};
const HashTag = () => {<FaHashtag size="18" className="navigation-icon"/>};

export default Navigation;
