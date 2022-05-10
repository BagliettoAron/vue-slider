// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            imageSelected: 0,
            images: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet '
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit.'
                }
            ],
        },
        methods: {
            
            displayPrev:function() {
                // stessa cosa ma al contrario come sotto
                if (this.imageSelected === 0) {
                    this.imageSelected = (this.images.length - 1);
                } else {
                    this.imageSelected-- ;
                }
            },

            displayNext:function() {
                // facciamo in modo che se scorriamo fino all'ultima immagine, si riparte dalla prima, else: si continua ad andare avanti (incrementare)
                if (this.imageSelected >= (this.images.length - 1)) {
                    this.imageSelected = 0;
                } else {
                    this.imageSelected++;
                }


            },
        },
  
    }
);  
