import data from "./data";

const getTotalRuns = () => {
	let totalRuns = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? String(match.batting_score).replace("*", "")
			: match.batting_score;
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: match.batting_score;
		totalRuns += +match.batting_score;
	});
	return totalRuns;
};

const getNumberOfOuts = () => {
	let count = 0;
	data.forEach((match) => {
		if (typeof match.batting_score === "number") count += 1;
	});
	return count;
};

const getNumberOfNotOuts = () => {
	let count = 0;
	data.forEach((match) => {
		count += 1;
	});

	return count - getNumberOfOuts();
};

const getBattingAverage = () => {
	let count = 0;
	data.forEach((match) => {
		if (typeof match.batting_score === "string")
			if (match.batting_score.includes("DNB")) count += 1;
	});
	return getTotalRuns() / (getNumberOfOuts() - count);
};

const debut = () => {
	return data[0].date;
};

const getInnings = () => {
	let count = 0;
	data.forEach((match) => {
		if (typeof match.batting_score === "string")
			if (match.batting_score.includes("DNB")) count += 1;
	});
	return 463 - count;
};

const get100s = () => {
	let count = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? Number(match.batting_score).replace("*", "")
			: Number(match.batting_score);
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: Number(match.batting_score);
		if (match.batting_score >= 100) count++;
	});
	return count;
};

const get1stInnings100s = () => {
	let count = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? Number(match.batting_score).replace("*", "")
			: Number(match.batting_score);
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: Number(match.batting_score);
		if (match.batting_score >= 100 && match.batting_innings === "1st")
			count++;
	});
	return count;
};

const getWinStat = () => {
	let count = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? Number(match.batting_score).replace("*", "")
			: Number(match.batting_score);
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: Number(match.batting_score);
		if (match.batting_score >= 50 && match.match_result === "won") count++;
	});
	return count;
};

const getAusStat = () => {
	let runs = 0;
	let matchs = 0;
	data.forEach((match) => {
		match.batting_score = String(match.batting_score).includes("*")
			? Number(match.batting_score).replace("*", "")
			: Number(match.batting_score);
		match.batting_score = String(match.batting_score).includes("DNB")
			? 0
			: Number(match.batting_score);
		if (match.opposition === "v Australia") {
			runs += match.batting_score;
			matchs += 1;
		}
	});
	return { runs, matchs };
};

const getWickets = () => {
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
	getNumberOfNotOuts,
	getInnings,
	get100s,
	get1stInnings100s,
	getWinStat,
	getAusStat,
	getWickets,
};
