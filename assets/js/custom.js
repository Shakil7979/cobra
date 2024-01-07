$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

$(document).on('click','.bars_icon',function(){
    $('.sidebar-area').css({'left':'0'});
    $('.main-content-area ').addClass('mobile_overlay_after');
});

$(document).on('click','.sidebar_close',function(){
    $('.sidebar-area').css({'left':'-100%'});
    $('.main-content-area ').removeClass('mobile_overlay_after');
});

$(document).on('click','.noti_btn',function(){
    $('.noti-toggle').slideToggle();
});

$(document).on('click','.search_btn',function(){
    $('.search-field-box').slideToggle();
});








$(document).ready(function() {

  $('#example-1').progress_fnc();
  $('#example-2').progress_fnc();
  $('#example-3').progress_fnc();
  $('#example-4').progress_fnc();
  $('#example-5').progress_fnc();
  $('#example-6').progress_fnc();
  $('#example-7').progress_fnc();
  $('#example-8').progress_fnc();
  $('#example-9').progress_fnc();
  $('#example-10').progress_fnc();
  $('#example-11').progress_fnc();
  $('#example-12').progress_fnc();
  $('#example-13').progress_fnc();

  $('.progressStart').on('click', function() {
    var perent = $(this).closest("div").attr("id");
    $('#' + perent).progress_fnc({ type: 'start' });
  });

  $('.progressReset').on('click', function() {
    var perent = $(this).closest("div").attr("id");
    $('#' + perent).progress_fnc({ type: 'reset' });
  });

});


(function($) {

  $.fn.progress_fnc = function(options) {
    var settings = $.extend({
      type: 'start'
    }, options);

    var div = $(this);
    var progress = div.find('.cssProgress');

    progress.each(function() {
      var self = $(this);
      var progress_bar = self.find('.cssProgress-bar');
      var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
      var progress_value = progress_bar.data('percent');
      var percentage = parseInt(progress_value, 10);

      progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});

      if(settings.type == 'start') {

        progress_bar.animate({
          width: percentage
        }, {
          duration: 1000,
          step: function(x) {
            progress_label.text(Math.round(x));
          }
        });

      } else if(settings.type == 'reset') {
        progress_bar.css('width', '0%');
        progress_label.text('0%');
      }

    });
  }

}(jQuery));




const colors = {
  purple: {
    default: "rgba(149, 76, 233, 1)",
    half: "rgba(149, 76, 233, 0.5)",
    quarter: "rgba(149, 76, 233, 0.25)",
    zero: "rgba(149, 76, 233, 0)"
  },
  indigo: {
    default: "rgba(80, 102, 120, 1)",
    quarter: "rgba(80, 102, 120, 0.25)"
  }
};

const weight = [60.0, 16.2, 59.1, 61.4, 23.9, 60.2, 20.8, 38.6, 51.6, 79.2];

const labels = [
  "10am",
  "11am",
  "12am",
  "01am",
  "02am",
  "03am",
  "04am",
  "05am",
  "06am",
  "07am"
];

const ctx = document.getElementById("canvas").getContext("2d");
ctx.canvas.height = 100;

gradient = ctx.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);

const options = {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        pointBackgroundColor: colors.purple.default,
        borderColor: colors.purple.default,
        data: weight,
        lineTension: 0.2,
        borderWidth: 2,
        pointRadius: 3
      }
    ]
  },
  options: {
    layout: {
      padding: 10
    },
    responsive: true,
    legend: {
      display: false
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            padding: 10,
            autoSkip: false,
            maxRotation: 15,
            minRotation: 15
          }
        }
      ],
      yAxes: [
        {
         
         
          ticks: {
            beginAtZero: false,
            max: 100,
            min: 0,
            padding: 10
          }
        }
      ]
    }
  }
};

window.onload = function () {
  window.myLine = new Chart(ctx, options);
  Chart.defaults.global.defaultFontColor = colors.indigo.default;
  Chart.defaults.global.defaultFontFamily = "Fira Sans";
};




// Chart 2 

class Controller {
  constructor() {
      this.data = [
          {
              title: "trend1",
              data: [
                  { time: new Date("2014-01-01").getTime(), value: 20.5 },
                  { time: new Date("2014-02-01").getTime(), value: 30.5 },
                  { time: new Date("2014-03-01").getTime(), value: 25.5 },
                  { time: new Date("2014-04-01").getTime(), value: 35.5 },
                  { time: new Date("2014-05-01").getTime(), value: 50.5 },
                  { time: new Date("2014-06-01").getTime(), value: 40.5 },
                  { time: new Date("2014-07-01").getTime(), value: 60.5 }
              ]
          },
          {
              title: "longer trend2",
              data: [
                  { time: new Date("2014-01-01").getTime(), value: 10.5 },
                  { time: new Date("2014-02-01").getTime(), value: 20.5 },
                  { time: new Date("2014-03-01").getTime(), value: 35.5 },
                  { time: new Date("2014-04-01").getTime(), value: 45.5 },
                  { time: new Date("2014-05-01").getTime(), value: 50.5 },
                  { time: new Date("2014-06-01").getTime(), value: 60.5 },
                  { time: new Date("2014-07-01").getTime(), value: 70.5 }
              ]
          }
      ];
  }
}

angular
  .module("app", [])
  .factory("highstock", ($window) => {
      const Highcharts = $window.Highcharts;

      Highcharts.setOptions({
          global: { useUTC: false }
      });

      return Highcharts;
  })
  .controller("Controller", Controller)
  .directive("multiSeriesChart", ($filter, highstock) => {
      const colors = ["#49A5FF", "#FFA81E", "#FF3398", "#6538ff"];
      const chartConfig = {
          chart: {
              backgroundColor: "none"
          },
          title: {
              style: { display: "none" }
          },
          subTitle: {
              style: { display: "none" }
          },
          legend: {
              enabled: true,
              align: "right",
              verticalAlign: "top",
              itemStyle: {
                  cursor: "default"
              }
          },
          xAxis: {
              tickWidth: 0,
              lineWidth: 0,
              showFirstLabel: true,
              showLastLabel: true,
              startOnTick: true,
              crosshair: {
                  color: "#999"
              },
              dateTimeLabelFormats: {
                  millisecond: "%H:%M:%S.%L",
                  second: "%H:%M:%S",
                  minute: "%H:%M",
                  hour: "%H:%M",
                  day: "%m-%d",
                  week: "%m-%d",
                  month: "%Y-%m",
                  year: "%Y"
              },
              labels: {
                  //style: {color: textColor}
              }
          },
          yAxis: {
              opposite: false,
              gridLineColor: "rgba(221,221,221,0.1)",
              showLastLabel: true,
              //minTickInterval: 50,
              minRange: 100,
              labels: {
                  //style: {color: textColor},
                  formatter() {
                      return this.value + "%";
                  }
              }
          },
          rangeSelector: { enabled: false },
          navigator: { enabled: false },
          scrollbar: { enabled: false },
          tooltip: {
              borderWidth: 0,
              backgroundColor: "",
              useHTML: true,
              formatter() {
                  const time = new Date(this.points[0].key);
                  const html = [];

                  // Construct tooltip html
                  html.push(`
                  <section class="multi-series-chart-tooltip">
                  <header>${$filter("date")(time, "yyyy-MM")}</header>
              `);
                  for (let point of this.points) {
                      html.push(`
                      <div class="point-item">
                          <span class="point-name" style="color:${
                              point.color
                          }">${point.series.name}</span>
                          <span class="point-value" style="color:${
                              point.color
                          }">${point.y + "%"}</span></br>
                      </div>
                  `);
                  }
                  html.push("</section>");

                  return html.join("");
              },
              followPointer: true
          },
          plotOptions: {
              line: {
                  //marker: {
                  //    lineColor: null,
                  //},
                  states: {
                      hover: {
                          lineWidth: 1
                      }
                  },
                  lineWidth: 1,
                  events: {
                      legendItemClick(e) {
                          // Prevent hiding series when clicking on legend
                          e.preventDefault();
                      }
                  }
              }
          },
          series: [],
          credits: {
              enabled: false
          },
          exporting: {
              enabled: false
          }
      };

      return {
          restrict: "AE",
          scope: {
              data: "="
          },
          template: `
          <section class="multi-series-chart">
          </section>
      `,
          link(scope, elem) {
              const chartData = scope.data;
              const chartElem = elem[0].getElementsByClassName(
                  "multi-series-chart"
              )[0];
              chartConfig.chart.renderTo = chartElem;

              const createChart = () => {
                  let series = [];
                  for (let i = 0; i < chartData.length; i++) {
                      let plot = chartData[i];
                      let serie = {};
                      serie.name = plot.title;
                      serie.color = colors[i];
                      serie.data = plot.data.map((point) => {
                          return [point.time, point.value];
                      });
                      series.push(serie);
                  }

                  // Configure chart and render
                  chartConfig.series = series;
                  let chart = new highstock.StockChart(chartConfig);
              };

              createChart();
          }
      };
  });
