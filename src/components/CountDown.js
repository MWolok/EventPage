import { useCallback, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import axios from "axios";

const CountDown = () => {
	const [nextRaceDate, setNextRaceDate] = useState(null);
	const [time, setTime] = useState({
		days: "0",
		hours: "0",
		minutes: "0",
		seconds: "0",
	});

	const items = (time, value) => (
		<div className="countdown_item">
			<div className="countdown_time">{time}</div>
			<div className="countdown_tag">{value}</div>
		</div>
	);

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

	const getTime = useCallback((deadline) => {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if (time < 0) {
			console.log("end");
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));

			setTime({ days, hours, minutes, seconds });
		}
	}, []);

    useEffect(() => {
       
        if (nextRaceDate) {
          const interval = setInterval(() => getTime(nextRaceDate), 1000);
    
        
          return () => clearInterval(interval);
        }
      }, [nextRaceDate]);

	return (
		<Slide left delay={650}>
			<div className="countdown_wrapper">
				<div className="countdown_top">Next Race Day</div>
				<div className="countdown_bottom">
					{items(time.days, "Days")}
					{items(time.hours, "Hr")}
					{items(time.minutes, "Min")}
					{items(time.seconds, "Sec")}
				</div>
			</div>
		</Slide>
	);
};
export default CountDown;
