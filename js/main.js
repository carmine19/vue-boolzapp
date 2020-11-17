//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

// definisco l'oggetto vue avendo gia caricato la sua cdn
var app = new Vue({
    //questo è l 'elemento dove si aggancia vue, tutto quello scritto in questo id di nome app verra gestito da vue
    el: '#app',

    //qui è dove creiamo definiamo le pseudo variabili di vue, infatti non sono delle vere variabili ma oggetti che vue definisce
    //e gestisce
    data: {

    	indice_ele: 0,
		risposta: "",
		cerco_utente: '',
        contacts: [{
		name: 'Michele',
		avatar: 'user1.png',
		visible: true,
		messages: [{
			date: '10/01/2020 15:30:55',
			message: 'Hai portato a spasso il cane?',
			status: 'sent'
		}, {
			date: '10/01/2020 15:50:00',
			message: 'Ricordati di dargli da mangiare',
			status: 'sent'
		}, {
			date: '10/01/2020 16:15:22',
			message: 'Tutto fatto!',
			status: 'received'
		}],
	}, {
		name: 'Fabio',
		avatar: 'user2.png',
		visible: true,
		messages: [{
			date: '20/03/2020 16:30:00',
			message: 'Ciao come stai?',
			status: 'sent'
		}, {
			date: '20/03/2020 16:30:55',
			message: 'Bene grazie! Stasera ci vediamo?',
			status: 'received'
		}, {
			date: '20/03/2020 16:35:00',
			message: 'Mi piacerebbe ma devo andare a fare laspesa.',
			status: 'sent'
		}],
	},
	{
		name: 'Samuele',
		avatar: 'user3.png',
		visible: true,
		messages: [{
			date: '28/03/2020 10:10:40',
			message: 'La Marianna va in campagna',
			status: 'received'
		}, {
			date: '28/03/2020 10:20:10',
			message: 'Sicuro di non aver sbagliato chat?',
			status: 'sent'
		}, {
			date: '28/03/2020 16:15:22',
			message: 'Ah scusa!',
			status: 'received'
		}],
	}, {
		name: 'Luisa',
		avatar: 'user4.png',
		visible: true,
		messages: [{
			date: '10/01/2020 15:30:55',
			message: 'Lo sai che ha aperto una nuova pizzeria?',
			status: 'sent'
		}, {
			date: '10/01/2020 15:50:00',
			message: 'Si, ma preferirei andare al cinema',
			status: 'received'
		}],
	},
],

},



    //i methods sono dove definiamo le nostre funzioni e possono essere benissimamente scritte in es6\
    methods: {


    	prendo_indice(index) {
            this.indice_ele = index;
            this.autoscroll()
        },


        inserisco_mess_user(indice_ele) {

    		// creo un oggetto da pushare dentro il mio array nella posizione di messages che contiene gli stessi parametri
    		let messa_utente = {
    			date: app.orario(),
				message: this.risposta,
				status: 'sent'
			}
			// qui faccio il push dell oggetto creato sopra, passando l'indice del elemento alla sua posizione che di partenza è 0
    		this.contacts[indice_ele].messages.push(messa_utente)

			this.autoscroll()
			// creo una funzione di timout dove faccio la stessa cosa fatta su per la risposta del utente, se non uso es6 mi devo ricordare che
			// this fa parte della funzione stessa e quindi non è visto fuori, in questo caso posso usare app che fa parte del oggetto di vue
            setTimeout(function() {

            	// questo è l'oggetto della risposta utente
            	let messa_bot= {
					date: app.orario(),
					message: 'ok',
					status: 'received'
			}
                app.contacts[indice_ele].messages.push(messa_bot);

            	app.autoscroll()
            },1000);

    		// qui pulisco il campo della digitazione una volta che l'utente ha fatto invio
    		this.risposta = '';
        },

		// questa funzione imposta l'auoscroll agli elementi in pagina, gli elementi interessati sono l'inserimento e la risposta dell'messaggio
		autoscroll() {
    		// la funzione Vue.nextTick ci permette di far partire questa funzione solo una volta che il dom è caricato, cosi facendo in questo caso
			// non abbiamo problemi di altezza
    		Vue.nextTick(function () {
    			let altezza = document.getElementById('test');
    			altezza.scrollTop = altezza.scrollHeight
			})

		},

		orario() {
		  let data = new Date();
		  let ora = data.getHours();
		  if (ora < 10) {
			ora = "0" + ora;
		  }
		  let minuti = data.getMinutes();
		  if (minuti < 10) {
			minuti = "0" + minuti;
		  }
		  return ora + ":" + minuti

		},


        },

    // il mounted è la gestione dello stato, qui possiamo anche modificare i parametri che abbiamo definito precedentemente,
    // il mounted è il constructor di delle classi di js
    mounted: function () {
        //verifico se lo stato è inizializzato correttemente
		console.log('stato montato correttamente');
		this.autoscroll();
    }
})



