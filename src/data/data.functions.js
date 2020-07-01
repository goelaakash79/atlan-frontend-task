import data from "./data";

// fetch("./data.json")
// 	.then((res) => res.json())
// 	.then((data) => {

// 	});

const getTotalRuns = async () => {
	const res = await fetch("./data.json");
	const data = await res.json();

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
	const res = await fetch("./data.json");
	const data = await res.json();

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
	const res = await fetch("./data.json");
	const data = await res.json();

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
	const res = await fetch("./data.json");
	const data = await res.json();

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
	const res = await fetch("./data.json");
	const data = await res.json();

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
	const res = await fetch("./data.json");
	const data = await res.json();

	let wickets = 0;
	data.forEach((match) => {
		match.wickets = typeof match.wickets === "string" ? 0 : match.wickets;
		wickets += match.wickets;
	});
	return wickets;
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
	getWickets,
};
