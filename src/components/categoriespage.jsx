import bg from "../assets/burgerfoodle.svg";
import pz from "../assets/pizza.svg";
import fr from "../assets/frenchfries.svg";
import "./categories.css";
// import {Link} from "react-router-dom";
function Categories(){
    return(
        <>
        <section className="categoriescnt">
            <div className="ctg">
                <div className="ctg1">
                    <h1>Best <span className="delivered">Delivered</span> Categories</h1>     
                </div>
                <div className="ctg2">
                <p>Here Are Some Of Our Best Distributed Categories. If You Want You Can Order From Here</p>
                </div>
            </div>
            <div className="picswithorder">
                <div>
                    <div className="pwoimg">
                        <img src={bg} alt="" />
                    </div>
                    <div className="pwoimgcnt">
                        <h2>Chicken Burger</h2>
                        <div className="odsvg">
                        <a href="">Order Now</a>
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18l6-6-6-6" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pwoimg">
                      <img src={pz} alt="" />
                    </div>
                    <div className="pwoimgcnt kl">
                    <h2>Pizza</h2>
                    <div className="odsvg">
                        <a href="">Order Now </a> 
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18l6-6-6-6" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pwoimg">
                        <img src={fr} alt="" />
                    </div>
                    <div className="pwoimgcnt lk">
                    <h2>French Fries</h2>
                    <div className="odsvg">
                    <a href="">Order Now </a> 
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18l6-6-6-6" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Categories;