import{elementScrollByPolyfill as e}from"seamless-scroll-polyfill/dist/esm/Element.scrollBy";import t from"lodash/debounce";var s=function(e,t,s){return Math.abs(e-t)<=s},r="undefined"==typeof window,i=!r;r||"scrollBehavior"in document.documentElement.style||e();function n(e,t,s,r,i,n,o,a,d,l){"boolean"!=typeof o&&(d=a,a=o,o=!1);const c="function"==typeof s?s.options:s;let h;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),r&&(c._scopeId=r),n?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=h):t&&(h=o?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),h)if(c.functional){const e=c.render;c.render=function(t,s){return h.call(s),e(t,s)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,h):[h]}return s}const o={props:{hideArrows:{type:Boolean,default:!1},hideArrowsOnBound:{type:Boolean,default:!1},tag:{type:String,default:"ul"},i18n:{type:Object,default:()=>({slideLeft:"Slide left",slideRight:"Slide right"}),validator:e=>["slideLeft","slideRight"].every(t=>t in e)}},data:()=>({boundLeft:!0,boundRight:!1,slidesWidth:[],wrapperScrollWidth:0,wrapperVisibleWidth:0,currentPage:0,previousPage:0,currentPos:0,step:1,observer:null,onResizeFn:null,onScrollFn:null}),watch:{currentPage(e,t){e!==t&&this.$emit("page",{currentPage:e,previousPage:t})},boundLeft(e){e&&this.$emit("bound-left",!0)},boundRight(e){e&&this.$emit("bound-right",!0)}},mounted(){this.calcOnInit(),i&&(this.onResizeFn=t(this.calcOnInit,410),this.onScrollFn=t(this.calcOnScroll,100),this.attachMutationObserver(),this.$refs.vsWrapper.addEventListener("scroll",this.onScrollFn),window.addEventListener("resize",this.onResizeFn,!1),this.$on("go-to-page",e=>this.goToSlide(e)),this.$emit("mounted",!0))},beforeDestroy(){i&&(this.observer.disconnect(),this.$refs.vsWrapper.removeEventListener("scroll",this.onScrollFn),window.removeEventListener("resize",this.onResizeFn,!1))},methods:{calcOnInit(){this.$refs.vsWrapper&&(this.calcWrapperWidth(),this.calcSlidesWidth(),this.calcCurrentPosition(),this.setCurrentPage(),this.calcBounds())},calcOnScroll(){this.$refs.vsWrapper&&(this.calcCurrentPosition(),this.setCurrentPage(),this.calcBounds())},calcBounds(){const e=s(this.currentPos,0,5),t=s(this.wrapperScrollWidth-this.wrapperVisibleWidth,this.currentPos,5);this.boundLeft=!!e,this.boundRight=!!t},calcWrapperWidth(){this.wrapperScrollWidth=this.$refs.vsWrapper.scrollWidth,this.wrapperVisibleWidth=this.$refs.vsWrapper.offsetWidth},calcSlidesWidth(){const e=[...this.$refs.vsWrapper.children];this.slidesWidth=e.map(e=>({offsetLeft:e.offsetLeft,width:e.offsetWidth}))},getCurrentPage(){return this.slidesWidth.findIndex(e=>s(e.offsetLeft,this.currentPos,e.width/2))},setCurrentPage(e){const t=void 0!==e?e:this.getCurrentPage();t<0||(this.previousPage=this.currentPage,this.currentPage=t>0?t:0)},calcCurrentPosition(){this.currentPos=this.$refs.vsWrapper.scrollLeft||0},attachMutationObserver(){this.observer=new MutationObserver(()=>{this.calcOnInit()}),this.observer.observe(this.$refs.vsWrapper,{attributes:!0,childList:!0,characterData:!0,subtree:!0})},changeSlide(e){this.goToSlide(this.currentPage+e)},goToSlide(e){this.slidesWidth[e]&&(this.$refs.vsWrapper.scrollTo({left:this.slidesWidth[e].offsetLeft,behavior:"smooth"}),this.setCurrentPage(e))}}};var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vs-carousel"},[s(e.tag,{ref:"vsWrapper",tag:"component",staticClass:"vs-carousel__wrapper"},[e._t("default")],2),e._v(" "),e.hideArrows?e._e():e._t("arrows",[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.hideArrowsOnBound||!e.boundLeft,expression:"hideArrowsOnBound ? !boundLeft : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--left\n      ",attrs:{type:"button","aria-label":e.i18n.slideLeft,disabled:e.boundLeft},on:{click:function(t){return e.changeSlide(-1)}}},[e._v("\n      ←\n    ")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.hideArrowsOnBound||!e.boundRight,expression:"hideArrowsOnBound ? !boundRight : true"}],staticClass:"\n        vs-carousel__arrows\n        vs-carousel__arrows--right\n      ",attrs:{type:"button","aria-label":e.i18n.slideRight,disabled:e.boundRight},on:{click:function(t){return e.changeSlide(1)}}},[e._v("\n      →\n    ")])],{changeSlide:e.changeSlide,boundLeft:e.boundLeft,boundRight:e.boundRight})],2)};a._withStripped=!0;const d=n({render:a,staticRenderFns:[]},undefined,o,undefined,false,undefined,!1,void 0,void 0,void 0);const l={props:{tag:{type:String,default:"li"}}};var c=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{ref:"vsSlide",tag:"component",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[e._t("default")],2)};c._withStripped=!0;const h=n({render:c,staticRenderFns:[]},undefined,l,undefined,false,undefined,!1,void 0,void 0,void 0);var u={install:function(e){e.component("Carousel",d),e.component("Slide",h)}};export default u;export{d as Carousel,h as Slide};
