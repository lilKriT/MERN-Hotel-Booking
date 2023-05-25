interface IHotelCard {
  hotel: any;
}

const HotelCard = ({ hotel }: IHotelCard) => {
  return <div className="h-40">HotelCard</div>;
};

export default HotelCard;
