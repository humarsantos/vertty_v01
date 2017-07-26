"use strict";

function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "600",
		width: window.innerWidth,
		videoId: url,
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	})
}

function onPlayerReady(e) {
	productVideo.init(e.target)
}

function onPlayerStateChange(e) {
	e.data != YT.PlayerState.PLAYING || done || (done = !0)
}
var url = null == document.getElementById("video-id") ? "" : document.getElementById("video-id").innerText.trim(),
	tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, done = !1,
	productVideo = {
		init: function (e) {
			var t = this;
			this.nowFocus, this.cont = document.getElementsByClassName("featured-video")[0], this.videoHeight = this.cont.offsetHeight, 0 == this.cont.offsetTop ? this.contTop = this.cont.offsetParent.offsetTop : this.contTop = this.cont.offsetTop;
			var o = this.videoHeight >= window.innerHeight ? !0 : !1;
			window.addEventListener("focus", function () {
				t.nowFocus = !0, t.start(t.nowFocus, e, o)
			}), window.addEventListener("blur", function () {
				t.nowFocus = !1, t.start(t.nowFocus, e, o)
			}), window.addEventListener("scroll", function () {
				t.nowFocus = !0, t.start(t.nowFocus, e, o)
			})
		},
		start: function (e, t, o) {
			if (e) {
				var n = this.contTop + this.videoHeight - window.innerHeight;
				
				if (window.pageYOffset >= n && window.pageYOffset <= this.contTop + this.videoHeight) {
					t.playVideo();
					t.setPlaybackQuality('default');
				}
				else {				
					t.pauseVideo()
				}
				
			} else t.pauseVideo()
		}
	};