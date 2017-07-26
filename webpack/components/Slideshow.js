"use strict";
var slideObj = {
    isTouch: function () {
        return "ontouchstart" in window || navigator.maxTouchPoints
    },
    win: window.innerWidth,
    cont: document.getElementsByClassName("slideCont")[0],
    items: document.getElementsByClassName("slideItem"),
    init: function (e) {
        var t = this;
        if (this.items[0] == undefined || document.getElementsByClassName("main-featured")[0].className.indexOf("towel") > -1) {
            this.cont.style.height = window.innerHeight + "px";
            return
        }
        this.itemsLength = this.items.length;
        this.itemsWidth = this.win;
        this.containerWidth = this.itemsWidth * this.itemsLength;
        this.cont.style.width = this.containerWidth + "px";
        this.cont.style.height = window.innerHeight + "px";
        this.touchstartX;
        this.touchmoveX;
        this.touchendX;
        this.index = 0;
        this.ended = false;
        this.mainContainer = e.pageContainer == undefined ? e : e.pageContainer;
        this.speed = e.speed == undefined ? 1.3 : e.speed;
        this.ease = e.ease == undefined ? Power4 : e.ease;
        this.autoPlay = e.autoPlay == undefined ? true : e.autoPlay;
        this.resize = false;
        this.slideTime = 6e3;
        this.itemInfo = this.cont.getElementsByTagName("SECTION");
        this.added = false;
        if (this.isTouch()) {
            this.cont.addEventListener("touchstart", t.touchSlide.touchStart);
            this.cont.addEventListener("touchmove", t.touchSlide.touchMove);
            this.cont.addEventListener("touchend", t.touchSlide.touchEnd)
        }
        if (this.autoPlay && this.items.length > 1) {
            this.startAutoSlide = setInterval(function () {
                t.autoSlide()
            }, this.slideTime)
        }
        this.navCont = document.getElementsByClassName("nav-bullets")[0];
        this.navCont.innerHTML += "<ul>";
        for (var i = 0; i < this.itemsLength; i++) {
            this.navCont.getElementsByTagName("UL")[0].innerHTML += '<li><a href="#" class="nav-bullet"></a></li>';
            this.items[i].style.width = this.itemsWidth + "px";
            this.items[i].pos = i;
            this.items[i].slideTitle = this.items[i].getElementsByTagName("h1")[0] == undefined ? this.items[i].getElementsByTagName("h2")[0] : this.items[i].getElementsByTagName("h1")[0];
            this.items[i].bts = this.items[i].getElementsByClassName("btn-box")[0] == undefined ? "" : this.items[i].getElementsByClassName("btn-box")[0];
			this.items[i].bts.onclick = function () {
				if (this.className.indexOf('active') > -1) {
					window.scrollBy(0, window.innerHeight);
					return false;					
				}
			};
        }
        this.navBullet = this.navCont.getElementsByTagName("UL")[0].getElementsByTagName("LI");
        this.navBullet[0].className += "active";
        this.items[0].className = this.items[0].className + " active";
        for (var n = 0; n < this.navBullet.length; n++) {
            this.navBullet[n].pos = n;
            this.navBullet[n].onclick = function (e) {
                clearInterval(t.startAutoSlide);
                var i = this.pos,
                    n;
                for (var s = 0; s < t.navBullet.length; s++) {
                    if (t.navBullet[s].className.indexOf("active") > -1) {
                        n = s
                    }
                }
                if (this.className.indexOf("active") > -1) {
                    return false
                } else {
                    if (i > n) {
                        t.index = i;
                        t.hasVideo(i);
                        t.goTo(i, "f", "click", n)
                    } else {
                        t.index = i;
                        t.hasVideo(i);
                        t.goTo(i, "r", "click", n)
                    }
                }
                if (t.autoPlay) {
                    t.index = i;
                    if (t.hasVideo(i) !== true) {
                        t.startAutoSlide = setInterval(function () {
                            t.autoSlide()
                        }, 6e3)
                    }
                }
                e.preventDefault()
            }
        }
        var s = document.getElementsByClassName("shop");
        for (var o = 0; o < s.length; o++) {
            s[o].addEventListener("click", function (e) {
                window.location.href = this.getAttribute("href") + "?sOcRuXJnMT=1"
            })
        }
        window.addEventListener("resize", function () {
            t.resize = true;
            t.responsive(this.innerWidth)
        });
        TweenLite.to(t.itemInfo[0], .4, {
            alpha: 1,
            ease: "linear"
        });
        this.responsive(window.innerWidth);
        if (e.textSlide !== undefined) this.textSlide(e.textSlide)
    },
    responsive: function (e) {
        var t = this,
            i = e,
            n = window.innerHeight;
        if (t.cont.className.indexOf("featureCont") < 0) {
            if (t.cont.className.indexOf("slide-products") > -1) {
                t.cont.style.height = n + "px"
            }
        }
        for (var s = 0; s < t.itemsLength; s++) {
            t.items[s].style.width = i + "px"
        }
        t.cont.style.width = e * t.itemsLength + "px";
        t.itemsWidth = e;
        t.containerWidth = t.itemsWidth * t.itemsLength
    },
    touchSlide: {
        touchStart: function (e, t, n) {
            clearInterval(slideObj.startAutoSlide);
            slideObj.touchstartX = e.changedTouches[0].clientX + slideObj.itemsWidth * slideObj.index;
            return false
        },
        touchMove: function (e, t, n) {
            e.touchmoveX = e.changedTouches[0].clientX - slideObj.touchstartX;
            TweenLite.to(slideObj.cont, 1, {
                css: {
                    left: e.touchmoveX + "px"
                }
            });
            return false
        },
        touchEnd: function (e, t) {
            var n = .25 * window.innerWidth,
                s = .75 * window.innerWidth,
                o = slideObj.index < slideObj.itemsLength - 1 ? true : false;
            slideObj.touchendX = event.changedTouches[0].clientX;
            if (slideObj.touchendX <= n && o) {
                if (slideObj.hasVideo(slideObj.index + 1)) {
                    slideObj.playVideo(slideObj.index + 1)
                }
                if (slideObj.hasVideo(slideObj.index)) {
                    slideObj.stopVideo(slideObj.video)
                }
                slideObj.goTo(slideObj.index, "f");
                slideObj.index++
            } else if (slideObj.touchendX >= s && slideObj.index > 0) {
                if (slideObj.hasVideo(slideObj.index - 1)) {
                    slideObj.playVideo(slideObj.index - 1)
                }
                if (slideObj.hasVideo(slideObj.index)) {
                    slideObj.stopVideo(slideObj.video)
                }
                slideObj.goTo(slideObj.index, "r");
                slideObj.index--
            } else {
                TweenLite.to(slideObj.cont, slideObj.speed, {
                    css: {
                        left: -(slideObj.itemsWidth * slideObj.index)
                    },
                    ease: slideObj.ease.easeOut
                })
            }
            slideObj.startAutoSlide = setInterval(function () {
                slideObj.autoSlide()
            }, slideObj.slideTime);
            return false
        }
    },
    autoSlide: function () {
        if (this.index < this.itemsLength - 1 && this.ended !== true) {
            if (this.hasVideo(this.index + 1)) {
                this.playVideo(this.index + 1)
            }
            this.goTo(this.index, "f");
            this.index++
        } else {
            if (this.index <= 1) {
                this.ended = false
            } else {
                this.ended = true
            }
            this.hasVideo(this.index - 1);
            this.goTo(this.index, "r");
            this.index--
        }
    },
    hasVideo: function (e) {
        if (this.items[e].getElementsByTagName("VIDEO")[0] !== undefined && this.win > 768) {
            return true
        } else {
            return false
        }
    },
    stopVideo: function (e) {
        var t = this;
        t.slideTime = 6e3;
        e.currentTime = 0;
        e.pause()
    },
    playVideo: function (e) {
        var t = this;

        function i() {
            clearInterval(t.startAutoSlide);
            t.slideTime = 6e3;
            t.startAutoSlide = setInterval(function () {
                t.autoSlide()
            }, t.slideTime);
            t.video.currentTime = 0;
            t.video.pause();
            t.autoSlide()
        }
        clearInterval(this.startAutoSlide);
        this.video = this.items[e].getElementsByTagName("VIDEO")[0];
        this.video.currentTime = 0;
        this.video.play();
        this.videoDuration = this.video.duration * 1e3;
        this.slideTime = this.videoDuration;
        this.startAutoSlide = setInterval(function () {
            i()
        }, this.slideTime)
    },
    goTo: function (e, t, i, n) {
        var s = this,
            o = i == "click" ? 0 : 1,
            a = i == "click" ? n : e,
            r = s.ease == Back ? Back.easeOut.config(1.2) : s.ease.easeOut;
        if (this.items[a].className.indexOf("active") > -1) {
            this.items[a].className = this.items[a].className.replace(" active", "");
            this.navBullet[a].className = this.navBullet[a].className.replace("active", "")
        }
        if (t == "f") {
            var l = e + o;
            if (this.items[e + o].className.indexOf("active") < 0) {
                this.items[e + o].className = this.items[e + o].className + " active";
                this.navBullet[e + o].className = this.navBullet[e + o].className + " active"
            }
            TweenLite.to(this.cont, s.speed, {
                css: {
                    left: "-" + this.itemsWidth * (e + o) + "px"
                },
                ease: r,
                onComplete: function (e) {
                    s.itemInfo[l - 1].style.opacity = 0
                }
            });
            TweenLite.to(s.itemInfo[l], .4, {
                delay: .7,
                alpha: 1,
                ease: "linear"
            });
            TweenLite.to(s.items[e], .4, {
                delay: .1,
                alpha: 0,
                ease: r
            });
            TweenLite.to(s.items[e + o], .4, {
                alpha: 1,
                ease: "linear"
            });
            if (s.items[e + o].slideTitle !== undefined) {
                setTimeout(function () {
                    s.items[e + o].slideTitle.className = "active";
                    s.items[e + o].bts.className = "btn-box active";
                }, 900)
            }
        } else if (t == "r") {
            var l = e - o;
            if (this.items[e - o].className.indexOf("active") < 0) {
                this.items[e - o].className = this.items[e - o].className + " active";
                this.navBullet[e - o].className = this.navBullet[e - o].className + "active"
            }
            TweenLite.to(this.cont, s.speed, {
                css: {
                    left: -this.itemsWidth * (e - o)
                },
                ease: r,
                onComplete: function () {
                    s.itemInfo[l + 1].style.opacity = 0
                }
            });
            TweenLite.to(s.itemInfo[l], .4, {
                delay: .7,
                alpha: 1,
                ease: "linear"
            });
            TweenLite.to(s.items[e], .4, {
                delay: .1,
                alpha: 0,
                ease: r
            });
            TweenLite.to(s.items[e - o], .4, {
                alpha: 1,
                ease: "linear"
            });
            if (s.items[e - o].slideTitle !== undefined) {
                setTimeout(function () {
                    s.items[e - o].slideTitle.className = "active";
                    s.items[e - o].bts.className = "btn-box active";
                }, 900)
            }
        } else {
            TweenLite.to(this.cont, s.speed, {
                css: {
                    left: this.itemsWidth * e
                },
                ease: r
            })
        }
    }
};

slideObj.init({
    pageContainer: "main-featured",
    speed: 1.8,
    autoPlay: true,
    ease: Expo
});

module.exports = slideObj;