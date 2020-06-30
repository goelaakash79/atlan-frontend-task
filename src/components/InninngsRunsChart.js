import React, { PureComponent } from "react";
import { PieChart, Pie, Sector } from "recharts";
import data from "../data/data";

const getBattingScoreData = (score) => {
	score = String(score).includes("*")
		? Number(score).replace("*", "")
		: Number(score);
	score = String(score).includes("DNB") ? 0 : Number(score);
	return score;
};

let runs1stInn = 0;
data.forEach((match) => {
	match.batting_score = getBattingScoreData(match.batting_score);
	if (match.batting_innings === "1st") {
		runs1stInn += match.batting_score;
	}
});

let inn1st100s = 0;
data.forEach((match) => {
	match.batting_score = getBattingScoreData(match.batting_score);
	if (match.batting_score >= 100 && match.batting_innings === "1st")
		inn1st100s++;
});

let inn1st50s = 0;
data.forEach((match) => {
	match.batting_score = getBattingScoreData(match.batting_score);
	if (
		match.batting_score >= 50 &&
		match.batting_score < 100 &&
		match.batting_innings === "1st"
	)
		inn1st50s++;
});

const dataSet = [
	{ name: "1st Innings", value: runs1stInn },
	{ name: "2nd Innings", value: 18426 - runs1stInn },
];

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? "start" : "end";

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill="none"
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill="#111"
				fontWeight={700}
			>{`${value} Runs`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill="#333"
			>
				{payload.name === "1st Innings"
					? `${inn1st100s} 100s`
					: `${49 - inn1st100s} 100s`}
			</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={36}
				textAnchor={textAnchor}
				fill="#333"
			>
				{payload.name === "1st Innings"
					? `${inn1st50s} 50s`
					: `${96 - inn1st100s} 50s`}
			</text>
		</g>
	);
};

export default class InningsRunsChart extends PureComponent {
	static jsfiddleUrl = "https://jsfiddle.net/alidingling/hqnrgxpj/";

	state = {
		activeIndex: 0,
	};

	onPieEnter = (data, index) => {
		this.setState({
			activeIndex: index,
		});
	};

	render() {
		return (
			<PieChart width={400} height={400}>
				<Pie
					activeIndex={this.state.activeIndex}
					activeShape={renderActiveShape}
					data={dataSet}
					cx={200}
					cy={200}
					startAngle={180}
					endAngle={0}
					innerRadius={60}
					outerRadius={80}
					fill="#2B6CB0"
					dataKey="value"
					onMouseEnter={this.onPieEnter}
				/>
			</PieChart>
		);
	}
}
