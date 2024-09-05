"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{95385:function(e,t,n){n.d(t,{R:function(){return a},k:function(){return o}}),n(2265);var r=n(1122);n(57437);let[o,a]=(0,r.createSafeContext)("Card component was not found in tree")},24012:function(e,t,n){n.d(t,{Card:function(){return y}});var r=n(57437),o=n(2265),a=n(94120),i=n(15593),c=n(50591),l=n(66969),s=n(869),u=n(12194),f=n(95385),d=n(72922),p=n(33427);let h={},m=(0,i.createVarsResolver)((e,t)=>{let{padding:n}=t;return{root:{"--card-padding":(0,a.getSpacing)(n)}}}),y=(0,s.polymorphicFactory)((e,t)=>{let n=(0,c.useProps)("Card",h,e),{classNames:a,className:i,style:s,styles:y,unstyled:v,vars:g,children:b,padding:S,...C}=n,x=(0,l.useStyles)({name:"Card",props:n,classes:p.Z,className:i,style:s,classNames:a,styles:y,unstyled:v,vars:g,varsResolver:m}),k=o.Children.toArray(b),w=k.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===d.CardSection?(0,o.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===k.length-1||void 0}):e);return(0,r.jsx)(f.k,{value:{getStyles:x},children:(0,r.jsx)(u.Paper,{ref:t,unstyled:v,...x("root"),...C,children:w})})});y.classes=p.Z,y.displayName="@mantine/core/Card",y.Section=d.CardSection},33427:function(e,t,n){n.d(t,{Z:function(){return r}});var r={root:"m_e615b15f",section:"m_599a2148"}},72922:function(e,t,n){n.d(t,{CardSection:function(){return u}});var r=n(57437);n(2265);var o=n(50591),a=n(31831),i=n(869),c=n(95385),l=n(33427);let s={},u=(0,i.polymorphicFactory)((e,t)=>{let{classNames:n,className:i,style:l,styles:u,vars:f,withBorder:d,inheritPadding:p,mod:h,...m}=(0,o.useProps)("CardSection",s,e),y=(0,c.R)();return(0,r.jsx)(a.Box,{ref:t,mod:[{"with-border":d,"inherit-padding":p},h],...y.getStyles("section",{className:i,style:l,styles:u,classNames:n}),...m})});u.classes=l.Z,u.displayName="@mantine/core/CardSection"},12194:function(e,t,n){n.d(t,{Paper:function(){return p}});var r=n(57437);n(2265);var o=n(94120),a=n(15593),i=n(50591),c=n(66969),l=n(31831),s=n(869),u={root:"m_1b7284a3"};let f={},d=(0,a.createVarsResolver)((e,t)=>{let{radius:n,shadow:r}=t;return{root:{"--paper-radius":void 0===n?void 0:(0,o.getRadius)(n),"--paper-shadow":(0,o.getShadow)(r)}}}),p=(0,s.polymorphicFactory)((e,t)=>{let n=(0,i.useProps)("Paper",f,e),{classNames:o,className:a,style:s,styles:p,unstyled:h,withBorder:m,vars:y,radius:v,shadow:g,variant:b,mod:S,...C}=n,x=(0,c.useStyles)({name:"Paper",props:n,classes:u,className:a,style:s,classNames:o,styles:p,unstyled:h,vars:y,varsResolver:d});return(0,r.jsx)(l.Box,{ref:t,mod:[{"data-with-border":m},S],...x("root"),variant:b,...C})});p.classes=u,p.displayName="@mantine/core/Paper"},31831:function(e,t,n){n.d(t,{Box:function(){return g}});var r=n(57437),o=n(2265),a=n(44839),i=n(89910),c=n(41217),l=n(28891),s=n(78150),u=n(15274);function f(e){return e.startsWith("data-")?e:"data-".concat(e)}function d(e,t){return Array.isArray(e)?[...e].reduce((e,n)=>({...e,...d(n,t)}),{}):"function"==typeof e?e(t):null==e?{}:e}var p=n(17622),h=n(20153),m=n(33110),y=n(54803);let v=(0,o.forwardRef)((e,t)=>{var n;let{component:o,style:i,__vars:v,className:g,variant:b,mod:S,size:C,hiddenFrom:x,visibleFrom:k,lightHidden:w,darkHidden:$,renderRoot:T,__size:N,...M}=e,P=(0,u.useMantineTheme)(),{styleProps:j,rest:R}=(0,p.extractStyleProps)(M),A=(0,s.useMantineSxTransform)(),z=null==A?void 0:null===(n=A())||void 0===n?void 0:n(j.sx),F=(0,y.useRandomClassName)(),I=(0,m.parseStyleProps)({styleProps:j,theme:P,data:h.STYlE_PROPS_DATA}),E={ref:t,style:function(e){let{theme:t,style:n,vars:r,styleProps:o}=e,a=d(n,t),i=d(r,t);return{...a,...i,...o}}({theme:P,style:i,vars:v,styleProps:I.inlineStyles}),className:(0,a.Z)(g,z,{[F]:I.hasResponsiveStyles,"mantine-light-hidden":w,"mantine-dark-hidden":$,["mantine-hidden-from-".concat(x)]:x,["mantine-visible-from-".concat(k)]:k}),"data-variant":b,"data-size":(0,l.isNumberLike)(C)?void 0:C||void 0,size:N,...function e(t){return t?"string"==typeof t?{[f(t)]:!0}:Array.isArray(t)?[...t].reduce((t,n)=>({...t,...e(n)}),{}):Object.keys(t).reduce((e,n)=>{let r=t[n];return void 0===r||""===r||!1===r||null===r||(e[f(n)]=t[n]),e},{}):null}(S),...R};return(0,r.jsxs)(r.Fragment,{children:[I.hasResponsiveStyles&&(0,r.jsx)(c.InlineStyles,{selector:".".concat(F),styles:I.styles,media:I.media}),"function"==typeof T?T(E):(0,r.jsx)(o||"div",{...E})]})});v.displayName="@mantine/core/Box";let g=(0,i.F)(v)},17622:function(e,t,n){n.d(t,{extractStyleProps:function(){return o}});var r=n(20686);function o(e){let{m:t,mx:n,my:o,mt:a,mb:i,ml:c,mr:l,me:s,ms:u,p:f,px:d,py:p,pt:h,pb:m,pl:y,pr:v,pe:g,ps:b,bd:S,bg:C,c:x,opacity:k,ff:w,fz:$,fw:T,lts:N,ta:M,lh:P,fs:j,tt:R,td:A,w:z,miw:F,maw:I,h:E,mih:W,mah:L,bgsz:_,bgp:H,bgr:O,bga:B,pos:Z,top:G,left:V,bottom:D,right:U,inset:q,display:K,flex:Y,hiddenFrom:J,visibleFrom:Q,lightHidden:X,darkHidden:ee,sx:et,...en}=e;return{styleProps:(0,r.filterProps)({m:t,mx:n,my:o,mt:a,mb:i,ml:c,mr:l,me:s,ms:u,p:f,px:d,py:p,pt:h,pb:m,pl:y,pr:v,pe:g,ps:b,bd:S,bg:C,c:x,opacity:k,ff:w,fz:$,fw:T,lts:N,ta:M,lh:P,fs:j,tt:R,td:A,w:z,miw:F,maw:I,h:E,mih:W,mah:L,bgsz:_,bgp:H,bgr:O,bga:B,pos:Z,top:G,left:V,bottom:D,right:U,inset:q,display:K,flex:Y,hiddenFrom:J,visibleFrom:Q,lightHidden:X,darkHidden:ee,sx:et}),rest:en}}n(2265),n(57437)},33110:function(e,t,n){n.d(t,{parseStyleProps:function(){return d}});var r=n(29481);n(2265),n(57437);var o=n(20322),a=n(41846);function i(e,t){let n=(0,a.parseThemeColor)({color:e,theme:t});return"dimmed"===n.color?"var(--mantine-color-dimmed)":"bright"===n.color?"var(--mantine-color-bright)":n.variable?"var(".concat(n.variable,")"):n.color}let c={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"},l=["h1","h2","h3","h4","h5","h6"],s=["h1","h2","h3","h4","h5","h6"],u={color:i,textColor:function(e,t){let n=(0,a.parseThemeColor)({color:e,theme:t});return n.isThemeColor&&void 0===n.shade?"var(--mantine-color-".concat(n.color,"-text)"):i(e,t)},fontSize:function(e,t){return"string"==typeof e&&e in t.fontSizes?"var(--mantine-font-size-".concat(e,")"):"string"==typeof e&&l.includes(e)?"var(--mantine-".concat(e,"-font-size)"):"number"==typeof e||"string"==typeof e?(0,o.h)(e):e},spacing:function(e,t){if("number"==typeof e)return(0,o.h)(e);if("string"==typeof e){let n=e.replace("-","");if(!(n in t.spacing))return(0,o.h)(e);let r="--mantine-spacing-".concat(n);return e.startsWith("-")?"calc(var(".concat(r,") * -1)"):"var(".concat(r,")")}return e},identity:function(e){return e},size:function(e){return"number"==typeof e?(0,o.h)(e):e},lineHeight:function(e,t){return"string"==typeof e&&e in t.lineHeights?"var(--mantine-line-height-".concat(e,")"):"string"==typeof e&&s.includes(e)?"var(--mantine-".concat(e,"-line-height)"):e},fontFamily:function(e){return"string"==typeof e&&e in c?c[e]:e},border:function(e,t){if("number"==typeof e)return(0,o.h)(e);if("string"==typeof e){let[n,r,...a]=e.split(" ").filter(e=>""!==e.trim()),c="".concat((0,o.h)(n));return r&&(c+=" ".concat(r)),a.length>0&&(c+=" ".concat(i(a.join(" "),t))),c.trim()}return e}};function f(e){return e.replace("(min-width: ","").replace("em)","")}function d(e){let{styleProps:t,data:n,theme:o}=e;return function(e){let{media:t,...n}=e,r=Object.keys(t).sort((e,t)=>Number(f(e))-Number(f(t))).map(e=>({query:e,styles:t[e]}));return{...n,media:r}}((0,r.keys)(t).reduce((e,a)=>{var i,c;if("hiddenFrom"===a||"visibleFrom"===a||"sx"===a)return e;let l=n[a],s=Array.isArray(l.property)?l.property:[l.property],f="object"==typeof(c=t[a])&&null!==c?"base"in c?c.base:void 0:c;if(!function(e){if("object"!=typeof e||null===e)return!1;let t=Object.keys(e);return 1!==t.length||"base"!==t[0]}(t[a]))return s.forEach(t=>{e.inlineStyles[t]=u[l.type](f,o)}),e;e.hasResponsiveStyles=!0;let d="object"==typeof(i=t[a])&&null!==i?(0,r.keys)(i).filter(e=>"base"!==e):[];return s.forEach(n=>{f&&(e.styles[n]=u[l.type](f,o)),d.forEach(r=>{var i;let c="(min-width: ".concat(o.breakpoints[r],")");e.media[c]={...e.media[c],[n]:u[l.type]("object"==typeof(i=t[a])&&null!==i&&r in i?i[r]:i,o)}})}),e},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}},20153:function(e,t,n){n.d(t,{STYlE_PROPS_DATA:function(){return r}});let r={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}}},54803:function(e,t,n){n.d(t,{useRandomClassName:function(){return o}});var r=n(2265);function o(){let e=(0,r.useId)().replace(/:/g,"");return"__m__-".concat(e)}},41217:function(e,t,n){n.d(t,{InlineStyles:function(){return i}});var r=n(57437);n(2265);var o=n(78150),a=n(915);function i(e){let t=(0,o.useMantineStyleNonce)();return(0,r.jsx)("style",{"data-mantine-styles":"inline",nonce:null==t?void 0:t(),dangerouslySetInnerHTML:{__html:(0,a.stylesToString)(e)}})}},915:function(e,t,n){n.d(t,{stylesToString:function(){return i}});var r=n(29481),o=n(26201);function a(e){return(0,r.keys)(e).reduce((t,n)=>void 0!==e[n]?"".concat(t).concat((0,o.camelToKebabCase)(n),":").concat(e[n],";"):t,"").trim()}function i(e){let{selector:t,styles:n,media:r,container:o}=e,i=n?a(n):"",c=Array.isArray(r)?r.map(e=>"@media".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[],l=Array.isArray(o)?o.map(e=>"@container ".concat(e.query,"{").concat(t,"{").concat(a(e.styles),"}}")):[];return"".concat(i?"".concat(t,"{").concat(i,"}"):"").concat(c.join("")).concat(l.join("")).trim()}n(2265),n(57437)},78150:function(e,t,n){n.d(t,{MantineContext:function(){return o},useMantineClassNamesPrefix:function(){return c},useMantineContext:function(){return a},useMantineCssVariablesResolver:function(){return i},useMantineIsHeadless:function(){return u},useMantineStyleNonce:function(){return l},useMantineStylesTransform:function(){return d},useMantineSxTransform:function(){return f},useMantineWithStaticClasses:function(){return s}});var r=n(2265);let o=(0,r.createContext)(null);function a(){let e=(0,r.useContext)(o);if(!e)throw Error("[@mantine/core] MantineProvider was not found in tree");return e}function i(){return a().cssVariablesResolver}function c(){return a().classNamesPrefix}function l(){return a().getStyleNonce}function s(){return a().withStaticClasses}function u(){return a().headless}function f(){var e;return null===(e=a().stylesTransform)||void 0===e?void 0:e.sx}function d(){var e;return null===(e=a().stylesTransform)||void 0===e?void 0:e.styles}},15274:function(e,t,n){n.d(t,{MantineThemeContext:function(){return s},MantineThemeProvider:function(){return d},useMantineTheme:function(){return f},useSafeMantineTheme:function(){return u}});var r=n(57437),o=n(2265),a=n(91870),i=n(33138);function c(e){return!(e<0)&&!(e>9)&&parseInt(e.toString(),10)===e}function l(e){if(!(e.primaryColor in e.colors))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");if("object"==typeof e.primaryShade&&(!c(e.primaryShade.dark)||!c(e.primaryShade.light))||"number"==typeof e.primaryShade&&!c(e.primaryShade))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")}let s=(0,o.createContext)(null),u=()=>(0,o.useContext)(s)||a.t;function f(){let e=(0,o.useContext)(s);if(!e)throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function d(e){let{theme:t,children:n,inherit:c=!0}=e,f=u(),d=(0,o.useMemo)(()=>(function(e,t){if(!t)return l(e),e;let n=(0,i.R)(e,t);return t.fontFamily&&!t.headings?.fontFamily&&(n.headings.fontFamily=t.fontFamily),l(n),n})(c?f:a.t,t),[t,f,c]);return(0,r.jsx)(s.Provider,{value:d,children:n})}d.displayName="@mantine/core/MantineThemeProvider"},82250:function(e,t,n){n.r(t),n.d(t,{defaultVariantColorsResolver:function(){return s}});var r=n(20322);n(2265),n(57437);var o=n(75297);function a(e,t){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${100*t}%)`;let{r:n,g:r,b:a,a:i}=(0,o.c)(e),c=1-t,l=e=>Math.round(e*c);return`rgba(${l(n)}, ${l(r)}, ${l(a)}, ${i})`}var i=n(92442),c=n(41846),l=n(78928);let s=e=>{let{color:t,theme:n,variant:o,gradient:s,autoContrast:u}=e,f=(0,c.parseThemeColor)({color:t,theme:n}),d="boolean"==typeof u?u:n.autoContrast;if("filled"===o){let e=d&&f.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return f.isThemeColor?void 0===f.shade?{background:"var(--mantine-color-".concat(t,"-filled)"),hover:"var(--mantine-color-".concat(t,"-filled-hover)"),color:e,border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),hover:"var(--mantine-color-".concat(f.color,"-").concat(9===f.shade?8:f.shade+1,")"),color:e,border:"".concat((0,r.h)(1)," solid transparent")}:{background:t,hover:a(t,.1),color:e,border:"".concat((0,r.h)(1)," solid transparent")}}if("light"===o){if(f.isThemeColor){if(void 0===f.shade)return{background:"var(--mantine-color-".concat(t,"-light)"),hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")};let e=n.colors[f.color][f.shade];return{background:(0,l.m)(e,.1),hover:(0,l.m)(e,.12),color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}}return{background:(0,l.m)(t,.1),hover:(0,l.m)(t,.12),color:t,border:"".concat((0,r.h)(1)," solid transparent")}}if("outline"===o)return f.isThemeColor?void 0===f.shade?{background:"transparent",hover:"var(--mantine-color-".concat(t,"-outline-hover)"),color:"var(--mantine-color-".concat(t,"-outline)"),border:"".concat((0,r.h)(1)," solid var(--mantine-color-").concat(t,"-outline)")}:{background:"transparent",hover:(0,l.m)(n.colors[f.color][f.shade],.05),color:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),border:"".concat((0,r.h)(1)," solid var(--mantine-color-").concat(f.color,"-").concat(f.shade,")")}:{background:"transparent",hover:(0,l.m)(t,.05),color:t,border:"".concat((0,r.h)(1)," solid ").concat(t)};if("subtle"===o){if(f.isThemeColor){if(void 0===f.shade)return{background:"transparent",hover:"var(--mantine-color-".concat(t,"-light-hover)"),color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")};let e=n.colors[f.color][f.shade];return{background:"transparent",hover:(0,l.m)(e,.12),color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}}return{background:"transparent",hover:(0,l.m)(t,.12),color:t,border:"".concat((0,r.h)(1)," solid transparent")}}return"transparent"===o?f.isThemeColor?void 0===f.shade?{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(t,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(f.color,"-").concat(Math.min(f.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:t,border:"".concat((0,r.h)(1)," solid transparent")}:"white"===o?f.isThemeColor?void 0===f.shade?{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:"var(--mantine-color-".concat(t,"-filled)"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:"var(--mantine-color-".concat(f.color,"-").concat(f.shade,")"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:t,border:"".concat((0,r.h)(1)," solid transparent")}:"gradient"===o?{background:(0,i.getGradient)(s,n),hover:(0,i.getGradient)(s,n),color:"var(--mantine-color-white)",border:"none"}:"default"===o?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:"".concat((0,r.h)(1)," solid var(--mantine-color-default-border)")}:{}}},92442:function(e,t,n){n.d(t,{getGradient:function(){return o}});var r=n(45027);function o(e,t){let n={from:(null==e?void 0:e.from)||t.defaultGradient.from,to:(null==e?void 0:e.to)||t.defaultGradient.to,deg:(null==e?void 0:e.deg)||t.defaultGradient.deg||0},o=(0,r.getThemeColor)(n.from,t),a=(0,r.getThemeColor)(n.to,t);return"linear-gradient(".concat(n.deg,"deg, ").concat(o," 0%, ").concat(a," 100%)")}},76900:function(e,t,n){n.d(t,{getPrimaryShade:function(){return r}});function r(e,t){return"number"==typeof e.primaryShade?e.primaryShade:"dark"===t?e.primaryShade.dark:e.primaryShade.light}},45027:function(e,t,n){n.d(t,{getThemeColor:function(){return o}});var r=n(41846);function o(e,t){let n=(0,r.parseThemeColor)({color:e||t.primaryColor,theme:t});return n.variable?"var(".concat(n.variable,")"):e}},28464:function(e,t,n){n.d(t,{isLightColor:function(){return i},luminance:function(){return a}});var r=n(75297);function o(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function a(e){if(e.startsWith("oklch("))return(function(e){let t=e.match(/oklch\((.*?)%\s/);return t?parseFloat(t[1]):null}(e)||0)/100;let{r:t,g:n,b:a}=(0,r.c)(e);return .2126*o(t/255)+.7152*o(n/255)+.0722*o(a/255)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.179;return!e.startsWith("var(")&&a(e)>t}},41846:function(e,t,n){n.d(t,{parseThemeColor:function(){return a}});var r=n(76900),o=n(28464);function a(e){let{color:t,theme:n,colorScheme:a}=e;if("string"!=typeof t)throw Error("[@mantine/core] Failed to parse color. Expected color to be a string, instead got ".concat(typeof t));if("bright"===t)return{color:t,value:"dark"===a?n.white:n.black,shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("dark"===a?n.white:n.black,n.luminanceThreshold),variable:"--mantine-color-bright"};if("dimmed"===t)return{color:t,value:"dark"===a?n.colors.dark[2]:n.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("dark"===a?n.colors.dark[2]:n.colors.gray[6],n.luminanceThreshold),variable:"--mantine-color-dimmed"};if("white"===t||"black"===t)return{color:t,value:"white"===t?n.white:n.black,shade:void 0,isThemeColor:!1,isLight:(0,o.isLightColor)("white"===t?n.white:n.black,n.luminanceThreshold),variable:"--mantine-color-".concat(t)};let[i,c]=t.split("."),l=c?Number(c):void 0,s=i in n.colors;if(s){let e=void 0!==l?n.colors[i][l]:n.colors[i][(0,r.getPrimaryShade)(n,a||"light")];return{color:i,value:e,shade:l,isThemeColor:s,isLight:(0,o.isLightColor)(e,n.luminanceThreshold),variable:c?"--mantine-color-".concat(i,"-").concat(l):"--mantine-color-".concat(i,"-filled")}}return{color:t,value:t,isThemeColor:s,isLight:(0,o.isLightColor)(t,n.luminanceThreshold),shade:l,variable:void 0}}},78928:function(e,t,n){n.d(t,{F:function(){return a},m:function(){return o}});var r=n(75297);function o(e,t){if("string"!=typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var("))return`color-mix(in srgb, ${e}, transparent ${(1-t)*100}%)`;if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${t})`):e.replace(")",` / ${t})`);let{r:n,g:o,b:a}=(0,r.c)(e);return`rgba(${n}, ${o}, ${a}, ${t})`}let a=o},75297:function(e,t,n){n.d(t,{c:function(){return r}});function r(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){let e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}if(8===t.length){let e=parseInt(t.slice(6,8),16)/255;return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:e}}let n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:255&n,a:1}}(e):e.startsWith("rgb")?function(e){let[t,n,r,o]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:t,g:n,b:r,a:o||1}}(e):e.startsWith("hsl")?function(e){let t,n,r;let o=e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!o)return{r:0,g:0,b:0,a:1};let a=parseInt(o[1],10),i=parseInt(o[2],10)/100,c=parseInt(o[3],10)/100,l=o[5]?parseFloat(o[5]):void 0,s=(1-Math.abs(2*c-1))*i,u=a/60,f=s*(1-Math.abs(u%2-1)),d=c-s/2;return u>=0&&u<1?(t=s,n=f,r=0):u>=1&&u<2?(t=f,n=s,r=0):u>=2&&u<3?(t=0,n=s,r=f):u>=3&&u<4?(t=0,n=f,r=s):u>=4&&u<5?(t=f,n=0,r=s):(t=s,n=0,r=f),{r:Math.round((t+d)*255),g:Math.round((n+d)*255),b:Math.round((r+d)*255),a:l||1}}(e):{r:0,g:0,b:0,a:1}}},91870:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(20322);n(2265),n(57437);var o=n(82250);let a="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",i={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:{dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:o.defaultVariantColorsResolver,autoContrast:!1,luminanceThreshold:.3,fontFamily:a,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:a,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:(0,r.h)(34),lineHeight:"1.3"},h2:{fontSize:(0,r.h)(26),lineHeight:"1.35"},h3:{fontSize:(0,r.h)(22),lineHeight:"1.4"},h4:{fontSize:(0,r.h)(18),lineHeight:"1.45"},h5:{fontSize:(0,r.h)(16),lineHeight:"1.5"},h6:{fontSize:(0,r.h)(14),lineHeight:"1.5"}}},fontSizes:{xs:(0,r.h)(12),sm:(0,r.h)(14),md:(0,r.h)(16),lg:(0,r.h)(18),xl:(0,r.h)(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:(0,r.h)(2),sm:(0,r.h)(4),md:(0,r.h)(8),lg:(0,r.h)(16),xl:(0,r.h)(32)},spacing:{xs:(0,r.h)(10),sm:(0,r.h)(12),md:(0,r.h)(16),lg:(0,r.h)(20),xl:(0,r.h)(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,r.h)(1)} ${(0,r.h)(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(10)} ${(0,r.h)(15)} ${(0,r.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(7)} ${(0,r.h)(7)} ${(0,r.h)(-5)}`,md:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(20)} ${(0,r.h)(25)} ${(0,r.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(10)} ${(0,r.h)(10)} ${(0,r.h)(-5)}`,lg:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(28)} ${(0,r.h)(23)} ${(0,r.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(12)} ${(0,r.h)(12)} ${(0,r.h)(-7)}`,xl:`0 ${(0,r.h)(1)} ${(0,r.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,r.h)(36)} ${(0,r.h)(28)} ${(0,r.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,r.h)(17)} ${(0,r.h)(17)} ${(0,r.h)(-7)}`},other:{},components:{}}},50591:function(e,t,n){n.d(t,{useProps:function(){return a}});var r=n(20686);n(2265),n(57437);var o=n(15274);function a(e,t,n){var a;let i=(0,o.useMantineTheme)(),c=null===(a=i.components[e])||void 0===a?void 0:a.defaultProps,l="function"==typeof c?c(i):c;return{...t,...l,...(0,r.filterProps)(n)}}},89910:function(e,t,n){n.d(t,{F:function(){return r}});function r(e){return e}},73147:function(e,t,n){n.d(t,{factory:function(){return c},getWithProps:function(){return i},y:function(){return a}});var r=n(57437),o=n(2265);function a(e){return e}function i(e){return t=>{let n=(0,o.forwardRef)((n,o)=>(0,r.jsx)(e,{...t,...n,ref:o}));return n.extend=e.extend,n.displayName="WithProps(".concat(e.displayName,")"),n}}function c(e){let t=(0,o.forwardRef)(e);return t.extend=a,t.withProps=e=>{let n=(0,o.forwardRef)((n,o)=>(0,r.jsx)(t,{...e,...n,ref:o}));return n.extend=t.extend,n.displayName="WithProps(".concat(t.displayName,")"),n},t}},869:function(e,t,n){n.d(t,{polymorphicFactory:function(){return i}});var r=n(57437),o=n(2265),a=n(73147);function i(e){let t=(0,o.forwardRef)(e);return t.withProps=e=>{let n=(0,o.forwardRef)((n,o)=>(0,r.jsx)(t,{...e,...n,ref:o}));return n.extend=t.extend,n.displayName="WithProps(".concat(t.displayName,")"),n},t.extend=a.y,t}},15593:function(e,t,n){n.d(t,{createVarsResolver:function(){return r}});function r(e){return e}},92711:function(e,t,n){n.d(t,{C:function(){return a},FOCUS_CLASS_NAMES:function(){return o}});var r=n(44839);let o={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function a(e){let{theme:t,options:n,unstyled:a}=e;return(0,r.Z)((null==n?void 0:n.focusable)&&!a&&(t.focusClassName||o[t.focusRing]),(null==n?void 0:n.active)&&!a&&t.activeClassName)}},40954:function(e,t,n){n.d(t,{resolveClassNames:function(){return a}});var r=n(44839);let o={};function a(e){let{theme:t,classNames:n,props:a,stylesCtx:i}=e;return function(e){let t={};return e.forEach(e=>{Object.entries(e).forEach(e=>{let[n,o]=e;t[n]?t[n]=(0,r.Z)(t[n],o):t[n]=o})}),t}((Array.isArray(n)?n:[n]).map(e=>"function"==typeof e?e(t,a,i):e||o))}},70098:function(e,t,n){n.d(t,{resolveStyles:function(){return r}});function r(e){let{theme:t,styles:n,props:r,stylesCtx:o}=e;return(Array.isArray(n)?n:[n]).reduce((e,n)=>"function"==typeof n?{...e,...n(t,r,o)}:{...e,...n},{})}},66969:function(e,t,n){n.d(t,{useStyles:function(){return d}}),n(2265),n(57437);var r=n(78150),o=n(15274),a=n(44839),i=n(92711),c=n(40954);function l(e){let{selector:t,stylesCtx:n,theme:r,classNames:o,props:a}=e;return(0,c.resolveClassNames)({theme:r,classNames:o,props:a,stylesCtx:n})[t]}var s=n(70098);function u(e){let{style:t,theme:n}=e;return Array.isArray(t)?[...t].reduce((e,t)=>({...e,...u({style:t,theme:n})}),{}):"function"==typeof t?t(n):null==t?{}:t}var f=n(20686);function d(e){let{name:t,classes:n,props:d,stylesCtx:p,className:h,style:m,rootSelector:y="root",unstyled:v,classNames:g,styles:b,vars:S,varsResolver:C}=e,x=(0,o.useMantineTheme)(),k=(0,r.useMantineClassNamesPrefix)(),w=(0,r.useMantineWithStaticClasses)(),$=(0,r.useMantineIsHeadless)(),T=(Array.isArray(t)?t:[t]).filter(e=>e),{withStylesTransform:N,getTransformedStyles:M}=function(e){var t;let{props:n,stylesCtx:a,themeName:i}=e,c=(0,o.useMantineTheme)(),l=null===(t=(0,r.useMantineStylesTransform)())||void 0===t?void 0:t();return{getTransformedStyles:e=>l?[...e.map(e=>l(e,{props:n,theme:c,ctx:a})),...i.map(e=>{var t;return l(null===(t=c.components[e])||void 0===t?void 0:t.styles,{props:n,theme:c,ctx:a})})].filter(Boolean):[],withStylesTransform:!!l}}({props:d,stylesCtx:p,themeName:T});return(e,t)=>({className:function(e){let{theme:t,options:n,themeName:r,selector:o,classNamesPrefix:s,classNames:u,classes:f,unstyled:d,className:p,rootSelector:h,props:m,stylesCtx:y,withStaticClasses:v,headless:g,transformedStyles:b}=e;return(0,a.Z)((0,i.C)({theme:t,options:n,unstyled:d||g}),function(e){let{themeName:t,theme:n,selector:r,props:o,stylesCtx:a}=e;return t.map(e=>{var t,i;return null===(t=(0,c.resolveClassNames)({theme:n,classNames:null===(i=n.components[e])||void 0===i?void 0:i.classNames,props:o,stylesCtx:a}))||void 0===t?void 0:t[r]})}({theme:t,themeName:r,selector:o,props:m,stylesCtx:y}),function(e){let{options:t,classes:n,selector:r,unstyled:o}=e;return(null==t?void 0:t.variant)&&!o?n["".concat(r,"--").concat(t.variant)]:void 0}({options:n,classes:f,selector:o,unstyled:d}),l({selector:o,stylesCtx:y,theme:t,classNames:u,props:m}),l({selector:o,stylesCtx:y,theme:t,classNames:b,props:m}),function(e){let{selector:t,stylesCtx:n,options:r,props:o,theme:a}=e;return(0,c.resolveClassNames)({theme:a,classNames:null==r?void 0:r.classNames,props:(null==r?void 0:r.props)||o,stylesCtx:n})[t]}({selector:o,stylesCtx:y,options:n,props:m,theme:t}),function(e){let{rootSelector:t,selector:n,className:r}=e;return t===n?r:void 0}({rootSelector:h,selector:o,className:p}),function(e){let{selector:t,classes:n,unstyled:r}=e;return r?void 0:n[t]}({selector:o,classes:f,unstyled:d||g}),v&&!g&&function(e){let{themeName:t,classNamesPrefix:n,selector:r,withStaticClass:o}=e;return!1===o?[]:t.map(e=>"".concat(n,"-").concat(e,"-").concat(r))}({themeName:r,classNamesPrefix:s,selector:o,withStaticClass:null==n?void 0:n.withStaticClass}),null==n?void 0:n.className)}({theme:x,options:t,themeName:T,selector:e,classNamesPrefix:k,classNames:g,classes:n,unstyled:v,className:h,rootSelector:y,props:d,stylesCtx:p,withStaticClasses:w,headless:$,transformedStyles:M([null==t?void 0:t.styles,b])}),style:function(e){let{theme:t,themeName:n,selector:r,options:o,props:a,stylesCtx:i,rootSelector:c,styles:l,style:d,vars:p,varsResolver:h,headless:m,withStylesTransform:y}=e;return{...!y&&function(e){let{theme:t,themeName:n,props:r,stylesCtx:o,selector:a}=e;return n.map(e=>{var n;return(0,s.resolveStyles)({theme:t,styles:null===(n=t.components[e])||void 0===n?void 0:n.styles,props:r,stylesCtx:o})[a]}).reduce((e,t)=>({...e,...t}),{})}({theme:t,themeName:n,props:a,stylesCtx:i,selector:r}),...!y&&(0,s.resolveStyles)({theme:t,styles:l,props:a,stylesCtx:i})[r],...!y&&(0,s.resolveStyles)({theme:t,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||a,stylesCtx:i})[r],...function(e){var t;let{vars:n,varsResolver:r,theme:o,props:a,stylesCtx:i,selector:c,themeName:l,headless:s}=e;return null===(t=[s?{}:null==r?void 0:r(o,a,i),...l.map(e=>{var t,n,r;return null===(r=o.components)||void 0===r?void 0:null===(n=r[e])||void 0===n?void 0:null===(t=n.vars)||void 0===t?void 0:t.call(n,o,a,i)}),null==n?void 0:n(o,a,i)].reduce((e,t)=>(t&&Object.keys(t).forEach(n=>{e[n]={...e[n],...(0,f.filterProps)(t[n])}}),e),{}))||void 0===t?void 0:t[c]}({theme:t,props:a,stylesCtx:i,vars:p,varsResolver:h,selector:r,themeName:n,headless:m}),...c===r?u({style:d,theme:t}):null,...u({style:null==o?void 0:o.style,theme:t})}}({theme:x,themeName:T,selector:e,options:t,props:d,stylesCtx:p,rootSelector:y,styles:b,style:m,vars:S,varsResolver:C,headless:$,withStylesTransform:N})})}},26201:function(e,t,n){n.d(t,{camelToKebabCase:function(){return r}});function r(e){return e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase()))}},1122:function(e,t,n){n.d(t,{createSafeContext:function(){return a}});var r=n(57437),o=n(2265);function a(e){let t=(0,o.createContext)(null);return[e=>{let{children:n,value:o}=e;return(0,r.jsx)(t.Provider,{value:o,children:n})},()=>{let n=(0,o.useContext)(t);if(null===n)throw Error(e);return n}]}},33138:function(e,t,n){function r(e){return e&&"object"==typeof e&&!Array.isArray(e)}n.d(t,{R:function(){return function e(t,n){let o={...t};return r(t)&&r(n)&&Object.keys(n).forEach(a=>{r(n[a])&&a in t?o[a]=e(o[a],n[a]):o[a]=n[a]}),o}}})},20686:function(e,t,n){n.d(t,{filterProps:function(){return r}});function r(e){return Object.keys(e).reduce((t,n)=>(void 0!==e[n]&&(t[n]=e[n]),t),{})}},94120:function(e,t,n){n.d(t,{getFontSize:function(){return l},getLineHeight:function(){return s},getRadius:function(){return c},getShadow:function(){return u},getSize:function(){return a},getSpacing:function(){return i}});var r=n(28891),o=n(20322);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==e)return(0,r.isNumberLike)(e)?n?(0,o.h)(e):e:"var(--".concat(t,"-").concat(e,")")}function i(e){return a(e,"mantine-spacing")}function c(e){return void 0===e?"var(--mantine-radius-default)":a(e,"mantine-radius")}function l(e){return a(e,"mantine-font-size")}function s(e){return a(e,"mantine-line-height",!1)}function u(e){if(e)return a(e,"mantine-shadow",!1)}},28891:function(e,t,n){n.d(t,{isNumberLike:function(){return r}});function r(e){return"number"==typeof e||"string"==typeof e&&(!!(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&""!==e.trim())||/[0-9]/.test(e.trim().replace("-","")[0]))}},29481:function(e,t,n){n.d(t,{keys:function(){return r}});function r(e){return Object.keys(e)}},20322:function(e,t,n){function r(e){return"0rem"===e?"0rem":`calc(${e} * var(--mantine-scale))`}function o(e,{shouldScale:t=!1}={}){return function n(o){if(0===o||"0"===o)return`0${e}`;if("number"==typeof o){let n=`${o/16}${e}`;return t?r(n):n}if("string"==typeof o){if(""===o||o.startsWith("calc(")||o.startsWith("clamp(")||o.includes("rgba("))return o;if(o.includes(","))return o.split(",").map(e=>n(e)).join(",");if(o.includes(" "))return o.split(" ").map(e=>n(e)).join(" ");if(o.includes(e))return t?r(o):o;let a=o.replace("px","");if(!Number.isNaN(Number(a))){let n=`${Number(a)/16}${e}`;return t?r(n):n}}return o}}n.d(t,{em:function(){return i},h:function(){return a}});let a=o("rem",{shouldScale:!0}),i=o("em")},44839:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(n=0;n<a;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);