!function(e,t,i){function c(t,i){this.element=t,this.options=e.extend({},r,i),this._defaults=r,this._name=a,this.init()}var n,o,a="instastream",r=(t.document,{instaUser:"1011689",instaResults:3,instaMenu:"yes"}),l=0;String.prototype.timeconverter=function(){var e=new Date(1e3*this),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=e.getFullYear(),a=t[e.getMonth()],s=e.getDate(),r=s+" "+a+" "+i;return r},e.fn.createStream=function(t,i){var a=t;e(i).addClass("slider-wrapper").append("<div class='loading'></div>"),e("div").remove(".slider-content"),e("div").remove(".slider-menu"),e.ajax({type:"GET",dataType:"jsonp",cache:!1,url:o,success:function(t){"yes"==$instaMenu&&e(i).append("<div class='slider-menu'><a href='#' class='prev'><i class='icon-prev'></i></a><a href='#' class='next'><i class='icon-next'></i></a></div>"),e(i).append("<div class='slider-content'></div>");for(var s=0;n>s;s++)if(20>a){if(null==t.data[a].caption)var r="";else var r=t.data[a].caption.text;if(t.data[a].comments.count<2);else;if(t.data[a].likes.count<2);else;e(".slider-content").append("<div id='slider-item"+s+"' class='slider-item slider-col"+n+"'><a href='"+t.data[a].link+"'><span style='background:url("+t.data[a].images.standard_resolution.url+");background-size:cover;background-position:center;' alt='"+r+"'></span></a>"),a++,l=a}e(".prev").on("click",function(t){t.preventDefault();var a=l-2*n;e().createStream(a,i)}),e(".next").on("click",function(t){t.preventDefault();var a=l;e().createStream(a,i)})}}).done(function(){e(".slider-item").hide();var t=l-n;"yes"==$instaMenu&&(0==t?e(".prev").hide():e(".prev").show(),l>19?e(".next").hide():e(".next").show()),e("div").remove(".loading");for(var i=0;n>i;i++)k=i+1,e("#slider-item"+i).delay(200*k).fadeIn(800)})},c.prototype.init=function(){l=0,n=this.options.instaResults,$instaMenu=this.options.instaMenu,o="https://api.instagram.com/v1/users/"+this.options.instaUser+"/media/recent/?access_token="+this.options.instaToken;var t=this.element;e().createStream(l,t)},e.fn[a]=function(t){return this.each(function(){e.data(this,"plugin_"+a)||e.data(this,"plugin_"+a,new c(this,t))})}}(jQuery,window);