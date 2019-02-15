// Create mock data
var firstDataSet = [200, 70, 34, 154];
var secondDataSet = [175, 182, 17, 47];
var thirdDataSet = [13, 92, 123, 12];
var fourthDataSet = [75, 87, 34, 130];
var fifthDataSet = [82, 164, 14, 66];

// Create chart
var myConfig = {
  type: 'bar',
  plot: {
 	  animation:{
 	    effect: 4,
 	    method: 0,
      speed: 500,
 	    sequence: 1
 	  }
 	},

 ScaleX: {
    values: [
      "Energy",
      "Infrastructure",
      "Transport",
      "Other"
    ]
  },
  series: [
    {
      values: null
    }
  ]
};

zingchart.render({
  id: 'myChart',
  data: myConfig
});

// Grab <select> element from the DOM
var select = document.querySelector('select[name="chart-selector"]');

// Add event listener to fire on each selection
select.addEventListener('change', function() {
  if (event.target.value == '0') {
    zingchart.exec('myChart', 'setseriesvalues', {
      plotindex: 0,
      values: firstDataSet
    });
  } else if (event.target.value == '1') {
    zingchart.exec('myChart', 'setseriesvalues', {
      plotindex: 0,
      values: secondDataSet
    });
    } else if (event.target.value == '2') {
    zingchart.exec('myChart', 'setseriesvalues', {
      plotindex: 0,
      values: thirdDataSet
    });
      } else if (event.target.value == '3') {
    zingchart.exec('myChart', 'setseriesvalues', {
      plotindex: 0,
      values: fourthDataSet
    });
        } else if (event.target.value == '4') {
    zingchart.exec('myChart', 'setseriesvalues', {
      plotindex: 0,
      values: fifthDataSet
    });
  } else {
    alert('Please Select An Option');
  }
});
