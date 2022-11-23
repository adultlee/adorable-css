import { Plugin } from 'vite';

declare type Rules = Record<string, (value?: string) => string>;
declare type PrefixProps = {
    media?: string;
    selector?: string;
};
declare type PrefixRules = Record<string, PrefixProps>;
declare const parseAtoms: (code: string) => string[];
declare const tokenize: (script: string) => any[];
declare const createGenerateCss: (rules?: Rules, prefixRules?: PrefixRules) => (classList: string[]) => string[];
declare const generateCss: (classList: string[]) => string[];

declare const makeNumber: (num: number) => string;
declare const cssvar: (value: string | number) => string | number;
declare const cssString: (value: string | number) => string;
declare const px: (value: string | number) => string | number;
declare const percentToEm: (value: string) => string | number;
declare const makeHEX: (value: string) => string;
declare const makeHLS: (value: string) => string;
declare const makeRGB: (value: string) => string;
declare const makeColor: (value?: string) => string;
declare const makeFont: (value: string) => string;
declare const makeFontFamily: (value: string) => string;
declare const makeBorder: (value: string) => string;
declare const makeValues: (value: string, project?: (value: string | number) => string | number) => string;
declare const makeCommaValues: (value: string, project?: (value: string | number) => string | number) => string;
declare const makeSide: (value: string) => string;
declare const makeRatio: (value: string) => string;
declare const makeHBox: (value?: string) => string;
declare const makeVBox: (value?: string) => string;
declare const makeTransition: (value: string) => string;
declare const makePosition: (value?: string) => string;
declare const makePosition1: (value: string) => string;
declare const makePosition2: (value: string) => string;

declare const reset = "*{margin:0;padding:0;font:inherit;color:inherit;}\n*,:after,:before{box-sizing:border-box;flex-shrink:0;}\n:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}\nhtml,body{height:100%;}\nimg,picture,video,canvas{display:block;max-width:100%;}\nbutton{background:none;border:0;cursor:pointer;}\na{text-decoration:none;}\ntable{border-collapse:collapse;border-spacing:0;}\nol,ul,menu,dir{list-style:none;}\n";
declare const RULES: Rules;
declare const PREFIX_PSEUDO_CLASS: PrefixRules;
declare const PREFIX_MEDIA_QUERY: PrefixRules;
declare const AT_RULE: {
    "@w": (ident: string, tokens: Array<{
        type: string;
        value: string;
    }>) => {
        media: string;
        selector: string;
    };
};
declare const PREFIX_SELECTOR: Record<string, (selector: string) => string>;

declare const ALL_PROPERTIES: {
    "--*": number;
    "-ms-accelerator": number;
    "-ms-block-progression": number;
    "-ms-content-zoom-chaining": number;
    "-ms-content-zooming": number;
    "-ms-content-zoom-limit": number;
    "-ms-content-zoom-limit-max": number;
    "-ms-content-zoom-limit-min": number;
    "-ms-content-zoom-snap": number;
    "-ms-content-zoom-snap-points": number;
    "-ms-content-zoom-snap-type": number;
    "-ms-filter": number;
    "-ms-flow-from": number;
    "-ms-flow-into": number;
    "-ms-grid-columns": number;
    "-ms-grid-rows": number;
    "-ms-high-contrast-adjust": number;
    "-ms-hyphenate-limit-chars": number;
    "-ms-hyphenate-limit-lines": number;
    "-ms-hyphenate-limit-zone": number;
    "-ms-ime-align": number;
    "-ms-overflow-style": number;
    "-ms-scrollbar-3dlight-color": number;
    "-ms-scrollbar-arrow-color": number;
    "-ms-scrollbar-base-color": number;
    "-ms-scrollbar-darkshadow-color": number;
    "-ms-scrollbar-face-color": number;
    "-ms-scrollbar-highlight-color": number;
    "-ms-scrollbar-shadow-color": number;
    "-ms-scrollbar-track-color": number;
    "-ms-scroll-chaining": number;
    "-ms-scroll-limit": number;
    "-ms-scroll-limit-x-max": number;
    "-ms-scroll-limit-x-min": number;
    "-ms-scroll-limit-y-max": number;
    "-ms-scroll-limit-y-min": number;
    "-ms-scroll-rails": number;
    "-ms-scroll-snap-points-x": number;
    "-ms-scroll-snap-points-y": number;
    "-ms-scroll-snap-type": number;
    "-ms-scroll-snap-x": number;
    "-ms-scroll-snap-y": number;
    "-ms-scroll-translation": number;
    "-ms-text-autospace": number;
    "-ms-touch-select": number;
    "-ms-user-select": number;
    "-ms-wrap-flow": number;
    "-ms-wrap-margin": number;
    "-ms-wrap-through": number;
    "-moz-appearance": number;
    "-moz-binding": number;
    "-moz-border-bottom-colors": number;
    "-moz-border-left-colors": number;
    "-moz-border-right-colors": number;
    "-moz-border-top-colors": number;
    "-moz-context-properties": number;
    "-moz-float-edge": number;
    "-moz-force-broken-image-icon": number;
    "-moz-image-region": number;
    "-moz-orient": number;
    "-moz-outline-radius": number;
    "-moz-outline-radius-bottomleft": number;
    "-moz-outline-radius-bottomright": number;
    "-moz-outline-radius-topleft": number;
    "-moz-outline-radius-topright": number;
    "-moz-stack-sizing": number;
    "-moz-text-blink": number;
    "-moz-user-focus": number;
    "-moz-user-input": number;
    "-moz-user-modify": number;
    "-moz-window-dragging": number;
    "-moz-window-shadow": number;
    "-webkit-appearance": number;
    "-webkit-border-before": number;
    "-webkit-border-before-color": number;
    "-webkit-border-before-style": number;
    "-webkit-border-before-width": number;
    "-webkit-box-reflect": number;
    "-webkit-line-clamp": number;
    "-webkit-mask": number;
    "-webkit-mask-attachment": number;
    "-webkit-mask-clip": number;
    "-webkit-mask-composite": number;
    "-webkit-mask-image": number;
    "-webkit-mask-origin": number;
    "-webkit-mask-position": number;
    "-webkit-mask-position-x": number;
    "-webkit-mask-position-y": number;
    "-webkit-mask-repeat": number;
    "-webkit-mask-repeat-x": number;
    "-webkit-mask-repeat-y": number;
    "-webkit-mask-size": number;
    "-webkit-overflow-scrolling": number;
    "-webkit-tap-highlight-color": number;
    "-webkit-text-fill-color": number;
    "-webkit-text-stroke": number;
    "-webkit-text-stroke-color": number;
    "-webkit-text-stroke-width": number;
    "-webkit-touch-callout": number;
    "-webkit-user-modify": number;
    "accent-color": number;
    "align-content": number;
    "align-items": number;
    "align-self": number;
    "align-tracks": number;
    all: number;
    animation: number;
    "animation-delay": number;
    "animation-direction": number;
    "animation-duration": number;
    "animation-fill-mode": number;
    "animation-iteration-count": number;
    "animation-name": number;
    "animation-play-state": number;
    "animation-timing-function": number;
    appearance: number;
    "aspect-ratio": number;
    azimuth: number;
    "backdrop-filter": number;
    "backface-visibility": number;
    background: number;
    "background-attachment": number;
    "background-blend-mode": number;
    "background-clip": number;
    "background-color": number;
    "background-image": number;
    "background-origin": number;
    "background-position": number;
    "background-position-x": number;
    "background-position-y": number;
    "background-repeat": number;
    "background-size": number;
    "block-overflow": number;
    "block-size": number;
    border: number;
    "border-block": number;
    "border-block-color": number;
    "border-block-style": number;
    "border-block-width": number;
    "border-block-end": number;
    "border-block-end-color": number;
    "border-block-end-style": number;
    "border-block-end-width": number;
    "border-block-start": number;
    "border-block-start-color": number;
    "border-block-start-style": number;
    "border-block-start-width": number;
    "border-bottom": number;
    "border-bottom-color": number;
    "border-bottom-left-radius": number;
    "border-bottom-right-radius": number;
    "border-bottom-style": number;
    "border-bottom-width": number;
    "border-collapse": number;
    "border-color": number;
    "border-end-end-radius": number;
    "border-end-start-radius": number;
    "border-image": number;
    "border-image-outset": number;
    "border-image-repeat": number;
    "border-image-slice": number;
    "border-image-source": number;
    "border-image-width": number;
    "border-inline": number;
    "border-inline-end": number;
    "border-inline-color": number;
    "border-inline-style": number;
    "border-inline-width": number;
    "border-inline-end-color": number;
    "border-inline-end-style": number;
    "border-inline-end-width": number;
    "border-inline-start": number;
    "border-inline-start-color": number;
    "border-inline-start-style": number;
    "border-inline-start-width": number;
    "border-left": number;
    "border-left-color": number;
    "border-left-style": number;
    "border-left-width": number;
    "border-radius": number;
    "border-right": number;
    "border-right-color": number;
    "border-right-style": number;
    "border-right-width": number;
    "border-spacing": number;
    "border-start-end-radius": number;
    "border-start-start-radius": number;
    "border-style": number;
    "border-top": number;
    "border-top-color": number;
    "border-top-left-radius": number;
    "border-top-right-radius": number;
    "border-top-style": number;
    "border-top-width": number;
    "border-width": number;
    bottom: number;
    "box-align": number;
    "box-decoration-break": number;
    "box-direction": number;
    "box-flex": number;
    "box-flex-group": number;
    "box-lines": number;
    "box-ordinal-group": number;
    "box-orient": number;
    "box-pack": number;
    "box-shadow": number;
    "box-sizing": number;
    "break-after": number;
    "break-before": number;
    "break-inside": number;
    "caption-side": number;
    "caret-color": number;
    clear: number;
    clip: number;
    "clip-path": number;
    color: number;
    "color-adjust": number;
    "color-scheme": number;
    "column-count": number;
    "column-fill": number;
    "column-gap": number;
    "column-rule": number;
    "column-rule-color": number;
    "column-rule-style": number;
    "column-rule-width": number;
    "column-span": number;
    "column-width": number;
    columns: number;
    contain: number;
    content: number;
    "content-visibility": number;
    "counter-increment": number;
    "counter-reset": number;
    "counter-set": number;
    cursor: number;
    direction: number;
    display: number;
    "empty-cells": number;
    filter: number;
    flex: number;
    "flex-basis": number;
    "flex-direction": number;
    "flex-flow": number;
    "flex-grow": number;
    "flex-shrink": number;
    "flex-wrap": number;
    float: number;
    font: number;
    "font-family": number;
    "font-feature-settings": number;
    "font-kerning": number;
    "font-language-override": number;
    "font-optical-sizing": number;
    "font-variation-settings": number;
    "font-size": number;
    "font-size-adjust": number;
    "font-smooth": number;
    "font-stretch": number;
    "font-style": number;
    "font-synthesis": number;
    "font-variant": number;
    "font-variant-alternates": number;
    "font-variant-caps": number;
    "font-variant-east-asian": number;
    "font-variant-ligatures": number;
    "font-variant-numeric": number;
    "font-variant-position": number;
    "font-weight": number;
    "forced-color-adjust": number;
    gap: number;
    grid: number;
    "grid-area": number;
    "grid-auto-columns": number;
    "grid-auto-flow": number;
    "grid-auto-rows": number;
    "grid-column": number;
    "grid-column-end": number;
    "grid-column-gap": number;
    "grid-column-start": number;
    "grid-gap": number;
    "grid-row": number;
    "grid-row-end": number;
    "grid-row-gap": number;
    "grid-row-start": number;
    "grid-template": number;
    "grid-template-areas": number;
    "grid-template-columns": number;
    "grid-template-rows": number;
    "hanging-punctuation": number;
    height: number;
    hyphens: number;
    "image-orientation": number;
    "image-rendering": number;
    "image-resolution": number;
    "ime-mode": number;
    "initial-letter": number;
    "initial-letter-align": number;
    "inline-size": number;
    "input-security": number;
    inset: number;
    "inset-block": number;
    "inset-block-end": number;
    "inset-block-start": number;
    "inset-inline": number;
    "inset-inline-end": number;
    "inset-inline-start": number;
    isolation: number;
    "justify-content": number;
    "justify-items": number;
    "justify-self": number;
    "justify-tracks": number;
    left: number;
    "letter-spacing": number;
    "line-break": number;
    "line-clamp": number;
    "line-height": number;
    "line-height-step": number;
    "list-style": number;
    "list-style-image": number;
    "list-style-position": number;
    "list-style-type": number;
    margin: number;
    "margin-block": number;
    "margin-block-end": number;
    "margin-block-start": number;
    "margin-bottom": number;
    "margin-inline": number;
    "margin-inline-end": number;
    "margin-inline-start": number;
    "margin-left": number;
    "margin-right": number;
    "margin-top": number;
    "margin-trim": number;
    mask: number;
    "mask-border": number;
    "mask-border-mode": number;
    "mask-border-outset": number;
    "mask-border-repeat": number;
    "mask-border-slice": number;
    "mask-border-source": number;
    "mask-border-width": number;
    "mask-clip": number;
    "mask-composite": number;
    "mask-image": number;
    "mask-mode": number;
    "mask-origin": number;
    "mask-position": number;
    "mask-repeat": number;
    "mask-size": number;
    "mask-type": number;
    "masonry-auto-flow": number;
    "math-style": number;
    "max-block-size": number;
    "max-height": number;
    "max-inline-size": number;
    "max-lines": number;
    "max-width": number;
    "min-block-size": number;
    "min-height": number;
    "min-inline-size": number;
    "min-width": number;
    "mix-blend-mode": number;
    "object-fit": number;
    "object-position": number;
    offset: number;
    "offset-anchor": number;
    "offset-distance": number;
    "offset-path": number;
    "offset-position": number;
    "offset-rotate": number;
    opacity: number;
    order: number;
    orphans: number;
    outline: number;
    "outline-color": number;
    "outline-offset": number;
    "outline-style": number;
    "outline-width": number;
    overflow: number;
    "overflow-anchor": number;
    "overflow-block": number;
    "overflow-clip-box": number;
    "overflow-clip-margin": number;
    "overflow-inline": number;
    "overflow-wrap": number;
    "overflow-x": number;
    "overflow-y": number;
    "overscroll-behavior": number;
    "overscroll-behavior-block": number;
    "overscroll-behavior-inline": number;
    "overscroll-behavior-x": number;
    "overscroll-behavior-y": number;
    padding: number;
    "padding-block": number;
    "padding-block-end": number;
    "padding-block-start": number;
    "padding-bottom": number;
    "padding-inline": number;
    "padding-inline-end": number;
    "padding-inline-start": number;
    "padding-left": number;
    "padding-right": number;
    "padding-top": number;
    "page-break-after": number;
    "page-break-before": number;
    "page-break-inside": number;
    "paint-order": number;
    perspective: number;
    "perspective-origin": number;
    "place-content": number;
    "place-items": number;
    "place-self": number;
    "pointer-events": number;
    position: number;
    quotes: number;
    resize: number;
    right: number;
    rotate: number;
    "row-gap": number;
    "ruby-align": number;
    "ruby-merge": number;
    "ruby-position": number;
    scale: number;
    "scrollbar-color": number;
    "scrollbar-gutter": number;
    "scrollbar-width": number;
    "scroll-behavior": number;
    "scroll-margin": number;
    "scroll-margin-block": number;
    "scroll-margin-block-start": number;
    "scroll-margin-block-end": number;
    "scroll-margin-bottom": number;
    "scroll-margin-inline": number;
    "scroll-margin-inline-start": number;
    "scroll-margin-inline-end": number;
    "scroll-margin-left": number;
    "scroll-margin-right": number;
    "scroll-margin-top": number;
    "scroll-padding": number;
    "scroll-padding-block": number;
    "scroll-padding-block-start": number;
    "scroll-padding-block-end": number;
    "scroll-padding-bottom": number;
    "scroll-padding-inline": number;
    "scroll-padding-inline-start": number;
    "scroll-padding-inline-end": number;
    "scroll-padding-left": number;
    "scroll-padding-right": number;
    "scroll-padding-top": number;
    "scroll-snap-align": number;
    "scroll-snap-coordinate": number;
    "scroll-snap-destination": number;
    "scroll-snap-points-x": number;
    "scroll-snap-points-y": number;
    "scroll-snap-stop": number;
    "scroll-snap-type": number;
    "scroll-snap-type-x": number;
    "scroll-snap-type-y": number;
    "shape-image-threshold": number;
    "shape-margin": number;
    "shape-outside": number;
    "tab-size": number;
    "table-layout": number;
    "text-align": number;
    "text-align-last": number;
    "text-combine-upright": number;
    "text-decoration": number;
    "text-decoration-color": number;
    "text-decoration-line": number;
    "text-decoration-skip": number;
    "text-decoration-skip-ink": number;
    "text-decoration-style": number;
    "text-decoration-thickness": number;
    "text-emphasis": number;
    "text-emphasis-color": number;
    "text-emphasis-position": number;
    "text-emphasis-style": number;
    "text-indent": number;
    "text-justify": number;
    "text-orientation": number;
    "text-overflow": number;
    "text-rendering": number;
    "text-shadow": number;
    "text-size-adjust": number;
    "text-transform": number;
    "text-underline-offset": number;
    "text-underline-position": number;
    top: number;
    "touch-action": number;
    transform: number;
    "transform-box": number;
    "transform-origin": number;
    "transform-style": number;
    transition: number;
    "transition-delay": number;
    "transition-duration": number;
    "transition-property": number;
    "transition-timing-function": number;
    translate: number;
    "unicode-bidi": number;
    "user-select": number;
    "vertical-align": number;
    visibility: number;
    "white-space": number;
    widows: number;
    width: number;
    "will-change": number;
    "word-break": number;
    "word-spacing": number;
    "word-wrap": number;
    "writing-mode": number;
    "z-index": number;
    zoom: number;
};

interface Config {
    include: string[];
    reset: string;
    rules: Rules;
    prefixRules: PrefixRules;
    preLoads: string[];
}
declare const adorableCSS: (config?: Partial<Config>) => Plugin[];

export { ALL_PROPERTIES, AT_RULE, PREFIX_MEDIA_QUERY, PREFIX_PSEUDO_CLASS, PREFIX_SELECTOR, PrefixProps, PrefixRules, RULES, Rules, adorableCSS, createGenerateCss, cssString, cssvar, generateCss, makeBorder, makeColor, makeCommaValues, makeFont, makeFontFamily, makeHBox, makeHEX, makeHLS, makeNumber, makePosition, makePosition1, makePosition2, makeRGB, makeRatio, makeSide, makeTransition, makeVBox, makeValues, parseAtoms, percentToEm, px, reset, tokenize };
