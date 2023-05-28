$(document).ready(function() {
  $('#data-table').DataTable({
    ajax: {
      url: 'https://api.covidtracking.com/v1/us/daily.json',
      dataSrc: ''
    },
    columns: [{
        render: function(data, type, row, meta) {
          return meta.row + 1;
        }
      },
      {
        data: 'dateChecked'
      },
      {
        data: 'positive'
      },
      {
        data: 'negative'
      },
      {
        data: 'death'
      },
      {
        data: 'totalTestResults'
      },
    ]

  });

 
});

