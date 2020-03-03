import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


$(document).ready(function () {

    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.paddingRight = 20;

        var data = [];
        var visits = 10;
        var previousValue;

        for (var i = 0; i < 100; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

            if (i > 0) {
                // add color to previous data item depending on whether current value is less or more than previous value
                if (previousValue <= visits) {
                    data[i - 1].color = chart.colors.getIndex(0);
                } else {
                    data[i - 1].color = chart.colors.getIndex(5);
                }
            }

            data.push({
                date: new Date(2018, 0, i + 1),
                value: visits
            });
            previousValue = visits;
        }

        chart.data = data;

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.axisFills.template.disabled = true;
        dateAxis.renderer.ticks.template.disabled = true;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        valueAxis.renderer.axisFills.template.disabled = true;
        valueAxis.renderer.ticks.template.disabled = true;

        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.strokeWidth = 2;
        series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";

        // set stroke property field
        series.propertyFields.stroke = "color";

        chart.cursor = new am4charts.XYCursor();

        var scrollbarX = new am4core.Scrollbar();
        chart.scrollbarX = scrollbarX;
        chart.scrollbarX.thumb.background.fill = am4core.color("#85c82b");

        dateAxis.start = 0.7;
        dateAxis.keepSelection = true;
    })

    am4core.ready(function() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv2", am4charts.XYChart);
        chart.paddingRight = 20;

        var data = [];
        var visits = 10;
        var previousValue;

        for (var i = 0; i < 100; i++) {
            visits += Math.round(
                (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
            );

            if (i > 0) {
                // add color to previous data item depending on whether current value is less or more than previous value
                if (previousValue <= visits) {
                    data[i - 1].color = chart.colors.getIndex(0);
                } else {
                    data[i - 1].color = chart.colors.getIndex(5);
                }
            }

            data.push({
                date: new Date(2018, 0, i + 1),
                value: visits
            });
            previousValue = visits;
        }

        chart.data = data;

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.axisFills.template.disabled = true;
        dateAxis.renderer.ticks.template.disabled = true;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        valueAxis.renderer.axisFills.template.disabled = true;
        valueAxis.renderer.ticks.template.disabled = true;

        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.strokeWidth = 2;
        series.tooltipText =
            "value: {valueY}, day change: {valueY.previousChange}";

        // set stroke property field
        series.propertyFields.stroke = "color";

        chart.cursor = new am4charts.XYCursor();

        var scrollbarX = new am4core.Scrollbar();
        chart.scrollbarX = scrollbarX;
        chart.scrollbarX.thumb.background.fill = am4core.color("#85c82b");

        dateAxis.start = 0.7;
        dateAxis.keepSelection = true;
    });
})
