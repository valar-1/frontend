import PlaceCard from './PlaceCard';
import './Places.css';

function PlaceGrid({ griditems }) {
  console.log(griditems);
  return (
    <div className="placegrid" >
      {griditems.map((item, index) => (
        <div className="place-col" key={index}>
          <PlaceCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default PlaceGrid;
