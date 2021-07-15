(this["webpackJsonpexchange-rate-react"]=this["webpackJsonpexchange-rate-react"]||[]).push([[0],{30:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,l,d,u=t(1),j=t(20),b=t.n(j),m=(t(30),t(3)),h=t(4),f=h.a.nav(r||(r=Object(m.a)(["\n  grid-column: 1/15;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),g=h.a.img(c||(c=Object(m.a)(["\n  width: 100px;\n  margin-right: auto;\n"]))),x=h.a.div(a||(a=Object(m.a)(["\n  margin-right: 2rem;\n  display: flex;\n  align-items: center;\n  & p {\n    color: #f1faee;\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    letter-spacing: .5rem;\n  }\n  & button {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 10px 5px 10px;\n    background-color: #e63946;\n    width: 90px;\n    color: #f1faee;\n    border: none;\n    font-size: 1.5rem;\n    margin-left: 2rem;\n\n    & img {\n      width: 30px;\n      overflow: hidden;\n      background-color: #e63946;\n    }\n  }\n"]))),p=t.p+"static/media/currex.3d312941.png",O=t(0),D=function(){return Object(O.jsxs)(f,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(g,{src:p,alt:""})}),Object(O.jsxs)(x,{children:[Object(O.jsx)("p",{children:"BASE CURRENCY"}),Object(O.jsxs)("button",{disabled:!0,children:["USD",Object(O.jsx)("img",{src:"https://img.icons8.com/color/48/000000/usa.png",alt:"indianFlag"})]})]})]})},v=h.a.div(o||(o=Object(m.a)(["\n    height: 100%;\n    margin: 0 auto;\n    grid-row-gap: 5rem;\n    padding-left: 3rem;\n    display: grid;\n    grid-template-columns: 1fr repeat(12, minmax(min-content,10rem)) 1fr;\n"]))),S=t(5),N=h.a.div(i||(i=Object(m.a)(["\n    grid-column: 2/14;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n"]))),R=h.a.p(s||(s=Object(m.a)(["\n    font-size: 5rem;\n    font-weight: 600;\n    /* padding-left: 40px; */\n    color: #f1faee;\n    letter-spacing: -0.1rem;\n    line-height: 5rem;\n"]))),A=h.a.button(l||(l=Object(m.a)(["\n    background-color: #e63946;\n    color: #f1faee;\n    font-size: 2rem;\n    width: 20rem;\n    height: 5rem;\n    outline: none;\n    margin-top: 2rem;\n    border: none;\n"]))),P=function(){var n=Object(u.useState)(new Date),e=Object(S.a)(n,2),t=e[0],r=e[1];return Object(u.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(N,{children:[Object(O.jsxs)(R,{children:["Currex Live",Object(O.jsx)("br",{}),"Exchange Rates"]}),Object(O.jsx)(A,{children:"".concat(("0"+t.getDate()).slice(-2),"th  ").concat(t.toLocaleString("default",{month:"long"}),"  ").concat(t.getFullYear())})]}),Object(O.jsx)("div",{})]})},B=h.a.div(d||(d=Object(m.a)(["\n  grid-column: 3/13;\n  background-color: #f1faee;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30rem, auto));\n  justify-content: center;\n  padding: 5rem 3rem;\n\n  & div {\n    background-color: #f1faee;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    & h1 {\n      background-color: #f1faee;\n      font-size: 3rem;\n      line-height: 25px;\n      font-weight: lighter;\n      color: #e63946;\n      text-transform: uppercase;\n    }\n    & p {\n      font-size: 1rem;\n      color: black;\n      background-color: #f1faee;\n      margin-top: 10px;\n    }\n  }\n\n  & .convertor {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: flex-start;\n    \n    & .from,\n    & .to {\n      height: 100%;\n      margin-top: 10%;\n      & label {\n        font-size: 1rem;\n        background-color: #f1faee;\n        text-transform: uppercase;\n        text-align: left;\n      }\n      & select {\n        width: 80%;\n        height: 50%;\n        font-size: 1.5rem;\n        background-color: #a8dadc;\n        border: 3px solid #457b9d;\n        text-align: center;\n        & option {\n          width: 100%;\n          height: 10%;\n          font-size: 1.5rem;\n          background-color: #a8dadc;\n        }\n      }\n    }\n\n    & .swapButtonDiv{\n      width: 100%;\n      height: 80%;\n      background: #f1faee;\n      grid-column: 1/3;\n    }\n\n    & .swapButton{\n      width: 20rem;\n      height: 5rem;\n      background-color: #e63946;\n      color: white;\n      font-size: 2rem;\n      transition: .5s all;\n      &:hover{\n        background-color: red;\n      }\n    }\n  }\n\n  & .amount {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    & input {\n      width: 60%;\n      height: 20%;\n      background-color: #a8dadc;\n      border: 3px solid #457b9d;\n      outline: none;\n      color: black;\n      font-size: 2rem;\n      padding: 2rem;\n    }\n      & .rate {\n        font-size: 2rem;\n      }\n      & .convertedAmount{\n        font-size: 2.5rem;\n        border-bottom: thick double #457b9d;\n      }\n  }\n"]))),w=t(9),C=t.n(w),y=t(24),T=t(25),K=t.n(T),M=function(n){var e=n.amount,t=n.onAmountChange,r=n.amountConverted;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Amount"}),Object(O.jsx)("input",{type:"number",value:e,onChange:t})]}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"convertedAmount",children:r.toFixed(2)})})]})},F=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VES","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPD","XPF","XPT","YER","ZAR","ZMW","ZWL"],G=function(){var n=Object(u.useState)("USD"),e=Object(S.a)(n,2),t=e[0],r=e[1],c=Object(u.useState)("INR"),a=Object(S.a)(c,2),o=a[0],i=a[1],s=Object(u.useState)(74.55),l=Object(S.a)(s,2),d=l[0],j=l[1],b=Object(u.useState)(0),m=Object(S.a)(b,2),h=m[0],f=m[1],g=Object(u.useState)(74.55),x=Object(S.a)(g,2),p=x[0],D=x[1];null!==p&&null!==d||(D(74.55),j(74.55));var v=function(){var n=Object(y.a)(C.a.mark((function n(){var e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K.a.get("https://api.exchangerate.host/convert?from=".concat(t,"&to=").concat(o,"&amount=").concat(h,"&base=USD"));case 2:e=n.sent,j(e.data.info.rate),D(e.data.result);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(u.useEffect)((function(){v()}),[h]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"convertor",children:[Object(O.jsxs)("div",{className:"from",children:[Object(O.jsx)("label",{htmlFor:"currency1",children:"From"}),Object(O.jsx)("select",{name:"currency1",onChange:function(n){r(n.target.value),f(0),v()},defaultValue:t,id:"currency1",children:F.map((function(n){return Object(O.jsx)("option",{children:n},n)}))})]}),Object(O.jsxs)("div",{className:"to",children:[Object(O.jsx)("label",{htmlFor:"currency2",children:"To"}),Object(O.jsx)("select",{name:"currency2",onChange:function(n){i(n.target.value),f(0)},defaultValue:o,id:"currency2",children:F.map((function(n){return Object(O.jsx)("option",{children:n},n)}))})]}),Object(O.jsxs)("div",{className:"swapButtonDiv",children:[Object(O.jsx)("p",{children:"Type Amount to Know the Live Rates"}),Object(O.jsxs)("button",{className:"swapButton",disabled:!0,children:["Rate : ",null===d?"Type amount":d.toFixed(2)]})]})]}),Object(O.jsx)("div",{className:"amount",children:Object(O.jsx)(M,{amount:h,onAmountChange:function(n){f(n.target.value)},amountConverted:p})})]})},L=function(){return Object(O.jsxs)(B,{children:[Object(O.jsxs)("div",{className:"converterText",children:[Object(O.jsxs)("h1",{children:["currency ",Object(O.jsx)("br",{})," converter"]}),Object(O.jsxs)("p",{children:["Choose the currency and the ",Object(O.jsx)("br",{})," amounts to get the exchange rate"]})]}),Object(O.jsx)(G,{})]})};var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(v,{children:[Object(O.jsx)(D,{}),Object(O.jsx)(P,{}),Object(O.jsx)(L,{})]})})};b.a.render(Object(O.jsx)(k,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.b95ba293.chunk.js.map