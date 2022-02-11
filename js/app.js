    // nightmode
    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
   }


  //  chart.js
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // bootstrap tables

  // $('#table').bootstrapTable({
  //   pagination: true,
  //   search: true,
  //   columns: [{
  //     field: 'id',
  //     title: 'Item ID'
  //   }, {
  //     field: 'name',
  //     title: 'Item Name'
  //   }, {
  //     field: 'price',
  //     title: 'Item Price'
  //   }],
  //   data: [{
  //     id: 1,
  //     name: 'Item 1',
  //     price: '$1'
  //   }, {
  //     id: 2,
  //     name: 'Item 2',
  //     price: '$2'
  //   }]
  // })