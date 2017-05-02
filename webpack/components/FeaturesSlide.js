    "use strict";
    var featuresSlide = {
        win: window.innerWidth,
        cont: document.getElementsByClassName("featureCont")[0],
        items: document.getElementsByClassName("featureItem"),
        init: function (t) {
            
            if (void 0 != this.items[0]) {
                
                var e = this;
                
                this.itemsLength = this.items.length,
                this.itemsWidth = this.win,
                this.containerWidth = this.itemsWidth * this.itemsLength, 
                this.cont.style.width = this.containerWidth + "px", 
                this.touchstartX, 
                this.touchmoveX, 
                this.touchendX, 
                this.index = 0, 
                this.ended = !1, 
                this.mainContainer = void 0 == t.pageContainer ? t : t.pageContainer, 
                this.speed = void 0 == t.speed ? 1.3 : t.speed, 
                this.ease = void 0 == t.ease ? Power4 : t.ease, 
                this.autoPlay = void 0 == t.autoPlay || t.autoPlay, 
                this.resize = !1, 
                this.slideTime = 6e3, 
                this.itemInfo = this.cont.getElementsByTagName("SECTION"), 
                this.autoPlay && this.items.length > 1 && (this.startAutoSlide = setInterval(function () { e.autoSlide() }, this.slideTime)),
                this.navCont = document.getElementsByClassName("nav-bullets")[0], this.navCont.innerHTML += "<ul>";
                
                for (var i = 0; i < this.itemsLength; i++) {
                    this.navCont.getElementsByTagName("UL")[0].innerHTML += '<li><a href="#" class="nav-bullet"></a></li>', this.items[i].style.width = this.itemsWidth + "px", this.items[i].pos = i, this.items[i].slideTitle = void 0 == this.items[i].getElementsByTagName("h1")[0] ? this.items[i].getElementsByTagName("h2")[0] : this.items[i].getElementsByTagName("h1")[0], this.items[i].bts = void 0 == this.items[i].getElementsByClassName("btn-box")[0] ? "" : this.items[i].getElementsByClassName("btn-box")[0];
                }
                this.navBullet = this.navCont.getElementsByTagName("UL")[0].getElementsByTagName("LI"), this.navBullet[0].className += "active";
                
                for (var n = 0; n < this.navBullet.length; n++) this.navBullet[n].pos = n, this.navBullet[n].onclick = function (t) {
                    clearInterval(e.startAutoSlide);
                    for (var i, n = this.pos, s = 0; s < e.navBullet.length; s++) e.navBullet[s].className.indexOf("active") > -1 && (i = s);
                    return !(this.className.indexOf("active") > -1) && (n > i ? (e.index = n, e.goTo(n, "f", "click", i)) : (e.index = n, e.goTo(n, "r", "click", i)), e.autoPlay && (e.index = n), void t.preventDefault())
                };
                window.addEventListener("resize", function () {
                    e.resize = !0, e.responsive.getHeight(e.mainContainer, this.innerWidth)
                }), TweenLite.to(e.itemInfo[0], .4, {
                    alpha: 1,
                    ease: "linear"
                }), this.responsive.getHeight(this.mainContainer, window.innerWidth)
            }
        },
        responsive: {
            getHeight: function (t, e) {
                var e = e;
                
                this.bodyChilds = document.getElementsByTagName("BODY")[0].childNodes, this.previousHeight = 0;
                
                for (var n = 0; n < this.bodyChilds.length; n++) {
                    var s = void 0 !== this.bodyChilds[n].className ? this.bodyChilds[n].className.indexOf(t) < 0 : null;
                    s !== !1 && "parallax-mirror" !== this.bodyChilds[n].className ? "#text" !== this.bodyChilds[n].nodeName && void 0 !== this.bodyChilds[n].offsetHeight && "hidden" !== this.bodyChilds[n].style.visibility && (this.previousHeight += this.bodyChilds[n].offsetHeight) : this.attachHeight(this.previousHeight, featuresSlide.cont, e)
                }
            },
            attachHeight: function (t, e, n) {
                var s = featuresSlide,
                    o = (window.innerHeight - t, n);
                e.style.height = "750px";
                
                for (var a = 0; a < s.itemsLength; a++) {
                    s.items[a].style.width = o + "px";
                }
                s.resize && (s.itemsWidth = o, s.containerWidth = s.itemsWidth * s.itemsLength, e.style.width = s.containerWidth + "px")
            }
        },
        autoSlide: function () {
            this.index < this.itemsLength - 1 && this.ended !== !0 ? (this.goTo(this.index, "f"), this.index++) : (this.index <= 1 ? this.ended = !1 : this.ended = !0, this.goTo(this.index, "r"), this.index--)
        },
        goTo: function (t, e, i, n) {
            var s = this,
                o = "click" == i ? 0 : 1,
                a = "click" == i ? n : t,
                r = s.ease == Back ? Back.easeOut.config(1) : s.ease.easeOut;
            
            if (this.items[a].className.indexOf("active") > -1 && (this.items[a].className = this.items[a].className.replace(" active", ""), this.navBullet[a].className = this.navBullet[a].className.replace("active", "")), "f" == e) {
                var l = t + o;
                this.items[t + o].className.indexOf("active") < 0 && (this.items[t + o].className = this.items[t + o].className + " active", this.navBullet[t + o].className = this.navBullet[t + o].className + " active"), TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: "-" + this.itemsWidth * (t + o) + "px"
                    },
                    ease: r,
                    onComplete: function (t) {
                        s.itemInfo[l - 1].style.opacity = 0, TweenLite.to(s.itemInfo[l], .4, {
                            alpha: 1,
                            ease: "linear"
                        })
                    }
                })
            } else if ("r" == e) {
                var l = t - o;
                this.items[t - o].className.indexOf("active") < 0 && (this.items[t - o].className = this.items[t - o].className + " active", this.navBullet[t - o].className = this.navBullet[t - o].className + "active"), TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: -this.itemsWidth * (t - o)
                    },
                    ease: r,
                    onComplete: function () {
                        s.itemInfo[l + 1].style.opacity = 0, TweenLite.to(s.itemInfo[l], .5, {
                            alpha: 1,
                            ease: "linear"
                        })
                    }
                })
            } else TweenLite.to(this.cont, s.speed, {
                css: {
                    left: this.itemsWidth * t
                },
                ease: r
            })
        }
    };

    featuresSlide.init({
        pageContainer: "main-featured",
        speed: 1,
        autoPlay: !0,
        ease: Expo
    });
        
    module.exports = featuresSlide