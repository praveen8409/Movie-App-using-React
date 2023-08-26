import { Component } from "react";
import avangers from "./avengers.jpg"

class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers!",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9
        }
        // this.addStars = this.addStars.bind(this);
    }

   

    addStars = ()=>{
        console.log("this ",this);
    }

    render() {
        const { title, plot, price, rating } = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={avangers} alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10337/10337430.png" />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png" onClick={this.addStars} />
                                <span>0</span>
                            </div>
                            <div className="favourite-btn">Favourite</div>
                            <div className="cart-btn">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard;