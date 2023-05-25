interface IHotelCard {
  hotel: any;
}

const HotelCard = ({ hotel }: IHotelCard) => {
  return (
    <div className="bg-slate-300 mb-8 p-8 rounded-lg">
      <h2>{hotel.name}</h2>
      <p>{hotel.rating}</p>
      <p>{hotel.price}</p>
    </div>
  );
};

export default HotelCard;
