// nightmode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// parseDate
function parseDate(dateStr) {
  return new Date(parseInt(dateStr.substring(0,4)), parseInt(dateStr.substring(5,7))+1, parseInt(dateStr.substring(8,10)));
}

// Vue.js
let app = Vue.createApp({
  data() {
    return {
      message: 'Votre dashboard',
      data: '',
      subs_subtitle: 'nouveaux inscrits',
      visitors_subtitle: 'visiteurs uniques',
      money_subtitle: 'revenus totaux',
      latest_subs_title: 'Dernières inscriptions',
      latest_mails: 'Derniers mails',
      paiement_curve: 'Courbe des paiements',
      latest_internships: 'Derniers stages/activités ajouté(e)s'

    }
  }, // data

  methods: {
    selectSubs(message) {

      fetch('inscriptions-paiements.txt')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data)
        // console.log("#data = "+data.length);
        let c=0;
        for (i=0; i<data.length; i++) {
          var registration = data[i]
          // console.log("activityDateStart = "+parseDate(registration.activityDateStart));
          // console.log("registration = " ,registration);
          if (registration.active){

            var today = new Date();
            var debut = new Date("activityDateStart = "+parseDate(registration.activityDateStart));
            var time = Math.abs(debut - today);
            var day1 = Math.round(time / (1000 * 60 * 60 * 24));
            var days182 = Math.round(time / (1000 * 60 * 60 * 24 * 365 / 2));
            var days365 = Math.round(time / (1000 * 60 * 60 * 24 * 365));
            var days30 = Math.round( time / (1000 * 60 * 60 * 24 * 365 / 12));
            // console.log(day1 + " days");
            var days = "";
            c++;

          }
        }
      })
      .catch((error) => console.error("FETCH ERROR:", error));
    }
  }, //methods

  components: {
  },
}) // create app

app.mount('#app')

