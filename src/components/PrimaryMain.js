import React, { useState, useEffect } from "react";
import {
	getBattingAverage,
	getTotalRuns,
	getInnings,
	get100s,
	getAusStat,
	getWinStat,
	get1stInnings100s,
	getWickets,
	getDependingRecord,
	getAllTeams,
} from "../data/data.functions";
import st200 from "../media/st-200.jpg";
import InningsRunsChart from "./InninngsRunsChart";
import Timeline from "./Timeline";
import UniqueStats from "./UniqueStats";
import OpponentStats from "./OpponentStats";

const PrimaryMain = () => {
	const [wickets, setWickets] = useState(0);
	const [batavg, setBatavg] = useState(0);
	const [runs, setRuns] = useState(0);
	const [ausStat, setAusStat] = useState(0);
	const [innings, setInnings] = useState(0);
	const [centuries, setCenturies] = useState(0);
	const [winStat, setWinStat] = useState(0);
	const [inning1st100s, setInning1st100s] = useState(0);
	const [rec, setRec] = useState(0);
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		(async () => {
			setBatavg(await getBattingAverage());
			setWickets(await getWickets());
			setRuns(await getTotalRuns());
			setCenturies(await get100s());
			setAusStat(await getAusStat());
			setInnings(await getInnings());
			setWinStat(await getWinStat());
			setInning1st100s(await get1stInnings100s());
			setRec(await getDependingRecord());
			setTeams(await getAllTeams());
		})();
	}, []);

	return (
		<section className="text-gray-700 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex flex-wrap w-full">
					<Timeline
						wickets={wickets}
						batavg={batavg}
						runs={runs}
						ausStat={ausStat}
						innings={innings}
						centuries={centuries}
						inning1st100s={inning1st100s}
						winStat={winStat}
					/>
					<div className="lg:w-3/5 md:w-1/2 py-8 bg-gray-200 rounded-lg md:mt-0 mt-12  mx-auto flex items-center flex-col">
						<h1 className="title-font font-serif text-blue-700 sm:text-4xl text-2xl font-bold -mb-16">
							Innings Stats
							<hr />
						</h1>
						<InningsRunsChart />
						<p className="-mt-40 mb-8 px-16 text-justify">
							Despite having more runs and centuries in the 1st
							Innings, Sachin out-shined his game with more 50s in
							the 2nd Innings of the game. So, we can simply say,
							pressure had nothing to do with Sachin. He played
							with pure class in both the innings of the game.
						</p>
						<img
							className="mb-10 object-cover object-bottom h-64 w-screen"
							alt="hero"
							src={st200}
						/>

						<div className="lg:w-full w-full">
							<UniqueStats rec={rec} />

							<OpponentStats teams={teams} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrimaryMain;
