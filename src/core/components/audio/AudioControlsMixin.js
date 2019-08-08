export default {
  methods: {
    isAutoplayActive() {
      if (typeof window !== 'undefined') {
        return parseInt(localStorage.getItem('autoplayMusic'));
      }

      return false;
    },
    onPreviousClicked(audio) {

    },
    onNextClicked(audio) {

    },
    onPlayPauseClicked(audio) {
      if (typeof window !== 'undefined') {
        if (audio.paused) {
          localStorage.setItem('autoplayMusic', '1');
        } else {
          localStorage.setItem('autoplayMusic', '0');
        }
      }

      audio.paused ? audio.play() : audio.pause()
    },
    onShuffleClicked(audio) {

    },
    onRandomClicked(audio) {

    },
    onVolumeChanged(audio) {

    },
  }
}
