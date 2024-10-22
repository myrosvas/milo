/* eslint-disable */
/* Generated by Milo */

import{property as a,query as m}from"./base.js";import{LikeAnchor as p}from"./shared.js";import{Focusable as x}from"./shared.js";import{css as u}from"./base.js";var d=u`
    :host{--spectrum-link-animation-duration:var(--spectrum-animation-duration-100);--spectrum-link-text-color-primary-default:var(--spectrum-accent-content-color-default);--spectrum-link-text-color-primary-hover:var(--spectrum-accent-content-color-hover);--spectrum-link-text-color-primary-active:var(--spectrum-accent-content-color-down);--spectrum-link-text-color-primary-focus:var(--spectrum-accent-content-color-key-focus);--spectrum-link-text-color-secondary-default:var(--spectrum-neutral-content-color-default);--spectrum-link-text-color-secondary-hover:var(--spectrum-neutral-content-color-hover);--spectrum-link-text-color-secondary-active:var(--spectrum-neutral-content-color-down);--spectrum-link-text-color-secondary-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-link-text-color-white:var(--spectrum-white);--spectrum-link-text-color-black:var(--spectrum-black)}@media (forced-colors:active){:host{--highcontrast-link-text-color-primary-default:LinkText;--highcontrast-link-text-color-primary-hover:LinkText;--highcontrast-link-text-color-primary-active:LinkText;--highcontrast-link-text-color-primary-focus:LinkText;--highcontrast-link-text-color-secondary-default:LinkText;--highcontrast-link-text-color-secondary-hover:LinkText;--highcontrast-link-text-color-secondary-active:LinkText;--highcontrast-link-text-color-secondary-focus:LinkText;--highcontrast-link-text-color-white:LinkText;--highcontrast-link-text-color-black:LinkText}}a{background-color:initial;-webkit-text-decoration-skip:objects;text-decoration-skip:objects;transition:color var(--mod-link-animation-duration,var(--spectrum-link-animation-duration))ease-in-out;cursor:pointer;color:var(--highcontrast-link-text-color-primary-default,var(--mod-link-text-color-primary-default,var(--spectrum-link-text-color-primary-default)));outline:none;-webkit-text-decoration:underline;text-decoration:underline}a:active{color:var(--highcontrast-link-text-color-primary-active,var(--mod-link-text-color-primary-active,var(--spectrum-link-text-color-primary-active)))}a:focus-visible{color:var(--highcontrast-link-text-color-primary-focus,var(--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)));-webkit-text-decoration:underline double;text-decoration:underline double;text-decoration-color:var(--highcontrast-link-focus-color,inherit)}:host([variant=secondary]) a{color:var(--highcontrast-link-text-color-secondary-default,var(--mod-link-text-color-secondary-default,var(--spectrum-link-text-color-secondary-default)))}:host([variant=secondary]) a:active{color:var(--highcontrast-link-text-color-secondary-active,var(--mod-link-text-color-secondary-active,var(--spectrum-link-text-color-secondary-active)))}:host([variant=secondary]) a:focus{color:var(--highcontrast-link-text-color-secondary-focus,var(--mod-link-text-color-secondary-focus,var(--spectrum-link-text-color-secondary-focus)))}:host([quiet]) a{-webkit-text-decoration:none;text-decoration:none}:host([static-color=white]) a,:host([static-color=white]) a:active,:host([static-color=white]) a:focus{color:var(--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white)))}:host([static-color=black]) a,:host([static-color=black]) a:active,:host([static-color=black]) a:focus{color:var(--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black)))}@media (hover:hover){a:hover{color:var(--highcontrast-link-text-color-primary-hover,var(--mod-link-text-color-primary-hover,var(--spectrum-link-text-color-primary-hover)))}:host([variant=secondary]) a:hover{color:var(--highcontrast-link-text-color-secondary-hover,var(--mod-link-text-color-secondary-hover,var(--spectrum-link-text-color-secondary-hover)))}:host([quiet]) a:hover{-webkit-text-decoration:underline;text-decoration:underline}:host([static-color=white]) a:hover{color:var(--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white)))}:host([static-color=black]) a:hover{color:var(--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black)))}}:host{display:inline}:host(:focus){outline:none}:host([href]) a:focus-visible{text-decoration:underline double}:host([disabled]){pointer-events:none}
`,h=d;var v=Object.defineProperty,k=Object.getOwnPropertyDescriptor,e=(i,o,n,c)=>{for(var r=c>1?void 0:c?k(o,n):o,l=i.length-1,s;l>=0;l--)(s=i[l])&&(r=(c?s(o,n,r):s(r))||r);return c&&r&&v(o,n,r),r},t=class extends p(x){constructor(){super(...arguments),this.quiet=!1}static get styles(){return[h]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}updated(o){super.updated(o),o.has("static")&&(this.static!==void 0||o.get("static")!==void 0)&&(this.staticColor=this.static)}};e([m("#anchor")],t.prototype,"anchorElement",2),e([a({type:String,reflect:!0})],t.prototype,"variant",2),e([a({type:String,reflect:!0})],t.prototype,"static",2),e([a({reflect:!0,attribute:"static-color"})],t.prototype,"staticColor",2),e([a({type:Boolean,reflect:!0,attribute:"quiet"})],t.prototype,"quiet",2);import{defineElement as y}from"./base.js";y("sp-link",t);
