(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,a,t){e.exports={pentagon__wrapper:"SelectionScreen_pentagon__wrapper__365OZ",pentagon:"SelectionScreen_pentagon__1hvdA",paper:"SelectionScreen_paper__E_p_x",rock:"SelectionScreen_rock__1p586",lizard:"SelectionScreen_lizard__1Zzkh",spock:"SelectionScreen_spock__1FtcA",scissors:"SelectionScreen_scissors__26U2c"}},function(e,a,t){e.exports={PlayScreen__wrapper:"PlayScreen_PlayScreen__wrapper__2qARm",houseChoice:"PlayScreen_houseChoice__3hesW",myChoice:"PlayScreen_myChoice__2gAYe",empty__icon:"PlayScreen_empty__icon__HUVAB",playAgain__button:"PlayScreen_playAgain__button__1OR9Q",playAgain__title:"PlayScreen_playAgain__title__2nH8X",playAgain__wrapper:"PlayScreen_playAgain__wrapper__2CGgr"}},function(e,a,t){e.exports={modal__container:"Modal_modal__container__BrQD2",modal__box:"Modal_modal__box__3SMPr",modal__header:"Modal_modal__header__2s39J",close__button:"Modal_close__button__3z7xA",modal__title:"Modal_modal__title__2OjmB"}},,function(e,a,t){e.exports={score__card:"Header_score__card__2R-Ru",score__title:"Header_score__title__1ikbG",score__value:"Header_score__value__2QVaD"}},function(e,a,t){e.exports={footer:"Footer_footer__12M4N",attribution:"Footer_attribution__1_EDD",rules__button:"Footer_rules__button__3ftJH"}},,,function(e,a,t){e.exports=t.p+"static/media/logo-bonus.f4c973f7.svg"},function(e,a,t){e.exports=t.p+"static/media/bg-pentagon.aced7052.svg"},function(e,a,t){e.exports=t.p+"static/media/icon-close.919ab92a.svg"},function(e,a,t){e.exports=t.p+"static/media/image-rules-bonus.d357f2dc.svg"},function(e,a,t){e.exports=t(33)},,,,,,,,,function(e,a,t){},,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(9),o=t.n(r),l=(t(23),t(1)),s=(t(25),t(6)),_=t.n(s),i=t(10),m=t.n(i);var u=function(e){var a=e.scoreValue;return n.a.createElement("header",null,n.a.createElement("div",{className:_.a.logo},n.a.createElement("img",{src:m.a,alt:"logo"})),n.a.createElement("div",{className:_.a.score__card},n.a.createElement("div",{className:_.a.score__title},"SCORE"),n.a.createElement("div",{className:_.a.score__value},a)))},p=t(2),d=t.n(p),E=t(5),f=t(11),b=t.n(f);var g=function(e){var a=e.setChoiceValue;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:d.a.pentagon__wrapper},n.a.createElement("img",{className:d.a.pentagon,src:b.a,alt:"pentagon"}),n.a.createElement(E.a,{onClick:function(){return a("scissors")},className:"icon ".concat(d.a.scissors)}),n.a.createElement(E.a,{onClick:function(){return a("rock")},className:"icon ".concat(d.a.rock)}),n.a.createElement(E.a,{onClick:function(){return a("paper")},className:"icon ".concat(d.a.paper)}),n.a.createElement(E.a,{onClick:function(){return a("lizard")},className:"icon ".concat(d.a.lizard)}),n.a.createElement(E.a,{onClick:function(){return a("spock")},className:"icon ".concat(d.a.spock)})))},v=t(3),h=t.n(v);var S=function(e){var a=e.choiceValue,t=e.scoreValue,r=e.setScoreValue,o=e.setChoiceValue,s=Object(c.useState)(""),_=Object(l.a)(s,2),i=_[0],m=_[1],u=Object(c.useState)(3),p=Object(l.a)(u,2),d=p[0],E=p[1],f=Object(c.useState)(!1),b=Object(l.a)(f,2),g=b[0],v=b[1],S=Object(c.useState)(""),k=Object(l.a)(S,2),N=k[0],y=k[1];Object(c.useEffect)(function(){m(["rock","paper","scissors","spock","lizard"][Math.floor(5*Math.random())])},[]);var C=function(){y("YOU WIN"),r(t+1)},O=function(){y("YOU LOSE"),r(t-1)};return Object(c.useEffect)(function(){var e=d>0?setInterval(function(){E(d-1)},500):function(){if(a===i)y("DRAW");else switch(a){case"rock":"scissors"===i||"lizard"===i?C():O();break;case"lizard":"spock"===i||"paper"===i?C():O();break;case"spock":"scissors"===i||"rock"===i?C():O();break;case"scissors":"paper"===i||"lizard"===i?C():O();break;default:"rock"===i||"spck"===i?C():O()}v(!0)}();return function(){clearInterval(e)}},[d,i]),n.a.createElement("div",{className:h.a.PlayScreen__wrapper},n.a.createElement("div",{className:h.a.myChoice},n.a.createElement("p",null,"YOU PICKED"),n.a.createElement("div",{className:"icon play__section-".concat(a)})),g?n.a.createElement("div",{className:h.a.playAgain__wrapper},n.a.createElement("h2",{className:h.a.playAgain__title},N),n.a.createElement("button",{onClick:function(){m(""),v(!1),y(""),o("")},className:h.a.playAgain__button},"PLAY AGAIN")):null,n.a.createElement("div",{className:h.a.houseChoice},n.a.createElement("p",null,"THE HOUSE PICKED"),g?n.a.createElement("div",{className:"icon play__section-".concat(i)}):n.a.createElement("div",{className:h.a.empty__icon})))},k=t(12),N=t.n(k),y=t(13),C=t.n(y),O=t(4),A=t.n(O),w=function(e){var a=e.toggle;return n.a.createElement("div",{className:A.a.modal__container},n.a.createElement("div",{className:A.a.modal__box},n.a.createElement("div",{className:A.a.modal__header},n.a.createElement("p",{className:A.a.modal__title},"Rules"),n.a.createElement("button",{className:A.a.close__button,onClick:a},n.a.createElement("img",{src:N.a,alt:"Close",srcset:""}))),n.a.createElement("img",{src:C.a,alt:"Rules",srcset:""})))},j=t(7),x=t.n(j),P=function(){var e=Object(c.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1],o=function(){r(!t)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{className:x.a.footer},n.a.createElement("div",{className:x.a.attribution},"Challenge by"," ",n.a.createElement("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noopener noreferrer"},"Frontend Mentor"),". Coded by ",n.a.createElement("a",{href:"https://github.com/Dorki-coder"},"Dorki-coder"),".",n.a.createElement("a",{href:"https://github.com/Dorki-codsr"},"Dorki-coder"),"."),n.a.createElement("button",{className:x.a.rules__button,onClick:o},"Rules")),t?n.a.createElement(w,{toggle:o}):null)};var V=function(){var e=Object(c.useState)(0),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),_=s[0],i=s[1];return n.a.createElement("div",{className:"App"},n.a.createElement(u,{scoreValue:t}),_.length>0?n.a.createElement(S,{scoreValue:t,setScoreValue:r,choiceValue:_,setChoiceValue:i}):n.a.createElement(g,{setChoiceValue:i}),n.a.createElement(P,null))};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(V,null)))}],[[14,2,1]]]);
//# sourceMappingURL=main.b5ee60d0.chunk.js.map