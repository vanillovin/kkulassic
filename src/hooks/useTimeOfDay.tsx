import { useState, useEffect } from "react";

type TimeOfDay = "dawn" | "morning" | "afternoon" | "evening" | "night";

function useTimeOfDay() {
	const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("dawn");

	useEffect(() => {
		const currentTime = new Date().getHours();

		if (currentTime >= 0 && currentTime < 5) {
			setTimeOfDay("dawn");
		} else if (currentTime >= 5 && currentTime < 12) {
			setTimeOfDay("morning");
		} else if (currentTime >= 12 && currentTime < 17) {
			setTimeOfDay("afternoon");
		} else if (currentTime >= 17 && currentTime < 20) {
			setTimeOfDay("evening");
		} else {
			setTimeOfDay("night");
		}
	}, []);

	return timeOfDay;
}

export default useTimeOfDay;