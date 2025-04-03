let data_analysis_container = document.querySelector(
	".main_container .data_holder .data_analysis"
);

let market_value = {
	date: [
		"Jun 8, 2017",
		"Oct 23, 2017",
		"Jan 2, 2018",
		"May 28, 2018",
		"Dec 19, 2018",
		"Jun 13, 2019",
		"Dec 10, 2019",
		"Apr 8, 2020",
		"Oct 13, 2020",
		"Mar 18, 2021",
		"Jun 8, 2021",
		"Dec 23, 2021",
		"Jun 15, 2022",
		"Nov 3, 2022",
		"Mar 16, 2023",
		"Jun 20, 2023",
		"Dec 19, 2023",
		"May 27, 2024",
		"Dec 8, 2024",
	],
	value: [
		35.0, 40.0, 80.0, 150.0, 150.0, 150.0, 150.0, 120.0, 120.0, 110.0, 100.0,
		100.0, 90.0, 80.0, 70.0, 65.0, 65.0, 55.0, 55.0,
	],
};

// Header teams analysis
addDonutChartCircularBar(35, 60, 60, "liv_goal_part");
addDonutChartCircularBar(44, 60, 60, "egy_goal_part");
addDonutChartCircularBar(84, 60, 60, "liv_start");
addDonutChartCircularBar(91, 60, 60, "egy_start");
addDonutChartCircularBar(71, 60, 60, "liv_min");
addDonutChartCircularBar(52, 60, 60, "egy_min");

lineChartWithUnderCurveArea(
	market_value.date,
	market_value.value,
	122,
	490,
	"mrkt_value_graph"
);

data_analysis_container.innerHTML = getLiverpoolAnalysisTemplate();
showLiverpoolAnalysis();

document.querySelectorAll(".main_container .data_pages button").forEach((btn) =>
	btn.addEventListener("click", (_) => {
		document
			.querySelector(".main_container .data_pages button.active")
			?.classList.remove("active");
		btn.classList.add("active");
		showAnalysis(btn.getAttribute("lnk"));
	})
);

const getArrayMean = (arr) => {
	if (!arr.length) return 0;

	const sum = arr.map((num) => num).reduce((acc, curr) => acc + curr, 0);
	return sum / arr.length;
};

function showAnalysis(analysis_cat) {
	if (analysis_cat == "liverpool") {
		data_analysis_container.innerHTML = getLiverpoolAnalysisTemplate();
		showLiverpoolAnalysis();
	} else if (analysis_cat == "comp") {
		data_analysis_container.innerHTML = getCompetitionsTemplate();
		showComptAnalysis();
	} else {
		data_analysis_container.innerHTML = getEgyptAnalysisTemplate();
		showEgyptAnalysis();
	}
}

function showLiverpoolAnalysis() {
	let gp = {
			liv: {
				s: [
					"2017/18",
					"2018/19",
					"2019/20",
					"2020/21",
					"2021/22",
					"2022/23",
					"2023/24",
				],
				gp: [58, 37, 35, 37, 46, 46, 39],
				gls: [44, 27, 23, 31, 31, 30, 25],
				ast: [14, 10, 12, 6, 15, 16, 14],
				xg: [32.9, 28.7, 26.6, 26.3, 33.7, 28.8, 27.3],
				npxg: [31.4, 24.5, 23.8, 20.6, 26.6, 24.4, 19.4],
				xag: [13.5, 13.5, 10.4, 7.9, 12.6, 10.6, 14.8],
			},
		},
		sca_car_tk = {
			sca: [
				[232, 219, 184, 168, 204, 180, 168], // sca
				[51, 26, 23, 20, 33, 31, 24], // gca
			],
			car: [
				[1348, 1648, 1476, 1541, 1499, 1454, 1236], // carries
				[143, 175, 147, 143, 183, 160, 117], // prgc
			],
			tk: [
				[174, 198, 132, 116, 186, 175, 93], // take-ons
				[114, 108, 81, 55, 84, 66, 31], // succ
			],
		},
		gls_agnst_opp = {
			teams: [
				"Manchester Utd",
				"Manchester City",
				"West Ham",
				"Tottenham",
				"Brighton",
				"Watford",
				"Arsenal",
				"Leeds United",
				"Bournemouth",
				"Newcastle Utd",
				"Crystal Palace",
				"Everton",
				"Aston Villa",
				"Southampton",
				"Brentford",
				"Wolves",
				"Porto",
				"Chelsea",
				"Fulham",
				"Huddersfield",
				"Leicester City",
				"Rangers",
				"RB Salzburg",
				"West Brom",
				"NK Maribor",
				"Norwich City",
				"Nott'ham Forest",
				"Real Madrid",
				"Red Star",
				"Stoke City",
				"LASK",
				"Milan",
				"Midtjylland",
				"RB Leipzig",
				"Napoli",
				"Ajax",
				"Atlético Madrid",
				"Roma",
				"Atalanta",
				"Sevilla",
				"Spartak Moscow",
				"Sparta Prague",
				"Burnley",
				"Cardiff City",
				"Inter",
				"Sheffield Utd",
				"Genk",
				"Hoffenheim",
				"Toulouse",
			],
			gls: [
				14, 11, 11, 10, 9, 9, 9, 9, 9, 8, 8, 7, 7, 7, 5, 5, 5, 4, 4, 4, 4, 4, 3,
				3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1,
				1, 1,
			],
		};

	addDonutChartCircularBar(81.04, 50, 50, "bp_lf");
	addDonutChartCircularBar(14.7, 50, 50, "bp_rf");
	addDonutChartCircularBar(4.3, 50, 50, "bp_head");
	addDonutChartCircularBar(82.5, 50, 50, "pen_acc");
	addDonutChartCircularBar(15.6, 50, 50, "pen_perc");
	addDonutChartCircularBar(41, 50, 50, "shot_acc_graph");
	addDonutChartCircularBar(43, 50, 50, "shot_to_gl_graph");
	addDonutChartCircularBar(17.2, 60, 60, "int");
	addDonutChartCircularBar(32.8, 60, 60, "blk");
	addDonutChartCircularBar(49.9, 60, 60, "tkl");
	addDonutChartCircularBar(62, 60, 60, "com_mat");
	addDonutChartCircularBar(84, 50, 50, "start_mat");
	addDonutChartCircularBar(0.63, 50, 50, "start_cap");
	addDonutChartCircularBar(75.8, 60, 60, "pass_acc");
	addDonutChartCircularBar(11, 60, 60, "pass_prg");
	addDonutChartCircularBar(15.2, 50, 50, "sca_acc");
	addDonutChartCircularBar(10.4, 50, 50, "prgc_acc");
	addDonutChartCircularBar(50.3, 50, 50, "tk_acc");

	modifiedLineChartWithUnderCurveArea(
		gp.liv.s,
		gp.liv.gp,
		100,
		560,
		"gp_gls_ast_graph",
		"Season",
		"Goal participation",
		"G/A"
	);

	modifiedLineChartWithUnderCurveArea(
		gp.liv.s,
		[52, 52, 46, 51, 51, 51, 44],
		140,
		385,
		"app_times_g",
		"Season",
		"Total matches",
		"matches"
	);

	modifiedLineChartWithUnderCurveArea(
		gp.liv.s,
		[1986, 2185, 1953, 2218, 2279, 2143, 1722],
		110,
		385,
		"tchs_graph",
		"Season",
		"Touches total",
		"touches"
	);

	groupedBarChart(
		[232, 219, 184, 168, 204, 180, 168],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[51, 26, 23, 20, 33, 31, 24],
		"Shot-creating action",
		"Goal-creating action",
		"sca_car_tkons_graph",
		130,
		500
	);

	groupedBarChart(
		[2, 5, 3, 7, 8, 6, 9],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[1, 5, 3, 7, 6, 4, 7],
		"Penalty attempted",
		"Penalty kicks made",
		"pen_graph"
	);

	groupedBarChart(
		[195, 185, 183, 153, 183, 151, 135],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[90, 73, 73, 66, 70, 61, 60],
		"Shots total",
		"Shots on target",
		"sh_sot_graph"
	);

	groupedBarChart(
		[1451, 1567, 1472, 1683, 1676, 1561, 1298],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[1062, 1129, 1098, 1362, 1307, 1202, 956],
		"Passes attempted",
		"Passes completed",
		"pass_graph"
	);

	barChart(gls_agnst_opp.teams, gls_agnst_opp.gls, "goals", "g_dis");

	document
		.querySelectorAll(".data_analysis .gp_gls_ast .gp_gls_ast_btns button")
		.forEach((btn) =>
			btn.addEventListener("click", (_) => {
				let btc = btn.getAttribute("btc").split(",");
				document
					.querySelector(
						".data_analysis .gp_gls_ast .gp_gls_ast_btns button.active"
					)
					.classList.remove("active");
				btn.classList.add("active");

				modifiedLineChartWithUnderCurveArea(
					gp.liv.s,
					gp.liv[`${btc[0]}`],
					100,
					560,
					"gp_gls_ast_graph",
					"Season",
					btn.innerText,
					`${btc[1]}`
				);

				document.querySelector(
					".gp_gls_ast .graph_hint"
				).innerHTML = `<span><b>${btc[2]}</b> per season</span>
											<span><b>${getArrayMean(gp.liv[`${btc[0]}`]).toFixed(1)}</b> <small>${
					btc[1]
				}</small></span>`;
			})
		);

	document
		.querySelectorAll(
			".data_analysis .sca_car_tkons_graphs .sca_car_tkons_btns button"
		)
		.forEach((btn) =>
			btn.addEventListener("click", (_) => {
				let btc = btn.getAttribute("btc").split(",");
				document
					.querySelector(
						".data_analysis .sca_car_tkons_graphs .sca_car_tkons_btns button.active"
					)
					?.classList.remove("active");

				console.log(sca_car_tk[`${btc[0]}`]);

				groupedBarChart(
					sca_car_tk[`${btc[0]}`][0],
					[
						"2017/18",
						"2018/19",
						"2019/20",
						"2020/21",
						"2021/22",
						"2022/23",
						"2023/24",
					],
					sca_car_tk[`${btc[0]}`][1],
					btc[1],
					btc[2],
					"sca_car_tkons_graph",
					130,
					500
				);

				document.querySelector(
					".data_analysis .sca_car_tkons_graphs p"
				).innerHTML = `
									<span>${btc[1]} and ${btc[2]}</span>
									<span><b>${getArrayMean(sca_car_tk[`${btc[0]}`][1]).toFixed(
										1
									)}</b> ${btc[2].toLowerCase()} per season out of <b>${getArrayMean(
					sca_car_tk[`${btc[0]}`][0]
				).toFixed(1)}</b> ${btc[1].toLowerCase()} per season.</span>`;

				btn.classList.add("active");
			})
		);
}

function showEgyptAnalysis() {
	let gp = {
			liv: {
				s: [
					"2017/18",
					"2018/19",
					"2019/20",
					"2020/21",
					"2021/22",
					"2022/23",
					"2023/24",
				],
				gp: [6, 9, 0, 2, 5, 8, 9],
				gls: [6, 6, 0, 2, 2, 4, 6],
				ast: [0, 3, 0, 0, 3, 4, 3],
				xg: [4.0, 4.2, 0.6, 1.0, 10.5, 3.0, 5.4],
				npxg: [3.2, 3.5, 0.5, 0.8, 7.5, 2.5, 3.6],
				xag: [1.4, 2.1, 0.2, 0.4, 3.0, 1.0, 2.7],
			},
		},
		sca_car_tk = {
			sca: [
				[26, 29, 4, 7, 60, 18, 34], // sca
				[6, 4, 0, 1, 9, 3, 4], // gca
			],
			car: [
				[146, 222, 32, 60, 441, 142, 253], // carries
				[18, 24, 3, 6, 54, 16, 24], // prgc
			],
			tk: [
				[19, 27, 3, 5, 54, 17, 19], // take-ons
				[12, 15, 2, 2, 24, 6, 6], // succ
			],
		},
		gls_agnst_opp = {
			teams: [
				"Djibouti",
				"Niger",
				"Guinea-Bissau",
				"Malawi",
				"Comoros",
				"Uganda",
				"Congo",
				"Mozambique",
				"Morocco",
				"Congo DR",
				"Tunisia",
				"Eswatini",
				"Saudi Arabia",
				"Russia",
				"Portugal",
			],
			gls: [4, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
		};

	addDonutChartCircularBar(80.8, 50, 50, "bp_lf");
	addDonutChartCircularBar(15.4, 50, 50, "bp_rf");
	addDonutChartCircularBar(3.8, 50, 50, "bp_head");
	addDonutChartCircularBar(71.4, 50, 50, "pen_acc");
	addDonutChartCircularBar(19.2, 50, 50, "pen_perc");
	addDonutChartCircularBar(37, 50, 50, "shot_acc_graph");
	addDonutChartCircularBar(44, 50, 50, "shot_to_gl_graph");
	addDonutChartCircularBar(15.9, 60, 60, "int");
	addDonutChartCircularBar(31.8, 60, 60, "blk");
	addDonutChartCircularBar(52.2, 60, 60, "tkl");
	addDonutChartCircularBar(84.4, 60, 60, "com_mat");
	addDonutChartCircularBar(91, 50, 50, "start_mat");
	addDonutChartCircularBar(62.2, 50, 50, "start_cap");
	addDonutChartCircularBar(75.5, 60, 60, "pass_acc");
	addDonutChartCircularBar(10.5, 60, 60, "pass_prg");
	addDonutChartCircularBar(15.2, 50, 50, "sca_acc");
	addDonutChartCircularBar(11.2, 50, 50, "prgc_acc");
	addDonutChartCircularBar(46.5, 50, 50, "tk_acc");

	modifiedLineChartWithUnderCurveArea(
		gp.liv.s,
		gp.liv.gp,
		100,
		560,
		"gp_gls_ast_graph",
		"Season",
		"Goal participation",
		"G/A"
	);

	modifiedLineChartWithUnderCurveArea(
		gp.liv.s,
		[6, 7, 1, 2, 15, 5, 9],
		140,
		385,
		"app_times_g",
		"Season",
		"Total matches",
		"matches"
	);

	modifiedLineChartWithUnderCurveArea(
		gp.liv.s,
		[216, 294, 42, 87, 671, 210, 352],
		110,
		385,
		"tchs_graph",
		"Season",
		"Touches total",
		"touches"
	);

	groupedBarChart(
		[26, 29, 4, 7, 60, 18, 34],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[6, 4, 0, 1, 9, 3, 4],
		"Shot-creating action",
		"Goal-creating action",
		"sca_car_tkons_graph",
		130,
		500
	);

	groupedBarChart(
		[2, 2, 0, 0, 0, 1, 2],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[2, 0, 0, 0, 0, 1, 2],
		"Penalty attempted",
		"Penalty kicks made",
		"pen_graph"
	);

	groupedBarChart(
		[20, 29, 4, 6, 44, 15, 25],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[8, 14, 0, 3, 18, 6, 10],
		"Shots total",
		"Shots on target",
		"sh_sot_graph"
	);

	groupedBarChart(
		[149, 211, 32, 66, 493, 153, 266],
		[
			"2017/18",
			"2018/19",
			"2019/20",
			"2020/21",
			"2021/22",
			"2022/23",
			"2023/24",
		],
		[109, 152, 24, 53, 384, 118, 195],
		"Passes attempted",
		"Passes completed",
		"pass_graph"
	);

	barChart(gls_agnst_opp.teams, gls_agnst_opp.gls, "goals", "g_dis");

	document
		.querySelectorAll(".data_analysis .gp_gls_ast .gp_gls_ast_btns button")
		.forEach((btn) =>
			btn.addEventListener("click", (_) => {
				let btc = btn.getAttribute("btc").split(",");
				document
					.querySelector(
						".data_analysis .gp_gls_ast .gp_gls_ast_btns button.active"
					)
					.classList.remove("active");
				btn.classList.add("active");

				modifiedLineChartWithUnderCurveArea(
					gp.liv.s,
					gp.liv[`${btc[0]}`],
					100,
					560,
					"gp_gls_ast_graph",
					"Season",
					btn.innerText,
					`${btc[1]}`
				);

				document.querySelector(
					".gp_gls_ast .graph_hint"
				).innerHTML = `<span><b>${btc[2]}</b> per season</span>
											<span><b>${getArrayMean(gp.liv[`${btc[0]}`]).toFixed(1)}</b> <small>${
					btc[1]
				}</small></span>`;
			})
		);

	document
		.querySelectorAll(
			".data_analysis .sca_car_tkons_graphs .sca_car_tkons_btns button"
		)
		.forEach((btn) =>
			btn.addEventListener("click", (_) => {
				let btc = btn.getAttribute("btc").split(",");
				document
					.querySelector(
						".data_analysis .sca_car_tkons_graphs .sca_car_tkons_btns button.active"
					)
					?.classList.remove("active");

				console.log(sca_car_tk[`${btc[0]}`]);

				groupedBarChart(
					sca_car_tk[`${btc[0]}`][0],
					[
						"2017/18",
						"2018/19",
						"2019/20",
						"2020/21",
						"2021/22",
						"2022/23",
						"2023/24",
					],
					sca_car_tk[`${btc[0]}`][1],
					btc[1],
					btc[2],
					"sca_car_tkons_graph",
					130,
					500
				);

				document.querySelector(
					".data_analysis .sca_car_tkons_graphs p"
				).innerHTML = `
									<span>${btc[1]} and ${btc[2]}</span>
									<span><b>${getArrayMean(sca_car_tk[`${btc[0]}`][1]).toFixed(
										1
									)}</b> ${btc[2].toLowerCase()} per season out of <b>${getArrayMean(
					sca_car_tk[`${btc[0]}`][0]
				).toFixed(1)}</b> ${btc[1].toLowerCase()} per season.</span>`;

				btn.classList.add("active");
			})
		);
}

function fetchDataFromJSON() {
	// Fetch the JSON file
	fetch("./static/data/data_analysis.json")
		.then((response) => {
			// Check if the response is successful
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			// Parse the JSON data
			return response.json();
		})
		.then((data) => {
			// Handle the JSON data
			console.log(data);
			// You can manipulate or display the data here
		})
		.catch((error) => {
			// Handle errors
			console.error("There was a problem with the fetch operation:", error);
		});
}

function showComptAnalysis() {
	addDonutChartCircularBar(100, 70, 70, "wc_gp");
	addDonutChartCircularBar(100, 70, 70, "wc_st");
	addDonutChartCircularBar(67, 70, 70, "wc_min");
	addDonutChartCircularBar(31, 70, 70, "el_gp");
	addDonutChartCircularBar(44, 70, 70, "el_st");
	addDonutChartCircularBar(44, 70, 70, "el_min");
}
