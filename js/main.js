//questa variabile abilita il prototiping di vue
Vue.config.devtools = true;

// definisco l'oggetto vue avendo gia caricato la sua cdn
var app = new Vue({
    //questo è l 'elemento dove si aggancia vue, tutto quello scritto in questo id di nome app verra gestito da vue
    el: '#app',

    //qui è dove creiamo definiamo le pseudo variabili di vue, infatti non sono delle vere variabili ma oggetti che vue definisce
    //e gestisce
    data: {

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
		avatar: '_2',
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
			status: 'received'
		}],
	},
	{
		name: 'Samuele',
		avatar: '_3',
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
		avatar: '_4',
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
]

},



    //i methods sono dove definiamo le nostre funzioni e possono essere benissimamente scritte in es6
    methods: {



        },

    // il mounted è la gestione dello stato, qui possiamo anche modificare i parametri che abbiamo definito precedentemente,
    // il mounted è il constructor di delle classi di js
    mounted: function () {
        //verifico se lo stato è inizializzato correttemente
        console.log('stato montato correttamente');

    }

})



