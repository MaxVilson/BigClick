import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

if (window.location.pathname === '/index-main.html') {
    $(document).ready(function () {

        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create("country-charts", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [{
                country: "Россия",
                litres: '30,5%'
            },
            {
                country: "Украина",
                litres: '20,3%'
            },
            {
                country: "Казахстан",
                litres: '16,8%'
            },
            {
                country: "Беларусь",
                litres: '14,1%'
            },
            {
                country: "Кыргызстан",
                litres: '13,1%'
            },
            {
                country: "Прочие",
                litres: '5,2%'
            }
        ];

        chart.innerRadius = am4core.percent(40);
        chart.depth = 120;

        chart.legend = new am4charts.Legend();
        // chart.legend.position = "right";
        chart.legend.useDefaultMarker = true;
        chart.legend.labels.template.fill = am4core.color("#fff");
        chart.legend.valueLabels.template.fill = am4core.color("#b5b5b5");

        if (document.body.clientWidth > 768) {
            chart.legend.position = "right";
        }

        let marker = chart.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        marker.strokeWidth = 2;
        marker.strokeOpacity = 1;

        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
        series.ticks.template.disabled = true;
        series.labels.template.disabled = true;
    })
}
