import anime from 'animejs';

export default {
  methods: {
    initFlipCards(flipCardsContent, detailFrontSelector, detailBackSelector) {
      detailFrontSelector = detailFrontSelector || '.service-detail-card-front';
      detailBackSelector = detailBackSelector || '.service-detail-card-back';


      flipCardsContent.forEach(((el, index) => {
        // Set the height of the wrapper, we need to absolute position the content
        el.style.height = `${el.getBoundingClientRect().height}px`;
        el.style.width = `${el.getBoundingClientRect().width}px`;

        const cardFaces = el.querySelectorAll('.service-detail-card-front, .service-detail-card-back');
        for (let cardFace of cardFaces) {
          cardFace.style.position = 'absolute';
          cardFace.style.top = '0';

          if (cardFace.classList.contains('service-detail-card-back')) {
            cardFace.style.display = 'block';
          }

          // Freeze the heights of the faces
          cardFace.style.height = `${el.getBoundingClientRect().height}px`;
          cardFace.style.width = `${el.getBoundingClientRect().width}px`;
          // });
        }
        el.animeJS = anime.timeline({ autoplay: false });

        el.animeJS.add({
          targets: el,
          rotateY: [{ value: '180deg', duration: 100 }]
        });

        const qsa = (el, str) => (el && str) ? el.querySelectorAll(str) : [];

        qsa('.more-info-link').forEach(((link) => {
          link.addEventListener('click', ((e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onCardEnter(el);
          }).bind(this));
        }).bind(this));

        el.addEventListener('mouseleave', (() => {
          this.onCardLeave(el);
        }).bind(this));
      }).bind(this));
    },
    // Anime.js card flip helpers
    onCardEnter(el) {
      if (el.animeJS.reversed) el.animeJS.reverse();
      el.animeJS.play();
    },
    onCardLeave(el) {
      if (!el.animeJS.reversed) el.animeJS.reverse();
      el.animeJS.play();
    }
  }
}
