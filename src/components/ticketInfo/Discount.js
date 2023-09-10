import React,{ useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal'
import axios from 'axios';
import MyButton from '../utils/Button';

const Discount = () => {
    const [nextRaceDate, setNextRaceDate] = useState(null);
    const end = 30;
    const [start,setStart] = useState(0);

    const porcentage = () => {
        if(start < end){
            setStart(prevCount => prevCount+1)
        }   
    }

    useEffect(()=>{
        if( start > 0 && start < 30){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1)
            },30)
        }
    },[start])
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
						setNextRaceDate(closestRace.date);
					} else {
						setNextRaceDate("Brak nadchodzących wyścigów");
					}
				}
			})
			.catch((error) => {
				console.error("Błąd podczas pobierania danych:", error);
			});
	}, []);
    

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                 
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            porcentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>  
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase ticket before {nextRaceDate}</h3>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <MyButton
                            text="Purchase tickets"
                            link="https://tickets.formula1.com/en"
                            size="small"
                            style={{
                                background:'#ffa800',
                                color:'#ffffff'
                            }} 
                            iconTicket={true}
                        />                        
                    </div>

                </Slide>

            </div>
        </div>
    )
}

export default Discount