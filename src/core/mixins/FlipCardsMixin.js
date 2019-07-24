import anime from 'animejs';

export default {
  methods: {
    initFlipCards(flipCardsContent, detailFrontSelector, detailBackSelector) {
      detailFrontSelector = detailFrontSelector || '.service-detail-card-front';
      detailBackSelector = detailBackSelector || '.service-detail-card-back';


      flipCardsContent.forEach(((element, index) => {
        // Set the height of the wrapper, we need to absolute position the content
        element.style.height = `${element.getBoundingClientRect().height}px`;
        element.style.width = `${element.getBoundingClientRect().width}px`;

        const cardFaces = element.querySelectorAll('.service-detail-card-front, .service-detail-card-back');
        for (let cardFace of cardFaces) {
          cardFace.style.position = 'absolute';
          cardFace.style.top = '0';

          if (cardFace.classList.contains('service-detail-card-back')) {
            cardFace.style.display = 'block';
          }

          // Freeze the heights of the faces
          cardFace.style.height = `${element.getBoundingClientRect().height}px`;
          cardFace.style.width = `${element.getBoundingClientRect().width}px`;
          // });
        }
        element.animeJS = anime.timeline({ autoplay: false });

        element.animeJS.add({
          targets: element,
          rotateY: [{ value: '180deg', duration: 100 }]
        });

        const qsa = (el, str) =>  element.querySelectorAll(str);

        qsa('.more-info-link').forEach(((link) => {
          link.addEventListener('click', ((e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onCardEnter(element);
          }).bind(this));
        }).bind(this));

        element.addEventListener('mouseleave', (() => {
          this.onCardLeave(element);
        }).bind(this));
      }).bind(this));
    },
    // Anime.js card flip helpers
    onCardEnter(el) {
      if (el.animeJS.reversed) el.animeJS.reverse();
      element.animeJS.play();
    },
    onCardLeave(el) {
      if (!el.animeJS.reversed) el.animeJS.reverse();
      element.animeJS.play();
    }
  }
}
