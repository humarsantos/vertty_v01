require('../components/Menu');
require('../components/Slideshow');

var product = {
    init: function (e) {

        var obj = this,
            productName = e == undefined ? "" : e.handle.toLowerCase();

        var backgrounds = {
            chili: "linear-gradient(to right, #c65050, #c65050, #c65050)",
            "midnight-blue": "linear-gradient(to right, #6eabb8, #6eabb8, #6eabb8)",
            "peacock": "linear-gradient(to right, #bce5e8, #bce5e8, #bce5e8)",
            "coconut": "linear-gradient(to right, #efe5d3, #efe5d3, #efe5d3)",
            graphite: "linear-gradient(to right, #d7d7d6, #d7d7d6, #d7d7d6)",
            "classic-orange": "linear-gradient(to right, #e7cb7e, #e7cb7e, #e7cb7e)",
            "classic-green": "linear-gradient(to right, #cde874, #cde874, #cde874)",
            teal: "linear-gradient(to right, #fcfcfc, #f3f3f3, #cccdc8)",
            chilli: "linear-gradient(to right, #c9cac5, #e3e3e3, #f0f0f0)",
            stealth: "linear-gradient(to right, #fafafa, #e5e5e5, #cecfca)"
        };

        this.productContainer = document.getElementsByClassName("product")[0];
        this.imgPreview = document.getElementsByClassName("col w-50 preview")[0].getElementsByTagName("img")[0];
        this.product = e;
        this.loading = $("#loader-operations, #overlay-operations");
        this.towelType;
        this.descripTemporary = document.createElement("div");

        if (this.product !== undefined) {
            this.product.handle.indexOf("-") > -1 ? productName = this.product.handle.split("-")[1] : productName;
            this.towelType = document.getElementsByClassName("nav-towel")[0].getElementsByClassName(productName);
            this.product.description == undefined ? undefined : this.descripTemporary.innerHTML = this.product.description;
            
            var name = this.towelType[0].getAttribute("data-color").toLowerCase();
            var productTitle = document.getElementById("title");
            var productDescription = document.getElementById("prod-description");
            var description = this.descripTemporary.getElementsByClassName(name)[0].innerText;

            if (productDescription !== undefined && productTitle !== undefined) {
                productDescription.innerHTML = this.descripTemporary.getElementsByClassName(name)[0].innerText;
                productTitle.innerHTML = name
            }

            this.productContainer.style.backgroundImage = backgrounds[this.towelType[0].getAttribute("data-color").toLowerCase()]

        } 
        else {
            return false
        }
        window.addEventListener("load", function () {
            obj.createActive(productName)
        });

        for (var l = 0; l < this.towelType.length; l++) {
            this.towelType[l].pos = l;
            this.towelType[l].onclick = function (e) {

                var towelType = this.getAttribute("data-color").toLowerCase(),l;
                
                var isAvailable = function (e) {
                    for (var i = 0; i < obj.product.variants.length; i++) {

                        if (obj.product.variants[i].title.toLowerCase() == e) {

                            if (obj.product.variants[i].available !== true) {
                                var button = document.getElementById("purchase-button");
                                button.className = "solded-out";
                            } 
                            else {
                                var button = document.getElementById("purchase-button");

                                if (button.className.indexOf("solded-out") > -1) {
                                    button.className = button.className.replace("solded-out", "add-cart")
                                }
                            }
                        }
                    }
                };

                isAvailable(towelType);
                
                var u = null;
                
			  	obj.runDetails(u, this.pos)
                
                if (productDescription !== undefined && productTitle.innerHTML !== undefined) {
                    description = obj.descripTemporary.getElementsByClassName(towelType)[0].innerText;
                    productTitle.innerHTML = towelType;
                    productDescription.innerHTML = description
                }
                if (this.className.indexOf("active") < 0) {
                    obj.loading.fadeIn();
                    for (var c = 0; c < obj.towelType.length; c++) {
                        var d = obj.towelType[c].className.indexOf("active") < 0 ? true : false;
                        if (!d) {
                            obj.towelType[c].className = obj.towelType[c].className.replace(" active", "")
                        }
                    }
                    this.className = this.className + " active";
                    for (var f = 0; f < obj.product.images.length; f++) {
                        obj.product.handle.indexOf("-") > -1 ? productName = obj.product.handle.split("-")[1] : productName;
                        if (obj.product.images[f].indexOf(productName + "-" + towelType) > -1) {
                            l = obj.product.images[f];
                            obj.productContainer.style.backgroundImage = backgrounds[towelType]
                        }
                    }
                    $(obj.imgPreview).attr("src", l).on("load", function () {
                        obj.loading.delay(3).fadeOut()
                    })
                }
                else {
                    return false
                }
                
                return false
            }
        }
    },
    createActive: function (productName) {
        var arrColors = [],
            itemsNav = document.getElementsByClassName("nav-towel"),
            productPreview = document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0],
            totalItems = itemsNav.length > 1 ? this.towelType.length / 2 : this.towelType.length;
       
        this.allDetails = document.getElementsByClassName("fancybox");
        this.detailsCont = document.getElementsByClassName("img-details")[0];
        
        for (var o = 0; o < totalItems; o++) {
            arrColors.push(this.towelType[o].getAttribute("data-color").toLowerCase())
        }
        
        for (var a = 0; a < arrColors.length; a++) {
            
            if (productPreview.src.indexOf(arrColors[a]) > -1) {
                
                var currColor = arrColors[a];
                
                if (itemsNav.length > 1) {
                    $("li." + productName + "",
                    $(".nav-towel")[0])[a].className = $("li." + productName + "",
                    $(".nav-towel")[0])[a].className + " active";
                    
                    $("li." + productName + "",
                    $(".nav-towel")[1])[a].className = $("li." + productName + "",
                    $(".nav-towel")[1])[a].className + " active"
                }
                else {
                    $("li." + productName + "",
                    $(".nav-towel")[0])[a].className = $("li." + productName + "",
                    $(".nav-towel")[0])[a].className + " active"
                }
            }
        }
  
        this.runDetails(currColor, 0)
    },
    runDetails: function (color, pos) {
        var color = color == null ? this.towelType[pos].getAttribute("data-color").toLowerCase() : color;
        
        for (var i = 0; i < this.allDetails.length; i++) {
            
            var n = this.allDetails[i].href.indexOf("_" + color) > -1 ? true : false;
            
            switch (n) {
                case true:
                    this.allDetails[i].className = "fancybox has-color";
                    break;
                case false:
                    this.allDetails[i].className = "fancybox no-color";
                    break
            }
        }
        
        $(".no-color").hide();
        $(".has-color").show();
        this.detailsCont.style.height = this.detailsCont.children[0].offsetHeight + "px";
        this.detailsCont.style.top = (this.detailsCont.parentElement.offsetHeight - this.detailsCont.children[0].offsetHeight) / 2 + "px"
    },
    addItem: function () {
        if (document.getElementById("purchase-button").className.indexOf("solded-out") > -1) {
            return false
        }
        
        this.towelColour;
        this.variants = this.product.variants;
        this.variantToAdd;
        this.cartCounter = document.getElementsByClassName("cart-count");
        this.applyModal = function (e, t, i, n, s, o) {
            this.title = e == "Towel" ? "Beach Towel" : e;
            this.price = t;
            this.subtotal = i;
            this.variant = s;
            this.size = o == undefined ? "" : o;
            this.image = n;
            this.successTowel = "<div class='vertty-order-modal'><div class='order-img'><img src='" + this.image + "'></div><div class='order-info'><span class='tlt'>" + this.title + "</span><span>Qty:  <b>1</b></span><span>TP:  <b>" + this.variant + "</b></span><span class='item-price'>" + this.price + "</span></div><div class='order-price'><span>Subtotal <span class='total-value'>" + this.subtotal + "</span></span></div></div><div class='btn-box' style='text-align: right;'><a href='/cart' class='view-cart'></a></div>";
            return this.successTowel
        };
	  
        Shopify.onError = function (XMLHttpRequest, textStatus) {
            var data = eval("(" + XMLHttpRequest.responseText + ")");
            swal({
                title: "Error!",
                text: data.description,
                type: "warning",
                allowOutsideClick: true,
                customClass: "sweet-old"
            });
            me.loading.fadeOut()
        };
        var me = this;
        for (var m = 0; m < this.towelType.length; m++) {
            if (this.towelType[m].className.indexOf("active") > -1) {
                this.towelColour = this.towelType[m].getAttribute("data-color")
            }
        }

        function getVariantId(e) {
            for (var t = 0; t < me.variants.length; t++) {
                if (me.variants[t].title == e) {
                    me.variantToAdd = me.variants[t].id
                }
            }
        }
        getVariantId(this.towelColour);
        
        if (this.variantToAdd == undefined) {
            swal({
                title: "Warning!",
                text: "Cart is currently empty",
                type: "warning",
                allowOutsideClick: true,
                customClass: "sweet-old"
            })
        }
        else {
            this.loading.fadeIn();
            
            Shopify.addItem(this.variantToAdd, 1, function (e) {
                Shopify.getCart(function (e) {
                    var t, i, n, s;
                    for (var o = 0; o < me.cartCounter.length; o++) {
                        me.cartCounter[o].innerHTML = e.item_count + 1
                    }
                    $(e.items).each(function (o, a) {
                        if (a.id == me.variantToAdd) {
                            i = Shopify.formatMoney(a.price).replace("$", "€");
                            n = Shopify.formatMoney(e.total_price).replace("$", "€");
                            s = a.variant_title;
                            t = a.image
                        }
                    });
                    me.loading.fadeOut();
                    swal({
                        title: '<div style="display:none">Beach Towel</div>',
                        text: me.applyModal(me.product.type, i, n, t, s),
                        html: true,
                        showConfirmButton: false,
                        allowOutsideClick: true
                    })
                })
            })
        }
        return false
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

window.product = product;
module.exports = product;