// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(p,n,b){var f=jQuery;var m=f(this);var i=f("ul",b);b=b.parent();var k=f("<div>").addClass("ws_effect").appendTo(b),e=p.duration,d=p.perspective||0.4,g=p.shadow||0.35,a=p.noCanvas||false,l=p.no3d||false;var o={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(r){var q=this.domPrefixes.length;while(q--){if(typeof document.body.style[this.domPrefixes[q]+r]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var r=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(r&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),q=document.createElement("style"),s="Test3d"+Math.round(Math.random()*99999);q.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(q);t.id=s;document.body.appendChild(t);r=t.offsetHeight===3;q.parentNode.removeChild(q);t.parentNode.removeChild(t)}return r},canvas:function(){if(typeof document.createElement("canvas").getContext!=="undefined"){return true}}};if(!l){l=o.cssTransitions()&&o.cssTransforms3d()}if(!a){a=o.canvas()}var j;this.go=function(r,q){if(j){return -1}m.trigger("effectStart",k);var E=(q==0&&r!=q+1)||(r==q-1),v=n.get(r),G=n.get(q);var s=f("<div>").appendTo(k);if(l){var y={backgroundColor:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};s.css(y);perspect=b.width()*(3-d*2);var z=83.5;var D=f("<div>").css(y).css({background:"url("+(E?v:G).src+")",backgroundSize:"auto 100%",width:"50%",perspective:perspect}).appendTo(s);var C=f("<div>").css(y).css({left:"50%",background:"url("+(E?G:v).src+") right",backgroundSize:"auto 100%",width:"50%",perspective:perspect}).appendTo(s);var I=f("<div>").css(y).css({background:"url("+(E?G:v).src+")",backgroundSize:"auto 100%",transform:"rotateY("+(E?0.1:z)+"deg)",transition:(E?"ease-in ":"ease-out ")+e/2000+"s",transformOrigin:"right",marginRight:"-100%",display:E?"block":"none"}).appendTo(D);var F=f("<div>").css(y).css({background:"url("+(E?v:G).src+") right",backgroundSize:"auto 100%",transform:"rotateY(-"+(E?z:0.1)+"deg)",transition:(E?"ease-out ":"ease-in ")+e/2000+"s",transformOrigin:"left",marginRight:"-100%",display:E?"none":"block"}).appendTo(C);var u=f("<div>").css(y).css({zIndex:1,opacity:1}).appendTo((E?D:C)).clone().appendTo((E?F:I)).css("opacity",g).clone().appendTo((E?C:D)).css("opacity",1).hide().clone().appendTo((E?I:F)).css("opacity",g).hide()}else{if(a){var x=f("<div>").css({position:"absolute",top:0,left:E?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(f(n.get(r)).clone().css({position:"absolute",height:"100%",right:E?"auto":0,left:E?0:"auto"})).appendTo(s).hide();var B=f("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(s).hide();var H=f("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-B.height()*d/2}).attr({width:B.width(),height:B.height()*(d+1)}).appendTo(B);var A=H.clone().css({top:0,zIndex:1}).attr({width:B.width(),height:B.height()}).appendTo(B);var w=H.get(0).getContext("2d");var t=A.get(0).getContext("2d")}else{i.stop(true).animate({left:(r?-r+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},e,"easeInOutExpo")}}if(!l&&a){var D=w;var C=t;var I=G;var F=v}j=new h(E,z,D,C,I,F,B,H,A,x,function(){m.trigger("effectEnd",r);s.remove();j=0});return r};function c(G,s,A,v,u,E,D,C,B,t,r){numSlices=u/2,widthScale=u/B,heightScale=(1-E)/numSlices;G.clearRect(0,0,r.width(),r.height());for(var q=0;q<numSlices+widthScale;q++){var z=(D?q*p.width/u+p.width/2:(numSlices-q)*p.width/u);var H=A+(D?2:-2)*q,F=v+t*heightScale*q/2;if(z<0){z=0}if(H<0){H=0}if(F<0){F=0}G.drawImage(s,z,0,2.5,p.height,H,F,2,t*(1-(heightScale*q)))}G.save();G.beginPath();G.moveTo(A,v);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),t*(1-heightScale*(numSlices+widthScale))+v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A,v+t);G.closePath();G.clip();G.fillStyle="rgba(0,0,0,"+Math.round(C*100)/100+")";G.fillRect(0,0,r.width(),r.height());G.restore()}function h(A,s,C,B,y,x,v,w,u,z,E){if(l){if(!A){s*=-1;var D=B;B=C;C=D;D=x;x=y;y=D}y.css("transform","rotateY("+s+"deg)").children().fadeIn(e/2);C.children().fadeOut(e/2,function(){x.show().css("transform","rotateY(0deg)").children().fadeOut(e/2);B.children().fadeIn(e/2)})}else{if(a){v.show();var r=new Date;var t=true;var q=setInterval(function(){var F=(new Date-r)/e;if(F>1){F=1}var I=jQuery.easing.easeInOutQuint(1,F,0,1,1),H=jQuery.easing.easeInOutCubic(1,F,0,1,1),L=!A;if(F<0.5){I*=2;H*=2;var G=y}else{L=A;I=(1-I)*2;H=(1-H)*2;var G=x}var J=v.height()*d/2,N=(1-I)*v.width()/2,M=1+H*d,K=v.width()/2;c(C,G,K,J,N,M,L,H*g,K,v.height(),w);if(t){z.show();t=false}B.clearRect(0,0,u.width(),u.height());B.fillStyle="rgba(0,0,0,"+(g-H*g)+")";B.fillRect(L?K:0,0,u.width()/2,u.height());if(F==1){clearInterval(q)}},15)}}setTimeout(E,e)}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"book",prev:"",next:"",duration:29*100,delay:61*100,width:1920,height:768,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});