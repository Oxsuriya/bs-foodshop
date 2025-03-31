import NavBar from "./navbar";
import Homelogo from "../assets/homelogo.svg";
import dl from "../assets/dinner.png";
import deliverBike from "../assets/deliverybike.png"    
import refresh from "../assets/refresh.png";
import price from "../assets/price.png";
import "./Home.css";
import Categories from "./categoriespage.jsx";
import Menu from "./menu.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter } from "react-router-dom";
function Home(){
    return(
        <>
    <NavBar></NavBar>
        <section className="HomeWrapper">
            <div className="hw1">
                <div className="hw11">
                    <div className="hw111">
                        <div className="hw1111">
                            <h1>
                                All Fast Food is Available at <span className="foodlespan"> Foodle</span>
                            </h1>
                        </div>
                        <div className="hw1112">
                            {/* <img src="" alt="" /> */}
                            <h2>We are Just a Click Away When You Crave For Delicious Fast Food</h2>
                        </div>
                    </div>
                    <div className="hw112">
                        <button className="bdl"> <img src={dl} alt="" />Buy Now</button>
                        <button>How to Order</button>
                    </div>
                </div>
               
                <div className="hw12">
                    <img src={Homelogo} alt="" />
                </div>
            </div>  
            <div className="hw13">
                        <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="rgb(110, 66, 0)"/>
            </marker>
        </defs>
        <path d="M10,50 Q80,10 100,40 Q120,70 150,60 T190,80" 
                stroke="rgb(110, 66, 0)" strokeWidth="2" fill="transparent" 
                strokeDasharray="6,6" markerEnd="url(#arrowhead)"/>
        </svg>
                </div>
            <div className="fffcontainer">
                <div className="fcone">
                    <div className="fastdelimg">
                    <img src={deliverBike} alt="" />
                    </div>
                    <div className="fastdel">
                        <h2><b>Fast Delivery</b></h2>
                        <p>The Food Will Be delivered To Your Home Within 1-2 Hours Of Your Ordering.</p>
                    </div>
                </div>
                <div className="fctwo">
                    <div className="freshfoodimg">
                    <img src={refresh} alt="" />
                    </div>
                    <div className="freshfood">
                        <h2><b>Fresh Food</b></h2>
                        <p>Your Food Will Be Delivered 100% Fresh To Your Home. We Do Not Deliver Stale Food.</p>
                    </div>
                </div>
                <div className="fcthree">
                    <div className="freedelimg"> 
                    <img src={price} alt="" />
                    </div>
                    <div className="freedel">
                        <h2><b>Free Delivery</b></h2>
                        <p>Your Food Delivery Is Absolutely Free.No Cost Just Order And Enjoy.</p>
                    </div>
                </div>
                </div>       
        </section>
        <Categories></Categories>
        <Menu> </Menu>
        <Footer></Footer>
        {/* <Login></Login> */}
    </>
    )
}
export default Home;