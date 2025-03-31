import { useState } from "react";
import "./navbar.css";
import  cart from "../assets/cartlogo.png";
function NavBar() {
  const [active, setActive] = useState("Home"); 

  return (
    <header>
      <nav>
        <div className="foodleName">
          <h1>Foodle</h1>
        </div>
        <div className="uls">
          <ul className="ulSection">
            {["Home", "Offer", "Service", "Menu", "About Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={active === item ? "active" : ""}
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="LoginSignUpBtn">
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <button>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </button>
            <div className="cartlogodiv">
                <img src={cart} alt="" />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
