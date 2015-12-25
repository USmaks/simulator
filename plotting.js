var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data, {
		scaleShowGlidLines : true,
		scaleGridLineColor : "rgba(0,0,0,.05)",
		scaleGridLineWidth : 1,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: true,
		bezierCurve : true,
		bezierCurveTension : 0.4,
		pointDot : true,
		pointDotRadius : 4,
		pointDotStrokeWidth : 1,
		pointHitDetectionRadius : 20,
		datasetStroke : true,
		datasetStrokeWidth : 2,
		datasetFill : true,
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%>&}%></li><%}%></ul>"
		});

Chart.defaults.global = {
	   animation: ture,
	   animationSteps: 60,
	   animationEasing: "easeOutQuart",
	   showScale: true,
	   scaleOverride: false,
	   scaleSteps: null,
	   scaleStepWidth: null,
	   scaleStartValue: null,
	   scaleLineColor: "rgba(0,0,0,.1)",
	   scaleLineWidth: 1,
	   scaleShowLabels: true,
	   scaleLabel: "<%=value%>",
	   scaleIntegersOnly: true,
	   scaleBeginAtZero: false,
	   scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	   scaleFontSize: 12,
	   scaleFontStyle: "normal",
	   scaleFontColor: "#666",
	   responsive: false,
	   maintainAspectRatio: true,
	   showTooltips: true,
	   customTooltips: false,
	   tooltipEvents: ["mousemove", "touchstart", "touchmove"],
	   tooltipFillColor: "rgba{0,0,0,0.8)",
	   tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	   tooltipFontSize: 14,
	   tooltipFontStyle: "normal",
	   tooltipFontColor: "#fff",
	   tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	   tooltipTitleFontSize: 14,
	   tooltipTitleFontStyle: "bold", 
	   tooltipTitleFontColor: "#fff",
	   tooltipYPadding: 6,
	   tooltipXPadding: 6,
	   tooltipCaretSize: 8,
	   tooltipCornerRadius: 6,
	   tooltipXOffset: 10,
	   tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
	   multiTooltipTemplate: "<%= value %>",
	   onAnimationProgress: function(){},
	   onAnimationComplete: function(){}
}

var data = {
	labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		}/*,
		   {
		   	label
		}*/
	]
};

