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
      registrationdays: 0,
      money_gain: 0,
      subs_subtitle:'inscriptions',
      visitors_subtitle: 'visiteurs uniques',
      money_subtitle: 'revenus totaux',
      latest_subs_title: 'Dernières inscriptions',
      latest_mails: 'Derniers mails',
      paiement_curve: 'Courbe des paiements',
      latest_internships: 'Derniers stages/activités ajouté(e)s'

    }
  }, // data

  methods: {
    selectSubs(days) {
      
      console.log("days:",days);
      var self=this;
      var globalDays=days;

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
          console.log("registration = " ,registration);
          if (registration.active){

            var today = new Date();
            var debut = new Date("activityDateStart = "+parseDate(registration.activityDateStart));
            var time = Math.abs(debut - today);
            var daydata = Math.round(time / (1000 * 60 * 60 * 24));
            console.log("dd:",daydata);
            console.log(parseInt(globalDays))
            if(daydata < globalDays){
              c++
          }
          };
        }
        self.registrationdays=c;
      })
      .catch((error) => console.error("FETCH ERROR:", error));
    }, 
    showmoney(money){
      var self=this;

      fetch('inscriptions-paiements.txt')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  let c=0;
  for (i=0; i<data.length; i++) {
    var registration = data[i]
    console.log("bankLineTotal = "+(registration.bankLineTotal));
    console.log("registration = " ,registration);
    if (registration.active){

      var money = Math.round(registration.bankLineTotal++) 
      console.log(money)
    
    };
    // self.money_gain = c
  }
})
.catch((error) => console.error("FETCH ERROR:", error));
    }
  }, //methods

  components: {
  },
}) // create app

app.mount('#app')

