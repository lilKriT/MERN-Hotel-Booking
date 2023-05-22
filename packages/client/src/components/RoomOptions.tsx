interface IRoomOptions {
  roomOptions: {
    adults: number;
    children: number;
    rooms: number;
  };
  handleOptionChange: (option: string, change: number) => void;
}

const RoomOptions = ({ roomOptions, handleOptionChange }: IRoomOptions) => {
  return (
    <div className="roomOptions absolute bg-gray-300 p-4 w-full">
      <div className="roomOptionItem flex justify-between">
        <span>Adults: </span>
        <div>
          <button
            type="button"
            disabled={roomOptions.adults <= 1}
            onClick={() => handleOptionChange("adults", -1)}
          >
            -
          </button>
          <span>{roomOptions.adults}</span>
          <button type="button" onClick={() => handleOptionChange("adults", 1)}>
            +
          </button>
        </div>
      </div>
      <div className="roomOptionItem flex justify-between">
        <span>Children: </span>
        <div>
          <button
            type="button"
            disabled={roomOptions.children <= 0}
            onClick={() => handleOptionChange("children", -1)}
          >
            -
          </button>
          <span>{roomOptions.children}</span>
          <button
            type="button"
            onClick={() => handleOptionChange("children", 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="roomOptionItem flex justify-between">
        <span>Rooms: </span>
        <div>
          <button
            type="button"
            disabled={roomOptions.rooms <= 1}
            onClick={() => handleOptionChange("rooms", -1)}
          >
            -
          </button>
          <span>{roomOptions.rooms}</span>
          <button type="button" onClick={() => handleOptionChange("rooms", 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomOptions;
