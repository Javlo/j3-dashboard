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
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Pic de revenus',
      // backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45, 20, 12, 30, 50, 100],
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

  // Vue.js
  let app = Vue.createApp({
    data: function(){
        return {
          message: 'Votre dashboard',
            subs12:'120',
            subs_subtitle:'nouveaux inscrits',
            visitors: '300',
            visitors_subtitle: 'visiteurs uniques',
            money: '1500',
            money_subtitle:'revenus totaux',
            key: '1',
            latest_subs_title: 'Dernières inscriptions',
            latest_mails:'Derniers mails',
            paiement_curve: 'Courbe des paiements',
            latest_internships: 'Derniers stages/activités ajouté(e)s'
        }
    },// data

    methods: {
        show(message) {
          alert(message)
      }
    }
    
  }) // create app
  app.mount('#app')