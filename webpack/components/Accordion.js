    "use strict";
    var i = function () {
        var t = {
            init: function () {
                this.triggers = document.getElementsByClassName("spec-name"), this.sizePickersCont = document.getElementsByClassName("sizes"), this.sizePickersList = [], this.sizePickers = [];
                for (var t = 0; t < this.sizePickersCont.length; t++) this.sizePickersList.push(this.sizePickersCont[t].getElementsByTagName("LI")), this.sizePickers.push(this.sizePickersCont[t].getElementsByTagName("a"));
                for (var e = this, i = 0; i < this.triggers.length; i++) "SPAN" !== this.triggers[i].tagName && (this.triggers[i].onclick = function (t) {
                    var e = this.nextElementSibling.className.indexOf("spec-toggle") > -1 ? this.nextElementSibling : null,
                        i = e.getElementsByTagName("div")[0].offsetHeight;
                    return null !== e && (e.className.indexOf("active") < 0 ? TweenLite.to(e, .6, {
                        className: "+=active",
                        height: i + "px",
                        marginBottom: "20px",
                        ease: Power4.easeOut
                    }) : TweenLite.to(e, .6, {
                        className: "-=active",
                        height: "0px",
                        marginBottom: "0px",
                        ease: Power4.easeOut
                    })), !1
                });
                for (var n = 0; n < this.sizePickers.length; n++)
                    for (var s = 0; s < this.sizePickers[n].length; s++) this.sizePickers[n][s].pos = n, this.sizePickers[n][s].onclick = function (t) {
                        if (!(this.parentElement.className.indexOf("active") < 0)) return !1;
                        for (var t = 0; t < e.sizePickers[this.pos].length; t++) e.sizePickers[this.pos][t].parentElement.className = "";
                        return this.parentElement.className = "active", !1
                    }
            }
        };
        return t.init(), t
    }();
    t.exports = i