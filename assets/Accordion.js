"use strict";

var Accordion = {
    init: function () {
        this.triggers = document.getElementsByClassName("spec-name"),
        this.sizePickersCont = document.getElementsByClassName("sizes"), this.sizePickersList = [], this.sizePickers = [];

        for (var t = 0; t < this.sizePickersCont.length; t++) {
            this.sizePickersList.push(this.sizePickersCont[t].getElementsByTagName("LI"));
            this.sizePickers.push(this.sizePickersCont[t].getElementsByTagName("a"));
        }
        
        for (var e = this, i = 0; i < this.triggers.length; i++) {
            
            if (this.triggers[i].tagName !== "SPAN") {

				if (i+1 >= this.triggers.length) {	
				  var currEl = this.triggers[i].nextElementSibling,
					  currHeight = currEl.getElementsByTagName("div")[0].offsetHeight;
				  
				  TweenLite.to(currEl, .6, {
					  className: "+=active",
					  height: currHeight,
					  marginBottom: "20px",
					  ease: Power4.easeOut
				  });				  
				}
			  
                this.triggers[i].onclick = function (e) {
                    var slideDown = this.nextElementSibling.className.indexOf("spec-toggle") > -1 ? this.nextElementSibling : null,
                        slideCont = slideDown.getElementsByTagName("div")[0].offsetHeight;

                    if (slideDown !== null) {		
					  
						if (slideDown.className.indexOf("active") < 0) {
							TweenLite.to(slideDown, .6, {
								className: "+=active",
								height: slideCont + "px",
								marginBottom: "20px",
								ease: Power4.easeOut
							});
						}
						else {
							TweenLite.to(slideDown, .6, {
								className: "-=active",
								height: "0px",
								marginBottom: "0px",
								ease: Power4.easeOut
							});                            
						}				  
                    }
				  	return false;
                }   
            }
        }

        for (var n = 0; n < this.sizePickers.length; n++) {

            for (var s = 0; s < this.sizePickers[n].length; s++) {
                this.sizePickers[n][s].pos = n, this.sizePickers[n][s].onclick = function (t) {

                    if (!(this.parentElement.className.indexOf("active") < 0)) return !1;

                    for (var t = 0; t < e.sizePickers[this.pos].length; t++) {
                        e.sizePickers[this.pos][t].parentElement.className = "";
                    }

                    return this.parentElement.className = "active", !1
                }
            }
        }
    }
};

Accordion.init()
//module.exports = Accordion;