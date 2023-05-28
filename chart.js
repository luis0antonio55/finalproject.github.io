fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then(response => response.json())
  .then(data => {
    // Llamada a la función para crear la gráfica con los datos obtenidos
    len = data.length;
    labels = [];
    values = [];
    for (i = 0; i < len; i++) {
        
        labels.push(data[i].dateChecked);
        values.push(data[i].death);
    }
    createChart(labels, values);
  });
  function createChart(labels, values) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Muertes por COVID desde 2020',
          data: values,
          backgroundColor: 'rgb(68, 236, 213 )',
          borderWidth: 1 
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
