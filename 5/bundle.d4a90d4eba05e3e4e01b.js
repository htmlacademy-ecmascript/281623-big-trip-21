(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",c="quarter",u="year",p="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:u,w:l,d:a,D:p,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=_;var g=function(e){return e instanceof w},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},D=m;D.l=$,D.i=g,D.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function _(e){this.$L=$(e.locale,null,!0),this.parse(e)}var h=_.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return D},h.isValid=function(){return!(this.$d.toString()===d)},h.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,c=!!D.u(t)||t,d=D.p(e),v=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},_=this.$W,h=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return c?v(1,0):v(31,11);case o:return c?v(1,h):v(0,h+1);case l:var b=this.$locale().weekStart||0,g=(_<b?_+7:_)-b;return v(c?m-g:m+(6-g),h);case a:case p:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var l,c=D.p(e),d="set"+(this.$u?"UTC":""),v=(l={},l[a]=d+"Date",l[p]=d+"Date",l[o]=d+"Month",l[u]=d+"FullYear",l[r]=d+"Hours",l[s]=d+"Minutes",l[i]=d+"Seconds",l[n]=d+"Milliseconds",l)[c],f=c===a?this.$D+(t-this.$W):t;if(c===o||c===u){var _=this.clone().set(p,1);_.$d[v](f),_.init(),this.$d=_.set(p,Math.min(this.$D,_.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[D.p(e)]()},h.add=function(n,c){var p,d=this;n=Number(n);var v=D.p(c),f=function(e){var t=M(d);return D.w(t.date(t.date()+Math.round(e*n)),d)};if(v===o)return this.set(o,this.$M+n);if(v===u)return this.set(u,this.$y+n);if(v===a)return f(1);if(v===l)return f(7);var _=(p={},p[s]=e,p[r]=t,p[i]=1e3,p)[v]||1,h=this.$d.getTime()+n*_;return D.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,c=n.months,u=n.meridiem,p=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},v=function(e){return D.s(r%12||12,e,"0")},_=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(f,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return l+1;case"MM":return D.s(l+1,2,"0");case"MMM":return p(n.monthsShort,l,c,3);case"MMMM":return p(c,l);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(n.weekdaysMin,t.$W,o,2);case"ddd":return p(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(r);case"HH":return D.s(r,2,"0");case"h":return v(1);case"hh":return v(2);case"a":return _(r,a,!0);case"A":return _(r,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,p,d){var v,f=this,_=D.p(p),h=M(n),m=(h.utcOffset()-this.utcOffset())*e,y=this-h,b=function(){return D.m(f,h)};switch(_){case u:v=b()/12;break;case o:v=b();break;case c:v=b()/3;break;case l:v=(y-m)/6048e5;break;case a:v=(y-m)/864e5;break;case r:v=y/t;break;case s:v=y/e;break;case i:v=y/1e3;break;default:v=y}return d?v:D.a(v)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return b[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return D.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},_}(),S=w.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",u],["$D",p]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="hh:mm",t=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],i=["Amsterdam","Chamonix","Geneva","Rome","New York"],s=["Order Uber","Add luggage","Switch to comfort","Rent a car","Add breakfast","Book tickets","Lunch in city","Upgrade to a business class"],r=["Lorem ipsum dolor sit amet","Fusce tristique felis at fermentum pharetra","Aliquam id orci ut lectus varius viverra","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui","Sed sed nisi sed augue convallis suscipit in sed felis"];var a=n(484),l=n.n(a);const o=(e,t)=>{const n=Math.ceil(Math.min(e,t)),i=Math.floor(Math.max(e,t)),s=Math.random()*(i-n+1)+n;return Math.floor(s)},c=e=>e[o(0,e.length-1)];function u(t){return t?l()(t).format(e):""}const p=[{id:1,description:c(r),name:c(i),pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:c(r)}]},{id:2,description:c(r),name:c(i),pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:c(r)}]},{id:3,description:c(r),name:c(i),pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:c(r)}]},{id:4,description:c(r),name:c(i),pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:c(r)}]}],d=[{id:crypto.randomUUID(),title:c(s),price:o(0,100)},{id:crypto.randomUUID(),title:c(s),price:o(0,100)},{id:crypto.randomUUID(),title:c(s),price:o(0,100)},{id:crypto.randomUUID(),title:c(s),price:o(0,100)}],v=[{id:o(1,4),basePrice:1100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:p[o(1,4)]||void 0,isFavorite:!1,offers:Array.from({length:o(1,4)},(()=>c(d))),type:c(t)},{id:o(1,4),basePrice:2100,dateFrom:"2020-07-11T12:55:56.845Z",dateTo:"2020-07-12T14:22:13.375Z",destination:p[o(1,4)],isFavorite:!1,offers:Array.from({length:o(1,4)},(()=>c(d))),type:c(t)},{id:o(1,4),basePrice:2100,dateFrom:"2020-07-11T12:55:56.845Z",dateTo:"2020-07-12T14:22:13.375Z",destination:p[o(1,4)],isFavorite:!1,offers:Array.from({length:o(1,4)},(()=>c(d))),type:c(t)},{id:o(1,4),basePrice:3100,dateFrom:"2021-07-14T21:55:56.845Z",dateTo:"2021-07-15T12:22:13.375Z",destination:p[o(1,4)],isFavorite:!0,offers:Array.from({length:o(1,4)},(()=>c(d))),type:c(t)}];function f(){return c(v)}function _(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function h(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class m{getTemplate(){return'\n<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=_(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=_(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{constructor({point:e}){this.point=e}getTemplate(){return function(e){const{basePrice:t,dateTo:n,dateFrom:i,destination:s,isFavorite:r,offers:a,type:o}=e,c=(p=i)?l()(p).format("MM DD"):"";var p;const d=u(i),v=u(n),f=(_=i,h=n,l()(h).diff(l()(_),"h"));var _,h;const m=r?"event__favorite-btn--active":"event__favorite-btn--disabled";return`<li class="trip-events__item">\n            <div class="event">\n            <time class="event__date" datetime="2019-03-18">${c}</time>\n            <div class="event__type">\n                <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n            </div>\n              <h3 class="event__title">${o} ${s.name}</h3>\n            <div class="event__schedule">\n                <p class="event__time">\n                <time class="event__start-time" datetime="2019-03-18T10:30">${d}</time>\n\n                <time class="event__end-time" datetime="2019-03-18T11:00">${v}</time>\n                </p>\n                <p class="event__duration">${f}</p>\n            </div>\n            <p class="event__price">\n                <span class="event__price-value">${t}</span>\n            </p>\n            <h4 class="visually-hidden">Offers:</h4>\n            <ul class="event__selected-offers">\n                ${a.map((e=>`<li class="event__offer">\n          <span class="event__offer-title">${e.title}</span>\n          <span class="event__offer-price">${e.price}</span>\n        </li>`)).join("")}\n          </ul>\n            <button class="event__favorite-btn ${m}" type="button">\n                <span class="visually-hidden">Add to favorite</span>\n                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                </svg>\n            </button>\n            <button class="event__rollup-btn" type="button">\n                <span class="visually-hidden">Open event</span>\n            </button>\n            </div>\n    </li>`}(this.point)}getElement(){return this.element||(this.element=_(this.getTemplate())),this.element}removeElement(){this.element=null}}class g{getTemplate(){return'\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              Flight\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n          </div>\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n          </div>\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            <div class="event__available-offers">\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                <label class="event__offer-label" for="event-offer-luggage-1">\n                  <span class="event__offer-title">Add luggage</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">30</span>\n                </label>\n              </div>\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                <label class="event__offer-label" for="event-offer-comfort-1">\n                  <span class="event__offer-title">Switch to comfort class</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">100</span>\n                </label>\n              </div>\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                <label class="event__offer-label" for="event-offer-meal-1">\n                  <span class="event__offer-title">Add meal</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">15</span>\n                </label>\n              </div>\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                <label class="event__offer-label" for="event-offer-seats-1">\n                  <span class="event__offer-title">Choose seats</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">5</span>\n                </label>\n              </div>\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                <label class="event__offer-label" for="event-offer-train-1">\n                  <span class="event__offer-title">Travel by train</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">40</span>\n                </label>\n              </div>\n            </div>\n          </section>\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n              </div>\n            </div>\n          </section>\n        </section>\n      </form>\n    </li>\n  '}getElement(){return this.element||(this.element=_(this.getTemplate())),this.element}removeElement(){this.element=null}}const $=document.querySelector(".trip-main"),M=document.querySelector(".trip-controls__filters"),D=document.querySelector(".trip-events"),w=new class{points=Array.from({length:4},f);getPoints(){return this.points}},S=new class{listComponent=new m;listEventEdit=new g;listSort=new y;constructor({boardContainer:e,pointsModel:t}){this.boardContainer=e,this.pointsModel=t}init(){this.listPoints=[...this.pointsModel.getPoints()],h(this.listSort,this.boardContainer),h(this.listComponent,this.boardContainer),h(this.listEventEdit,this.listComponent.getElement());for(let e=0;e<4;e++)h(new b({point:this.listPoints[e]}),this.listComponent.getElement())}}({boardContainer:D,pointsModel:w});h(new class{getTemplate(){return'\n        <section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n            <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n            </div>\n            <p class="trip-info__cost">\n            <span class="trip-info__cost-value">1230</span>\n            </p>\n        </section>\n    '}getElement(){return this.element||(this.element=_(this.getTemplate())),this.element}removeElement(){this.element=null}},$,"afterbegin"),h(new class{getTemplate(){return'\n     <form class="trip-filters" action="#" method="get">\n     <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}getElement(){return this.element||(this.element=_(this.getTemplate())),this.element}removeElement(){this.element=null}},M),S.init()})()})();
//# sourceMappingURL=bundle.d4a90d4eba05e3e4e01b.js.map