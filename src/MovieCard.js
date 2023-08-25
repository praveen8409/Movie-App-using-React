import {Component} from "react";
import avangers from "./avengers.jpg"

class MovieCard extends Component{

    render(){
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={avangers} alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">The Avenger</div>
                        <div className="plot">Supernatural powers shown in the movie.</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                    <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10337/10337430.png" />
                                    <img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"className="stars"/>  
                                    <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png" />
                                    <span>0</span>
                            </div>
                            <div className="favourite-btn">Favourite</div>
                            <div className="cart-btn">Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard;