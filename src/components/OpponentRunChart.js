import React, { PureComponent } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

export default class OpponentRunChart extends PureComponent {
	static jsfiddleUrl = "https://jsfiddle.net/alidingling/94sebfL8/";
	state = {
		matches: [],
	};
	componentDidUpdate() {
		const matches = this.props.stats.timeline;
		this.setState({ matches });
	}
	render() {
		const data = this.state.matches.map((match) => {
			return {
				name: `${match.ground} | ${match.date}`,
				runs: match.runs,
				wickets: match.wickets,
				catches: match.catches,
			};
		});

		return data.length !== 0 ? (
			<BarChart
				width={640}
				height={250}
				data={data}
				margin={{
					top: 24,
					right: 0,
					bottom: 0,
					left: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar
					dataKey="runs"
					barSize={20}
					fill="#9294C0"
					stackId="a"
					strokeWidth={2}
					stroke="#4C51BF"
				/>
				<Bar
					dataKey="wickets"
					barSize={20}
					stackId="a"
					fill="#82ca9d"
					strokeWidth={2}
					stroke="#2F855A"
				/>
				<Bar
					dataKey="catches"
					barSize={20}
					stackId="a"
					fill="#FF9900"
					strokeWidth={2}
					stroke="#DB4437"
				/>
			</BarChart>
		) : (
			<p className="mt-4 italic">Select an opponnent to view stats</p>
		);
	}
}
