// 'https://developers.google.com/youtube/iframe_api_reference?hl=ko';
function YoutubeControl(element, videoId) {
    this.player = null;
    this.element = element;
    this.done = false;
    this.videoId = videoId;
    
    const url = 'https://www.youtube.com/iframe_api'
    const checkYoutubeAPI = document.querySelector(`script[src="${url}"]`)

    if(checkYoutubeAPI) {
        console.log(checkYoutubeAPI)
        this.callYoutube.call(this)
    } else {
        this.scriptTag = document.createElement('script');
        const firstScriptTag = document.getElementsByTagName('script')[0];
        this.scriptTag.src = 'https://www.youtube.com/iframe_api';
    
        firstScriptTag.parentNode.insertBefore(this.scriptTag, firstScriptTag);
    }
  }
  
  YoutubeControl.prototype.onYouTubeIframeAPIReady = function () {
    const obj = this;
  
    window.onYouTubeIframeAPIReady = function () {
        obj.callYoutube.call(obj)
        window.onYouTubeIframeAPIReady = null;
    };
  };

  YoutubeControl.prototype.callYoutube = function () {
    this.player = new YT.Player(this.element, {
        width: '100%',
        height: '100%',
        videoId: this.videoId,
        events: {
          onReady: this.onPlayerReady.bind(this),
          onStateChange: this.onPlayerStateChange.bind(this)
        }
    });
  }
  
  YoutubeControl.prototype.onPlayerReady = function (event) {
    event.target.playVideo();
  };
  
  YoutubeControl.prototype.onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  };
  
  YoutubeControl.prototype.stopVideo = function () {
    this.player.stopVideo();
  };
  
  export default YoutubeControl;