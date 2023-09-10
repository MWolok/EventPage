import { Zoom } from "react-awesome-reveal";
import axios from "axios";
import { useEffect, useState } from "react";
import icon_location from '../../icons/location.png'
import icon_calender from '../../icons/calendar.png'



const RaceInfo = () => {


    const [nextRaceData, setNextRaceData] = useState();

    useEffect(() => {

      axios
        .get("http://ergast.com/api/f1/current.json")
        .then((response) => {
          const races = response.data.MRData.RaceTable.Races;
          if (races && races.length > 0) {
            const currentDate = new Date();
  
            races.sort((a, b) => new Date(a.date) - new Date(b.date));
  
            const closestRace = races.find(
              (race) => new Date(race.date) > currentDate
            );
  
            if (closestRace) {
              setNextRaceData(closestRace);
            }
          }
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }, []);

	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="r_wrapper">
                <Zoom className="r_item" triggerOnce>
                    <div>
                        <div className="r_outer">
                            <div className="r_inner">
                                <div className="r_icon_square bck_red"></div>
                                    <div className="r_icon" style={{background:`url(${icon_calender})`}}></div>
                                    <div className="r_title">
                                        Race Date
                                    </div>
                                    {nextRaceData? (  <div className="r_desc">
                                        {nextRaceData.date}
                                    </div>):<p>Loading...</p>}
                                  
                                </div>
                            </div>

                        
                    </div>
                </Zoom>
                <Zoom className="r_item" triggerOnce>
                    <div>
                        <div className="r_outer">
                            <div className="r_inner">
                                <div className="r_icon_square bck_yellow"></div>
                                    <div className="r_icon" style={{background:`url(${icon_location})`}}></div>
                                    <div className="r_title">
                                        Event Location
                                    </div>
                                    {nextRaceData? (  <div className="r_desc">
                                        {nextRaceData.Circuit.circuitName}
                                    </div>):<p>Loading...</p>}
                                  
                                </div>
                            </div>

                        
                    </div>
                </Zoom>

                </div>
			</div>
		</div>
	);
};
export default RaceInfo;
