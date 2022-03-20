import { TimelineLite, TweenMax, Linear, gsap } from "gsap";
import ScrollMagic from "../libs/ScrollMagic";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function() {
 let animationSpeed = 0.3;
 let animationSize =  10;
 let ease = 'Power4.easeIn(4)'

 var controller = new ScrollMagic.Controller();

 // Scroll
 //-gsap.registerPlugin(ScrollTrigger);
 
 gsap.config({nullTargetWarn:false});


 function animate(triggerClass, tl) {
  let trigger = document.querySelector(triggerClass);

  if (!trigger) {
   return;
  }

  new ScrollMagic.Scene({
   triggerElement: triggerClass
  })
   .setTween(tl)
   .addTo(controller);

 }



 animate(".bounty-intro ", new TimelineLite()
 .fromTo(
  ".bounty-intro .title, .bounty-intro .page-description, .bounty-intro__buttons",
  1,
  { y:10,autoAlpha: 0 },
  { y:0,autoAlpha: 1 , ease: ease, stagger: {
    each: 0.2,
    }  }
 ).fromTo(
    ".bounty-intro__media",
    1,
    { y:10, autoAlpha: 0 },
    { y: 0, autoAlpha: 1 , ease: ease,},"-=0.8"
   )
);




animate(".intro", new TimelineLite()
.fromTo(
 ".intro__bg",
 1,
 { autoAlpha: 0 },
 { autoAlpha: 1 , ease: ease }
).fromTo(
   ".intro__col",
   1,
   { y:10, autoAlpha: 0 },
   { y: 0, autoAlpha: 1 , ease: ease, stagger: {
       each: 0.2,
       } },"-=0.5"
  )
);


animate(".protocol-info", new TimelineLite()
.fromTo(
 ".protocol-info .title, .protocol-info__price, .protocol-info__description",
 1,
 { y:15,autoAlpha: 0 },
 {y:0, autoAlpha: 1 , ease: ease,stagger: {
  each: 0.2,
  } }
).fromTo(
   ".protocol-info .counter-item",
   1,
   { y:15, autoAlpha: 0 },
   { y: 0, autoAlpha: 1 , ease: ease, stagger: {
       each: 0.15,
       } },"-=0.8"
  )
);


animate(".faq", new TimelineLite()
.fromTo(
".faq .accordion__item",
animationSpeed,
{ y: animationSize, autoAlpha: 0 ,ease: ease},
{ y: 0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.1,
},},
"-=0.2"
));


animate(".auth-layout", new TimelineLite()
.fromTo(
".sign",
animationSpeed*0.8,
{ z: -50, autoAlpha: 0,ease: ease },
{ z: 0,  autoAlpha: 1,ease: ease }
).fromTo(
".sign__top, .sign__content",
animationSpeed,
{ z: -30,  autoAlpha: 0 ,ease: ease},
{ z:0, autoAlpha: 1 ,ease: ease,  stagger: {
each: 0.1,
},},
"-=0.2"
));



if($('.intro__col-content svg').length){
    let object = {
      el: '.intro__col-content svg > g',
      duration: 10
    }
    
    gsap.fromTo(object.el, object.duration, {
    opacity: 0,
      y:  Math.PI * 2,
      x: '-=15',
      scale: 0.6,
    }, {
      opacity: 1,
      y: '+=10',
      x: 0,
      scale: 1.,
      transformOrigin: 'center',
       modifiers: {
        x: function(x) {
          return Math.sin(parseFloat(x)) * 10 + "px";
        },
        y: function(y) {
          return Math.sin(parseFloat(y)) * 10 + "px";
        }
      },
      
      stagger: {
        each: object.duration / document.querySelectorAll(object.el).length*0.4, 
        repeat: -1, 
        yoyo: true
      }
    },
    
    ); }


}
