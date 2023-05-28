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
          label: 'Muertes por COVID desde 2021',
          data: values,
          backgroundColor: 'rgba(0, 123, 255, 0.5)', // Color de fondo de las barras
          borderColor: 'rgba(0, 123, 255, 1)', // Color del borde de las barras
          borderWidth: 1 // Ancho del borde de las barras
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
  