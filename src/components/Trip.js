import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Malaysia.jpg";
import Trip2 from "../assets/France.jpg";
import Trip3 from "../assets/Indonesia.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Yoy can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Malaysia"
          text="Malaysia is a wonderful vacation destination for tourists from all across the world. There are several exotic islands, pristine beaches, picturesque towns and adventure spots. If you are planning to visit Malaysia, then you should be aware of what Malaysia is famous for so that you can make an informed bucket list."
        />

        <TripData
          image={Trip2}
          heading="Trip in France"
          text="From world-renowned monuments to delectable cuisine, France is an incredible destination. This beautiful country offers endless unforgettable experiences for travelers of all kinds. Whether you're a history buff, an adventure junkie, or just want to relax, you'll be able to plan the perfect vacation in France."
        />

        <TripData
          image={Trip3}
          heading="Trip in Indonesia"
          text="Best known for its volcanoes, beaches, and jungles, this island country boasts astonishing beauty. It isn't just one island that makes up Indonesia, rather, the country is an archipelago of over 17,000 islands providing visitors with endless opportunities for adventures or explorations."
        />
      </div>
    </div>
  );
}

export default Trip;
