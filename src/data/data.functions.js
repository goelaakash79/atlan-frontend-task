import data from "./data.js";

const dc = data;
const getTotalRuns = async () => {
	const data = [...dc];

	let totalRuns = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		if (String(match.batting_score).includes("DNB")) {
			match.batting_score = 0;
		}
		totalRuns += +match.batting_score;
	});
	return totalRuns;
};

const getNumberOfOuts = async () => {
	const res = await fetch("./data.json");
	const data = await res.json();

	let count = 0;
	data.forEach((match) => {
		if (typeof match.batting_score === "number") count += 1;
	});
	return count;
};

const getBattingAverage = async () => {
	const avg = (await getTotalRuns()) / (await getNumberOfOuts());
	return avg.toFixed(2);
};

const debut = () => {
	return data[0].date;
};

const getInnings = async () => {
	const res = await fetch("./data.json");
	const data = await res.json();

	let count = 0;
	data.forEach((match) => {
		if (typeof match.batting_score === "string")
			if (match.batting_score.includes("DNB")) count += 1;
	});
	return data.length - count;
};

const get100s = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let count = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;
		if (+match.batting_score >= 100) count++;
	});
	return count;
};

const get1stInnings100s = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let count = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;
		if (+match.batting_score >= 100 && match.batting_innings === "1st")
			count++;
	});
	return count;
};

const getWinStat = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let count = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;
		if (+match.batting_score >= 50 && match.match_result === "won") count++;
	});
	return count;
};

const getAusStat = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let runs = 0;
	let matchs = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;
		if (match.opposition === "v Australia") {
			runs += +match.batting_score;
			matchs += 1;
		}
	});
	return { runs, matchs };
};

const getWickets = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let wickets = 0;
	data.forEach((match) => {
		match.wickets = typeof match.wickets === "string" ? 0 : match.wickets;
		wickets += match.wickets;
	});
	return wickets;
};

const getDependingRecord = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let count = 0;
	let century = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;

		if (+match.batting_score >= 100) century++;
		if (+match.batting_score >= 100 && match.match_result === "won")
			count++;
	});
	return { count, century };
};

const getAllTeams = async () => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let teams = new Set();
	data.forEach((match) => {
		teams.add(match.opposition.replace("v ", ""));
	});
	teams = Array.from(teams);
	return teams;
};

const getTeamData = async (team) => {
	// const res = await fetch("./data.json");
	// const data = await res.json();
	const data = [...dc];
	let dt = {
		runs: 0,
		centuries: 0,
		fifties: 0,
		wickets: 0,
		catches: 0,
		matches: 0,
		timeline: [],
	};
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;
		if (match.opposition === `v ${team}`) {
			dt.runs += +match.batting_score;
			if (+match.batting_score >= 100) dt.centuries += 1;
			if (+match.batting_score >= 50) dt.fifties += 1;
			dt.wickets += isNaN(+match.wickets) ? 0 : +match.wickets;
			dt.catches += isNaN(+match.catches) ? 0 : +match.catches;
			dt.matches += 1;
			dt.timeline.push({
				runs: +match.batting_score,
				ground: match.ground,
				date: match.date,
				wickets: isNaN(+match.wickets) ? 0 : +match.wickets,
				catches: isNaN(+match.catches) ? 0 : +match.catches,
			});
		}
	});
	return dt;
};

export {
	debut,
	getNumberOfOuts,
	getTotalRuns,
	getBattingAverage,
	getInnings,
	get100s,
	get1stInnings100s,
	getWinStat,
	getAusStat,
	getDependingRecord,
	getWickets,
	getAllTeams,
	getTeamData,
};
