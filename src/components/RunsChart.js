import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";
import data from "../data/data";

const dataSet = data.map((match, i) => {
	match.batting_score = String(match.batting_score).includes("*")
		? String(match.batting_score).replace("*", "")
		: match.batting_score;
	match.batting_score = String(match.batting_score).includes("DNB")
		? 0
		: match.batting_score;
	return {
		name: match.opposition,
		match: ++i,
		runs: +match.batting_score,
	};
});

export default class RunsChart extends PureComponent {
	static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

	render() {
		return (
			<section className="text-gray-700 bg-gray-200 body-font mx-auto">
				<div className="container px-5 py-24 mx-auto flex flex-wrap w-full">
					<h1 className="title-font font-serif text-center mx-auto text-blue-700 sm:text-4xl text-3xl mb-4 font-bold">
						Sachin's ODI Runs Timeline
						<hr />
					</h1>
					<div className="mt-8">
						<LineChart
							width={1200}
							height={300}
							// className="overflow-auto"
							data={dataSet}
							margin={{
								top: 5,
								right: 5,
								left: 5,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<YAxis
								label={{
									value: "Runs",
									angle: -90,
									position: "insideLeft",
									textAnchor: "middle",
								}}
							/>

							<Tooltip />
							<XAxis dataKey="name">
								{/* <Label
									value="Pages of my website"
									offset={0}
									position="insideBottom"
								/> */}
							</XAxis>
							<Line
								type="monotoneY"
								dataKey="runs"
								stroke="#2026D2"
								strokeWidth={2}
								activeDot={{ r: 8 }}
							/>
						</LineChart>
						<p className="text-center text-black">
							Matches with different teams
						</p>
					</div>
				</div>
			</section>
		);
	}
}
