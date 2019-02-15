// Create mock data
var firstDataSet = [0, 2, 4, 6, 8, 10, 12, 14];
var secondDataSet = [Energy, Infrastructure mining and comodities, transport, Other];

// Create chart
var myConfig = {
  type: 'line',
  plot: {
 	  animation:{
 	    effect: 4,
 	    method: 0,
      speed: 500,
 	    sequence: 1
 	  }
 	},
  scaleY: {
    values: '0:14:2'
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
  } else {
    alert('Please Select An Option');
  }
});
