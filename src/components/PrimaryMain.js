import React from "react";
import {
	getBattingAverage,
	getTotalRuns,
	getInnings,
	get100s,
	getAusStat,
	getWinStat,
	get1stInnings100s,
	getWickets,
} from "../data/data.functions";
import RunsChart from "./RunsChart";
import InningsRunsChart from "./InninngsRunsChart";

const PrimaryMain = () => {
	const batavg = String(getBattingAverage()).slice(0, 5);
	const svg = (
		<svg width={48} height={48} viewBox="0 0 48 48">
			<g
				transform="translate(0 -1004.362) translate(1787.403 -426.455)"
				fillOpacity={1}
				fillRule="evenodd"
				stroke="none"
				strokeOpacity={1}
			>
				<circle
					cx={-1763.403}
					cy={1454.817}
					r={24}
					fill="#f0efd2"
					strokeWidth="1px"
					strokeLinecap="butt"
					strokeLinejoin="miter"
				/>
				<g
					color="#000"
					fontStyle="normal"
					fontVariant="normal"
					fontWeight={400}
					fontStretch="normal"
					fontSize="medium"
					fontFamily="sans-serif"
					letterSpacing="normal"
					wordSpacing="normal"
					direction="ltr"
					writingMode="lr-tb"
					textAnchor="start"
					clipRule="nonzero"
					visibility="visible"
					colorInterpolation="sRGB"
					colorInterpolationFilters="linearRGB"
					strokeWidth={0.26449093}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit={4}
					strokeDasharray="none"
					strokeDashoffset={0}
					colorRendering="auto"
					imageRendering="auto"
					shapeRendering="auto"
					textRendering="auto"
				>
					<path
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						d="M-2947.926 1303.457a.5.5 0 00-.346.146l-8.046 8.053a1.488 1.488 0 01-1.055.444h-2.223a.5.5 0 00-.353.14l-13.51 13.518a1.514 1.514 0 000 2.127l3.16 3.154c.308.308.715.433 1.092.422a1.5 1.5 0 001.025-.414c4.895-4.825 13.51-13.526 13.51-13.526a.5.5 0 00.149-.355v-2.215c0-.398.154-.783.435-1.064l8.045-8.053a.5.5 0 000-.701l-1.52-1.53a.5.5 0 00-.363-.148z"
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#3f3140"
						transform="translate(1196.495 137.359)"
					/>
					<path
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						d="M-2947.918 1304.67l.82.812-7.693 7.698c-.35.35-.587.795-.686 1.275l-4.2 2.795 2.804-4.203c.475-.097.915-.33 1.264-.68l7.691-7.697z"
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#93cfef"
						transform="translate(1196.495 137.359)"
					/>
					<path
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						d="M-2959.389 1313.098h1.28l-3.737 5.613-7.25 7.264h-3.16l12.867-12.877zM-2955.527 1315.686v1.283c-.18.181-7.988 8.056-12.868 12.877v-3.162l7.221-7.227 5.647-3.772z"
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#fabd6b"
						transform="translate(1196.495 137.359)"
					/>
					<path
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						d="M-2972.87 1326.978h3.48v3.46a.407.407 0 01-.208-.099l-3.152-3.162a.495.495 0 01-.12-.199z"
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#e0a45c"
						transform="translate(1196.495 137.359)"
					/>
					<path
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						d="M-2947.918 1304.67l-7.691 7.697c-.349.35-.79.583-1.264.68l-2.805 4.203 1.012-.674 2.168-3.248c.475-.097.915-.33 1.264-.68l7.646-7.652-.33-.326z"
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#64a5da"
						transform="translate(1196.495 137.359)"
					/>
					<path
						d="M-2959.389 1313.098l-12.867 12.877h.67l12.193-12.203h.834l.45-.674h-1.28zM-2955.527 1315.686l-5.647 3.771-7.22 7.227v.67l7.216-7.223 5.647-3.772v.614-1.284z"
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#e0a45c"
						transform="translate(1196.495 137.359)"
					/>
					<path
						d="M-2972.87 1326.978c.025.072.06.14.12.2l.486.488h2.842v2.756c.012 0 .02.013.031.016v-3.46h-3.478z"
						style={{
							lineHeight: "normal",
							textIndent: 0,
							textAlign: "start",
							textDecorationLine: "none",
							textDecorationStyle: "solid",
							textDecorationColor: "#000",
							textTransform: "none",
							blockProgression: "tb",
							whiteSpace: "normal",
							isolation: "auto",
							mixBlendMode: "normal",
							solidColor: "#000",
							solidOpacity: 1,
						}}
						textDecoration="none"
						baselineShift="baseline"
						display="inline"
						overflow="visible"
						opacity={1}
						fill="#bc8756"
						transform="translate(1196.495 137.359)"
					/>
				</g>
			</g>
		</svg>
	);

	return (
		<section className="text-gray-700 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<div className="flex flex-wrap w-full">
					<div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
								{svg}
							</div>
							<div className="flex-grow ml-4 p-4 rounded-lg bg-orange-200">
								<h2 className="font-medium title-font text-lg text-gray-700 mb-1 tracking-wider">
									Batting Average
								</h2>
								<div className="py-2 w-full">
									<h2 className="title-font font-bold font-serif text-4xl text-blue-700">
										{batavg}
									</h2>
									<p className="font-medium text-gray-700 italic">
										With an excellent average of{" "}
										<span className="text-indigo-500 font-bold">
											{batavg}
										</span>{" "}
										Sachin scored{" "}
										<span className="text-indigo-500 font-bold">
											{getTotalRuns()}
										</span>{" "}
										runs in{" "}
										<span className="text-indigo-500 font-bold">
											{getInnings()}
										</span>{" "}
										innings.
									</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
								{svg}
							</div>
							<div className="flex-grow ml-4 p-4 rounded-lg bg-pink-200">
								<h2 className="font-medium title-font text-lg text-gray-700 mb-1 tracking-wider">
									Centuries King
								</h2>
								<div className="py-2 w-full">
									<h2 className="title-font font-bold font-serif text-4xl text-blue-700">
										{get100s()}
									</h2>
									<p className="font-medium text-gray-700 italic">
										Sachin scored{" "}
										<span className="text-indigo-500 font-bold">
											{get100s()}
										</span>{" "}
										100s in ODIs, adding to it{" "}
										<span className="text-indigo-500 font-bold">
											{get1stInnings100s()}
										</span>{" "}
										100s were scored in 1st innings, and{" "}
										<span className="text-indigo-500 font-bold">
											{get100s() - get1stInnings100s()}
										</span>{" "}
										100s were scored in 2nd innings of the
										game.
									</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
								{svg}
							</div>
							<div className="flex-grow ml-4 p-4 rounded-lg bg-orange-200">
								<h2 className="font-medium title-font text-lg text-gray-700 mb-1 tracking-wider">
									If Sachin scores big, team wins
								</h2>
								<div className="py-2 w-full">
									<h2 className="title-font font-bold font-serif text-4xl text-blue-700">
										{getWinStat()}
									</h2>
									<p className="font-medium text-gray-700 italic">
										India won{" "}
										<span className="text-indigo-500 font-bold">
											{getWinStat()}
										</span>{" "}
										matches, when Sachin scored a{" "}
										<span className="text-indigo-500 font-bold">
											half-century
										</span>
										.
									</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
								{svg}
							</div>
							<div className="flex-grow ml-4 p-4 rounded-lg bg-pink-200">
								<h2 className="font-medium title-font text-lg text-gray-700 mb-1 tracking-wider">
									Stronger the opponent, more strong is the
									Sachin
								</h2>
								<div className="py-2 w-full">
									<h2 className="title-font font-bold font-serif text-4xl text-blue-700">
										{getAusStat().runs}
									</h2>
									<p className="font-medium text-gray-700 italic">
										Sachin scored{" "}
										<span className="text-indigo-500 font-bold">
											{getAusStat().runs}
										</span>{" "}
										runs against Australia{" "}
										<span className="text-indigo-500 font-bold">
											{getAusStat().matchs}
										</span>{" "}
										ODIs, which clearly shows his class
										against even bigger teams.
									</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
								{svg}
							</div>
							<div className="flex-grow ml-4 p-4 rounded-lg bg-orange-200">
								<h2 className="font-medium title-font text-lg text-gray-700 mb-1 tracking-wider">
									Mr. Trickster
								</h2>
								<div className="py-2 w-full">
									<h2 className="title-font font-bold font-serif text-4xl text-blue-700">
										{getWickets()}
									</h2>
									<p className="font-medium text-gray-700 italic">
										Being a top-order batsman, Sachin proved
										to be a trickster too. He took{" "}
										<span className="text-indigo-500 font-bold">
											{getWickets()}
										</span>{" "}
										wickets in his entire ODI career,
										breaking crucial partnerships and hence
										winning a match for India.
									</p>
								</div>
							</div>
						</div>
					</div>
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
							class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
							alt="hero"
							src="https://dummyimage.com/720x600"
						/>

						<div class="text-center lg:w-2/3 w-full">
							<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								Microdosing synth tattooed vexillologist
							</h1>
							<p class="mb-8 leading-relaxed">
								Meggings kinfolk echo park stumptown DIY, kale
								chips beard jianbing tousled. Chambray
								dreamcatcher trust fund, kitsch vice godard
								disrupt ramps hexagon mustache umami snackwave
								tilde chillwave ugh. Pour-over meditation
								PBR&amp;B pickled ennui celiac mlkshk freegan
								photo booth af fingerstache pitchfork.
							</p>
							<div class="flex justify-center">
								<button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Button
								</button>
								<button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
									Button
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrimaryMain;
