var po=Object.defineProperty;var fo=(e,t,r)=>t in e?po(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var f=(e,t,r)=>(fo(e,typeof t!="symbol"?t+"":t,r),r),lt=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var ht=(e,t,r)=>(lt(e,t,"read from private field"),r?r.call(e):t.get(e)),De=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},ir=(e,t,r,n)=>(lt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var mt=(e,t,r)=>(lt(e,t,"access private method"),r);import{LitElement as Li}from"../lit-all.min.js";import{LitElement as go,html as sr,css as xo}from"../lit-all.min.js";var m=class extends go{constructor(){super(),this.size="m",this.alt=""}render(){let{href:t}=this;return t?sr`<a href="${t}">
                  <img src="${this.src}" alt="${this.alt}" loading="lazy" />
              </a>`:sr` <img src="${this.src}" alt="${this.alt}" loading="lazy" />`}};f(m,"properties",{size:{type:String,attribute:!0},src:{type:String,attribute:!0},alt:{type:String,attribute:!0},href:{type:String,attribute:!0}}),f(m,"styles",xo`
        :host {
            --img-width: 32px;
            --img-height: 32px;
            display: block;
            width: var(--mod-img-width, var(--img-width));
            height: var(--mod-img-height, var(--img-height));
        }

        :host([size='s']) {
            --img-width: 24px;
            --img-height: 24px;
        }

        :host([size='m']) {
            --img-width: 30px;
            --img-height: 30px;
        }

        :host([size='l']) {
            --img-width: 40px;
            --img-height: 40px;
        }

        img {
            width: var(--mod-img-width, var(--img-width));
            height: var(--mod-img-height, var(--img-height));
        }
    `);customElements.define("merch-icon",m);import{css as lr,unsafeCSS as cr}from"../lit-all.min.js";var F="(max-width: 767px)",Ue="(max-width: 1199px)",T="(min-width: 768px)",A="(min-width: 1200px)",k="(min-width: 1600px)";var hr=lr`
    :host {
        --consonant-merch-card-background-color: #fff;
        --consonant-merch-card-border: 1px solid var(--consonant-merch-card-border-color);
        
        -webkit-font-smoothing: antialiased;
        background-color: var(--consonant-merch-card-background-color);
        border-radius: var(--consonant-merch-spacing-xs);
        border: var(--consonant-merch-card-border);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: var(--merch-body-font-family, 'Adobe Clean');
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        position: relative;
        text-align: start;
    }

    :host(.placeholder) {
        visibility: hidden;
    }

    :host([aria-selected]) {
        outline: none;
        box-shadow: inset 0 0 0 2px var(--color-accent);
    }

    .invisible {
        visibility: hidden;
    }

    :host(:hover) .invisible,
    :host(:active) .invisible,
    :host(:focus) .invisible {
        visibility: visible;
        background-image: var(--ellipsis-icon);
        cursor: pointer;
    }

    .action-menu.always-visible {
        visibility: visible;
        background-image: var(--ellipsis-icon);
        cursor: pointer;
    }

    .top-section {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;
    }

    .top-section.badge {
        min-height: 32px;
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        gap: var(--consonant-merch-spacing-xxs);
        padding: var(--consonant-merch-spacing-xs);
    }

    footer {
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        align-items: flex-end;
        width: 100%;
        flex-flow: wrap;
        gap: var(--consonant-merch-spacing-xs);

        padding: var(--consonant-merch-spacing-xs);
    }
    
    footer.footer-column {
        flex-direction: column;
    }
    
    footer.footer-column .secure-transaction-label {
        align-self: flex-start;
    }

    hr {
        background-color: var(--merch-color-grey-200);
        border: none;
        height: 1px;
        width: auto;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: var(--consonant-merch-spacing-xs);
        margin-right: var(--consonant-merch-spacing-xs);
    }

    div[class$='-badge'] {
        position: absolute;
        top: 16px;
        right: 0;
        font-size: var(--type-heading-xxs-size);
        font-weight: 500;
        max-width: 180px;
        line-height: 16px;
        text-align: center;
        padding: 8px 11px;
        border-radius: 5px 0 0 5px;
    }

    div[class$='-badge']:dir(rtl) {
        left: 0;
        right: initial;
        padding: 8px 11px;
        border-radius: 0 5px 5px 0;
    }

    .detail-bg-container {
        right: 0;
        padding: var(--consonant-merch-spacing-xs);
        border-radius: 5px;
        font-size: var(--consonant-merch-card-body-font-size);
        margin: var(--consonant-merch-spacing-xs);
    }

    .action-menu {
        display: flex;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 16px;
        background-color: #f6f6f6;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
        font-size: 0;
    }
    .hidden {
        visibility: hidden;
    }

    #stock-checkbox,
    .secure-transaction-label {
        font-size: var(--consonant-merch-card-body-xxs-font-size);
        line-height: 1.3;
        color: var(--merch-color-grey-600);
    }

    #stock-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: 10px; /*same as spectrum */
    }

    #stock-checkbox > input {
        display: none;
    }

    #stock-checkbox > span {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid rgb(117, 117, 117);
        border-radius: 2px;
        width: 14px;
        height: 14px;
    }

    #stock-checkbox > input:checked + span {
        background: var(--checkmark-icon) no-repeat var(--color-accent);
        border-color: var(--color-accent);
    }

    .secure-transaction-label {
        white-space: nowrap;
        display: inline-flex;
        gap: var(--consonant-merch-spacing-xxs);
        align-items: center;
        flex: 1;
        line-height: normal;
        align-self: center;
    }

    .secure-transaction-label::before {
        display: inline-block;
        content: '';
        width: 12px;
        height: 15px;
        background: var(--secure-icon) no-repeat;
        background-position: center;
        background-size: contain;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        gap: var(--consonant-merch-spacing-xxs);
    }

    .checkbox-container input[type='checkbox']:checked + .checkmark {
        background-color: var(--color-accent);
        background-image: var(--checkmark-icon);
        border-color: var(--color-accent);
    }

    .checkbox-container input[type='checkbox'] {
        display: none;
    }

    .checkbox-container .checkmark {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #757575;
        background: #fff;
        border-radius: 2px;
        cursor: pointer;
        margin-top: 2px;
    }

    slot[name='icons'] {
        display: flex;
        gap: 8px;
    }

    ::slotted([slot='price']) {
      color: var(--consonant-merch-card-price-color);
    }
`,mr=()=>[lr`
        /* Tablet */
        @media screen and ${cr(T)} {
            :host([size='wide']),
            :host([size='super-wide']) {
                width: 100%;
                grid-column: 1 / -1;
            }
        }

        /* Laptop */
        @media screen and ${cr(A)} {
            :host([size='wide']) {
                grid-column: span 2;
            }
        `];import{html as ze}from"../lit-all.min.js";var re,ye=class ye{constructor(t){f(this,"card");De(this,re,void 0);this.card=t,this.insertVariantStyle()}getContainer(){return ir(this,re,ht(this,re)??this.card.closest('[class*="-merch-cards"]')??this.card.parentElement),ht(this,re)}insertVariantStyle(){if(!ye.styleMap[this.card.variant]){ye.styleMap[this.card.variant]=!0;let t=document.createElement("style");t.innerHTML=this.getGlobalCSS(),document.head.appendChild(t)}}updateCardElementMinHeight(t,r){if(!t)return;let n=`--consonant-merch-card-${this.card.variant}-${r}-height`,o=Math.max(0,parseInt(window.getComputedStyle(t).height)||0),a=parseInt(this.getContainer().style.getPropertyValue(n))||0;o>a&&this.getContainer().style.setProperty(n,`${o}px`)}get badge(){let t;if(!(!this.card.badgeBackgroundColor||!this.card.badgeColor||!this.card.badgeText))return this.evergreen&&(t=`border: 1px solid ${this.card.badgeBackgroundColor}; border-right: none;`),ze`
            <div
                id="badge"
                class="${this.card.variant}-badge"
                style="background-color: ${this.card.badgeBackgroundColor};
                color: ${this.card.badgeColor};
                ${t}"
            >
                ${this.card.badgeText}
            </div>
        `}get cardImage(){return ze` <div class="image">
            <slot name="bg-image"></slot>
            ${this.badge}
        </div>`}getGlobalCSS(){return""}get theme(){return document.querySelector("sp-theme")}get evergreen(){return this.card.classList.contains("intro-pricing")}get promoBottom(){return this.card.classList.contains("promo-bottom")}get headingSelector(){return'[slot="heading-xs"]'}get secureLabelFooter(){let t=this.card.secureLabel?ze`<span class="secure-transaction-label"
                  >${this.card.secureLabel}</span
              >`:"";return ze`<footer>${t}<slot name="footer"></slot></footer>`}async adjustTitleWidth(){let t=this.card.getBoundingClientRect().width,r=this.card.badgeElement?.getBoundingClientRect().width||0;t===0||r===0||this.card.style.setProperty("--consonant-merch-card-heading-xs-max-width",`${Math.round(t-r-16)}px`)}postCardUpdateHook(){}connectedCallbackHook(){}disconnectedCallbackHook(){}renderLayout(){}get aemFragmentMapping(){}};re=new WeakMap,f(ye,"styleMap",{});var S=ye;import{html as gt,css as vo}from"../lit-all.min.js";function z(e,t={},r=null,n=null){let o=n?document.createElement(e,{is:n}):document.createElement(e);r instanceof HTMLElement?o.appendChild(r):o.innerHTML=r;for(let[a,i]of Object.entries(t))o.setAttribute(a,i);return o}function Ge(){return window.matchMedia("(max-width: 767px)").matches}function dr(){return window.matchMedia("(max-width: 1024px)").matches}var dt="wcms:commerce:ready";var ur="merch-offer-select:ready",pr="merch-card:ready",fr="merch-card:action-menu-toggle";var ut="merch-storage:change",pt="merch-quantity-selector:change";var Fe="aem:load",$e="aem:error",gr="mas:ready",xr="mas:error",vr="placeholder-failed",yr="placeholder-pending",br="placeholder-resolved";var Er="mas:failed",wr="mas:resolved",Sr="mas/commerce";var $="failed",V="pending",H="resolved",ft={DRAFT:"DRAFT",PUBLISHED:"PUBLISHED"};var be={TWP:"twp",D2P:"d2p",CRM:"crm"};var Ar=`
:root {
  --consonant-merch-card-catalog-width: 276px;
  --consonant-merch-card-catalog-icon-size: 40px;
}
.one-merch-card.catalog,
.two-merch-cards.catalog,
.three-merch-cards.catalog,
.four-merch-cards.catalog {
    grid-template-columns: var(--consonant-merch-card-catalog-width);
}

@media screen and ${T} {
    :root {
      --consonant-merch-card-catalog-width: 302px;
    }

    .two-merch-cards.catalog,
    .three-merch-cards.catalog,
    .four-merch-cards.catalog {
        grid-template-columns: repeat(2, var(--consonant-merch-card-catalog-width));
    }
}

@media screen and ${A} {
    :root {
      --consonant-merch-card-catalog-width: 276px;
    }

    .three-merch-cards.catalog,
    .four-merch-cards.catalog {
        grid-template-columns: repeat(3, var(--consonant-merch-card-catalog-width));
    }
}

@media screen and ${k} {
    .four-merch-cards.catalog {
        grid-template-columns: repeat(4, var(--consonant-merch-card-catalog-width));
    }
}

merch-card[variant="catalog"] [slot="action-menu-content"] {
  background-color: #000;
  color: var(--color-white, #fff);
  font-size: var(--consonant-merch-card-body-xs-font-size);
  width: fit-content;
  padding: var(--consonant-merch-spacing-xs);
  border-radius: var(--consonant-merch-spacing-xxxs);
  position: absolute;
  top: 55px;
  right: 15px;
  line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul {
  padding-left: 0;
  padding-bottom: var(--consonant-merch-spacing-xss);
  margin-top: 0;
  margin-bottom: 0;
  list-style-position: inside;
  list-style-type: '\u2022 ';
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li {
  padding-left: 0;
  line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ::marker {
  margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] p {
  color: var(--color-white, #fff);
}

merch-card[variant="catalog"] [slot="action-menu-content"] a {
  color: var(--consonant-merch-card-background-color);
  text-decoration: underline;
}

merch-card[variant="catalog"] .payment-details {
  font-size: var(--consonant-merch-card-body-font-size);
  font-style: italic;
  font-weight: 400;
  line-height: var(--consonant-merch-card-body-line-height);
}`;var yo={title:{tag:"h3",slot:"heading-xs"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{slot:"footer",size:"m"},allowedSizes:["wide","super-wide"]},ne=class extends S{constructor(r){super(r);f(this,"dispatchActionMenuToggle",()=>{this.card.dispatchEvent(new CustomEvent(fr,{bubbles:!0,composed:!0,detail:{card:this.card.name,type:"action-menu"}}))});f(this,"toggleActionMenu",r=>{let n=this.card.shadowRoot.querySelector('slot[name="action-menu-content"]');!n||!r||r.type!=="click"&&r.code!=="Space"&&r.code!=="Enter"||(r.preventDefault(),n.classList.toggle("hidden"),n.classList.contains("hidden")||this.dispatchActionMenuToggle())});f(this,"toggleActionMenuFromCard",r=>{let n=r?.type==="mouseleave"?!0:void 0,o=this.card.shadowRoot,a=o.querySelector(".action-menu");this.card.blur(),a?.classList.remove("always-visible");let i=o.querySelector('slot[name="action-menu-content"]');i&&(n||this.dispatchActionMenuToggle(),i.classList.toggle("hidden",n))});f(this,"hideActionMenu",r=>{this.card.shadowRoot.querySelector('slot[name="action-menu-content"]')?.classList.add("hidden")});f(this,"focusEventHandler",r=>{let n=this.card.shadowRoot.querySelector(".action-menu");n&&(n.classList.add("always-visible"),(r.relatedTarget?.nodeName==="MERCH-CARD-COLLECTION"||r.relatedTarget?.nodeName==="MERCH-CARD"&&r.target.nodeName!=="MERCH-ICON")&&n.classList.remove("always-visible"))})}get aemFragmentMapping(){return yo}renderLayout(){return gt` <div class="body">
                <div class="top-section">
                    <slot name="icons"></slot> ${this.badge}
                    <div
                        class="action-menu
                ${dr()&&this.card.actionMenu?"always-visible":""}
                ${this.card.actionMenu?"invisible":"hidden"}"
                        @click="${this.toggleActionMenu}"
                        @keypress="${this.toggleActionMenu}"
                        tabindex="0"
                        role="button"
                    >Action Menu</div>
                </div>
                <slot
                    name="action-menu-content"
                    class="action-menu-content
            ${this.card.actionMenuContent?"":"hidden"}"
                    @focusout="${this.hideActionMenu}"
                    >${this.card.actionMenuContent}
                </slot>
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                ${this.promoBottom?"":gt`<slot name="promo-text"></slot
                          ><slot name="callout-content"></slot>`}
                <slot name="body-xs"></slot>
                ${this.promoBottom?gt`<slot name="promo-text"></slot
                          ><slot name="callout-content"></slot>`:""}
            </div>
            ${this.secureLabelFooter}
            <slot></slot>`}getGlobalCSS(){return Ar}connectedCallbackHook(){this.card.addEventListener("mouseleave",this.toggleActionMenuFromCard),this.card.addEventListener("focusout",this.focusEventHandler)}disconnectedCallbackHook(){this.card.removeEventListener("mouseleave",this.toggleActionMenuFromCard),this.card.removeEventListener("focusout",this.focusEventHandler)}};f(ne,"variantStyle",vo`
        :host([variant='catalog']) {
            min-height: 330px;
            width: var(--consonant-merch-card-catalog-width);
        }

        .body .catalog-badge {
            display: flex;
            height: fit-content;
            flex-direction: column;
            width: fit-content;
            max-width: 140px;
            border-radius: 5px;
            position: relative;
            top: 0;
            margin-left: var(--consonant-merch-spacing-xxs);
            box-sizing: border-box;
        }
    `);import{html as Ee}from"../lit-all.min.js";var Tr=`
:root {
  --consonant-merch-card-image-width: 300px;
}

.one-merch-card.image,
.two-merch-cards.image,
.three-merch-cards.image,
.four-merch-cards.image {
  grid-template-columns: var(--consonant-merch-card-image-width);
}

@media screen and ${T} {
  .two-merch-cards.image,
  .three-merch-cards.image,
  .four-merch-cards.image {
      grid-template-columns: repeat(2, var(--consonant-merch-card-image-width));
  }
}

@media screen and ${A} {
  :root {
    --consonant-merch-card-image-width: 378px;
    --consonant-merch-card-image-width-4clm: 276px;
  }
    
  .three-merch-cards.image {
      grid-template-columns: repeat(3, var(--consonant-merch-card-image-width));
  }

  .four-merch-cards.image {
      grid-template-columns: repeat(4, var(--consonant-merch-card-image-width-4clm));
  }
}
`;var He=class extends S{constructor(t){super(t)}getGlobalCSS(){return Tr}renderLayout(){return Ee`${this.cardImage}
    <div class="body">
        <slot name="icons"></slot>
        <slot name="heading-xs"></slot>
        <slot name="body-xxs"></slot>
        ${this.promoBottom?Ee`<slot name="body-xs"></slot><slot name="promo-text"></slot>`:Ee`<slot name="promo-text"></slot><slot name="body-xs"></slot>`}
    </div>
    ${this.evergreen?Ee`
              <div
                  class="detail-bg-container"
                  style="background: ${this.card.detailBg}"
              >
                  <slot name="detail-bg"></slot>
              </div>
          `:Ee`
              <hr />
              ${this.secureLabelFooter}
          `}`}};import{html as Lr}from"../lit-all.min.js";var _r=`
:root {
  --consonant-merch-card-inline-heading-width: 300px;
}

.one-merch-card.inline-heading,
.two-merch-cards.inline-heading,
.three-merch-cards.inline-heading,
.four-merch-cards.inline-heading {
    grid-template-columns: var(--consonant-merch-card-inline-heading-width);
}

@media screen and ${T} {
  .two-merch-cards.inline-heading,
  .three-merch-cards.inline-heading,
  .four-merch-cards.inline-heading {
      grid-template-columns: repeat(2, var(--consonant-merch-card-inline-heading-width));
  }
}

@media screen and ${A} {
  :root {
    --consonant-merch-card-inline-heading-width: 378px;
  }

  .three-merch-cards.inline-heading,
  .four-merch-cards.inline-heading {
      grid-template-columns: repeat(3, var(--consonant-merch-card-inline-heading-width));
  }
}

@media screen and ${k} {
  .four-merch-cards.inline-heading {
      grid-template-columns: repeat(4, var(--consonant-merch-card-inline-heading-width));
  }
}
`;var Ve=class extends S{constructor(t){super(t)}getGlobalCSS(){return _r}renderLayout(){return Lr` ${this.badge}
    <div class="body">
        <div class="top-section">
            <slot name="icons"></slot>
            <slot name="heading-xs"></slot>
        </div>
        <slot name="body-xs"></slot>
    </div>
    ${this.card.customHr?"":Lr`<hr />`} ${this.secureLabelFooter}`}};import{html as oe,css as bo,unsafeCSS as Cr}from"../lit-all.min.js";var Pr=`
  :root {
    --consonant-merch-card-mini-compare-chart-icon-size: 32px;
    --consonant-merch-card-mini-compare-mobile-cta-font-size: 15px;
    --consonant-merch-card-mini-compare-mobile-cta-width: 75px;
    --consonant-merch-card-mini-compare-badge-mobile-max-width: 50px;
  }
  
  merch-card[variant="mini-compare-chart"] [slot="heading-m"] {
    padding: 0 var(--consonant-merch-spacing-s) 0;
  }

  merch-card[variant="mini-compare-chart"].bullet-list [slot="heading-m"] {
    padding: var(--consonant-merch-spacing-xxs) var(--consonant-merch-spacing-xs);
    font-size: var(--consonant-merch-card-heading-xs-font-size);
  }

  merch-card[variant="mini-compare-chart"].bullet-list [slot='heading-m-price'] {
    font-size: var(--consonant-merch-card-body-xxl-font-size);
    padding: 0 var(--consonant-merch-spacing-xs);
  }

  merch-card[variant="mini-compare-chart"] [slot="body-m"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
  }

  merch-card[variant="mini-compare-chart"].bullet-list [slot="body-m"] {
    padding: var(--consonant-merch-spacing-xs);
  }

  merch-card[variant="mini-compare-chart"] [is="inline-price"] {
    display: inline-block;
    min-height: 30px;
    min-width: 1px;
  }

  merch-card[variant="mini-compare-chart"] [slot='callout-content'] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0px;
  }

  merch-card[variant="mini-compare-chart"].bullet-list [slot='callout-content'] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs) 0px;
  }

  merch-card[variant="mini-compare-chart"] [slot='callout-content'] [is="inline-price"] {
    min-height: unset;
  }

  merch-card[variant="mini-compare-chart"] [slot="price-commitment"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    padding: 0 var(--consonant-merch-spacing-s);
  }

  merch-card[variant="mini-compare-chart"] [slot="price-commitment"] a {
    display: inline-block;
    height: 27px;
  }

  merch-card[variant="mini-compare-chart"] [slot="offers"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
  }

  merch-card[variant="mini-compare-chart"] [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0;    
  }

   merch-card[variant="mini-compare-chart"].bullet-list [slot="body-xxs"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs) 0;    
  }

  merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0;
  }

  merch-card[variant="mini-compare-chart"].bullet-list [slot="promo-text"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs) 0;
  }

  merch-card[variant="mini-compare-chart"] [slot="promo-text"] a {
    text-decoration: underline;
  }

  merch-card[variant="mini-compare-chart"] .action-area {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    gap: var(--consonant-merch-spacing-xs);
  }

  merch-card[variant="mini-compare-chart"] [slot="footer-rows"] ul {
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon {
    display: flex;
    place-items: center;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon img {
    max-width: initial;
    width: var(--consonant-merch-card-mini-compare-chart-icon-size);
    height: var(--consonant-merch-card-mini-compare-chart-icon-size);
  }

  merch-card[variant="mini-compare-chart"] .footer-rows-title {
    font-color: var(--merch-color-grey-80);
    font-weight: 700;
    padding-block-end: var(--consonant-merch-spacing-xxs);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    font-size: var(--consonant-merch-card-body-xs-font-size);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell {
    border-top: 1px solid var(--consonant-merch-card-border-color);
    display: flex;
    gap: var(--consonant-merch-spacing-xs);
    justify-content: start;
    place-items: center;
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
    margin-block: 0px;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon-checkmark img {
    max-width: initial;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-icon-checkmark {
    display: flex;
    align-items: center;
    height: 20px;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-checkmark {
    display: flex;
    gap: var(--consonant-merch-spacing-xs);
    justify-content: start;
    align-items: flex-start;
    margin-block: var(--consonant-merch-spacing-xxxs);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description-checkmark {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    font-weight: 400;
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description p {
    color: var(--merch-color-grey-80);
    vertical-align: bottom;
  }

  merch-card[variant="mini-compare-chart"] .footer-row-cell-description a {
    color: var(--color-accent);
  }

  merch-card[variant="mini-compare-chart"] .chevron-icon {
    margin-left: 8px;
  }

  merch-card[variant="mini-compare-chart"] .checkmark-copy-container {
    display: none;
  }

  merch-card[variant="mini-compare-chart"] .checkmark-copy-container.open {
    display: block;
  }
  
.one-merch-card.mini-compare-chart {
  grid-template-columns: var(--consonant-merch-card-mini-compare-chart-wide-width);
  gap: var(--consonant-merch-spacing-xs);
}

.two-merch-cards.mini-compare-chart,
.three-merch-cards.mini-compare-chart,
.four-merch-cards.mini-compare-chart {
  grid-template-columns: repeat(2, var(--consonant-merch-card-mini-compare-chart-width));
  gap: var(--consonant-merch-spacing-xs);
}

/* mini compare mobile */ 
@media screen and ${F} {
  :root {
    --consonant-merch-card-mini-compare-chart-width: 302px;
    --consonant-merch-card-mini-compare-chart-wide-width: 302px;
  }

  .two-merch-cards.mini-compare-chart,
  .three-merch-cards.mini-compare-chart,
  .four-merch-cards.mini-compare-chart {
    grid-template-columns: var(--consonant-merch-card-mini-compare-chart-width);
    gap: var(--consonant-merch-spacing-xs);
  }

  merch-card[variant="mini-compare-chart"] [slot='heading-m'] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot='heading-m-price'] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot='body-m'] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
  
  merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
  merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
}

@media screen and ${Ue} {
  merch-card[variant="mini-compare-chart"] [slot='heading-m'] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot='heading-m-price'] {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot='body-m'] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }

  merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
  
  merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
  }
}
@media screen and ${T} {
  :root {
    --consonant-merch-card-mini-compare-chart-width: 302px;
    --consonant-merch-card-mini-compare-chart-wide-width: 302px;
  }

  .two-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(2, minmax(var(--consonant-merch-card-mini-compare-chart-width), var(--consonant-merch-card-mini-compare-chart-wide-width)));
    gap: var(--consonant-merch-spacing-m);
  }

  .three-merch-cards.mini-compare-chart,
  .four-merch-cards.mini-compare-chart {
      grid-template-columns: repeat(2, minmax(var(--consonant-merch-card-mini-compare-chart-width), var(--consonant-merch-card-mini-compare-chart-wide-width)));
  }
}

/* desktop */
@media screen and ${A} {
  :root {
    --consonant-merch-card-mini-compare-chart-width: 378px;
    --consonant-merch-card-mini-compare-chart-wide-width: 484px;  
  }
  .one-merch-card.mini-compare-chart {
    grid-template-columns: var(--consonant-merch-card-mini-compare-chart-wide-width);
  }

  .two-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(2, var(--consonant-merch-card-mini-compare-chart-wide-width));
    gap: var(--consonant-merch-spacing-m);
  }

  .three-merch-cards.mini-compare-chart,
  .four-merch-cards.mini-compare-chart {
    grid-template-columns: repeat(3, var(--consonant-merch-card-mini-compare-chart-width));
    gap: var(--consonant-merch-spacing-m);
  }
}

@media screen and ${k} {
  .four-merch-cards.mini-compare-chart {
      grid-template-columns: repeat(4, var(--consonant-merch-card-mini-compare-chart-width));
  }
}

merch-card .footer-row-cell:nth-child(1) {
  min-height: var(--consonant-merch-card-footer-row-1-min-height);
}

merch-card .footer-row-cell:nth-child(2) {
  min-height: var(--consonant-merch-card-footer-row-2-min-height);
}

merch-card .footer-row-cell:nth-child(3) {
  min-height: var(--consonant-merch-card-footer-row-3-min-height);
}

merch-card .footer-row-cell:nth-child(4) {
  min-height: var(--consonant-merch-card-footer-row-4-min-height);
}

merch-card .footer-row-cell:nth-child(5) {
  min-height: var(--consonant-merch-card-footer-row-5-min-height);
}

merch-card .footer-row-cell:nth-child(6) {
  min-height: var(--consonant-merch-card-footer-row-6-min-height);
}

merch-card .footer-row-cell:nth-child(7) {
  min-height: var(--consonant-merch-card-footer-row-7-min-height);
}

merch-card .footer-row-cell:nth-child(8) {
  min-height: var(--consonant-merch-card-footer-row-8-min-height);
}
`;var Eo=32,ae=class extends S{constructor(r){super(r);f(this,"getRowMinHeightPropertyName",r=>`--consonant-merch-card-footer-row-${r}-min-height`);f(this,"getMiniCompareFooter",()=>{let r=this.card.secureLabel?oe`<slot name="secure-transaction-label">
              <span class="secure-transaction-label"
                  >${this.card.secureLabel}</span
              ></slot
          >`:oe`<slot name="secure-transaction-label"></slot>`;return oe`<footer>${r}<slot name="footer"></slot></footer>`})}getGlobalCSS(){return Pr}adjustMiniCompareBodySlots(){if(this.card.getBoundingClientRect().width<=2)return;this.updateCardElementMinHeight(this.card.shadowRoot.querySelector(".top-section"),"top-section");let r=["heading-m","body-m","heading-m-price","body-xxs","price-commitment","offers","promo-text","callout-content"];this.card.classList.contains("bullet-list")&&r.push("footer-rows"),r.forEach(o=>this.updateCardElementMinHeight(this.card.shadowRoot.querySelector(`slot[name="${o}"]`),o)),this.updateCardElementMinHeight(this.card.shadowRoot.querySelector("footer"),"footer");let n=this.card.shadowRoot.querySelector(".mini-compare-chart-badge");n&&n.textContent!==""&&this.getContainer().style.setProperty("--consonant-merch-card-mini-compare-chart-top-section-mobile-height","32px")}adjustMiniCompareFooterRows(){if(this.card.getBoundingClientRect().width===0)return;[...this.card.querySelector('[slot="footer-rows"] ul')?.children].forEach((n,o)=>{let a=Math.max(Eo,parseFloat(window.getComputedStyle(n).height)||0),i=parseFloat(this.getContainer().style.getPropertyValue(this.getRowMinHeightPropertyName(o+1)))||0;a>i&&this.getContainer().style.setProperty(this.getRowMinHeightPropertyName(o+1),`${a}px`)})}removeEmptyRows(){this.card.querySelectorAll(".footer-row-cell").forEach(n=>{let o=n.querySelector(".footer-row-cell-description");o&&!o.textContent.trim()&&n.remove()})}renderLayout(){return oe` <div class="top-section${this.badge?" badge":""}">
            <slot name="icons"></slot> ${this.badge}
        </div>
        <slot name="heading-m"></slot>
        ${this.card.classList.contains("bullet-list")?oe`<slot name="heading-m-price"></slot>
          <slot name="body-m"></slot>`:oe`<slot name="body-m"></slot>
          <slot name="heading-m-price"></slot>`}
        <slot name="body-xxs"></slot>
        <slot name="price-commitment"></slot>
        <slot name="offers"></slot>
        <slot name="promo-text"></slot>
        <slot name="callout-content"></slot>
        ${this.getMiniCompareFooter()}
        <slot name="footer-rows"><slot name="body-s"></slot></slot>`}async postCardUpdateHook(){Ge()?this.removeEmptyRows():(await Promise.all(this.card.prices.map(r=>r.onceSettled())),this.adjustMiniCompareBodySlots(),this.adjustMiniCompareFooterRows())}};f(ae,"variantStyle",bo`
    :host([variant='mini-compare-chart']) > slot:not([name='icons']) {
        display: block;
    }
    :host([variant='mini-compare-chart']) footer {
        min-height: var(--consonant-merch-card-mini-compare-chart-footer-height);
        padding: var(--consonant-merch-spacing-s);
    }

    :host([variant='mini-compare-chart'].bullet-list) footer {
        flex-flow: column nowrap;
        min-height: var(--consonant-merch-card-mini-compare-chart-footer-height);
        padding: var(--consonant-merch-spacing-xs);
    }

    /* mini-compare card  */
    :host([variant='mini-compare-chart']) .top-section {
        padding-top: var(--consonant-merch-spacing-s);
        padding-inline-start: var(--consonant-merch-spacing-s);
        height: var(--consonant-merch-card-mini-compare-chart-top-section-height);
    }

    :host([variant='mini-compare-chart'].bullet-list) .top-section {
        padding-top: var(--consonant-merch-spacing-xs);
        padding-inline-start: var(--consonant-merch-spacing-xs);
    }

    :host([variant='mini-compare-chart'].bullet-list) .secure-transaction-label {
      align-self: flex-start;
      flex: none;
      color: var(--merch-color-grey-700);
    }

    @media screen and ${Cr(Ue)} {
        [class*'-merch-cards'] :host([variant='mini-compare-chart']) footer {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
        }
    }

    @media screen and ${Cr(A)} {
        :host([variant='mini-compare-chart']) footer {
            padding: var(--consonant-merch-spacing-xs)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s)
                var(--consonant-merch-spacing-s);
        }
    }

    :host([variant='mini-compare-chart']) slot[name='footer-rows'] {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    /* mini-compare card heights for the slots: heading-m, body-m, heading-m-price, price-commitment, offers, promo-text, footer */
    :host([variant='mini-compare-chart']) slot[name='heading-m'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-heading-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='body-m'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-body-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='heading-m-price'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-heading-m-price-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='body-xxs'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-body-xxs-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='price-commitment'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-price-commitment-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='offers'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-offers-height);
    }
    :host([variant='mini-compare-chart']) slot[name='promo-text'] {
        min-height: var(--consonant-merch-card-mini-compare-chart-promo-text-height);
    }
    :host([variant='mini-compare-chart']) slot[name='callout-content'] {
        min-height: var(
            --consonant-merch-card-mini-compare-chart-callout-content-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='footer-rows'] {
        justify-content: flex-start;
    }
  `);import{html as Be,css as wo}from"../lit-all.min.js";var Nr=`
:root {
  --consonant-merch-card-plans-width: 300px;
  --consonant-merch-card-plans-icon-size: 40px;
}
  
merch-card[variant="plans"] [slot="description"] {
  min-height: 84px;
}

merch-card[variant="plans"] [slot="quantity-select"] {
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--consonant-merch-spacing-xs);
}

.one-merch-card.plans,
.two-merch-cards.plans,
.three-merch-cards.plans,
.four-merch-cards.plans {
    grid-template-columns: var(--consonant-merch-card-plans-width);
}

/* Tablet */
@media screen and ${T} {
  :root {
    --consonant-merch-card-plans-width: 302px;
  }
  .two-merch-cards.plans,
  .three-merch-cards.plans,
  .four-merch-cards.plans {
      grid-template-columns: repeat(2, var(--consonant-merch-card-plans-width));
  }
}

/* desktop */
@media screen and ${A} {
  :root {
    --consonant-merch-card-plans-width: 276px;
  }
  .three-merch-cards.plans,
  .four-merch-cards.plans {
      grid-template-columns: repeat(3, var(--consonant-merch-card-plans-width));
  }
}

/* Large desktop */
    @media screen and ${k} {
    .four-merch-cards.plans {
        grid-template-columns: repeat(4, var(--consonant-merch-card-plans-width));
    }
}
`;var ie=class extends S{constructor(t){super(t)}getGlobalCSS(){return Nr}postCardUpdateHook(){this.adjustTitleWidth()}get stockCheckbox(){return this.card.checkboxLabel?Be`<label id="stock-checkbox">
                <input type="checkbox" @change=${this.card.toggleStockOffer}></input>
                <span></span>
                ${this.card.checkboxLabel}
            </label>`:""}renderLayout(){return Be` ${this.badge}
        <div class="body">
            <slot name="icons"></slot>
            <slot name="heading-xs"></slot>
            <slot name="heading-m"></slot>
            <slot name="body-xxs"></slot>
            ${this.promoBottom?"":Be`<slot name="promo-text"></slot><slot name="callout-content"></slot> `}
            <slot name="body-xs"></slot>
            ${this.promoBottom?Be`<slot name="promo-text"></slot><slot name="callout-content"></slot> `:""}  
            ${this.stockCheckbox}
        </div>
        <slot name="quantity-select"></slot>
        ${this.secureLabelFooter}`}};f(ie,"variantStyle",wo`
    :host([variant='plans']) {
      min-height: 348px;
    }
      
    :host([variant='plans']) ::slotted([slot='heading-xs']) {
      max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
    }
  `);import{html as xt,css as So}from"../lit-all.min.js";var Rr=`
:root {
  --consonant-merch-card-product-width: 300px;
}

/* grid style for product */
.one-merch-card.product,
.two-merch-cards.product,
.three-merch-cards.product,
.four-merch-cards.product {
    grid-template-columns: var(--consonant-merch-card-product-width);
}

/* Tablet */
@media screen and ${T} {
    .two-merch-cards.product,
    .three-merch-cards.product,
    .four-merch-cards.product {
        grid-template-columns: repeat(2, var(--consonant-merch-card-product-width));
    }
}

/* desktop */
@media screen and ${A} {
  :root {
    --consonant-merch-card-product-width: 378px;
    --consonant-merch-card-product-width-4clm: 276px;
  }
    
  .three-merch-cards.product {
      grid-template-columns: repeat(3, var(--consonant-merch-card-product-width));
  }

  .four-merch-cards.product {
      grid-template-columns: repeat(4, var(--consonant-merch-card-product-width-4clm));
  }
}
`;var B=class extends S{constructor(t){super(t),this.postCardUpdateHook=this.postCardUpdateHook.bind(this)}getGlobalCSS(){return Rr}adjustProductBodySlots(){if(this.card.getBoundingClientRect().width===0)return;["heading-xs","body-xxs","body-xs","promo-text","callout-content","body-lower"].forEach(r=>this.updateCardElementMinHeight(this.card.shadowRoot.querySelector(`slot[name="${r}"]`),r))}renderLayout(){return xt` ${this.badge}
      <div class="body" aria-live="polite">
          <slot name="icons"></slot>
          <slot name="heading-xs"></slot>
          <slot name="body-xxs"></slot>
          ${this.promoBottom?"":xt`<slot name="promo-text"></slot>`}
          <slot name="body-xs"></slot>
          ${this.promoBottom?xt`<slot name="promo-text"></slot>`:""}
          <slot name="callout-content"></slot>
          <slot name="body-lower"></slot>
      </div>
      ${this.secureLabelFooter}`}connectedCallbackHook(){window.addEventListener("resize",this.postCardUpdateHook)}disconnectedCallbackHook(){window.removeEventListener("resize",this.postCardUpdateHook)}postCardUpdateHook(){this.card.isConnected&&(Ge()||this.adjustProductBodySlots(),this.adjustTitleWidth())}};f(B,"variantStyle",So`
    :host([variant='product']) > slot:not([name='icons']) {
        display: block;
    }
    :host([variant='product']) slot[name='body-xs'] {
        min-height: var(--consonant-merch-card-product-body-xs-height);
        display: block;
    }
    :host([variant='product']) slot[name='heading-xs'] {
        min-height: var(--consonant-merch-card-product-heading-xs-height);
        display: block;
    }
    :host([variant='product']) slot[name='body-xxs'] {
        min-height: var(--consonant-merch-card-product-body-xxs-height);
        display: block;
    }
    :host([variant='product']) slot[name='promo-text'] {
        min-height: var(--consonant-merch-card-product-promo-text-height);
        display: block;
    }
    :host([variant='product']) slot[name='callout-content'] {
        min-height: var(--consonant-merch-card-product-callout-content-height);
        display: block;
    }
      
    :host([variant='product']) ::slotted([slot='heading-xs']) {
      max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
    }
  `);import{html as vt,css as Ao}from"../lit-all.min.js";var Or=`
:root {
  --consonant-merch-card-segment-width: 378px;
}

/* grid style for segment */
.one-merch-card.segment,
.two-merch-cards.segment,
.three-merch-cards.segment,
.four-merch-cards.segment {
  grid-template-columns: minmax(276px, var(--consonant-merch-card-segment-width));
}

/* Mobile */
@media screen and ${F} {
  :root {
    --consonant-merch-card-segment-width: 276px;
  }
}

@media screen and ${T} {
  :root {
    --consonant-merch-card-segment-width: 276px;
  }
    
  .two-merch-cards.segment,
  .three-merch-cards.segment,
  .four-merch-cards.segment {
      grid-template-columns: repeat(2, minmax(276px, var(--consonant-merch-card-segment-width)));
  }
}

/* desktop */
@media screen and ${A} {
  :root {
    --consonant-merch-card-segment-width: 302px;
  }
    
  .three-merch-cards.segment {
      grid-template-columns: repeat(3, minmax(276px, var(--consonant-merch-card-segment-width)));
  }

  .four-merch-cards.segment {
      grid-template-columns: repeat(4, minmax(276px, var(--consonant-merch-card-segment-width)));
  }
}
`;var se=class extends S{constructor(t){super(t)}getGlobalCSS(){return Or}postCardUpdateHook(){this.adjustTitleWidth()}renderLayout(){return vt` ${this.badge}
    <div class="body">
        <slot name="heading-xs"></slot>
        <slot name="body-xxs"></slot>
        ${this.promoBottom?"":vt`<slot name="promo-text"></slot><slot name="callout-content"></slot>`}
        <slot name="body-xs"></slot>
        ${this.promoBottom?vt`<slot name="promo-text"></slot><slot name="callout-content"></slot>`:""}
    </div>
    <hr />
    ${this.secureLabelFooter}`}};f(se,"variantStyle",Ao`
    :host([variant='segment']) {
      min-height: 214px;
    }
    :host([variant='segment']) ::slotted([slot='heading-xs']) {
      max-width: var(--consonant-merch-card-heading-xs-max-width, 100%);
    }
  `);import{html as yt,css as To}from"../lit-all.min.js";var Mr=`
:root {
  --consonant-merch-card-special-offers-width: 378px;
}

merch-card[variant="special-offers"] span[is="inline-price"][data-template="strikethrough"] {
  font-size: var(--consonant-merch-card-body-xs-font-size);
}

/* grid style for special-offers */
.one-merch-card.special-offers,
.two-merch-cards.special-offers,
.three-merch-cards.special-offers,
.four-merch-cards.special-offers {
  grid-template-columns: minmax(300px, var(--consonant-merch-card-special-offers-width));
}

@media screen and ${F} {
  :root {
    --consonant-merch-card-special-offers-width: 302px;
  }
} 
  
@media screen and ${T} {
  :root {
    --consonant-merch-card-special-offers-width: 302px;
  }
    
  .two-merch-cards.special-offers,
  .three-merch-cards.special-offers,
  .four-merch-cards.special-offers {
      grid-template-columns: repeat(2, minmax(300px, var(--consonant-merch-card-special-offers-width)));
  }
}

/* desktop */
@media screen and ${A} {
  .three-merch-cards.special-offers,
  .four-merch-cards.special-offers {
    grid-template-columns: repeat(3, minmax(300px, var(--consonant-merch-card-special-offers-width)));
  }
}

@media screen and ${k} {
  .four-merch-cards.special-offers {
    grid-template-columns: repeat(4, minmax(300px, var(--consonant-merch-card-special-offers-width)));
  }
}
`;var _o={name:{tag:"h4",slot:"detail-m"},title:{tag:"h4",slot:"detail-m"},backgroundImage:{tag:"div",slot:"bg-image"},prices:{tag:"h3",slot:"heading-xs"},description:{tag:"div",slot:"body-xs"},ctas:{slot:"footer",size:"l"}},ce=class extends S{constructor(t){super(t)}getGlobalCSS(){return Mr}get headingSelector(){return'[slot="detail-m"]'}get aemFragmentMapping(){return _o}renderLayout(){return yt`${this.cardImage}
            <div class="body">
                <slot name="detail-m"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?yt`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.card.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:yt`
                      <hr />
                      ${this.secureLabelFooter}
                  `}
            <slot></slot>`}};f(ce,"variantStyle",To`
        :host([variant='special-offers']) {
            min-height: 439px;
        }

        :host([variant='special-offers']) {
            width: var(--consonant-merch-card-special-offers-width);
        }

        :host([variant='special-offers'].center) {
            text-align: center;
        }
    `);import{html as Lo,css as Po}from"../lit-all.min.js";var kr=`
:root {
  --consonant-merch-card-twp-width: 268px;
  --consonant-merch-card-twp-mobile-width: 300px;
  --consonant-merch-card-twp-mobile-height: 358px;
}
  
merch-card[variant="twp"] div[class$='twp-badge'] {
  padding: 4px 10px 5px 10px;
}

merch-card[variant="twp"] [slot="body-xs-top"] {
  font-size: var(--consonant-merch-card-body-xs-font-size);
  line-height: var(--consonant-merch-card-body-xs-line-height);
  color: var(--merch-color-grey-80);
}

merch-card[variant="twp"] [slot="body-xs"] ul {
  padding: 0;
  margin: 0;
}

merch-card[variant="twp"] [slot="body-xs"] ul li {
  list-style-type: none;
  padding-left: 0;
}

merch-card[variant="twp"] [slot="body-xs"] ul li::before {
  content: '\xB7';
  font-size: 20px;
  padding-right: 5px;
  font-weight: bold;
}

merch-card[variant="twp"] [slot="footer"] {
  font-size: var(--consonant-merch-card-body-xs-font-size);
  line-height: var(--consonant-merch-card-body-xs-line-height);
  padding: var(--consonant-merch-spacing-s);
  var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs);
  color: var(--merch-color-grey-80);
  display: flex;
  flex-flow: wrap;
}

merch-card[variant='twp'] merch-quantity-select,
merch-card[variant='twp'] merch-offer-select {
  display: none;
}

.one-merch-card.twp,
.two-merch-cards.twp,
.three-merch-cards.twp {
  grid-template-columns: var(--consonant-merch-card-image-width);
}

@media screen and ${F} {
  :root {
    --consonant-merch-card-twp-width: 300px;
  }
  .one-merch-card.twp,
  .two-merch-cards.twp,
  .three-merch-cards.twp {
      grid-template-columns: repeat(1, var(--consonant-merch-card-twp-mobile-width));
  }
}

@media screen and ${T} {
  :root {
    --consonant-merch-card-twp-width: 268px;
  }
  .one-merch-card.twp,
  .two-merch-cards.twp {
      grid-template-columns: repeat(2, var(--consonant-merch-card-twp-width));
  }
  .three-merch-cards.twp {
      grid-template-columns: repeat(3, var(--consonant-merch-card-twp-width));
  }
}
  
@media screen and ${A} {
  :root {
    --consonant-merch-card-twp-width: 268px;
  }
  .one-merch-card.twp
  .two-merch-cards.twp {
      grid-template-columns: repeat(2, var(--consonant-merch-card-twp-width));
  }
  .three-merch-cards.twp {
      grid-template-columns: repeat(3, var(--consonant-merch-card-twp-width));
  }
}

@media screen and ${k} {
    .one-merch-card.twp
    .two-merch-cards.twp {
        grid-template-columns: repeat(2, var(--consonant-merch-card-twp-width));
    }
    .three-merch-cards.twp {
        grid-template-columns: repeat(3, var(--consonant-merch-card-twp-width));
  }
}
`;var le=class extends S{constructor(t){super(t)}getGlobalCSS(){return kr}renderLayout(){return Lo`${this.badge}
      <div class="top-section">
          <slot name="icons"></slot>
          <slot name="heading-xs"></slot>
          <slot name="body-xs-top"></slot>
      </div>
      <div class="body">
          <slot name="body-xs"></slot>
      </div>
      <footer><slot name="footer"></slot></footer>`}};f(le,"variantStyle",Po`
    :host([variant='twp']) {
      padding: 4px 10px 5px 10px;
    }
    .twp-badge {
      padding: 4px 10px 5px 10px;
    }

    :host([variant='twp']) ::slotted(merch-offer-select) {
      display: none;
    }

    :host([variant='twp']) .top-section {
      flex: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      gap: var(--consonant-merch-spacing-xxs);
      padding: var(--consonant-merch-spacing-xs)
          var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs)
          var(--consonant-merch-spacing-xs);
      align-items: flex-start;
    }

    :host([variant='twp']) .body {
      padding: 0 var(--consonant-merch-spacing-xs);
    }
    
    :host([aria-selected]) .twp-badge {
        margin-inline-end: 2px;
        padding-inline-end: 9px;
    }

    :host([variant='twp']) footer {
      gap: var(--consonant-merch-spacing-xxs);
      flex-direction: column;
      align-self: flex-start;
    }
  `);import{html as Co,css as No}from"../lit-all.min.js";var Ir=`

  merch-card[variant="ccd-suggested"] [slot="heading-xs"] {
    font-size: var(--consonant-merch-card-heading-xxs-font-size);
    line-height: var(--consonant-merch-card-heading-xxs-line-height);
  }
  
  merch-card[variant="ccd-suggested"] [slot="body-xs"] a {
    font-size: var(--consonant-merch-card-body-xxs-font-size);
    line-height: var(--consonant-merch-card-body-xxs-line-height);
  }

.spectrum--darkest merch-card[variant="ccd-suggested"] {
  --consonant-merch-card-background-color:rgb(30, 30, 30);
  --consonant-merch-card-heading-xs-color:rgb(239, 239, 239);
  --consonant-merch-card-body-xs-color:rgb(200, 200, 200);
  --consonant-merch-card-border-color:rgb(57, 57, 57);
  --consonant-merch-card-detail-s-color:rgb(162, 162, 162);
  --consonant-merch-card-price-color:rgb(248, 248, 248);
  --merch-color-inline-price-strikethrough:rgb(176, 176, 176);
}

.spectrum--darkest  merch-card[variant="ccd-suggested"]:hover {
  --consonant-merch-card-border-color:rgb(73, 73, 73);
}
`;var Ro={mnemonics:{size:"l"},subtitle:{tag:"h4",slot:"detail-s"},backgroundImage:{attribute:"background-image"},title:{tag:"h3",slot:"heading-xs"},prices:{tag:"p",slot:"price"},description:{tag:"div",slot:"body-xs"},ctas:{slot:"cta",size:"M"}},he=class extends S{getGlobalCSS(){return Ir}get aemFragmentMapping(){return Ro}get stripStyle(){return this.card.backgroundImage?`
            background: url("${this.card.backgroundImage}");
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: ${this.card.dir==="ltr"?"left":"right"};
        `:""}renderLayout(){return Co` <div style="${this.stripStyle}" class="body">
                <div class="header">
                    <div class="top-section">
                        <slot name="icons"></slot>
                        ${this.badge}
                    </div>
                    <div class="headings">
                        <slot name="detail-s"></slot>
                        <slot name="heading-xs"></slot>
                    </div>
                </div>
                <slot name="body-xs"></slot>
                <div class="footer">
                    <slot name="price"></slot>
                    <slot name="cta"></slot>
                </div>
            </div>
            <slot></slot>`}postCardUpdateHook(t){t.has("backgroundImage")&&this.styleBackgroundImage()}styleBackgroundImage(){if(this.card.classList.remove("thin-strip"),this.card.classList.remove("wide-strip"),!this.card.backgroundImage)return;let t=new Image;t.src=this.card.backgroundImage,t.onload=()=>{t.width>8?this.card.classList.add("wide-strip"):t.width===8&&this.card.classList.add("thin-strip")}}};f(he,"variantStyle",No`
        :host([variant='ccd-suggested']) {
            --consonant-merch-card-background-color: rgb(245, 245, 245);
            --consonant-merch-card-body-xs-color: rgb(75, 75, 75);
            --consonant-merch-card-border-color: rgb(225, 225, 225);
            --consonant-merch-card-detail-s-color: rgb(110, 110, 110);
            --consonant-merch-card-heading-xs-color: rgb(44, 44, 44);
            --merch-color-inline-price-strikethrough: var(--spectrum-gray-600);
            --mod-img-height: 38px;

            box-sizing: border-box;
            width: 100%;
            max-width: 305px;
            min-width: 270px;
            min-height: 205px;
            border-radius: 4px;
            display: flex;
            flex-flow: wrap;
            overflow: hidden;
        }

        :host([variant='ccd-slice']) * {
            overflow: hidden;
        }

        :host([variant='ccd-suggested']:hover) {
            --consonant-merch-card-border-color: #cacaca;
        }

        :host([variant='ccd-suggested']) .body {
            height: auto;
            padding: 20px;
            gap: 0;
        }

        :host([variant='ccd-suggested'].thin-strip) .body {
            padding: 20px 20px 20px 28px;
        }

        :host([variant='ccd-suggested']) .header {
            display: flex;
            flex-flow: wrap;
            place-self: flex-start;
            flex-wrap: nowrap;
        }

        :host([variant='ccd-suggested']) .headings {
            padding-inline-start: var(--consonant-merch-spacing-xxs);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        :host([variant='ccd-suggested']) ::slotted([slot='icons']) {
            place-self: center;
        }

        :host([variant='ccd-suggested']) ::slotted([slot='heading-xs']) {
            font-size: var(--consonant-merch-card-heading-xxs-font-size);
            line-height: var(--consonant-merch-card-heading-xxs-line-height);
        }

        :host([variant='ccd-suggested']) ::slotted([slot='detail-m']) {
            line-height: var(--consonant-merch-card-detail-m-line-height);
        }

        :host([variant='ccd-suggested']) ::slotted([slot='body-xs']) {
            color: var(--ccd-gray-700-dark);
            padding-top: 8px;
            flex-grow: 1;
        }

        :host([variant='ccd-suggested'].wide-strip)
            ::slotted([slot='body-xs']) {
            padding-inline-start: 48px;
        }

        :host([variant='ccd-suggested'].wide-strip) ::slotted([slot='price']) {
            padding-inline-start: 48px;
        }

        :host([variant='ccd-suggested']) ::slotted([slot='price']) {
            font-size: var(--consonant-merch-card-body-xs-font-size);
            line-height: var(--consonant-merch-card-body-xs-line-height);
            min-width: fit-content;
        }

        :host([variant='ccd-suggested']) ::slotted([slot='cta']) {
            display: flex;
            align-items: center;
            min-width: fit-content;
        }

        :host([variant='ccd-suggested']) .footer {
            display: flex;
            justify-content: space-between;
            flex-grow: 0;
            margin-top: 6px;
            align-items: center;
        }

        :host([variant='ccd-suggested']) div[class$='-badge'] {
            position: static;
            border-radius: 4px;
        }

        :host([variant='ccd-suggested']) .top-section {
            align-items: center;
        }
    `);import{html as Oo,css as Mo}from"../lit-all.min.js";var Dr=`

merch-card[variant="ccd-slice"] [slot='image'] img {
  overflow: hidden;
  border-radius: 50%;
}

merch-card[variant="ccd-slice"] [slot='body-s'] a.spectrum-Link {
  font-size: var(--consonant-merch-card-body-xxs-font-size);
  font-style: normal;
  font-weight: 400;
  line-height: var(--consonant-merch-card-body-xxs-line-height);
}

.spectrum--darkest merch-card[variant="ccd-slice"] {
  --consonant-merch-card-background-color:rgb(29, 29, 29);
  --consonant-merch-card-body-s-color:rgb(235, 235, 235);
  --consonant-merch-card-border-color:rgb(48, 48, 48);
  --consonant-merch-card-detail-s-color:rgb(235, 235, 235);
}
`;var ko={mnemonics:{size:"m"},backgroundImage:{tag:"div",slot:"image"},description:{tag:"div",slot:"body-s"},ctas:{slot:"footer",size:"S"},allowedSizes:["wide"]},me=class extends S{getGlobalCSS(){return Dr}get aemFragmentMapping(){return ko}renderLayout(){return Oo` <div class="content">
                <div class="top-section">
                    <slot name="icons"></slot>
                    ${this.badge}
                </div>
                <slot name="body-s"></slot>
                <slot name="footer"></slot>
            </div>
            <slot name="image"></slot>
            <slot></slot>`}};f(me,"variantStyle",Mo`
        :host([variant='ccd-slice']) {
            --consonant-merch-card-background-color: rgb(248, 248, 248);
            --consonant-merch-card-border-color: rgb(230, 230, 230);
            --consonant-merch-card-body-s-color: rgb(34, 34, 34);
            --merch-color-inline-price-strikethrough: var(--spectrum-gray-600);
            --mod-img-height: 29px;

            box-sizing: border-box;
            min-width: 290px;
            max-width: 322px;
            width: 100%;
            max-height: 154px;
            height: 154px;
            border-radius: 4px;
            display: flex;
            flex-flow: wrap;
        }

        :host([variant='ccd-slice']) * {
            overflow: hidden;
        }

        :host([variant='ccd-slice']) ::slotted([slot='body-s']) {
            font-size: var(--consonant-merch-card-body-xs-font-size);
            line-height: var(--consonant-merch-card-body-xxs-line-height);
            min-width: 154px;
            max-width: 171px;
            height: 55px;
            overflow: hidden;
        }

        :host([variant='ccd-slice'][size='wide']) ::slotted([slot='body-s']) {
            max-width: 425px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        :host([variant='ccd-slice'][size='wide']) {
            width: 600px;
            max-width: 600px;
        }

        :host([variant='ccd-slice']) .content {
            display: flex;
            gap: var(--consonant-merch-spacing-xxs);
            padding: 15px;
            padding-inline-end: 0;
            height: 154px;
            box-sizing: border-box;
            min-height: 123px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            flex: 1 0 0;
        }

        :host([variant='ccd-slice'])
            ::slotted([slot='body-s'])
            ::slotted(a:not(.con-button)) {
            font-size: var(--consonant-merch-card-body-xxs-font-size);
            font-style: normal;
            font-weight: 400;
            line-height: var(--consonant-merch-card-body-xxs-line-height);
            text-decoration-line: underline;
            color: var(--spectrum-gray-800, var(--merch-color-grey-80));
        }

        :host([variant='ccd-slice']) ::slotted([slot='image']) {
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            width: 134px;
            height: 149px;
            overflow: hidden;
            border-radius: 50%;
            padding: 15px;
            align-self: center;
            padding-inline-start: 0;
        }

        :host([variant='ccd-slice']) ::slotted([slot='image']) img {
            overflow: hidden;
            border-radius: 50%;
            width: inherit;
            height: inherit;
        }

        :host([variant='ccd-slice']) div[class$='-badge'] {
            font-size: var(--consonant-merch-card-body-xxs-font-size);
            position: static;
            border-radius: 4px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding: 4px 9px;
        }

        :host([variant='ccd-slice']) .top-section {
            align-items: center;
            gap: 8px;
        }
    `);var bt=(e,t=!1)=>{switch(e.variant){case"catalog":return new ne(e);case"image":return new He(e);case"inline-heading":return new Ve(e);case"mini-compare-chart":return new ae(e);case"plans":return new ie(e);case"product":return new B(e);case"segment":return new se(e);case"special-offers":return new ce(e);case"twp":return new le(e);case"ccd-suggested":return new he(e);case"ccd-slice":return new me(e);default:return t?void 0:new B(e)}},Ur=()=>{let e=[];return e.push(ne.variantStyle),e.push(ae.variantStyle),e.push(B.variantStyle),e.push(ie.variantStyle),e.push(se.variantStyle),e.push(ce.variantStyle),e.push(le.variantStyle),e.push(he.variantStyle),e.push(me.variantStyle),e};var zr=document.createElement("style");zr.innerHTML=`
:root {
    --consonant-merch-card-detail-font-size: 12px;
    --consonant-merch-card-detail-font-weight: 500;
    --consonant-merch-card-detail-letter-spacing: 0.8px;

    --consonant-merch-card-heading-font-size: 18px;
    --consonant-merch-card-heading-line-height: 22.5px;
    --consonant-merch-card-heading-secondary-font-size: 14px;
    --consonant-merch-card-body-font-size: 14px;
    --consonant-merch-card-body-line-height: 21px;
    --consonant-merch-card-promo-text-height: var(--consonant-merch-card-body-font-size);

    /* Fonts */
    --merch-body-font-family: 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;

    /* spacing */
    --consonant-merch-spacing-xxxs: 4px;
    --consonant-merch-spacing-xxs: 8px;
    --consonant-merch-spacing-xs: 16px;
    --consonant-merch-spacing-s: 24px;
    --consonant-merch-spacing-m: 32px;

    /* cta */
    --consonant-merch-card-cta-font-size: 15px;

    /* headings */
    --consonant-merch-card-heading-xxs-font-size: 16px;
    --consonant-merch-card-heading-xxs-line-height: 20px;
    --consonant-merch-card-heading-xs-font-size: 18px;
    --consonant-merch-card-heading-xs-line-height: 22.5px;
    --consonant-merch-card-heading-s-font-size: 20px;
    --consonant-merch-card-heading-s-line-height: 25px;
    --consonant-merch-card-heading-m-font-size: 24px;
    --consonant-merch-card-heading-m-line-height: 30px;
    --consonant-merch-card-heading-l-font-size: 20px;
    --consonant-merch-card-heading-l-line-height: 30px;
    --consonant-merch-card-heading-xl-font-size: 36px;
    --consonant-merch-card-heading-xl-line-height: 45px;

    /* detail */
    --consonant-merch-card-detail-s-font-size: 11px;
    --consonant-merch-card-detail-s-line-height: 14px;
    --consonant-merch-card-detail-m-font-size: 12px;
    --consonant-merch-card-detail-m-line-height: 15px;
    --consonant-merch-card-detail-m-font-weight: 700;
    --consonant-merch-card-detail-m-letter-spacing: 1px;

    /* body */
    --consonant-merch-card-body-xxs-font-size: 12px;
    --consonant-merch-card-body-xxs-line-height: 18px;
    --consonant-merch-card-body-xxs-letter-spacing: 1px;
    --consonant-merch-card-body-xs-font-size: 14px;
    --consonant-merch-card-body-xs-line-height: 21px;
    --consonant-merch-card-body-s-font-size: 16px;
    --consonant-merch-card-body-s-line-height: 24px;
    --consonant-merch-card-body-m-font-size: 18px;
    --consonant-merch-card-body-m-line-height: 27px;
    --consonant-merch-card-body-l-font-size: 20px;
    --consonant-merch-card-body-l-line-height: 30px;
    --consonant-merch-card-body-xl-font-size: 22px;
    --consonant-merch-card-body-xxl-font-size: 24px;
    --consonant-merch-card-body-xl-line-height: 33px;


    --consonant-merch-card-heading-padding: 0;

    /* colors */
    --consonant-merch-card-background-color: inherit;
    --consonant-merch-card-border-color: #eaeaea;
    --color-accent: rgb(59, 99, 251);
    --merch-color-focus-ring: #1473E6;
    --merch-color-grey-10: #f6f6f6;
    --merch-color-grey-60: var(--specturm-gray-600);
    --merch-color-grey-80: #2c2c2c;
    --merch-color-grey-200: #E8E8E8;
    --merch-color-grey-600: #686868;
    --merch-color-grey-700: #464646;
    --merch-color-green-promo: #2D9D78;
    --consonant-merch-card-body-xs-color: var(--spectrum-gray-100, var(--merch-color-grey-80));
    --merch-color-inline-price-strikethrough: initial;
    --consonant-merch-card-detail-s-color: var(--spectrum-gray-600, var(--merch-color-grey-600));
    --consonant-merch-card-heading-color: var(--spectrum-gray-800, var(--merch-color-grey-80));
    --consonant-merch-card-heading-xs-color: var(--consonant-merch-card-heading-color);
    --consonant-merch-card-price-color: #222222;

    /* ccd colors */
    --ccd-gray-200-light: #E6E6E6;
    --ccd-gray-800-dark: #222;
    --ccd-gray-700-dark: #464646;
    --ccd-gray-600-light: #6D6D6D;

    
  
    /* merch card generic */
    --consonant-merch-card-max-width: 300px;
    --transition: cmax-height 0.3s linear, opacity 0.3s linear;

    /* background image */
    --consonant-merch-card-bg-img-height: 180px;

    /* inline SVGs */
    --checkmark-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z' class='spectrum-UIIcon--medium'/%3E%3C/svg%3E%0A");

    --secure-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23757575' viewBox='0 0 12 15'%3E%3Cpath d='M11.5 6H11V5A5 5 0 1 0 1 5v1H.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM3 5a3 3 0 1 1 6 0v1H3Zm4 6.111V12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.389a1.5 1.5 0 1 1 2 0Z'/%3E%3C/svg%3E");

    --info-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><circle cx='18' cy='12' r='2.15'%3E%3C/circle%3E%3Cpath d='M20.333 24H20v-7.6a.4.4 0 0 0-.4-.4h-3.933s-1.167.032-1.167 1 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1 1.167 1 1.167 1h4.667s1.167-.033 1.167-1-1.168-1-1.168-1z'%3E%3C/path%3E%3Cpath d='M18 2.1A15.9 15.9 0 1 0 33.9 18 15.9 15.9 0 0 0 18 2.1zm0 29.812A13.912 13.912 0 1 1 31.913 18 13.912 13.912 0 0 1 18 31.913z'%3E%3C/path%3E%3C/svg%3E");

    --ellipsis-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="2" cy="2" r="2" fill="%232c2c2c" transform="translate(6 6)"/><circle cx="2" cy="2" r="2" fill="%232c2c2c" data-name="Ellipse 71" transform="translate(12 6)"/><circle cx="2" cy="2" r="2" fill="%232c2c2c" transform="translate(0 6)"/></svg>');

    /* callout */
    --consonant-merch-card-callout-line-height: 21px;
    --consonant-merch-card-callout-font-size: 14px;
    --consonant-merch-card-callout-font-color: #2C2C2C;
    --consonant-merch-card-callout-icon-size: 16px;
    --consonant-merch-card-callout-icon-top: 6px;
    --consonant-merch-card-callout-icon-right: 8px;
    --consonant-merch-card-callout-letter-spacing: 0px;
    --consonant-merch-card-callout-icon-padding: 34px;
    --consonant-merch-card-callout-spacing-xxs: 8px;
}

merch-card-collection {
    display: contents;
}

merch-card-collection > merch-card:not([style]) {
    display: none;
}

merch-card-collection > p[slot],
merch-card-collection > div[slot] p {
    margin: 0;
}

.one-merch-card,
.two-merch-cards,
.three-merch-cards,
.four-merch-cards {
    display: grid;
    justify-content: center;
    justify-items: stretch;
    align-items: normal;
    gap: var(--consonant-merch-spacing-m);
    padding: var(--spacing-m);
}

merch-card[variant="ccd-suggested"] *,
merch-card[variant="ccd-slice"] * {
  box-sizing: border-box;
}

merch-card.background-opacity-70 {
    background-color: rgba(255 255 255 / 70%);
}

merch-card.has-divider hr {
    margin: var(--consonant-merch-spacing-xs) 0;
    height: 1px;
    border: none;
}

merch-card.has-divider div[slot='body-lower'] hr {
    margin: 0;
}

merch-card p, merch-card h3, merch-card h4 {
    margin: 0;
}

merch-card span[is='inline-price'] {
    display: inline-block;
}

merch-card [slot^='heading-'] {
    color: var(--consonant-merch-card-heading-color);
    font-weight: 700;
}

merch-card [slot='heading-xs'] {
    font-size: var(--consonant-merch-card-heading-xs-font-size);
    line-height: var(--consonant-merch-card-heading-xs-line-height);
    color: var(--consonant-merch-card-heading-xs-color);
    margin: 0;
}

merch-card.dc-pricing [slot='heading-xs'] {
    margin-bottom: var(--consonant-merch-spacing-xxs);
}

merch-card:not([variant='inline-heading']) [slot='heading-xs'] a {
    color: var(--merch-color-grey-80);
}

merch-card div.starting-at {
  font-size: var(--consonant-merch-card-body-xs-font-size);
  line-height: var(--consonant-merch-card-body-xs-line-height);
  font-weight: 500;
}

merch-card [slot='heading-xs'] a:not(:hover) {
    text-decoration: inherit;
}

merch-card [slot='heading-s'] {
    font-size: var(--consonant-merch-card-heading-s-font-size);
    line-height: var(--consonant-merch-card-heading-s-line-height);
    margin: 0;
}

merch-card [slot='heading-m'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    margin: 0;
}

merch-card [slot='heading-m-price'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    padding: 0 var(--consonant-merch-spacing-s);
    margin: 0;
    color: var(--spectrum-gray-800, #2c2c2c);
}

merch-card [slot='offers'] {
    padding: var(--consonant-merch-spacing-xxs) var(--consonant-merch-spacing-s);
}

merch-card [slot='heading-l'] {
    font-size: var(--consonant-merch-card-heading-l-font-size);
    line-height: var(--consonant-merch-card-heading-l-line-height);
    margin: 0;
}

merch-card [slot='heading-xl'] {
    font-size: var(--consonant-merch-card-heading-xl-font-size);
    line-height: var(--consonant-merch-card-heading-xl-line-height);
    margin: 0;
}

merch-card [slot='callout-content'] {
    display: flex;
    flex-direction: column;
    margin: var(--consonant-merch-spacing-xxxs) 0px;
    gap: var(--consonant-merch-card-callout-spacing-xxs);
}

merch-card [slot='callout-content'] > div {
    display: flex;
    flex-direction: column;
    margin: var(--consonant-merch-spacing-xxxs) 0px;
    gap: var(--consonant-merch-card-callout-spacing-xxs);
    align-items: flex-start;
}

merch-card [slot='callout-content'] > div > div {
    display: flex;
    background: rgba(203 203 203 / 50%);
    border-radius: var(--consonant-merch-spacing-xxxs);
    padding: var(--consonant-merch-spacing-xxxs) var(--consonant-merch-spacing-xxxs) var(--consonant-merch-spacing-xxxs) var(--consonant-merch-spacing-xxs);
}

merch-card [slot='callout-content'] > div > div > div {
    display: inline-block;
    text-align: start;
    font: normal normal normal var(--consonant-merch-card-callout-font-size)/var(--consonant-merch-card-callout-line-height) var(--body-font-family, 'Adobe Clean');
    letter-spacing: var(--consonant-merch-card-callout-letter-spacing);
    color: var(--consonant-merch-card-callout-font-color);
}

merch-card [slot='callout-content'] img {
    width: var(--consonant-merch-card-callout-icon-size);
    height: var(--consonant-merch-card-callout-icon-size);
    margin-inline-end: 2.5px;
    margin-inline-start: 9px;
    margin-block-start: 2.5px;
}

merch-card [slot='detail-s'] {
    font-size: var(--consonant-merch-card-detail-s-font-size);
    line-height: var(--consonant-merch-card-detail-s-line-height);
    letter-spacing: 0.66px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--consonant-merch-card-detail-s-color);
}

merch-card [slot='detail-m'] {
    font-size: var(--consonant-merch-card-detail-m-font-size);
    letter-spacing: var(--consonant-merch-card-detail-m-letter-spacing);
    font-weight: var(--consonant-merch-card-detail-m-font-weight);
    text-transform: uppercase;
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xxs-font-size);
    line-height: var(--consonant-merch-card-body-xxs-line-height);
    font-weight: normal;
    letter-spacing: var(--consonant-merch-card-body-xxs-letter-spacing);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-s"] {
    color: var(--consonant-merch-card-body-s-color);
}

merch-card button.spectrum-Button > a {
  color: inherit;
  text-decoration: none;
}

merch-card button.spectrum-Button > a:hover {
  color: inherit;
}

merch-card button.spectrum-Button > a:active {
  color: inherit;
}

merch-card button.spectrum-Button > a:focus {
  color: inherit;
}

merch-card [slot="body-xs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    color: var(--consonant-merch-card-body-xs-color);
}

merch-card [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    line-height: var(--consonant-merch-card-body-m-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-l"] {
    font-size: var(--consonant-merch-card-body-l-font-size);
    line-height: var(--consonant-merch-card-body-l-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-xl"] {
    font-size: var(--consonant-merch-card-body-xl-font-size);
    line-height: var(--consonant-merch-card-body-xl-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="cci-footer"] p,
merch-card [slot="cct-footer"] p,
merch-card [slot="cce-footer"] p {
    margin: 0;
}

merch-card [slot="promo-text"] {
    color: var(--merch-color-green-promo);
    font-size: var(--consonant-merch-card-promo-text-height);
    font-weight: 700;
    line-height: var(--consonant-merch-card-promo-text-height);
    margin: 0;
    min-height: var(--consonant-merch-card-promo-text-height);
    padding: 0;
}

merch-card [slot="footer-rows"] {
    min-height: var(--consonant-merch-card-footer-rows-height);
}

merch-card div[slot="footer"] {
    display: contents;
}

merch-card.product div[slot="footer"] {
    display: block;
}

merch-card.product div[slot="footer"] a + a {
    margin: 5px 0 0 5px;
}

merch-card [slot="footer"] a {
    word-wrap: break-word;
    text-align: center;
}

merch-card [slot="footer"] a:not([class]) {
    font-weight: 700;
    font-size: var(--consonant-merch-card-cta-font-size);
}

merch-card div[slot='bg-image'] img {
    position: relative;
    width: 100%;
    min-height: var(--consonant-merch-card-bg-img-height);
    max-height: var(--consonant-merch-card-bg-img-height);
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

.price-unit-type:not(.disabled)::before,
.price-tax-inclusivity:not(.disabled)::before {
  content: "\\00a0";
}

merch-card span.placeholder-resolved[data-template='priceStrikethrough'],
merch-card span.placeholder-resolved[data-template='strikethrough'],
merch-card span.price.price-strikethrough {
  font-size: var(--consonant-merch-card-body-xs-font-size);
  font-weight: normal;
  text-decoration: line-through;
  color: var(--merch-color-inline-price-strikethrough);
}

/* merch-offer-select */
merch-offer-select[variant="subscription-options"] merch-offer span[is="inline-price"][data-display-tax='true'] .price-tax-inclusivity {
    font-size: 12px;
    font-style: italic;
    font-weight: normal;
    position: absolute;
    left: 0;
    top: 20px;
}

body.merch-modal {
    overflow: hidden;
    scrollbar-gutter: stable;
    height: 100vh;
}

`;document.head.appendChild(zr);var we;(function(e){e.V2="UCv2",e.V3="UCv3"})(we||(we={}));var Se;(function(e){e.CHECKOUT="checkout",e.CHECKOUT_EMAIL="checkout/email",e.SEGMENTATION="segmentation",e.BUNDLE="bundle",e.COMMITMENT="commitment",e.RECOMMENDATION="recommendation",e.EMAIL="email",e.PAYMENT="payment",e.CHANGE_PLAN_TEAM_PLANS="change-plan/team-upgrade/plans",e.CHANGE_PLAN_TEAM_PAYMENT="change-plan/team-upgrade/payment"})(Se||(Se={}));var Et;(function(e){e.BASE="BASE",e.TRIAL="TRIAL",e.PROMOTION="PROMOTION"})(Et||(Et={}));var C;(function(e){e.MONTH="MONTH",e.YEAR="YEAR",e.TWO_YEARS="TWO_YEARS",e.THREE_YEARS="THREE_YEARS",e.PERPETUAL="PERPETUAL",e.TERM_LICENSE="TERM_LICENSE",e.ACCESS_PASS="ACCESS_PASS",e.THREE_MONTHS="THREE_MONTHS",e.SIX_MONTHS="SIX_MONTHS"})(C||(C={}));var _;(function(e){e.ANNUAL="ANNUAL",e.MONTHLY="MONTHLY",e.TWO_YEARS="TWO_YEARS",e.THREE_YEARS="THREE_YEARS",e.P1D="P1D",e.P1Y="P1Y",e.P3Y="P3Y",e.P10Y="P10Y",e.P15Y="P15Y",e.P3D="P3D",e.P7D="P7D",e.P30D="P30D",e.HALF_YEARLY="HALF_YEARLY",e.QUARTERLY="QUARTERLY"})(_||(_={}));var wt;(function(e){e.INDIVIDUAL="INDIVIDUAL",e.TEAM="TEAM",e.ENTERPRISE="ENTERPRISE"})(wt||(wt={}));var St;(function(e){e.COM="COM",e.EDU="EDU",e.GOV="GOV"})(St||(St={}));var At;(function(e){e.DIRECT="DIRECT",e.INDIRECT="INDIRECT"})(At||(At={}));var Tt;(function(e){e.ENTERPRISE_PRODUCT="ENTERPRISE_PRODUCT",e.ETLA="ETLA",e.RETAIL="RETAIL",e.VIP="VIP",e.VIPMP="VIPMP",e.FREE="FREE"})(Tt||(Tt={}));var Gr="tacocat.js";var Fr=e=>`${e??""}`.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)??"";function de(e,t={},{metadata:r=!0,search:n=!0,storage:o=!0}={}){let a;if(n&&a==null){let i=new URLSearchParams(window.location.search),s=Ae(n)?n:e;a=i.get(s)}if(o&&a==null){let i=Ae(o)?o:e;a=window.sessionStorage.getItem(i)??window.localStorage.getItem(i)}if(r&&a==null){let i=Io(Ae(r)?r:e);a=document.documentElement.querySelector(`meta[name="${i}"]`)?.content}return a??t[e]}var ue=()=>{};var $r=e=>typeof e=="boolean",Te=e=>typeof e=="function",_t=e=>typeof e=="number",Hr=e=>e!=null&&typeof e=="object";var Ae=e=>typeof e=="string";var _e=e=>_t(e)&&Number.isFinite(e)&&e>0;function M(e,t){if($r(e))return e;let r=String(e);return r==="1"||r==="true"?!0:r==="0"||r==="false"?!1:t}function Io(e=""){return String(e).replace(/(\p{Lowercase_Letter})(\p{Uppercase_Letter})/gu,(t,r,n)=>`${r}-${n}`).replace(/\W+/gu,"-").toLowerCase()}var Do=Date.now(),Lt=()=>`(+${Date.now()-Do}ms)`,je=new Set,Uo=M(de("tacocat.debug",{},{metadata:!1}),typeof process<"u"&&process.env?.DEBUG);function Vr(e){let t=`[${Gr}/${e}]`,r=(i,s,...c)=>i?!0:(o(s,...c),!1),n=Uo?(i,...s)=>{console.debug(`${t} ${i}`,...s,Lt())}:()=>{},o=(i,...s)=>{let c=`${t} ${i}`;je.forEach(([l])=>l(c,...s))};return{assert:r,debug:n,error:o,warn:(i,...s)=>{let c=`${t} ${i}`;je.forEach(([,l])=>l(c,...s))}}}function zo(e,t){let r=[e,t];return je.add(r),()=>{je.delete(r)}}zo((e,...t)=>{console.error(e,...t,Lt())},(e,...t)=>{console.warn(e,...t,Lt())});var Br="ABM",jr="PUF",Yr="M2M",Wr="PERPETUAL",qr="P3Y",Go="TAX_INCLUSIVE_DETAILS",Fo="TAX_EXCLUSIVE",Xr={ABM:Br,PUF:jr,M2M:Yr,PERPETUAL:Wr,P3Y:qr},nh={[Br]:{commitment:C.YEAR,term:_.MONTHLY},[jr]:{commitment:C.YEAR,term:_.ANNUAL},[Yr]:{commitment:C.MONTH,term:_.MONTHLY},[Wr]:{commitment:C.PERPETUAL,term:void 0},[qr]:{commitment:C.THREE_MONTHS,term:_.P3Y}};function Pt(e){let{priceDetails:t}=e,{price:r,priceWithoutDiscount:n,priceWithoutTax:o,priceWithoutDiscountAndTax:a,taxDisplay:i}=t;if(i!==Go)return e;let s={...e,priceDetails:{...t,price:o??r,priceWithoutDiscount:a??n,taxDisplay:Fo}};return s.offerType==="TRIAL"&&s.priceDetails.price===0&&(s.priceDetails.price=s.priceDetails.priceWithoutDiscount),s}var Ct=function(e,t){return Ct=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},Ct(e,t)};function Le(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ct(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var b=function(){return b=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},b.apply(this,arguments)};function Ye(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,a;n<o;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var x;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(x||(x={}));var w;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(w||(w={}));var j;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(j||(j={}));function Nt(e){return e.type===w.literal}function Kr(e){return e.type===w.argument}function We(e){return e.type===w.number}function qe(e){return e.type===w.date}function Xe(e){return e.type===w.time}function Ke(e){return e.type===w.select}function Qe(e){return e.type===w.plural}function Qr(e){return e.type===w.pound}function Ze(e){return e.type===w.tag}function Je(e){return!!(e&&typeof e=="object"&&e.type===j.number)}function Pe(e){return!!(e&&typeof e=="object"&&e.type===j.dateTime)}var Rt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;var $o=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Zr(e){var t={};return e.replace($o,function(r){var n=r.length;switch(r[0]){case"G":t.era=n===4?"long":n===5?"narrow":"short";break;case"y":t.year=n===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][n-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][n-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=n===4?"short":n===5?"narrow":"short";break;case"e":if(n<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"c":if(n<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][n-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][n-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][n-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][n-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][n-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][n-1];break;case"s":t.second=["numeric","2-digit"][n-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=n<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var Jr=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function nn(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(Jr).filter(function(u){return u.length>0}),r=[],n=0,o=t;n<o.length;n++){var a=o[n],i=a.split("/");if(i.length===0)throw new Error("Invalid number skeleton");for(var s=i[0],c=i.slice(1),l=0,h=c;l<h.length;l++){var p=h[l];if(p.length===0)throw new Error("Invalid number skeleton")}r.push({stem:s,options:c})}return r}function Ho(e){return e.replace(/^(.*?)-/,"")}var en=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,on=/^(@+)?(\+|#+)?$/g,Vo=/(\*)(0+)|(#+)(0+)|(0+)/g,an=/^(0+)$/;function tn(e){var t={};return e.replace(on,function(r,n,o){return typeof o!="string"?(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length):o==="+"?t.minimumSignificantDigits=n.length:n[0]==="#"?t.maximumSignificantDigits=n.length:(t.minimumSignificantDigits=n.length,t.maximumSignificantDigits=n.length+(typeof o=="string"?o.length:0)),""}),t}function sn(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Bo(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if(r==="+!"?(t.signDisplay="always",e=e.slice(2)):r==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!an.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function rn(e){var t={},r=sn(e);return r||t}function cn(e){for(var t={},r=0,n=e;r<n.length;r++){var o=n[r];switch(o.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=o.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Ho(o.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=b(b(b({},t),{notation:"scientific"}),o.options.reduce(function(s,c){return b(b({},s),rn(c))},{}));continue;case"engineering":t=b(b(b({},t),{notation:"engineering"}),o.options.reduce(function(s,c){return b(b({},s),rn(c))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(o.options[0]);continue;case"integer-width":if(o.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");o.options[0].replace(Vo,function(s,c,l,h,p,u){if(c)t.minimumIntegerDigits=l.length;else{if(h&&p)throw new Error("We currently do not support maximum integer digits");if(u)throw new Error("We currently do not support exact integer digits")}return""});continue}if(an.test(o.stem)){t.minimumIntegerDigits=o.stem.length;continue}if(en.test(o.stem)){if(o.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");o.stem.replace(en,function(s,c,l,h,p,u){return l==="*"?t.minimumFractionDigits=c.length:h&&h[0]==="#"?t.maximumFractionDigits=h.length:p&&u?(t.minimumFractionDigits=p.length,t.maximumFractionDigits=p.length+u.length):(t.minimumFractionDigits=c.length,t.maximumFractionDigits=c.length),""}),o.options.length&&(t=b(b({},t),tn(o.options[0])));continue}if(on.test(o.stem)){t=b(b({},t),tn(o.stem));continue}var a=sn(o.stem);a&&(t=b(b({},t),a));var i=Bo(o.stem);i&&(t=b(b({},t),i))}return t}var Ot,jo=new RegExp("^"+Rt.source+"*"),Yo=new RegExp(Rt.source+"*$");function y(e,t){return{start:e,end:t}}var Wo=!!String.prototype.startsWith,qo=!!String.fromCodePoint,Xo=!!Object.fromEntries,Ko=!!String.prototype.codePointAt,Qo=!!String.prototype.trimStart,Zo=!!String.prototype.trimEnd,Jo=!!Number.isSafeInteger,ea=Jo?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},kt=!0;try{ln=un("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),kt=((Ot=ln.exec("a"))===null||Ot===void 0?void 0:Ot[0])==="a"}catch{kt=!1}var ln,hn=Wo?function(t,r,n){return t.startsWith(r,n)}:function(t,r,n){return t.slice(n,n+r.length)===r},It=qo?String.fromCodePoint:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n="",o=t.length,a=0,i;o>a;){if(i=t[a++],i>1114111)throw RangeError(i+" is not a valid code point");n+=i<65536?String.fromCharCode(i):String.fromCharCode(((i-=65536)>>10)+55296,i%1024+56320)}return n},mn=Xo?Object.fromEntries:function(t){for(var r={},n=0,o=t;n<o.length;n++){var a=o[n],i=a[0],s=a[1];r[i]=s}return r},dn=Ko?function(t,r){return t.codePointAt(r)}:function(t,r){var n=t.length;if(!(r<0||r>=n)){var o=t.charCodeAt(r),a;return o<55296||o>56319||r+1===n||(a=t.charCodeAt(r+1))<56320||a>57343?o:(o-55296<<10)+(a-56320)+65536}},ta=Qo?function(t){return t.trimStart()}:function(t){return t.replace(jo,"")},ra=Zo?function(t){return t.trimEnd()}:function(t){return t.replace(Yo,"")};function un(e,t){return new RegExp(e,t)}var Dt;kt?(Mt=un("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Dt=function(t,r){var n;Mt.lastIndex=r;var o=Mt.exec(t);return(n=o[1])!==null&&n!==void 0?n:""}):Dt=function(t,r){for(var n=[];;){var o=dn(t,r);if(o===void 0||fn(o)||aa(o))break;n.push(o),r+=o>=65536?2:1}return It.apply(void 0,n)};var Mt,pn=function(){function e(t,r){r===void 0&&(r={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,r,n){for(var o=[];!this.isEOF();){var a=this.char();if(a===123){var i=this.parseArgument(t,n);if(i.err)return i;o.push(i.val)}else{if(a===125&&t>0)break;if(a===35&&(r==="plural"||r==="selectordinal")){var s=this.clonePosition();this.bump(),o.push({type:w.pound,location:y(s,this.clonePosition())})}else if(a===60&&!this.ignoreTag&&this.peek()===47){if(n)break;return this.error(x.UNMATCHED_CLOSING_TAG,y(this.clonePosition(),this.clonePosition()))}else if(a===60&&!this.ignoreTag&&Ut(this.peek()||0)){var i=this.parseTag(t,r);if(i.err)return i;o.push(i.val)}else{var i=this.parseLiteral(t,r);if(i.err)return i;o.push(i.val)}}}return{val:o,err:null}},e.prototype.parseTag=function(t,r){var n=this.clonePosition();this.bump();var o=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:w.literal,value:"<"+o+"/>",location:y(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var a=this.parseMessage(t+1,r,!0);if(a.err)return a;var i=a.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ut(this.char()))return this.error(x.INVALID_TAG,y(s,this.clonePosition()));var c=this.clonePosition(),l=this.parseTagName();return o!==l?this.error(x.UNMATCHED_CLOSING_TAG,y(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:w.tag,value:o,children:i,location:y(n,this.clonePosition())},err:null}:this.error(x.INVALID_TAG,y(s,this.clonePosition())))}else return this.error(x.UNCLOSED_TAG,y(n,this.clonePosition()))}else return this.error(x.INVALID_TAG,y(n,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&oa(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,r){for(var n=this.clonePosition(),o="";;){var a=this.tryParseQuote(r);if(a){o+=a;continue}var i=this.tryParseUnquoted(t,r);if(i){o+=i;continue}var s=this.tryParseLeftAngleBracket();if(s){o+=s;continue}break}var c=y(n,this.clonePosition());return{val:{type:w.literal,value:o,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!na(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var n=this.char();if(n===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(n);this.bump()}return It.apply(void 0,r)},e.prototype.tryParseUnquoted=function(t,r){if(this.isEOF())return null;var n=this.char();return n===60||n===123||n===35&&(r==="plural"||r==="selectordinal")||n===125&&t>0?null:(this.bump(),It(n))},e.prototype.parseArgument=function(t,r){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,y(n,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(x.EMPTY_ARGUMENT,y(n,this.clonePosition()));var o=this.parseIdentifierIfPossible().value;if(!o)return this.error(x.MALFORMED_ARGUMENT,y(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,y(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:w.argument,value:o,location:y(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,y(n,this.clonePosition())):this.parseArgumentOptions(t,r,o,n);default:return this.error(x.MALFORMED_ARGUMENT,y(n,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),r=this.offset(),n=Dt(this.message,r),o=r+n.length;this.bumpTo(o);var a=this.clonePosition(),i=y(t,a);return{value:n,location:i}},e.prototype.parseArgumentOptions=function(t,r,n,o){var a,i=this.clonePosition(),s=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(s){case"":return this.error(x.EXPECT_ARGUMENT_TYPE,y(i,c));case"number":case"date":case"time":{this.bumpSpace();var l=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),p=this.parseSimpleArgStyleIfPossible();if(p.err)return p;var u=ra(p.val);if(u.length===0)return this.error(x.EXPECT_ARGUMENT_STYLE,y(this.clonePosition(),this.clonePosition()));var v=y(h,this.clonePosition());l={style:u,styleLocation:v}}var g=this.tryParseArgumentClose(o);if(g.err)return g;var E=y(o,this.clonePosition());if(l&&hn(l?.style,"::",0)){var R=ta(l.style.slice(2));if(s==="number"){var p=this.parseNumberSkeletonFromString(R,l.styleLocation);return p.err?p:{val:{type:w.number,value:n,location:E,style:p.val},err:null}}else{if(R.length===0)return this.error(x.EXPECT_DATE_TIME_SKELETON,E);var u={type:j.dateTime,pattern:R,location:l.styleLocation,parsedOptions:this.shouldParseSkeletons?Zr(R):{}},Q=s==="date"?w.date:w.time;return{val:{type:Q,value:n,location:E,style:u},err:null}}}return{val:{type:s==="number"?w.number:s==="date"?w.date:w.time,value:n,location:E,style:(a=l?.style)!==null&&a!==void 0?a:null},err:null}}case"plural":case"selectordinal":case"select":{var U=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(x.EXPECT_SELECT_ARGUMENT_OPTIONS,y(U,b({},U)));this.bumpSpace();var O=this.parseIdentifierIfPossible(),Z=0;if(s!=="select"&&O.value==="offset"){if(!this.bumpIf(":"))return this.error(x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,y(this.clonePosition(),this.clonePosition()));this.bumpSpace();var p=this.tryParseDecimalInteger(x.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,x.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(p.err)return p;this.bumpSpace(),O=this.parseIdentifierIfPossible(),Z=p.val}var D=this.tryParsePluralOrSelectOptions(t,s,r,O);if(D.err)return D;var g=this.tryParseArgumentClose(o);if(g.err)return g;var ge=y(o,this.clonePosition());return s==="select"?{val:{type:w.select,value:n,options:mn(D.val),location:ge},err:null}:{val:{type:w.plural,value:n,options:mn(D.val),offset:Z,pluralType:s==="plural"?"cardinal":"ordinal",location:ge},err:null}}default:return this.error(x.INVALID_ARGUMENT_TYPE,y(i,c))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(x.EXPECT_ARGUMENT_CLOSING_BRACE,y(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){var n=this.char();switch(n){case 39:{this.bump();var o=this.clonePosition();if(!this.bumpUntil("'"))return this.error(x.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,y(o,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,r){var n=[];try{n=nn(t)}catch{return this.error(x.INVALID_NUMBER_SKELETON,r)}return{val:{type:j.number,tokens:n,location:r,parsedOptions:this.shouldParseSkeletons?cn(n):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,r,n,o){for(var a,i=!1,s=[],c=new Set,l=o.value,h=o.location;;){if(l.length===0){var p=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var u=this.tryParseDecimalInteger(x.EXPECT_PLURAL_ARGUMENT_SELECTOR,x.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;h=y(p,this.clonePosition()),l=this.message.slice(p.offset,this.offset())}else break}if(c.has(l))return this.error(r==="select"?x.DUPLICATE_SELECT_ARGUMENT_SELECTOR:x.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);l==="other"&&(i=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?x.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:x.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,y(this.clonePosition(),this.clonePosition()));var g=this.parseMessage(t+1,r,n);if(g.err)return g;var E=this.tryParseArgumentClose(v);if(E.err)return E;s.push([l,{value:g.val,location:y(v,this.clonePosition())}]),c.add(l),this.bumpSpace(),a=this.parseIdentifierIfPossible(),l=a.value,h=a.location}return s.length===0?this.error(r==="select"?x.EXPECT_SELECT_ARGUMENT_SELECTOR:x.EXPECT_PLURAL_ARGUMENT_SELECTOR,y(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!i?this.error(x.MISSING_OTHER_CLAUSE,y(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(t,r){var n=1,o=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(n=-1);for(var a=!1,i=0;!this.isEOF();){var s=this.char();if(s>=48&&s<=57)a=!0,i=i*10+(s-48),this.bump();else break}var c=y(o,this.clonePosition());return a?(i*=n,ea(i)?{val:i,err:null}:this.error(r,c)):this.error(t,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var r=dn(this.message,t);if(r===void 0)throw Error("Offset "+t+" is at invalid UTF-16 code unit boundary");return r},e.prototype.error=function(t,r){return{val:null,err:{kind:t,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(hn(this.message,t,this.offset())){for(var r=0;r<t.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var r=this.offset(),n=this.message.indexOf(t,r);return n>=0?(this.bumpTo(n),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset "+t+" must be greater than or equal to the current offset "+this.offset());for(t=Math.min(t,this.message.length);;){var r=this.offset();if(r===t)break;if(r>t)throw Error("targetOffset "+t+" is at invalid UTF-16 code unit boundary");if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&fn(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),r=this.offset(),n=this.message.charCodeAt(r+(t>=65536?2:1));return n??null},e}();function Ut(e){return e>=97&&e<=122||e>=65&&e<=90}function na(e){return Ut(e)||e===47}function oa(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function fn(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function aa(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function zt(e){e.forEach(function(t){if(delete t.location,Ke(t)||Qe(t))for(var r in t.options)delete t.options[r].location,zt(t.options[r].value);else We(t)&&Je(t.style)||(qe(t)||Xe(t))&&Pe(t.style)?delete t.style.location:Ze(t)&&zt(t.children)})}function gn(e,t){t===void 0&&(t={}),t=b({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var r=new pn(e,t).parse();if(r.err){var n=SyntaxError(x[r.err.kind]);throw n.location=r.err.location,n.originalMessage=r.err.message,n}return t?.captureLocation||zt(r.val),r.val}function Ce(e,t){var r=t&&t.cache?t.cache:ma,n=t&&t.serializer?t.serializer:ha,o=t&&t.strategy?t.strategy:sa;return o(e,{cache:r,serializer:n})}function ia(e){return e==null||typeof e=="number"||typeof e=="boolean"}function xn(e,t,r,n){var o=ia(n)?n:r(n),a=t.get(o);return typeof a>"u"&&(a=e.call(this,n),t.set(o,a)),a}function vn(e,t,r){var n=Array.prototype.slice.call(arguments,3),o=r(n),a=t.get(o);return typeof a>"u"&&(a=e.apply(this,n),t.set(o,a)),a}function Gt(e,t,r,n,o){return r.bind(t,e,n,o)}function sa(e,t){var r=e.length===1?xn:vn;return Gt(e,this,r,t.cache.create(),t.serializer)}function ca(e,t){return Gt(e,this,vn,t.cache.create(),t.serializer)}function la(e,t){return Gt(e,this,xn,t.cache.create(),t.serializer)}var ha=function(){return JSON.stringify(arguments)};function Ft(){this.cache=Object.create(null)}Ft.prototype.get=function(e){return this.cache[e]};Ft.prototype.set=function(e,t){this.cache[e]=t};var ma={create:function(){return new Ft}},et={variadic:ca,monadic:la};var Y;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Y||(Y={}));var Ne=function(e){Le(t,e);function t(r,n,o){var a=e.call(this,r)||this;return a.code=n,a.originalMessage=o,a}return t.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},t}(Error);var $t=function(e){Le(t,e);function t(r,n,o,a){return e.call(this,'Invalid values for "'+r+'": "'+n+'". Options are "'+Object.keys(o).join('", "')+'"',Y.INVALID_VALUE,a)||this}return t}(Ne);var yn=function(e){Le(t,e);function t(r,n,o){return e.call(this,'Value for "'+r+'" must be of type '+n,Y.INVALID_VALUE,o)||this}return t}(Ne);var bn=function(e){Le(t,e);function t(r,n){return e.call(this,'The intl string context variable "'+r+'" was not provided to the string "'+n+'"',Y.MISSING_VALUE,n)||this}return t}(Ne);var P;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(P||(P={}));function da(e){return e.length<2?e:e.reduce(function(t,r){var n=t[t.length-1];return!n||n.type!==P.literal||r.type!==P.literal?t.push(r):n.value+=r.value,t},[])}function ua(e){return typeof e=="function"}function Re(e,t,r,n,o,a,i){if(e.length===1&&Nt(e[0]))return[{type:P.literal,value:e[0].value}];for(var s=[],c=0,l=e;c<l.length;c++){var h=l[c];if(Nt(h)){s.push({type:P.literal,value:h.value});continue}if(Qr(h)){typeof a=="number"&&s.push({type:P.literal,value:r.getNumberFormat(t).format(a)});continue}var p=h.value;if(!(o&&p in o))throw new bn(p,i);var u=o[p];if(Kr(h)){(!u||typeof u=="string"||typeof u=="number")&&(u=typeof u=="string"||typeof u=="number"?String(u):""),s.push({type:typeof u=="string"?P.literal:P.object,value:u});continue}if(qe(h)){var v=typeof h.style=="string"?n.date[h.style]:Pe(h.style)?h.style.parsedOptions:void 0;s.push({type:P.literal,value:r.getDateTimeFormat(t,v).format(u)});continue}if(Xe(h)){var v=typeof h.style=="string"?n.time[h.style]:Pe(h.style)?h.style.parsedOptions:void 0;s.push({type:P.literal,value:r.getDateTimeFormat(t,v).format(u)});continue}if(We(h)){var v=typeof h.style=="string"?n.number[h.style]:Je(h.style)?h.style.parsedOptions:void 0;v&&v.scale&&(u=u*(v.scale||1)),s.push({type:P.literal,value:r.getNumberFormat(t,v).format(u)});continue}if(Ze(h)){var g=h.children,E=h.value,R=o[E];if(!ua(R))throw new yn(E,"function",i);var Q=Re(g,t,r,n,o,a),U=R(Q.map(function(D){return D.value}));Array.isArray(U)||(U=[U]),s.push.apply(s,U.map(function(D){return{type:typeof D=="string"?P.literal:P.object,value:D}}))}if(Ke(h)){var O=h.options[u]||h.options.other;if(!O)throw new $t(h.value,u,Object.keys(h.options),i);s.push.apply(s,Re(O.value,t,r,n,o));continue}if(Qe(h)){var O=h.options["="+u];if(!O){if(!Intl.PluralRules)throw new Ne(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Y.MISSING_INTL_API,i);var Z=r.getPluralRules(t,{type:h.pluralType}).select(u-(h.offset||0));O=h.options[Z]||h.options.other}if(!O)throw new $t(h.value,u,Object.keys(h.options),i);s.push.apply(s,Re(O.value,t,r,n,o,u-(h.offset||0)));continue}}return da(s)}function pa(e,t){return t?b(b(b({},e||{}),t||{}),Object.keys(e).reduce(function(r,n){return r[n]=b(b({},e[n]),t[n]||{}),r},{})):e}function fa(e,t){return t?Object.keys(e).reduce(function(r,n){return r[n]=pa(e[n],t[n]),r},b({},e)):e}function Ht(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}function ga(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ce(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.NumberFormat).bind.apply(t,Ye([void 0],r)))},{cache:Ht(e.number),strategy:et.variadic}),getDateTimeFormat:Ce(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.DateTimeFormat).bind.apply(t,Ye([void 0],r)))},{cache:Ht(e.dateTime),strategy:et.variadic}),getPluralRules:Ce(function(){for(var t,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new((t=Intl.PluralRules).bind.apply(t,Ye([void 0],r)))},{cache:Ht(e.pluralRules),strategy:et.variadic})}}var En=function(){function e(t,r,n,o){var a=this;if(r===void 0&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(i){var s=a.formatToParts(i);if(s.length===1)return s[0].value;var c=s.reduce(function(l,h){return!l.length||h.type!==P.literal||typeof l[l.length-1]!="string"?l.push(h.value):l[l.length-1]+=h.value,l},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(i){return Re(a.ast,a.locales,a.formatters,a.formats,i,void 0,a.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:o?.ignoreTag})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=fa(e.formats,n),this.locales=r,this.formatters=o&&o.formatters||ga(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.__parse=gn,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();var wn=En;var xa=/[0-9\-+#]/,va=/[^\d\-+#]/g;function Sn(e){return e.search(xa)}function ya(e="#.##"){let t={},r=e.length,n=Sn(e);t.prefix=n>0?e.substring(0,n):"";let o=Sn(e.split("").reverse().join("")),a=r-o,i=e.substring(a,a+1),s=a+(i==="."||i===","?1:0);t.suffix=o>0?e.substring(s,r):"",t.mask=e.substring(n,s),t.maskHasNegativeSign=t.mask.charAt(0)==="-",t.maskHasPositiveSign=t.mask.charAt(0)==="+";let c=t.mask.match(va);return t.decimal=c&&c[c.length-1]||".",t.separator=c&&c[1]&&c[0]||",",c=t.mask.split(t.decimal),t.integer=c[0],t.fraction=c[1],t}function ba(e,t,r){let n=!1,o={value:e};e<0&&(n=!0,o.value=-o.value),o.sign=n?"-":"",o.value=Number(o.value).toFixed(t.fraction&&t.fraction.length),o.value=Number(o.value).toString();let a=t.fraction&&t.fraction.lastIndexOf("0"),[i="0",s=""]=o.value.split(".");return(!s||s&&s.length<=a)&&(s=a<0?"":(+("0."+s)).toFixed(a+1).replace("0.","")),o.integer=i,o.fraction=s,Ea(o,t),(o.result==="0"||o.result==="")&&(n=!1,o.sign=""),!n&&t.maskHasPositiveSign?o.sign="+":n&&t.maskHasPositiveSign?o.sign="-":n&&(o.sign=r&&r.enforceMaskSign&&!t.maskHasNegativeSign?"":"-"),o}function Ea(e,t){e.result="";let r=t.integer.split(t.separator),n=r.join(""),o=n&&n.indexOf("0");if(o>-1)for(;e.integer.length<n.length-o;)e.integer="0"+e.integer;else Number(e.integer)===0&&(e.integer="");let a=r[1]&&r[r.length-1].length;if(a){let i=e.integer.length,s=i%a;for(let c=0;c<i;c++)e.result+=e.integer.charAt(c),!((c-s+1)%a)&&c<i-a&&(e.result+=t.separator)}else e.result=e.integer;return e.result+=t.fraction&&e.fraction?t.decimal+e.fraction:"",e}function wa(e,t,r={}){if(!e||isNaN(Number(t)))return t;let n=ya(e),o=ba(t,n,r);return n.prefix+o.sign+o.result+n.suffix}var An=wa;var Tn=".",Sa=",",Ln=/^\s+/,Pn=/\s+$/,_n="&nbsp;",Vt=e=>e*12,Cn=(e,t)=>{let{start:r,end:n,displaySummary:{amount:o,duration:a,minProductQuantity:i,outcomeType:s}={}}=e;if(!(o&&a&&s&&i))return!1;let c=t?new Date(t):new Date;if(!r||!n)return!1;let l=new Date(r),h=new Date(n);return c>=l&&c<=h},W={MONTH:"MONTH",YEAR:"YEAR"},Aa={[_.ANNUAL]:12,[_.MONTHLY]:1,[_.THREE_YEARS]:36,[_.TWO_YEARS]:24},Bt=(e,t)=>({accept:e,round:t}),Ta=[Bt(({divisor:e,price:t})=>t%e==0,({divisor:e,price:t})=>t/e),Bt(({usePrecision:e})=>e,({divisor:e,price:t})=>Math.round(t/e*100)/100),Bt(()=>!0,({divisor:e,price:t})=>Math.ceil(Math.floor(t*100/e)/100))],jt={[C.YEAR]:{[_.MONTHLY]:W.MONTH,[_.ANNUAL]:W.YEAR},[C.MONTH]:{[_.MONTHLY]:W.MONTH}},_a=(e,t)=>e.indexOf(`'${t}'`)===0,La=(e,t=!0)=>{let r=e.replace(/'.*?'/,"").trim(),n=Rn(r);return!!n?t||(r=r.replace(/[,\.]0+/,n)):r=r.replace(/\s?(#.*0)(?!\s)?/,"$&"+Ca(e)),r},Pa=e=>{let t=Na(e),r=_a(e,t),n=e.replace(/'.*?'/,""),o=Ln.test(n)||Pn.test(n);return{currencySymbol:t,isCurrencyFirst:r,hasCurrencySpace:o}},Nn=e=>e.replace(Ln,_n).replace(Pn,_n),Ca=e=>e.match(/#(.?)#/)?.[1]===Tn?Sa:Tn,Na=e=>e.match(/'(.*?)'/)?.[1]??"",Rn=e=>e.match(/0(.?)0/)?.[1]??"";function pe({formatString:e,price:t,usePrecision:r,isIndianPrice:n=!1},o,a=i=>i){let{currencySymbol:i,isCurrencyFirst:s,hasCurrencySpace:c}=Pa(e),l=r?Rn(e):"",h=La(e,r),p=r?2:0,u=a(t,{currencySymbol:i}),v=n?u.toLocaleString("hi-IN",{minimumFractionDigits:p,maximumFractionDigits:p}):An(h,u),g=r?v.lastIndexOf(l):v.length,E=v.substring(0,g),R=v.substring(g+1);return{accessiblePrice:e.replace(/'.*?'/,"SYMBOL").replace(/#.*0/,v).replace(/SYMBOL/,i),currencySymbol:i,decimals:R,decimalsDelimiter:l,hasCurrencySpace:c,integer:E,isCurrencyFirst:s,recurrenceTerm:o}}var On=e=>{let{commitment:t,term:r,usePrecision:n}=e,o=Aa[r]??1;return pe(e,o>1?W.MONTH:jt[t]?.[r],a=>{let i={divisor:o,price:a,usePrecision:n},{round:s}=Ta.find(({accept:c})=>c(i));if(!s)throw new Error(`Missing rounding rule for: ${JSON.stringify(i)}`);return s(i)})},Mn=({commitment:e,term:t,...r})=>pe(r,jt[e]?.[t]),kn=e=>{let{commitment:t,instant:r,price:n,originalPrice:o,priceWithoutDiscount:a,promotion:i,quantity:s=1,term:c}=e;if(t===C.YEAR&&c===_.MONTHLY){if(!i)return pe(e,W.YEAR,Vt);let{displaySummary:{outcomeType:l,duration:h,minProductQuantity:p=1}={}}=i;switch(l){case"PERCENTAGE_DISCOUNT":if(s>=p&&Cn(i,r)){let u=parseInt(h.replace("P","").replace("M",""));if(isNaN(u))return Vt(n);let v=s*o*u,g=s*a*(12-u),E=Math.floor((v+g)*100)/100;return pe({...e,price:E},W.YEAR)}default:return pe(e,W.YEAR,()=>Vt(a??n))}}return pe(e,jt[t]?.[c])};var Ra={recurrenceLabel:"{recurrenceTerm, select, MONTH {/mo} YEAR {/yr} other {}}",recurrenceAriaLabel:"{recurrenceTerm, select, MONTH {per month} YEAR {per year} other {}}",perUnitLabel:"{perUnit, select, LICENSE {per license} other {}}",perUnitAriaLabel:"{perUnit, select, LICENSE {per license} other {}}",freeLabel:"Free",freeAriaLabel:"Free",taxExclusiveLabel:"{taxTerm, select, GST {excl. GST} VAT {excl. VAT} TAX {excl. tax} IVA {excl. IVA} SST {excl. SST} KDV {excl. KDV} other {}}",taxInclusiveLabel:"{taxTerm, select, GST {incl. GST} VAT {incl. VAT} TAX {incl. tax} IVA {incl. IVA} SST {incl. SST} KDV {incl. KDV} other {}}",alternativePriceAriaLabel:"Alternatively at {alternativePrice}",strikethroughAriaLabel:"Regularly at {strikethroughPrice}"},Oa=Vr("ConsonantTemplates/price"),Ma=/<\/?[^>]+(>|$)/g,L={container:"price",containerOptical:"price-optical",containerStrikethrough:"price-strikethrough",containerAnnual:"price-annual",containerAnnualPrefix:"price-annual-prefix",containerAnnualSuffix:"price-annual-suffix",disabled:"disabled",currencySpace:"price-currency-space",currencySymbol:"price-currency-symbol",decimals:"price-decimals",decimalsDelimiter:"price-decimals-delimiter",integer:"price-integer",recurrence:"price-recurrence",taxInclusivity:"price-tax-inclusivity",unitType:"price-unit-type"},q={perUnitLabel:"perUnitLabel",perUnitAriaLabel:"perUnitAriaLabel",recurrenceLabel:"recurrenceLabel",recurrenceAriaLabel:"recurrenceAriaLabel",taxExclusiveLabel:"taxExclusiveLabel",taxInclusiveLabel:"taxInclusiveLabel",strikethroughAriaLabel:"strikethroughAriaLabel"},ka="TAX_EXCLUSIVE",Ia=e=>Hr(e)?Object.entries(e).filter(([,t])=>Ae(t)||_t(t)||t===!0).reduce((t,[r,n])=>t+` ${r}${n===!0?"":'="'+Fr(n)+'"'}`,""):"",N=(e,t,r,n=!1)=>`<span class="${e}${t?"":" "+L.disabled}"${Ia(r)}>${n?Nn(t):t??""}</span>`;function Da(e,{accessibleLabel:t,currencySymbol:r,decimals:n,decimalsDelimiter:o,hasCurrencySpace:a,integer:i,isCurrencyFirst:s,recurrenceLabel:c,perUnitLabel:l,taxInclusivityLabel:h},p={}){let u=N(L.currencySymbol,r),v=N(L.currencySpace,a?"&nbsp;":""),g="";return s&&(g+=u+v),g+=N(L.integer,i),g+=N(L.decimalsDelimiter,o),g+=N(L.decimals,n),s||(g+=v+u),g+=N(L.recurrence,c,null,!0),g+=N(L.unitType,l,null,!0),g+=N(L.taxInclusivity,h,!0),N(e,g,{...p,"aria-label":t})}var I=({displayOptical:e=!1,displayStrikethrough:t=!1,displayAnnual:r=!1,instant:n=void 0}={})=>({country:o,displayFormatted:a=!0,displayRecurrence:i=!0,displayPerUnit:s=!1,displayTax:c=!1,language:l,literals:h={},quantity:p=1}={},{commitment:u,offerSelectorIds:v,formatString:g,price:E,priceWithoutDiscount:R,taxDisplay:Q,taxTerm:U,term:O,usePrecision:Z,promotion:D}={},ge={})=>{Object.entries({country:o,formatString:g,language:l,price:E}).forEach(([G,st])=>{if(st==null)throw new Error(`Argument "${G}" is missing for osi ${v?.toString()}, country ${o}, language ${l}`)});let oo={...Ra,...h},ao=`${l.toLowerCase()}-${o.toUpperCase()}`;function J(G,st){let ct=oo[G];if(ct==null)return"";try{return new wn(ct.replace(Ma,""),ao).format(st)}catch{return Oa.error("Failed to format literal:",ct),""}}let io=t&&R?R:E,rr=e?On:Mn;r&&(rr=kn);let{accessiblePrice:so,recurrenceTerm:ot,...nr}=rr({commitment:u,formatString:g,instant:n,isIndianPrice:o==="IN",originalPrice:E,priceWithoutDiscount:R,price:e?E:io,promotion:D,quantity:p,term:O,usePrecision:Z}),ee=so,at="";if(M(i)&&ot){let G=J(q.recurrenceAriaLabel,{recurrenceTerm:ot});G&&(ee+=" "+G),at=J(q.recurrenceLabel,{recurrenceTerm:ot})}let it="";if(M(s)){it=J(q.perUnitLabel,{perUnit:"LICENSE"});let G=J(q.perUnitAriaLabel,{perUnit:"LICENSE"});G&&(ee+=" "+G)}let xe="";M(c)&&U&&(xe=J(Q===ka?q.taxExclusiveLabel:q.taxInclusiveLabel,{taxTerm:U}),xe&&(ee+=" "+xe)),t&&(ee=J(q.strikethroughAriaLabel,{strikethroughPrice:ee}));let ve=L.container;if(e&&(ve+=" "+L.containerOptical),t&&(ve+=" "+L.containerStrikethrough),r&&(ve+=" "+L.containerAnnual),M(a))return Da(ve,{...nr,accessibleLabel:ee,recurrenceLabel:at,perUnitLabel:it,taxInclusivityLabel:xe},ge);let{currencySymbol:or,decimals:co,decimalsDelimiter:lo,hasCurrencySpace:ar,integer:ho,isCurrencyFirst:mo}=nr,te=[ho,lo,co];mo?(te.unshift(ar?"\xA0":""),te.unshift(or)):(te.push(ar?"\xA0":""),te.push(or)),te.push(at,it,xe);let uo=te.join("");return N(ve,uo,ge)},In=()=>(e,t,r)=>{let o=(e.displayOldPrice===void 0||M(e.displayOldPrice))&&t.priceWithoutDiscount&&t.priceWithoutDiscount!=t.price;return`${I()(e,t,r)}${o?"&nbsp;"+I({displayStrikethrough:!0})(e,t,r):""}`},Dn=()=>(e,t,r)=>{let{instant:n}=e;try{n||(n=new URLSearchParams(document.location.search).get("instant")),n&&(n=new Date(n))}catch{n=void 0}let o={...e,displayTax:!1,displayPerUnit:!1};return`${(e.displayOldPrice===void 0||M(e.displayOldPrice))&&t.priceWithoutDiscount&&t.priceWithoutDiscount!=t.price?I({displayStrikethrough:!0})(o,t,r)+"&nbsp;":""}${I()(e,t,r)}${N(L.containerAnnualPrefix,"&nbsp;(")}${I({displayAnnual:!0,instant:n})(o,t,r)}${N(L.containerAnnualSuffix,")")}`},Un=()=>(e,t,r)=>{let n={...e,displayTax:!1,displayPerUnit:!1};return`${I()(e,t,r)}${N(L.containerAnnualPrefix,"&nbsp;(")}${I({displayAnnual:!0})(n,t,r)}${N(L.containerAnnualSuffix,")")}`};var Ua=I(),za=In(),Ga=I({displayOptical:!0}),Fa=I({displayStrikethrough:!0}),$a=I({displayAnnual:!0}),Ha=Un(),Va=Dn();var Ba=(e,t)=>{if(!(!_e(e)||!_e(t)))return Math.floor((t-e)/t*100)},zn=()=>(e,t)=>{let{price:r,priceWithoutDiscount:n}=t,o=Ba(r,n);return o===void 0?'<span class="no-discount"></span>':`<span class="discount">${o}%</span>`};var ja=zn();var{freeze:Oe}=Object,Yt=Oe({...we}),Wt=Oe({...Se}),qt={STAGE:"STAGE",PRODUCTION:"PRODUCTION",LOCAL:"LOCAL"},id=Oe({...C}),sd=Oe({...Xr}),cd=Oe({..._});var Fn="mas-commerce-service";function $n(e,{once:t=!1}={}){let r=null;function n(){let o=document.querySelector(Fn);o!==r&&(r=o,o&&e(o))}return document.addEventListener(dt,n,{once:t}),Me(n),()=>document.removeEventListener(dt,n)}function Hn(e,{country:t,forceTaxExclusive:r,perpetual:n}){let o;if(e.length<2)o=e;else{let a=t==="GB"||n?"EN":"MULT",[i,s]=e;o=[i.language===a?i:s]}return r&&(o=o.map(Pt)),o}var Me=e=>window.setTimeout(e);function X(){return document.getElementsByTagName(Fn)?.[0]}var K={clientId:"merch-at-scale",delimiter:"\xB6",ignoredProperties:["analytics","literals"],serializableTypes:["Array","Object"],sampleRate:1,tags:"acom",isProdDomain:!1},Vn=1e3,Bn=new Set;function qa(e){return e instanceof Error||typeof e?.originatingRequest=="string"}function jn(e){if(e==null)return;let t=typeof e;if(t==="function")return e.name?`function ${e.name}`:"function";if(t==="object"){if(e instanceof Error)return e.message;if(typeof e.originatingRequest=="string"){let{message:n,originatingRequest:o,status:a}=e;return[n,a,o].filter(Boolean).join(" ")}let r=e[Symbol.toStringTag]??Object.getPrototypeOf(e).constructor.name;if(!K.serializableTypes.includes(r))return r}return e}function Xa(e,t){if(!K.ignoredProperties.includes(e))return jn(t)}var Xt={append(e){if(e.level!=="error")return;let{message:t,params:r}=e,n=[],o=[],a=t;r.forEach(l=>{l!=null&&(qa(l)?n:o).push(l)}),n.length&&(a+=" "+n.map(jn).join(" "));let{pathname:i,search:s}=window.location,c=`${K.delimiter}page=${i}${s}`;c.length>Vn&&(c=`${c.slice(0,Vn)}<trunc>`),a+=c,o.length&&(a+=`${K.delimiter}facts=`,a+=JSON.stringify(o,Xa)),Bn.has(a)||(Bn.add(a),window.lana?.log(a,K))}};function Yn(e){Object.assign(K,Object.fromEntries(Object.entries(e).filter(([t,r])=>t in K&&r!==""&&r!==null&&r!==void 0&&!Number.isNaN(r))))}var Ka=Object.freeze({checkoutClientId:"adobe_com",checkoutWorkflow:Yt.V3,checkoutWorkflowStep:Wt.EMAIL,country:"US",displayOldPrice:!0,displayPerUnit:!1,displayRecurrence:!0,displayTax:!1,env:qt.PRODUCTION,forceTaxExclusive:!1,language:"en",entitlement:!1,extraOptions:{},modal:!1,promotionCode:"",quantity:1,wcsApiKey:"wcms-commerce-ims-ro-user-milo",wcsBufferDelay:1,wcsURL:"https://www.adobe.com/web_commerce_artifact",landscape:ft.PUBLISHED,wcsBufferLimit:1});var Kt=Object.freeze({LOCAL:"local",PROD:"prod",STAGE:"stage"});var Qt={DEBUG:"debug",ERROR:"error",INFO:"info",WARN:"warn"},Qa=Date.now(),Zt=new Set,Jt=new Set,Wn=new Map,qn={append({level:e,message:t,params:r,timestamp:n,source:o}){console[e](`${n}ms [${o}] %c${t}`,"font-weight: bold;",...r)}},Xn={filter:({level:e})=>e!==Qt.DEBUG},Za={filter:()=>!1};function Ja(e,t,r,n,o){return{level:e,message:t,namespace:r,get params(){return n.length===1&&Te(n[0])&&(n=n[0](),Array.isArray(n)||(n=[n])),n},source:o,timestamp:Date.now()-Qa}}function ei(e){[...Jt].every(t=>t(e))&&Zt.forEach(t=>t(e))}function Kn(e){let t=(Wn.get(e)??0)+1;Wn.set(e,t);let r=`${e} #${t}`,n={id:r,namespace:e,module:o=>Kn(`${n.namespace}/${o}`),updateConfig:Yn};return Object.values(Qt).forEach(o=>{n[o]=(a,...i)=>ei(Ja(o,a,e,i,r))}),Object.seal(n)}function tt(...e){e.forEach(t=>{let{append:r,filter:n}=t;Te(n)&&Jt.add(n),Te(r)&&Zt.add(r)})}function ti(e={}){let{name:t}=e,r=M(de("commerce.debug",{search:!0,storage:!0}),t===Kt.LOCAL);return tt(r?qn:Xn),t===Kt.PROD&&tt(Xt),er}function ri(){Zt.clear(),Jt.clear()}var er={...Kn(Sr),Level:Qt,Plugins:{consoleAppender:qn,debugFilter:Xn,quietFilter:Za,lanaAppender:Xt},init:ti,reset:ri,use:tt};var ni={[$]:vr,[V]:yr,[H]:br},oi={[$]:Er,[H]:wr},rt=class{constructor(t){f(this,"changes",new Map);f(this,"connected",!1);f(this,"dispose",ue);f(this,"error");f(this,"log");f(this,"options");f(this,"promises",[]);f(this,"state",V);f(this,"timer",null);f(this,"value");f(this,"version",0);f(this,"wrapperElement");this.wrapperElement=t}update(){[$,V,H].forEach(t=>{this.wrapperElement.classList.toggle(ni[t],t===this.state)})}notify(){(this.state===H||this.state===$)&&(this.state===H?this.promises.forEach(({resolve:t})=>t(this.wrapperElement)):this.state===$&&this.promises.forEach(({reject:t})=>t(this.error)),this.promises=[]),this.wrapperElement.dispatchEvent(new CustomEvent(oi[this.state],{bubbles:!0}))}attributeChangedCallback(t,r,n){this.changes.set(t,n),this.requestUpdate()}connectedCallback(){this.dispose=$n(()=>this.requestUpdate(!0))}disconnectedCallback(){this.connected&&(this.connected=!1,this.log?.debug("Disconnected:",{element:this.wrapperElement})),this.dispose(),this.dispose=ue}onceSettled(){let{error:t,promises:r,state:n}=this;return H===n?Promise.resolve(this.wrapperElement):$===n?Promise.reject(t):new Promise((o,a)=>{r.push({resolve:o,reject:a})})}toggleResolved(t,r,n){return t!==this.version?!1:(n!==void 0&&(this.options=n),this.state=H,this.value=r,this.update(),this.log?.debug("Resolved:",{element:this.wrapperElement,value:r}),Me(()=>this.notify()),!0)}toggleFailed(t,r,n){return t!==this.version?!1:(n!==void 0&&(this.options=n),this.error=r,this.state=$,this.update(),this.log?.error("Failed:",{element:this.wrapperElement,error:r}),Me(()=>this.notify()),!0)}togglePending(t){return this.version++,t&&(this.options=t),this.state=V,this.update(),this.log?.debug("Pending:",{osi:this.wrapperElement?.options?.wcsOsi}),this.version}requestUpdate(t=!1){if(!this.wrapperElement.isConnected||!X()||this.timer)return;let r=er.module("mas-element"),{error:n,options:o,state:a,value:i,version:s}=this;this.state=V,this.timer=Me(async()=>{this.timer=null;let c=null;if(this.changes.size&&(c=Object.fromEntries(this.changes.entries()),this.changes.clear()),this.connected?this.log?.debug("Updated:",{element:this.wrapperElement,changes:c}):(this.connected=!0,this.log?.debug("Connected:",{element:this.wrapperElement,changes:c})),c||t)try{await this.wrapperElement.render?.()===!1&&this.state===V&&this.version===s&&(this.state=a,this.error=n,this.value=i,this.update(),this.notify())}catch(l){r.error("Failed to render mas-element: ",l),this.toggleFailed(this.version,l,o)}})}};function Qn(e={}){return Object.entries(e).forEach(([t,r])=>{(r==null||r===""||r?.length===0)&&delete e[t]}),e}function Zn(e,t={}){let{tag:r,is:n}=e,o=document.createElement(r,{is:n});return o.setAttribute("is",n),Object.assign(o.dataset,Qn(t)),o}function Jn(e,t={}){return e instanceof HTMLElement?(Object.assign(e.dataset,Qn(t)),e):null}var ai="download",ii="upgrade";function eo(e,t={},r=""){let n=X();if(!n)return null;let{checkoutMarketSegment:o,checkoutWorkflow:a,checkoutWorkflowStep:i,entitlement:s,upgrade:c,modal:l,perpetual:h,promotionCode:p,quantity:u,wcsOsi:v,extraOptions:g}=n.collectCheckoutOptions(t),E=Zn(e,{checkoutMarketSegment:o,checkoutWorkflow:a,checkoutWorkflowStep:i,entitlement:s,upgrade:c,modal:l,perpetual:h,promotionCode:p,quantity:u,wcsOsi:v,extraOptions:g});return r&&(E.innerHTML=`<span style="pointer-events: none;">${r}</span>`),E}function to(e){return class extends e{constructor(){super(...arguments);f(this,"checkoutActionHandler");f(this,"masElement",new rt(this))}attributeChangedCallback(n,o,a){this.masElement.attributeChangedCallback(n,o,a)}connectedCallback(){this.masElement.connectedCallback(),this.addEventListener("click",this.clickHandler)}disconnectedCallback(){this.masElement.disconnectedCallback(),this.removeEventListener("click",this.clickHandler)}onceSettled(){return this.masElement.onceSettled()}get value(){return this.masElement.value}get options(){return this.masElement.options}requestUpdate(n=!1){return this.masElement.requestUpdate(n)}static get observedAttributes(){return["data-checkout-workflow","data-checkout-workflow-step","data-extra-options","data-ims-country","data-perpetual","data-promotion-code","data-quantity","data-template","data-wcs-osi","data-entitlement","data-upgrade","data-modal"]}async render(n={}){if(!this.isConnected)return!1;let o=X();if(!o)return!1;this.dataset.imsCountry||o.imsCountryPromise.then(p=>{p&&(this.dataset.imsCountry=p)},ue),n.imsCountry=null;let a=o.collectCheckoutOptions(n,this);if(!a.wcsOsi.length)return!1;let i;try{i=JSON.parse(a.extraOptions??"{}")}catch(p){this.masElement.log?.error("cannot parse exta checkout options",p)}let s=this.masElement.togglePending(a);this.setCheckoutUrl("");let c=o.resolveOfferSelectors(a),l=await Promise.all(c);l=l.map(p=>Hn(p,a)),a.country=this.dataset.imsCountry||a.country;let h=await o.buildCheckoutAction?.(l.flat(),{...i,...a},this);return this.renderOffers(l.flat(),a,{},h,s)}add3in1ModalParams(n,o){try{let a=new URL(n);return a.searchParams.set("ctx","if"),o===be.CRM&&a.searchParams.set("af","uc_segmentation_hide_tabs"),a.toString()}catch{}}setModalType(n,o){try{let i=new URL(o).searchParams.get("modal");if([be.TWP,be.D2P,be.CRM].includes(i))return n?.setAttribute("data-modal-type",i),i}catch{}}renderOffers(n,o,a={},i=void 0,s=void 0){if(!this.isConnected)return!1;let c=X();if(!c)return!1;o={...JSON.parse(this.dataset.extraOptions??"null"),...o,...a},s??(s=this.masElement.togglePending(o)),this.checkoutActionHandler&&(this.checkoutActionHandler=void 0);let h;if(i){this.classList.remove(ai,ii),this.masElement.toggleResolved(s,n,o);let{url:p,text:u,className:v,handler:g}=i;if(p&&(this.setCheckoutUrl(p),h=this.setModalType(this,p)),u&&(this.firstElementChild.innerHTML=u),v&&this.classList.add(...v.split(" ")),g&&(this.setCheckoutUrl("#"),this.checkoutActionHandler=g.bind(this)),!h)return!0}if(n.length){if(this.masElement.toggleResolved(s,n,o)){let p=c.buildCheckoutURL(n,o),u=i&&h?this.add3in1ModalParams(p,h):p;return this.setCheckoutUrl(u),!0}}else{let p=new Error(`Not provided: ${o?.wcsOsi??"-"}`);if(this.masElement.toggleFailed(s,p,o))return this.setCheckoutUrl("#"),!0}}setCheckoutUrl(){}clickHandler(n){}updateOptions(n={}){let o=X();if(!o)return!1;let{checkoutMarketSegment:a,checkoutWorkflow:i,checkoutWorkflowStep:s,entitlement:c,upgrade:l,modal:h,perpetual:p,promotionCode:u,quantity:v,wcsOsi:g}=o.collectCheckoutOptions(n);return Jn(this,{checkoutMarketSegment:a,checkoutWorkflow:i,checkoutWorkflowStep:s,entitlement:c,upgrade:l,modal:h,perpetual:p,promotionCode:u,quantity:v,wcsOsi:g}),!0}}}var ke=class ke extends to(HTMLButtonElement){static createCheckoutButton(t={},r=""){return eo(ke,t,r)}setCheckoutUrl(t){this.setAttribute("data-href",t)}get href(){return this.getAttribute("data-href")}get isCheckoutButton(){return!0}clickHandler(t){if(this.checkoutActionHandler){this.checkoutActionHandler?.(t);return}this.href&&(window.location.href=this.href)}};f(ke,"is","checkout-button"),f(ke,"tag","button");var fe=ke;window.customElements.get(fe.is)||window.customElements.define(fe.is,fe,{extends:fe.tag});var si="#000000",ci="#F8D904",li=/(accent|primary|secondary)(-(outline|link))?/,hi="mas:product_code/",mi="daa-ll",nt="daa-lh",di=["XL","L","M","S"];function ui(e,t,r){e.mnemonicIcon?.map((o,a)=>({icon:o,alt:e.mnemonicAlt[a]??"",link:e.mnemonicLink[a]??""}))?.forEach(({icon:o,alt:a,link:i})=>{if(i&&!/^https?:/.test(i))try{i=new URL(`https://${i}`).href.toString()}catch{i="#"}let s={slot:"icons",src:o,size:r?.size??"l"};a&&(s.alt=a),i&&(s.href=i);let c=z("merch-icon",s);t.append(c)})}function pi(e,t){e.badge&&(t.setAttribute("badge-text",e.badge),t.setAttribute("badge-color",e.badgeColor||si),t.setAttribute("badge-background-color",e.badgeBackgroundColor||ci))}function fi(e,t,r){r?.includes(e.size)&&t.setAttribute("size",e.size)}function gi(e,t,r){e.cardTitle&&r&&t.append(z(r.tag,{slot:r.slot},e.cardTitle))}function xi(e,t,r){e.subtitle&&r&&t.append(z(r.tag,{slot:r.slot},e.subtitle))}function vi(e,t,r){if(r?.tag&&e.backgroundImage){let n={loading:"lazy",src:e.backgroundImage};e.backgroundImageAltText?n.alt=e.backgroundImageAltText:n.role="none",t.append(z(r.tag,{slot:r.slot},z("img",n)))}r?.attribute&&t.setAttribute(r.attribute,e.backgroundImage)}function yi(e,t,r){if(e.prices&&r){let n=z(r.tag,{slot:r.slot},e.prices);t.append(n)}}function bi(e,t,r){if(e.description&&r){let n=z(r.tag,{slot:r.slot},e.description);t.append(n)}}function Ei(e,t,r,n){let a=customElements.get("checkout-button").createCheckoutButton({},e.innerHTML);a.setAttribute("tabindex",0);for(let h of e.attributes)["class","is"].includes(h.name)||a.setAttribute(h.name,h.value);a.firstElementChild?.classList.add("spectrum-Button-label");let i=t.ctas.size??"M",s=`spectrum-Button--${n}`,c=di.includes(i)?`spectrum-Button--size${i}`:"spectrum-Button--sizeM",l=["spectrum-Button",s,c];return r&&l.push("spectrum-Button--outline"),a.classList.add(...l),a}function wi(e,t,r,n){let o="fill";r&&(o="outline");let a=z("sp-button",{treatment:o,variant:n,tabIndex:0,size:t.ctas.size??"m"},e);return a.addEventListener("click",i=>{i.target!==e&&(i.stopPropagation(),e.click())}),a}function Si(e,t){return e.classList.add("con-button"),t&&e.classList.add("blue"),e}function Ai(e,t,r,n){if(e.ctas){let{slot:o}=r.ctas,a=z("div",{slot:o},e.ctas),i=[...a.querySelectorAll("a")].map(s=>{let c=s.parentElement.tagName==="STRONG";if(t.consonant)return Si(s,c);let l=li.exec(s.className)?.[0]??"accent",h=l.includes("accent"),p=l.includes("primary"),u=l.includes("secondary"),v=l.includes("-outline");if(l.includes("-link"))return s;let E;return h||c?E="accent":p?E="primary":u&&(E="secondary"),t.spectrum==="swc"?wi(s,r,v,E):Ei(s,r,v,E)});a.innerHTML="",a.append(...i),t.append(a)}}function Ti(e,t){let{tags:r}=e,n=r?.find(o=>o.startsWith(hi))?.split("/").pop();n&&(t.setAttribute(nt,n),t.querySelectorAll("a[data-analytics-id],button[data-analytics-id]").forEach((o,a)=>{o.setAttribute(mi,`${o.dataset.analyticsId}-${a+1}`)}))}function _i(e){e.spectrum==="css"&&[["primary-link","primary"],["secondary-link","secondary"]].forEach(([t,r])=>{e.querySelectorAll(`a.${t}`).forEach(n=>{n.classList.remove(t),n.classList.add("spectrum-Link",`spectrum-Link--${r}`)})})}async function ro(e,t){let{fields:r}=e,{variant:n}=r;if(!n)return;t.id=e.id,t.querySelectorAll("[slot]").forEach(a=>{a.remove()}),t.removeAttribute("background-image"),t.removeAttribute("badge-background-color"),t.removeAttribute("badge-color"),t.removeAttribute("badge-text"),t.removeAttribute("size"),t.classList.remove("wide-strip"),t.classList.remove("thin-strip"),t.removeAttribute(nt),t.variant=n,await t.updateComplete;let{aemFragmentMapping:o}=t.variantLayout;o&&(ui(r,t,o.mnemonics),pi(r,t),fi(r,t,o.allowedSizes),gi(r,t,o.title),xi(r,t,o.subtitle),yi(r,t,o.prices),vi(r,t,o.backgroundImage,n),bi(r,t,o.description),Ai(r,t,o,n),Ti(r,t),_i(t))}var Pi="merch-card",Ci=":start",Ni=":ready",Ri=1e4,no="merch-card:",Ie,tr,d=class extends Li{constructor(){super();De(this,Ie);f(this,"customerSegment");f(this,"marketSegment");f(this,"variantLayout");this.filters={},this.types="",this.selected=!1,this.spectrum="css",this.handleAemFragmentEvents=this.handleAemFragmentEvents.bind(this)}firstUpdated(){this.variantLayout=bt(this,!1),this.variantLayout?.connectedCallbackHook(),this.aemFragment?.updateComplete.catch(()=>{this.style.display="none"})}willUpdate(r){(r.has("variant")||!this.variantLayout)&&(this.variantLayout=bt(this),this.variantLayout.connectedCallbackHook())}updated(r){(r.has("badgeBackgroundColor")||r.has("borderColor"))&&this.style.setProperty("--consonant-merch-card-border",this.computedBorderStyle),this.variantLayout?.postCardUpdateHook(r)}get theme(){return this.closest("sp-theme")}get dir(){return this.closest("[dir]")?.getAttribute("dir")??"ltr"}get prices(){return Array.from(this.querySelectorAll('span[is="inline-price"][data-wcs-osi]'))}render(){if(!(!this.isConnected||!this.variantLayout||this.style.display==="none"))return this.variantLayout.renderLayout()}get computedBorderStyle(){return["twp","ccd-slice","ccd-suggested"].includes(this.variant)?"":`1px solid ${this.borderColor?this.borderColor:this.badgeBackgroundColor}`}get badgeElement(){return this.shadowRoot.getElementById("badge")}get headingmMSlot(){return this.shadowRoot.querySelector('slot[name="heading-m"]').assignedElements()[0]}get footerSlot(){return this.shadowRoot.querySelector('slot[name="footer"]')?.assignedElements()[0]}get price(){return this.headingmMSlot?.querySelector('span[is="inline-price"]')}get checkoutLinks(){return[...this.footerSlot?.querySelectorAll('a[is="checkout-link"]')??[]]}async toggleStockOffer({target:r}){if(!this.stockOfferOsis)return;let n=this.checkoutLinks;if(n.length!==0)for(let o of n){await o.onceSettled();let a=o.value?.[0]?.planType;if(!a)return;let i=this.stockOfferOsis[a];if(!i)return;let s=o.dataset.wcsOsi.split(",").filter(c=>c!==i);r.checked&&s.push(i),o.dataset.wcsOsi=s.join(",")}}handleQuantitySelection(r){let n=this.checkoutLinks;for(let o of n)o.dataset.quantity=r.detail.option}get titleElement(){return this.querySelector(this.variantLayout?.headingSelector||".card-heading")}get title(){return this.titleElement?.textContent?.trim()}get description(){return this.querySelector('[slot="body-xs"]')?.textContent?.trim()}updateFilters(r){let n={...this.filters};Object.keys(n).forEach(o=>{if(r){n[o].order=Math.min(n[o].order||2,2);return}let a=n[o].order;a===1||isNaN(a)||(n[o].order=Number(a)+1)}),this.filters=n}includes(r){return this.textContent.match(new RegExp(r,"i"))!==null}connectedCallback(){super.connectedCallback();let r=this.querySelector("aem-fragment")?.getAttribute("fragment");performance.mark(`${no}${r}${Ci}`),this.addEventListener(pt,this.handleQuantitySelection),this.addEventListener(ur,this.merchCardReady,{once:!0}),this.updateComplete.then(()=>{this.merchCardReady()}),this.storageOptions?.addEventListener("change",this.handleStorageChange),this.addEventListener($e,this.handleAemFragmentEvents),this.addEventListener(Fe,this.handleAemFragmentEvents),this.aemFragment||setTimeout(()=>this.checkReady(),0)}disconnectedCallback(){super.disconnectedCallback(),this.variantLayout?.disconnectedCallbackHook(),this.removeEventListener(pt,this.handleQuantitySelection),this.storageOptions?.removeEventListener(ut,this.handleStorageChange),this.removeEventListener($e,this.handleAemFragmentEvents),this.removeEventListener(Fe,this.handleAemFragmentEvents)}async handleAemFragmentEvents(r){if(r.type===$e&&mt(this,Ie,tr).call(this,"AEM fragment cannot be loaded"),r.type===Fe&&r.target.nodeName==="AEM-FRAGMENT"){let n=r.detail;await ro(n,this),this.checkReady()}}async checkReady(){let r=Promise.all([...this.querySelectorAll('span[is="inline-price"][data-wcs-osi],a[is="checkout-link"][data-wcs-osi]')].map(a=>a.onceSettled().catch(()=>a))).then(a=>a.every(i=>i.classList.contains("placeholder-resolved"))),n=new Promise(a=>setTimeout(()=>a(!1),Ri));if(await Promise.race([r,n])===!0){performance.mark(`${no}${this.id}${Ni}`),this.dispatchEvent(new CustomEvent(gr,{bubbles:!0,composed:!0}));return}mt(this,Ie,tr).call(this,"Contains unresolved offers")}get aemFragment(){return this.querySelector("aem-fragment")}get storageOptions(){return this.querySelector("sp-radio-group#storage")}get storageSpecificOfferSelect(){let r=this.storageOptions?.selected;if(r){let n=this.querySelector(`merch-offer-select[storage="${r}"]`);if(n)return n}return this.querySelector("merch-offer-select")}get offerSelect(){return this.storageOptions?this.storageSpecificOfferSelect:this.querySelector("merch-offer-select")}get quantitySelect(){return this.querySelector("merch-quantity-select")}displayFooterElementsInColumn(){if(!this.classList.contains("product"))return;let r=this.shadowRoot.querySelector(".secure-transaction-label");(this.footerSlot?.querySelectorAll('a[is="checkout-link"].con-button')).length===2&&r&&r.parentElement.classList.add("footer-column")}merchCardReady(){this.offerSelect&&!this.offerSelect.planType||(this.dispatchEvent(new CustomEvent(pr,{bubbles:!0})),this.displayFooterElementsInColumn())}handleStorageChange(){let r=this.closest("merch-card")?.offerSelect.cloneNode(!0);r&&this.dispatchEvent(new CustomEvent(ut,{detail:{offerSelect:r},bubbles:!0}))}get dynamicPrice(){return this.querySelector('[slot="price"]')}selectMerchOffer(r){if(r===this.merchOffer)return;this.merchOffer=r;let n=this.dynamicPrice;if(r.price&&n){let o=r.price.cloneNode(!0);n.onceSettled?n.onceSettled().then(()=>{n.replaceWith(o)}):n.replaceWith(o)}}};Ie=new WeakSet,tr=function(r){this.dispatchEvent(new CustomEvent(xr,{detail:r,bubbles:!0,composed:!0}))},f(d,"properties",{name:{type:String,attribute:"name",reflect:!0},variant:{type:String,reflect:!0},size:{type:String,attribute:"size",reflect:!0},badgeColor:{type:String,attribute:"badge-color",reflect:!0},borderColor:{type:String,attribute:"border-color",reflect:!0},badgeBackgroundColor:{type:String,attribute:"badge-background-color",reflect:!0},backgroundImage:{type:String,attribute:"background-image",reflect:!0},badgeText:{type:String,attribute:"badge-text"},actionMenu:{type:Boolean,attribute:"action-menu"},customHr:{type:Boolean,attribute:"custom-hr"},consonant:{type:Boolean,attribute:"consonant"},spectrum:{type:String,attribute:"spectrum"},detailBg:{type:String,attribute:"detail-bg"},secureLabel:{type:String,attribute:"secure-label"},checkboxLabel:{type:String,attribute:"checkbox-label"},selected:{type:Boolean,attribute:"aria-selected",reflect:!0},storageOption:{type:String,attribute:"storage",reflect:!0},stockOfferOsis:{type:Object,attribute:"stock-offer-osis",converter:{fromAttribute:r=>{let[n,o,a]=r.split(",");return{PUF:n,ABM:o,M2M:a}}}},filters:{type:String,reflect:!0,converter:{fromAttribute:r=>Object.fromEntries(r.split(",").map(n=>{let[o,a,i]=n.split(":"),s=Number(a);return[o,{order:isNaN(s)?void 0:s,size:i}]})),toAttribute:r=>Object.entries(r).map(([n,{order:o,size:a}])=>[n,o,a].filter(i=>i!=null).join(":")).join(",")}},types:{type:String,attribute:"types",reflect:!0},merchOffer:{type:Object},analyticsId:{type:String,attribute:nt,reflect:!0}}),f(d,"styles",[hr,Ur(),...mr()]);customElements.define(Pi,d);
