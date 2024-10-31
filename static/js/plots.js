function addDonutChartCircularBar(progress, h, w, container) {
	var data = [
		{
			values: [progress, 100 - progress],
			labels: ["Progress", "Remaining"],
			name: "Progress",
			hoverinfo: "none",
			hole: 0.7, // Creates a donut shape
			type: "pie",
			marker: {
				colors: ["#c70f2e", "#383838"], // Progress color and transparent "remaining"
			},
			direction: "clockwise",
			rotation: progress >= 50 ? 0 : 180, // Starts at the left for progress bar effect
			textinfo: "none", // Hides percentage text
		},
	];

	var layout = {
		title: "",
		annotations: [
			{
				font: {
					size: 11,
					color: "#fff",
					family: "Poppins, sans-serif",
				},
				showarrow: false,
				text: progress + "%", // Display the percentage in the center
				x: 0.5,
				y: 0.5,
			},
		],
		height: h, // Smaller height
		width: w, // Smaller width
		pad: { t: 0, l: 0, r: 0, b: 0 },
		margin: { t: 0, l: 0, r: 0, b: 0 },
		showlegend: false,
		paper_bgcolor: "rgba(0,0,0,0)", // Transparent background
		plot_bgcolor: "rgba(0,0,0,0)", // Transparent plot area
	};

	var config = {
		displayModeBar: false, // Disable the menu bar
	};

	Plotly.newPlot(container, data, layout, config);
}

function lineChartWithUnderCurveArea(x_data, y_data, h, w, container) {
	var trace1 = {
		x: x_data,
		y: y_data,
		fill: "tozeroy",
		type: "scatter",
		mode: "markers+lines", // Adding both markers and lines
		marker: {
			color: "#c70f2e", // Customize the marker color
			size: 6, // Adjust marker size
		},
		line: {
			color: "#c70f2e", // Line color
		},
		fillcolor: "rgba(199, 15, 46, 0.5)", // Start of gradient (semi-transparent #c70f2e)
		fillgradient: {
			type: "linear",
			stops: [
				{ offset: 0, color: "rgba(199, 15, 46, 1)" }, // #c70f2e
				{ offset: 1, color: "rgba(18, 18, 18, 1)" }, // #121212
			],
		},
		hovertemplate:
			"<b>Date</b>: %{x}<br><b>Market Value</b>: €%{y:.2f}M<extra></extra>", // Custom hover template
	};

	var layout = {
		title: "",
		height: h, // Adjusted height for better display
		width: w, // Adjusted width for better display
		pad: { t: 0, l: 0, r: 0, b: 0 },
		margin: { t: 0, l: 40, r: 40, b: 0 }, // Increased left and right margins to avoid marker cut-off
		showlegend: false,
		paper_bgcolor: "rgba(0,0,0,0)", // Transparent background
		plot_bgcolor: "rgba(0,0,0,0)", // Transparent plot area
		xaxis: {
			showline: false, // Remove x-axis line
			showgrid: false, // Remove x-axis grid
			showticklabels: false, // Remove x-axis labels
			ticks: "", // No tick marks
		},
		yaxis: {
			showline: false, // Remove y-axis line
			showgrid: false, // Remove y-axis grid
			showticklabels: false, // Remove y-axis labels
			zeroline: false, // Remove zero line
		},
		autosize: true, // Automatically adjust to show the whole graph
		staticPlot: true,
		hovermode: "closest",
	};

	var data = [trace1];

	var config = {
		displayModeBar: false, // Disable the menu bar
	};

	Plotly.newPlot(container, data, layout, config);
}

function modifiedLineChartWithUnderCurveArea(
	x_data,
	y_data,
	h,
	w,
	container,
	x_label,
	y_label,
	y_unit
) {
	var trace1 = {
		x: x_data,
		y: y_data,
		fill: "tozeroy",
		type: "scatter",
		mode: "markers+lines", // Adding both markers and lines
		marker: {
			color: "#c70f2e", // Customize the marker color
			size: 6, // Adjust marker size
		},
		line: {
			color: "#c70f2e", // Line color
		},
		fillcolor: "rgba(199, 15, 46, 0.5)", // Start of gradient (semi-transparent #c70f2e)
		fillgradient: {
			type: "linear",
			stops: [
				{ offset: 0, color: "rgba(199, 15, 46, 1)" }, // #c70f2e
				{ offset: 1, color: "rgba(18, 18, 18, 1)" }, // #121212
			],
		},
		hovertemplate: `<b>${x_label}</b>: %{x}<br><b>${y_label}</b>: %{y} ${y_unit}<extra></extra>`, // Custom hover template
	};

	var layout = {
		title: "",
		height: h, // Adjusted height for better display
		width: w, // Adjusted width for better display
		pad: { t: 0, l: 0, r: 0, b: 0 },
		margin: { t: 0, l: 40, r: 40, b: 0 }, // Increased left and right margins to avoid marker cut-off
		showlegend: false,
		paper_bgcolor: "rgba(0,0,0,0)", // Transparent background
		plot_bgcolor: "rgba(0,0,0,0)", // Transparent plot area
		xaxis: {
			showline: false, // Remove x-axis line
			showgrid: false, // Remove x-axis grid
			showticklabels: false, // Remove x-axis labels
			ticks: "", // No tick marks
		},
		yaxis: {
			showline: false, // Remove y-axis line
			showgrid: false, // Remove y-axis grid
			showticklabels: false, // Remove y-axis labels
			zeroline: false, // Remove zero line
		},
		autosize: true, // Automatically adjust to show the whole graph
		staticPlot: true,
		hovermode: "closest",
	};

	var data = [trace1];

	var config = {
		displayModeBar: false, // Disable the menu bar
	};

	Plotly.newPlot(container, data, layout, config);
}

function barChart(x_data, y_data, y_title, container, h = 347, w = 130) {
	var trace = {
		x: x_data,
		y: y_data,
		type: "bar",
		marker: {
			color: "#c70f2e", // Set the bar color to #c70f2e
		},
		hovertemplate: `<b>%{x}</b><br><b>%{y} ${y_title}</b><extra></extra>`, // Custom hover template
	};

	var data = [trace];

	var layout = {
		paper_bgcolor: "rgba(0,0,0,0)", // Remove background
		plot_bgcolor: "rgba(0,0,0,0)", // Remove plot area background
		xaxis: {
			showgrid: false, // Remove vertical grid
		},
		yaxis: {
			showgrid: false, // Remove horizontal grid
		},
		margin: {
			l: 0, // Remove left margin
			r: 0, // Remove right margin
			t: 0, // Remove top margin
			b: 0, // Remove bottom margin
		},
		width: h, // Increase the width
		height: w, // Decrease the height
	};

	// Disable plotly toolbar
	var config = {
		displayModeBar: false, // Disable the toolbar/menu
	};

	Plotly.newPlot(container, data, layout, config);
}

function groupedBarChart(
	data_x1,
	data_y,
	data_x2,
	plt_t1,
	plt_t2,
	container,
	h = 115,
	w = 391
) {
	var trace1 = {
		x: data_x1, // Swap x and y
		y: data_y, // Move seasons to y-axis
		type: "bar",
		orientation: "h", // Set bar orientation to horizontal
		marker: {
			color: "#383838", // Set the bar color to #383838
		},
		hovertemplate: `<b>Season:</b> %{y}<br><b>${plt_t1}:</b> %{x}<extra></extra>`, // Adjust hover template for horizontal layout
	};

	var trace2 = {
		x: data_x2, // Swap x and y
		y: data_y, // Move seasons to y-axis
		type: "bar",
		orientation: "h", // Set bar orientation to horizontal
		marker: {
			color: "#c70f2e", // Set the bar color to #c70f2e
		},
		hovertemplate: `<b>Season:</b> %{y}<br><b>${plt_t2}:</b> %{x}<extra></extra>`, // Adjust hover template for horizontal layout
	};

	var data = [trace1, trace2];

	var layout = {
		barmode: "group",
		paper_bgcolor: "rgba(0,0,0,0)", // Remove background
		plot_bgcolor: "rgba(0,0,0,0)", // Remove plot area background
		xaxis: {
			showgrid: false, // Remove vertical grid
		},
		yaxis: {
			showgrid: false, // Remove horizontal grid
		},
		margin: {
			l: 0, // Remove left margin
			r: 0, // Remove right margin
			t: 0, // Remove top margin
			b: 0, // Remove bottom margin
		},
		showlegend: false, // Remove legends
		width: w, // Increase the width
		height: h, // Decrease the height
	};

	// Disable plotly toolbar
	var config = {
		displayModeBar: false, // Disable the toolbar/menu
	};

	Plotly.newPlot(container, data, layout, config);
}

function spiderChart() {
	let data = [
		{
			type: "scatterpolar",
			r: [92, 70, 89, 92, 89, 80, 85, 45],
			theta: [
				"PAC", // Pace
				"PHY", // Physicality
				"OVR", // Overall
				"SPD", // Speed
				"DRI", // Dribbling
				"PAS", // Passing
				"SHO", // Shooting
				"DEF", // Defense
			],
			fill: "toself",
			fillcolor: {
				gradient: {
					type: "linear",
					color: ["#c70f2e", "#1e1e1e"], // Gradient colors
					stops: [0, 1], // Start and end points
				},
			}, // Single color for the fill
			line: {
				color: "#c70f2e", // Line color
			},
			hovertemplate: `<b>%{customdata}:</b> %{r}<extra></extra>`, // Use customdata for hover text
			customdata: [
				"Pace",
				"Physicality",
				"Overall",
				"Speed",
				"Dribbling",
				"Passing",
				"Shooting",
				"Defense",
			],
		},
	];

	let layout = {
		polar: {
			radialaxis: {
				visible: true,
				range: [0, 100],
				showticklabels: false, // Hide axis numbers
			},
			bgcolor: "rgba(0,0,0,0)", // Transparent inside background
		},
		showlegend: false,
		margin: {
			l: 20,
			r: 20,
			t: 20,
			b: 20,
		},
		paper_bgcolor: "rgba(0,0,0,0)", // Transparent outer background
	};

	// Disable plotly toolbar
	let config = {
		displayModeBar: false, // Disable the toolbar/menu
	};

	Plotly.newPlot("per_chart", data, layout, config);
}

function progressBar() {
	const data = [
		{
			type: "bar",
			x: [75], // Progress value (e.g., 75 for 75%)
			y: ["Progress"],
			orientation: "h", // Horizontal bar
			marker: {
				color: "#c70f2e", // Progress color
			},
			hoverinfo: "none", // Hide hover text for a clean look
		},
		{
			type: "bar",
			x: [25], // Remaining part (100 - progress)
			y: ["Progress"],
			orientation: "h",
			marker: {
				color: "#383838", // Uncompleted color
			},
			hoverinfo: "none",
		},
	];

	const layout = {
		barmode: "stack", // Stack bars to create a single progress bar effect
		xaxis: {
			range: [0, 100], // Percentage scale
			showticklabels: false, // Hide x-axis labels
			fixedrange: true, // Disable zoom
		},
		yaxis: {
			showticklabels: false, // Hide y-axis labels
		},
		height: 10, // Smaller height for compact progress bar
		width: 200, // Adjust width for a compact design
		margin: { t: 0, b: 0, l: 0, r: 0 },
		paper_bgcolor: "rgba(0,0,0,0)", // Transparent paper background
		plot_bgcolor: "rgba(0,0,0,0)", // Transparent plot area background
		showlegend: false,
	};

	let config = {
		displayModeBar: false, // Disable the toolbar/menu
	};
	Plotly.newPlot("prg", data, layout, config);
}
spiderChart();
progressBar();
