import { IMAGE_URL } from "../../utils/constants";
const ResturantCard = (props) => {
    const {cloudinaryImageId , name , avgRating ,cuisines} = props?.data;
    return(
            <div className="res-card">
                <img className = "" src={IMAGE_URL + cloudinaryImageId}/>
                <h3>{name}</h3>
                <p>Ratings: {avgRating}</p>
                <p>{cuisines.join(", ")}</p>
            </div>
    );

}
export default ResturantCard;
