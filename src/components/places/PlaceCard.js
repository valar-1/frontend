import { Link } from 'react-router-dom';
import './Places.css';

function PlaceCard({ title, stitle, price, image, titleUrl }) {
  return (
    <div className="place-card">
      <Link to={titleUrl} className="card-image-wrap">
        <div className="card-place-image" >
          <img src={image} className="card-img-top" alt="Place" />
        </div>
      </Link>
      <div className="card-content">
        <Link to={titleUrl}>
          <h4 className="card-title">{title}</h4>
          <p className="card-sub">{stitle}</p>
        </Link>
        <div className="card-price">
          <span className="card-price__amount">{price}&nbsp;</span>
          <span className="card-price__label">/ &nbsp;per day</span>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
