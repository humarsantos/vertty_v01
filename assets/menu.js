'use strict';

var Menu = (function () {
    
    var interaction = {
        init: function () {
            var me = this;
            
            this.menu = document.getElementsByClassName('menu')[0];
            this.slideMenu = document.getElementsByClassName('slideDownMenu')[0];
            this.burgerMenu = $('.i-burger-menu');
            this.navMobile = document.getElementsByClassName('navigation-mobile')[0];
            this.slideTriggers = document.getElementsByClassName('slide-menu');
            
            for (var a = 0; a < this.slideTriggers.length; a++) {
                this.slideTriggers[a].addEventListener('mouseover', function (e) { me.animate(e.type) });
                this.slideTriggers[a].addEventListener('mouseleave', function (e) { me.animate(e.type) });
            }

            this.burgerMenu.click(function(){

                var links = me.navMobile.getElementsByTagName('UL')[0];

                if (window.innerWidth < 1200) {

                    if (this.className.indexOf('open') < 0) {
                        this.className = this.className + ' open';
                        $(me.navMobile).animate({ left: 0 });
                        TweenLite.to(links, 0.2, { delay: 0.1, alpha: 1, ease: Power0.easeNone }); 
                    }
                    else {             
                        this.className = this.className.replace(' open','');
                        TweenLite.to(links, 0.15, { alpha: 0, ease: Power0.easeNone }); 
                        $(me.navMobile).delay(0.1).animate({ left: '-401px' });
                    }

                }
                else {
                    return false;
                }
            });           
        },
        returnChild: function (clsName,me) {
            var items = [];

            for (var i = 0; i < me.children.length; i++) {
                if (me.children[i].className.indexOf(clsName) > -1) {
                    items.push(me.children[i]);
                }
            }            
            return items.length <= 1 ? items[0] : items;
        },
        animate: function (eventType) {
            var me = this;
            
            this.slideMenuItems = this.slideMenu.getElementsByTagName('a');
            
            if (eventType == 'mouseover') {
                TweenLite.to(me.slideMenu, 0.6, {
                    display: 'block',
                    height: '300px',
                    ease : Expo.easeOut,
                    alpha: 1
                });
                
                for (var b = 0; b < me.slideMenuItems.length; b++) {
                    TweenLite.to(me.slideMenuItems[b], 0.5, {
                        top: 0,
                        delay: b * .15,
                        alpha: 1,
                        ease : Expo.easeOut
                    });                            
                }
                
            }
            else if (eventType == 'mouseleave') {
                for (var b = 0; b < me.slideMenuItems.length; b++) {
                    TweenLite.to(me.slideMenuItems[b], 0.5, {
                        top: '-100px',
                        delay: b * .1,
                        alpha: 0,
                        ease : Expo.easeOut
                    });    
                }                     

                TweenLite.to(me.slideMenu, 0.5, {
                    delay: 0.2,
                    display: 'none',
                    height: 0,
                    alpha: 0,
                    ease : 'linear'
                });
                
            }
            else {
                return false;
            }
        },
        slideAccordion: function (that,me,height) {
            
            if (that.className.indexOf('active') > -1) {

                that.className = that.className.replace(' active','');  
                
                if (me.firstSlideDown !== null) { 
                    TweenLite.to(me.firstSlideDown, 0.1, { height: me.firstSlideDown_H - height, ease: Power0.easeNone }); 
                }
                TweenLite.to(me.navSecondary, 0.1, { delay: 0.1, alpha: 0, ease: Power0.easeNone }); 
                TweenLite.to(me.slideDownMenu, 0.1, { height: 0, ease: Power0.easeNone });
            }
            else {
                that.className = that.className + ' active';
                
                if (me.firstSlideDown !== null) {
                    TweenLite.to(me.firstSlideDown, 0.1, { height: height + me.firstSlideDown_H, ease: Power0.easeNone });                            
                }          
                TweenLite.to(me.navSecondary, 0.1, { delay: 0.1, alpha: 1, ease: Power0.easeNone });  
                TweenLite.to(me.slideDownMenu, 0.1, { height: height, alpha: 1, ease: Power0.easeNone }); 
            }
            
        }
    }
    
    interaction.init()
    
})();

window.addEventListener('DOMContentLoaded', function () {

    var overlay = document.getElementById('overlay-search'),
        btnSearch = document.getElementsByClassName('i-search')[0],
        closeSearch = document.getElementById('close-search');
    
    btnSearch.addEventListener('click', function (e) {
        TweenLite.to(overlay, 0.8, { 
            display: 'block',
            top: 0,
            alpha: 1,
            ease: Expo.easeOut
        });  
        if (e.target.className.indexOf(this.className) < 0) {
            e.preventDefault();
        }           
    });

    closeSearch.addEventListener('click', function (e) {
        TweenLite.to(overlay, 0.4, {
            alpha: 0,
            ease: Power4.easeIn,
            onComplete: function () {
                overlay.style.display = 'none';
                overlay.style.top = '-110%';
            }
        }); 
        e.preventDefault();
    });            

});

module.exports = Menu;