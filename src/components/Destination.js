import Mountain1 from "../assets/taal.jpg";
import Mountain2 from "../assets/contact.jpg";
import Mountain3 from "../assets/mt.jpg";
import Mountain4 from "../assets/mt1.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal, one of the world's smallest volcanoes, is among two dozen
        active volcanoes in the Philippines, which lies along the Pacific
        “Ring of Fire,” a seismically active region that is prone to
        earthquakes and volcanic eruptions. Taal erupted in January 2020
        with a massive plume of ash and steam that prompted the evacuation
        of tens of thousands of people and the closure of Manila’s
        international airport."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
