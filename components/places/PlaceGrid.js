import PlaceCard from './PlaceCard';

function PlaceGrid({ griditems }) {
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
