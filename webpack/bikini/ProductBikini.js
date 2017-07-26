require('../components/Menu');
require('../components/Slideshow');

var productBikini = {
    init: function (t) {
        var e = this,
            i = void 0 == t ? "" : t.handle.toLowerCase(),
            n = {
                green: "linear-gradient(#1d8782, #34b9b2, #34b9b2, #2bb4ac, #6cccc6)",
                pink: "linear-gradient(#9d6072, #be7e90, #be7e90, #b16a7e, #c995a7)"
            };
            
        this.mainCont = document.getElementsByClassName("main-featured")[0];
        this.close = document.getElementsByClassName("close");
        this.top = document.getElementById("top");
        this.briefs = document.getElementById("briefs");
        this.productContainer = document.getElementsByClassName("product")[0];
        this.imgPreview = document.getElementsByClassName("col w-50 preview")[0].getElementsByTagName("img")[0];
        this.product = t;
        this.loading = $("#loader-operations, #overlay-operations");
        this.descripTemporary = document.createElement("div");

        if (this.product === undefined) return false;
        
        this.product.handle.indexOf("-") > -1 ? i = this.product.handle.split("-")[0] : i;
        this.bikiniType = document.getElementsByClassName(i);
        this.product.description === undefined ? undefined : this.descripTemporary.innerHTML = this.product.description;
        
        var s = this.bikiniType[0].getAttribute("data-color").toLowerCase(),
            o = document.getElementById("prod-description"),
            a = this.descripTemporary.getElementsByClassName(s)[0].innerText;
        
        o !== undefined && (o.innerHTML = this.descripTemporary.getElementsByClassName(s)[0].innerText);
        
        var r = this.imgPreview.src.indexOf("_p") > -1 ? "pink" : "green";
        
        i.split("-")[0];
        
        this.productContainer.style.backgroundImage = n[r];
        
        window.addEventListener("load", function () {
            e.createDetails()
        });
        
        for (var l = 0; l < this.close.length; l++) {
            this.close[l].onclick = function (t) {
            
                var e = this.parentElement;

                if (e.className.indexOf("disabled") < 0) {
                    var bikiniTop = $(".fancybox.top", ".img-details"),
                        bikiniBottom = $(".fancybox.bottom", ".img-details"),
                        s = $(".other", ".img-details");

                    e.className = "disabled",
                    bikiniTop[0] !== undefined ? "top" == this.parentElement.id ? (bikiniTop.removeClass("fancybox").addClass("disabled"), bikiniTop.click(function (t) {
                        t.preventDefault()
                    })) : (bikiniBottom.removeClass("fancybox").addClass("disabled"), bikiniBottom.click(function (t) {
                        t.preventDefault()
                    })) : (s.removeClass("fancybox").addClass("disabled"), s.click(function (t) {
                        t.preventDefault()
                    }))
                } 
                else {
                    var bikiniTop = $(".top", ".img-details"),
                        bikiniBottom = $(".bottom", ".img-details"),
                        s = $(".other", ".img-details");

                    e.className = e.className.replace("disabled", ""), bikiniTop[0] !== undefined ? "top" == this.parentElement.id ? (bikiniTop.removeClass("disabled").addClass("fancybox"), bikiniTop.click(function (t) {
                        return true;
                    })) : (bikiniBottom.removeClass("disabled").addClass("fancybox"), bikiniBottom.click(function (t) {
                        return true;
                    })) : (s.removeClass("disabled").addClass("fancybox"), s.click(function (t) {
                        t.preventDefault()
                    }))
                }
                return false;
            }
        }
        
        for (var h = 0; h < this.bikiniType.length; h++) {
            this.bikiniType[h].pos = h,
            this.bikiniType[h].onclick = function (t) {
                
                var i,
                    s = this.getAttribute("data-color").toLowerCase(),
                    r = function (t) {
                        for (var i = 0; i < e.product.variants.length; i++) {                            
                            if (e.product.variants[i].title.toLowerCase() == t) {
                                
                                if (e.product.variants[i].available !== !0) {
                                    var n = document.getElementById("purchase-button");
                                    n.className = "solded-out"
                                } else {
                                    var n = document.getElementById("purchase-button");
                                    n.className.indexOf("solded-out") > -1 && (n.className = n.className.replace("solded-out", "add-cart"))
                                }
                            }
                        }
                    };
                
                if (r(s), void 0 !== o && (a = e.descripTemporary.getElementsByClassName(s)[0].innerText), !(this.className.indexOf("active") < 0)) return false;
                
                e.loading.fadeIn();
                
                for (var l = 0; l < e.bikiniType.length; l++) {
                    var h = e.bikiniType[l].className.indexOf("active") > -1,
                        c = e.bikiniType[l].className.indexOf("briefs") > -1;
                    
                    h && (c && this.className.indexOf("briefs") > -1 && (e.bikiniType[l].className = e.bikiniType[l].className.replace(" active", "")),
                    !c && this.className.indexOf("briefs") < 0 && (e.bikiniType[l].className = e.bikiniType[l].className.replace(" active", "")))
                }                
                this.className = this.className + " active";
                
                for (var u = 0; u < e.product.images.length; u++) {    
                    var d = e.product.handle;
                    
                    if (e.product.images[u].indexOf(d + "-" + s) > -1) {
                        i = e.product.images[u];
                        var p = i.indexOf("_g") > -1 ? "green" : "pink";
                        e.productContainer.style.backgroundImage = n[p]
                    }
                }
                return $(e.imgPreview).attr("src", i).on("load", function () {
                    setTimeout(function () {
                        e.loading.delay(2).fadeOut()
                    }, 400)
                }), e.showDetails(this.pos), !1
        }
        }
    },
    createDetails: function () {
        var t = [],
            itemsNav = document.getElementsByClassName("nav-towel"),
            i = itemsNav.length > 1 ? this.bikiniType.length / 2 : this.bikiniType.length,
            n = document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0];
        
        this.allDetails = document.getElementsByClassName("fancybox"),
        this.detailsCont = document.getElementsByClassName("img-details")[0],
        this.imgDetails = this.detailsCont.getElementsByClassName("fancybox");
        
        for (var s = 0; s < i; s++) t.push(this.bikiniType[s].getAttribute("data-color").toLowerCase());
        
        for (var o = 0; o < t.length; o++) {
            
            if (n.src.indexOf(t[o]) > -1) {
                var a = t[o];
				
                if (itemsNav.length > 1 ) {
                    $(".bikini", $(".nav-towel")[0])[o].className = $(".bikini", $(".nav-towel")[0])[o].className + " active";
                    $(".bikini", $(".nav-towel")[1])[o].className = $(".bikini", $(".nav-towel")[1])[o].className + " active";
                }
                else {
                    $(".bikini")[o].className = $(".bikini")[o].className + " active";  
                }
            }
        }
        
        for (var r = 0; r < this.allDetails.length; r++) {
            
            var l = this.allDetails[r].href.indexOf("top") > -1 ? "top" : this.allDetails[r].href.indexOf("bottom") > -1 ? "bottom" : "other";
            
            switch (l) {
                case "top":
                    this.allDetails[r].className = this.allDetails[r].className + " top";
                    break;
                case "bottom":
                    this.allDetails[r].className = this.allDetails[r].className + " bottom";
                    break;
                case "other":
                    this.allDetails[r].className = this.allDetails[r].className + " other";
            }
        }
        this.hideDetails(a);
        this.detailsCont !== undefined && (this.detailsCont.style.height = this.detailsCont.children[0].offsetHeight + "px", this.detailsCont.style.top = (this.detailsCont.parentElement.offsetHeight - this.detailsCont.children[0].offsetHeight) / 2 + "px");
    },
    hideDetails: function (t) {
        for (var e = 0; e < this.imgDetails.length; e++) {
            this.imgDetails[e].getElementsByTagName("img")[0].src.indexOf(t) < 0 && (this.imgDetails[e].style.display = "none");
        }
    },
    showDetails: function (t) {
        for (var e = [], i = ["top", "bottom"], n = 0; n < this.bikiniType.length; n++) this.bikiniType[n].className.indexOf("active") > -1 && e.push(this.bikiniType[n].getAttribute("data-color").toLowerCase());
        for (var s = 0; s < this.imgDetails.length; s++) this.imgDetails[s].style.display = "none";
        for (var o = 0; o < this.imgDetails.length; o++)
            for (var a = 0; a < e.length; a++) this.imgDetails[o].className.indexOf("other") < 0 ? this.imgDetails[o].getElementsByTagName("img")[0].src.indexOf(e[a]) > -1 && this.imgDetails[o].className.indexOf(i[a]) > -1 && (this.imgDetails[o].style.display = "block") : this.imgDetails[o].getElementsByTagName("img")[0].src.indexOf(e[a]) > -1 && (this.imgDetails[o].style.display = "block");
        this.detailsCont.style.height = this.detailsCont.children[0].offsetHeight + "px", this.detailsCont.style.top = (this.detailsCont.parentElement.offsetHeight - this.detailsCont.children[0].offsetHeight) / 2 + "px"
    },
    addItem: function () {
		
        this.topStatus = this.top.className.indexOf("disabled") < 0 ? "active" : "disabled",
        this.product.handle !== "trykini" && (this.briefsStatus = this.briefs.className.indexOf("disabled") < 0 ? "active" : "disabled"),
        this.sizesContainer = document.getElementsByClassName("sizes"),
		this.sizeName = [];
        
        var me = this,
            count = 0;
        
        this.applyModal = function (t, e, i, n, s, o) {
			this.title = "Towel" == t ? "Beach Towel" : t;
			this.price = e;
			this.subtotal = i;
			this.variant = s;
			this.size = o == undefined ? "" : o,
			this.image = n,
			this.successTowel = "<div class='vertty-order-modal'><div class='order-img'><img src='" + this.image + "'></div><div class='order-info'><span class='tlt'>" + this.title + "</span><span>Qty:  <b>1</b></span><span>TP:  <b>" + this.variant + "</b></span><span class='item-price'>" + this.price + "</span></div><div class='order-price'><span>Subtotal <span class='total-value'>" + this.subtotal + "</span></span></div></div><div class='btn-box' style='text-align: right;'><a href='/cart' class='view-cart'></a></div>";
			return this.successTowel
        };

        for (var j = 0; j < this.sizesContainer.length; j++) {
            this.sizesContainer[j].sizes = this.sizesContainer[j].getElementsByTagName("LI");
            
            for (var b = 0; b <= this.sizesContainer[j].sizes.length; b++) {
				
				if (b == count && count == this.sizesContainer[j].sizes.length) {
					this.sizeName.push(undefined);
				}
				else {
					if (b !== this.sizesContainer[j].sizes.length) {
						
						if (this.sizesContainer[j].sizes[b].className.indexOf("active") < 0) {
							count++;
						}
						else {
							this.sizeName.push(this.sizesContainer[j].sizes[b].getElementsByTagName("a")[0].innerText);	
						}
					}
				}
			}
			count = 0; 
        }
		
		if (this.sizeName[0] == undefined && this.sizeName[1] == undefined) {
			return swal({
				title: "Warning!",
				text: "Select your product size",
				type: "warning",
				allowOutsideClick: !0,
				customClass: "sweet-old"
			});				
		}
	
        this.bikiniColour = [],
		this.variants = this.product.variants,
		this.variantToAdd = null,
		this.cartCounter = document.getElementsByClassName("cart-count");
		
        for (var m = 0; m < this.bikiniType.length; m++) {
			this.bikiniType[m].className.indexOf("active") > -1 && this.bikiniType[m].className.indexOf("briefs") > -1 ? this.bikiniColour.push(this.bikiniType[m].getAttribute("data-color")) : this.bikiniType[m].className.indexOf("active") > -1 && this.bikiniType[m].className.indexOf("briefs") < 0 && this.bikiniColour.push(this.bikiniType[m].getAttribute("data-color"));			
		}

        Shopify.onError = function (XMLHttpRequest, textStatus) {
			var data = eval("(" + XMLHttpRequest.responseText + ")");
			swal({
				title: "Error!",
				text: data.description,
				type: "warning",
				allowOutsideClick: !0,
				customClass: "sweet-old"
			}), me.loading.fadeOut()
		}; 
			
		if (this.product.handle !== "trykini") {

            if (this.topStatus == "active" && this.briefsStatus == "active" && this.sizeName[0] !== undefined && this.sizeName[1] !== undefined) {
				
				var currentItem = "Top / " + this.bikiniColour[0] + " / " + this.sizeName[0],
					otherItem = "Brief / " + this.bikiniColour[1] + " / " + this.sizeName[1];
				me.variantToAdd = [];
				me.getVariantId(currentItem, otherItem);
            }
			else {
				if (this.topStatus == "active" && this.sizeName[0] !== undefined) {
					var currentItem = "Top / " + this.bikiniColour[0] + " / " + this.sizeName[0];
					me.getVariantId(currentItem);					
				}
				else if (this.briefsStatus == "active" && this.sizeName[1] !== undefined) {
					var currentItem = "Brief / " + this.bikiniColour[1] + " / " + this.sizeName[1];
					me.getVariantId(currentItem);					
				}
				else {
					return swal({
						title: "Warning!",
						text: "Please select a product",
						type: "warning",
						allowOutsideClick: !0,
						customClass: "sweet-old"
					});			
				}					
			}
        }
        else {			
			if (this.topStatus == "active" && this.sizeName[0] !== undefined) {
				var currentItem = "Trykini - " + this.sizeName[0] + " / " + this.bikiniColour[0];
				me.getVariantId(currentItem);				
			}
			else {
				return swal({
					title: "Warning!",
					text: "Cart is currently empty",
					type: "warning",
					allowOutsideClick: !0,
					customClass: "sweet-old"
				});
			}
        }

        if (this.variantToAdd == undefined) {
		
			swal({
				title: "Warning!",
				text: "Cart is currently empty",
				type: "warning",
				allowOutsideClick: !0,
				customClass: "sweet-old"
			})
		
		}
		else {
			this.loading.fadeIn();
			
			if (this.variantToAdd.length > 0) {
				
				var position = 0;
				
				Shopify.queue = [];
				
				for (variant in me.variantToAdd) {

					var value = `${me.variantToAdd[variant]}`;
					
					Shopify.queue.push({
						variantId: value
					});
					
				}

				Shopify.moveAlong = function() {
					
					if (Shopify.queue.length) {

						var request = Shopify.queue.shift(),
							Obj = Shopify;

						Shopify.addItem(request.variantId, 1, function (cart) {

							var currentValue = cart.id;

							Shopify.getCart(function (cart) {

								var item = me.getProductDetails(cart, currentValue);

								for (var o = 0; o < me.cartCounter.length; o++) {
									me.cartCounter[o].innerHTML = cart.item_count;				
								}

								me.loading.fadeOut();

								var	currentModal = $('.vertty-order-modal')[0];

								if (currentModal !== undefined && position > 0) {

									var temp = document.createElement('div'),
										newModal = me.applyModal(me.product.type, item.price, item.total, item.image, item.product_name);

									temp.innerHTML += newModal;
									temp.className = 'double-modal-wrapper';

									$(temp).insertBefore(currentModal.nextElementSibling);
								}
								else {
									
									position++;

									swal({
										title: '<div style="display:none">Bikini [2 Added]</div>',
										text: me.applyModal(me.product.type, item.price, item.total, item.image, item.product_name),
										html: true,
										showConfirmButton: false,
										allowOutsideClick: true,
										closeOnConfirm: false
									});

								}
							});

						});
						
						setTimeout(function () {

							Obj.moveAlong();
							
						}, 100)

					}
					else {
						return false;
					}
					
				};

				Shopify.moveAlong();

			}
			else {
				
				Shopify.addItem(this.variantToAdd, 1, function (t) {
					
					var value = t.id;
						
					Shopify.getCart(function (cart) {
						
						var item = me.getProductDetails(cart, value);
						
						for (var o = 0; o < me.cartCounter.length; o++) {
							me.cartCounter[o].innerHTML = cart.item_count;							
						}
						
						me.loading.fadeOut();
						
						swal({
							title: '<div style="display:none">Bikini</div>',
							text: me.applyModal(me.product.type, item.price, item.total, item.image, item.product_name),
							html: true,
							showConfirmButton: false,
							allowOutsideClick: true
						})
					})
				});
			}
		}
    },
    getVariantId: function (firstItem, secondItem) {
		
		var me = this,
			cond = secondItem !== undefined ? me.variantToAdd = [] : false;

		for (var i = 0; i < me.variants.length; i++) {				

			if (cond) {

				if (me.variants[i].title == firstItem) {
					me.variantToAdd.push(me.variants[i].id);
				}
				else if (me.variants[i].title == secondItem) {
					me.variantToAdd.push(me.variants[i].id);
				}					
			}
			else {
				if (me.product.type.indexOf('trykini') > -1) {
					if (me.variants[i].name == firstItem) {
						me.variantToAdd = me.variants[i].id;
					}						
				}		

				else if (me.variants[i].title == firstItem) {
					me.variantToAdd = me.variants[i].id;
				}			
			}
		}
	},
	getProductDetails: function (cart, value) {
		
		for (var i = 0; i < cart.items.length; i++) {

			var item = cart.items[i];

			if (item.id == value) {

				var price = Shopify.formatMoney(item.price).replace("$", "€"),
					total = Shopify.formatMoney(cart.total_price).replace("$", "€"),
					product_name = item.variant_title,
					image = item.image;								
			}									
		}
		
		return {
			price: price,
			total: total,
			product_name: product_name,
			image: image
		}
		
	}
};

$(document).ready(function () {
  if ($(".fancybox")[0] !== undefined) {
	  $(".fancybox").fancybox({
		  height: 600,
		  maxHeight: 600,
		  fitToView: true
	  })
  }
});

window.productBikini = productBikini;
module.exports = productBikini;