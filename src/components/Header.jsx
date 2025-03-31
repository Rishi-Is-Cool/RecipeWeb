import React from 'react'
import "../styles/Nav.css";
import NavBar from "../components/NavBar";

const Header = () => {

    // const navigate = useNavigate();
    // const [user, setUser] = useState(null);
    // const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const storedUser = JSON.parse(localStorage.getItem("user"));
    //     if (storedUser) {
    //         setUser(storedUser);
    //     }
    // }, []);

    // useEffect(() => {
    //     const closeDropdown = (event) => {
    //         if (isOpen && !event.target.closest(".user-container")) {
    //             setIsOpen(false);
    //         }
    //     };

    //     document.addEventListener("click", closeDropdown);
    //     return () => document.removeEventListener("click", closeDropdown);
    // }, [isOpen]);

    // const handleLogout = () => {
    //     localStorage.removeItem("user");
    //     setUser(null);
    //     alert("Successfully logged out!");
    //     navigate("/");
    // };

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div>
            <header>
                <div className="header-overlay"></div>
                <NavBar />
            </header>
        </div>
    )
}

export default Header
