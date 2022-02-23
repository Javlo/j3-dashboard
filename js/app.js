    // nightmode
    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
   }

  // Vue.js
  let app = Vue.createApp({
    data() {
      return {
        message: 'Votre dashboard',
          data:'',
          subs_subtitle:'nouveaux inscrits',
          visitors_subtitle: 'visiteurs uniques',
          money_subtitle:'revenus totaux',
          latest_subs_title: 'Dernières inscriptions',
          latest_mails:'Derniers mails',
          paiement_curve: 'Courbe des paiements',
          latest_internships: 'Derniers stages/activités ajouté(e)s'

      }
    }, // data

    methods: {
        show(message) {
         this.data = message
      }
    }, //methods
    
    components:{
    },
  }) // create app

  app.component('line-chart', {
    extends: VueChartJs.Line,
    mounted () {
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  })
  app.mount('#app')

  fetch('inscriptions-paiements.txt')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    console.log(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));