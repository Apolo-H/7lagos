import Style from "./index.module.css";

function CheckIn() {
  return (
    <>
      <div className={Style.checkIn}>
        <div className={Style.checkinBlocks}>
          <div className={Style.block}>
            <input type="date" id="start-date" name="trip-start"></input>
          </div>
          <div className={Style.block}>
            <input type="date" id="end-date" name="trip-end"></input>
          </div>
          <div className={Style.block}>
            <input
              type="number"
              id="guests"
              name="trip-guests"
              placeholder="Hóspedes"
            ></input>
          </div>
          <div className={Style.block}>
            <input
              type="text"
              id="cupom"
              name="trip-cupom"
              placeholder="Cupom"
            />
          </div>
          <div className={Style.block}>
            <p>CheckIn</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckIn;
