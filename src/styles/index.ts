import { ref, refType } from "..";

export type Variant = "default" | "outline" | "solo" | "standard" | "underlined";

export interface StyleOptional {
  onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  id?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
  className?: string | ref<string>;
  text?: string | ref<string>;
  accentColor?: string | ref<string>;
  readOnly?: boolean | ref<boolean>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-content) */
  alignContent?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-items) */
  alignItems?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-self) */
  alignSelf?: string | ref<string>;
  alignmentBaseline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/all) */
  all?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation) */
  animation?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition) */
  animationComposition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay) */
  animationDelay?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction) */
  animationDirection?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration) */
  animationDuration?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode) */
  animationFillMode?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count) */
  animationIterationCount?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-name) */
  animationName?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state) */
  animationPlayState?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function) */
  animationTimingFunction?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/appearance) */
  appearance?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) */
  aspectRatio?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) */
  backdropFilter?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility) */
  backfaceVisibility?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background) */
  background?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment) */
  backgroundAttachment?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) */
  backgroundBlendMode?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-clip) */
  backgroundClip?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-color) */
  backgroundColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-image) */
  backgroundImage?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-origin) */
  backgroundOrigin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-position) */
  backgroundPosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x) */
  backgroundPositionX?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y) */
  backgroundPositionY?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat) */
  backgroundRepeat?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-size) */
  backgroundSize?: string | ref<string>;
  baselineShift?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/block-size) */
  blockSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border) */
  border?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block) */
  borderBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color) */
  borderBlockColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end) */
  borderBlockEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color) */
  borderBlockEndColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style) */
  borderBlockEndStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width) */
  borderBlockEndWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start) */
  borderBlockStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color) */
  borderBlockStartColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style) */
  borderBlockStartStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width) */
  borderBlockStartWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style) */
  borderBlockStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width) */
  borderBlockWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom) */
  borderBottom?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color) */
  borderBottomColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius) */
  borderBottomLeftRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius) */
  borderBottomRightRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style) */
  borderBottomStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width) */
  borderBottomWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse) */
  borderCollapse?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-color) */
  borderColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius) */
  borderEndEndRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius) */
  borderEndStartRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image) */
  borderImage?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset) */
  borderImageOutset?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat) */
  borderImageRepeat?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice) */
  borderImageSlice?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source) */
  borderImageSource?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width) */
  borderImageWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline) */
  borderInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color) */
  borderInlineColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end) */
  borderInlineEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color) */
  borderInlineEndColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style) */
  borderInlineEndStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width) */
  borderInlineEndWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start) */
  borderInlineStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color) */
  borderInlineStartColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style) */
  borderInlineStartStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width) */
  borderInlineStartWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style) */
  borderInlineStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width) */
  borderInlineWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left) */
  borderLeft?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color) */
  borderLeftColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style) */
  borderLeftStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width) */
  borderLeftWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-radius) */
  borderRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right) */
  borderRight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color) */
  borderRightColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style) */
  borderRightStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width) */
  borderRightWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing) */
  borderSpacing?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius) */
  borderStartEndRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius) */
  borderStartStartRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-style) */
  borderStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top) */
  borderTop?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color) */
  borderTopColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius) */
  borderTopLeftRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius) */
  borderTopRightRadius?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style) */
  borderTopStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width) */
  borderTopWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-width) */
  borderWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/bottom) */
  bottom?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow) */
  boxShadow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing) */
  boxSizing?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/break-after) */
  breakAfter?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/break-before) */
  breakBefore?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/break-inside) */
  breakInside?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/caption-side) */
  captionSide?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/caret-color) */
  caretColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/clear) */
  clear?: string | ref<string>;
  /**
   * @deprecated
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/clip)
   */
  clip?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/clip-path) */
  clipPath?: string | ref<string>;
  clipRule?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/color) */
  color?: string | ref<string>;
  colorInterpolation?: string | ref<string>;
  colorInterpolationFilters?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme) */
  colorScheme?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-count) */
  columnCount?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-fill) */
  columnFill?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-gap) */
  columnGap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule) */
  columnRule?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color) */
  columnRuleColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style) */
  columnRuleStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width) */
  columnRuleWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-span) */
  columnSpan?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-width) */
  columnWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/columns) */
  columns?: string | ref<string>;
  rows?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain) */
  contain?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-block-size) */
  containIntrinsicBlockSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height) */
  containIntrinsicHeight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-inline-size) */
  containIntrinsicInlineSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size) */
  containIntrinsicSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width) */
  containIntrinsicWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/container) */
  container?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/container-name) */
  containerName?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/container-type) */
  containerType?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/content) */
  content?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment) */
  counterIncrement?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset) */
  counterReset?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/counter-set) */
  counterSet?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat) */
  cssFloat?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText) */
  cssText?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/cursor) */
  cursor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/direction) */
  direction?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/display) */
  display?: string | ref<string>;
  dominantBaseline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells) */
  emptyCells?: string | ref<string>;
  fill?: string | ref<string>;
  fillOpacity?: string | ref<string>;
  fillRule?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/filter) */
  filter?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex) */
  flex?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis) */
  flexBasis?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction) */
  flexDirection?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow) */
  flexFlow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow) */
  flexGrow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink) */
  flexShrink?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap) */
  flexWrap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/float) */
  float?: string | ref<string>;
  floodColor?: string | ref<string>;
  floodOpacity?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font) */
  font?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-family) */
  fontFamily?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
  fontFeatureSettings?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning) */
  fontKerning?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
  fontOpticalSizing?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
  fontPalette?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-size) */
  fontSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust) */
  fontSizeAdjust?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch) */
  fontStretch?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-style) */
  fontStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis) */
  fontSynthesis?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
  fontSynthesisSmallCaps?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
  fontSynthesisStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
  fontSynthesisWeight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant) */
  fontVariant?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates) */
  fontVariantAlternates?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
  fontVariantCaps?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
  fontVariantEastAsian?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
  fontVariantLigatures?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
  fontVariantNumeric?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
  fontVariantPosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
  fontVariationSettings?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-weight) */
  fontWeight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust) */
  forcedColorAdjust?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/gap) */
  gap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid) */
  grid?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-area) */
  gridArea?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) */
  gridAutoColumns?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) */
  gridAutoFlow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) */
  gridAutoRows?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-column) */
  gridColumn?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) */
  gridColumnEnd?: string | ref<string>;
  /** @deprecated This is a legacy alias of `columnGap`. */
  gridColumnGap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) */
  gridColumnStart?: string | ref<string>;
  /** @deprecated This is a legacy alias of `gap`. */
  gridGap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-row) */
  gridRow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) */
  gridRowEnd?: string | ref<string>;
  /** @deprecated This is a legacy alias of `rowGap`. */
  gridRowGap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) */
  gridRowStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template) */
  gridTemplate?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) */
  gridTemplateAreas?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) */
  gridTemplateColumns?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) */
  gridTemplateRows?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/height) */
  height?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character) */
  hyphenateCharacter?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/hyphens) */
  hyphens?: string | ref<string>;
  /**
   * @deprecated
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
   */
  imageOrientation?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering) */
  imageRendering?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inline-size) */
  inlineSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset) */
  inset?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-block) */
  insetBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) */
  insetBlockEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start) */
  insetBlockStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline) */
  insetInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end) */
  insetInlineEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start) */
  insetInlineStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/isolation) */
  isolation?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-content) */
  justifyContent?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-items) */
  justifyItems?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-self) */
  justifySelf?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/left) */
  left?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/length) */
  readonly length?: number;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) */
  letterSpacing?: string | ref<string>;
  lightingColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/line-break) */
  lineBreak?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/line-height) */
  lineHeight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style) */
  listStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image) */
  listStyleImage?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position) */
  listStylePosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type) */
  listStyleType?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin) */
  margin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-block) */
  marginBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end) */
  marginBlockEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start) */
  marginBlockStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom) */
  marginBottom?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline) */
  marginInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end) */
  marginInlineEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start) */
  marginInlineStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-left) */
  marginLeft?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-right) */
  marginRight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-top) */
  marginTop?: string | ref<string>;
  marker?: string | ref<string>;
  markerEnd?: string | ref<string>;
  markerMid?: string | ref<string>;
  markerStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask) */
  mask?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip) */
  maskClip?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite) */
  maskComposite?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-image) */
  maskImage?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode) */
  maskMode?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin) */
  maskOrigin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-position) */
  maskPosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat) */
  maskRepeat?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-size) */
  maskSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-type) */
  maskType?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/math-style) */
  mathStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size) */
  maxBlockSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-height) */
  maxHeight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) */
  maxInlineSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-width) */
  maxWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size) */
  minBlockSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-height) */
  minHeight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size) */
  minInlineSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-width) */
  minWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) */
  mixBlendMode?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/object-fit) */
  objectFit?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/object-position) */
  objectPosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset) */
  offset?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance) */
  offsetDistance?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset-path) */
  offsetPath?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate) */
  offsetRotate?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/opacity) */
  opacity?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/order) */
  order?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/orphans) */
  orphans?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline) */
  outline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-color) */
  outlineColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset) */
  outlineOffset?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-style) */
  outlineStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-width) */
  outlineWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow) */
  overflow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor) */
  overflowAnchor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin) */
  overflowClipMargin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap) */
  overflowWrap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x) */
  overflowX?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y) */
  overflowY?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) */
  overscrollBehavior?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block) */
  overscrollBehaviorBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline) */
  overscrollBehaviorInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x) */
  overscrollBehaviorX?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y) */
  overscrollBehaviorY?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding) */
  padding?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-block) */
  paddingBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end) */
  paddingBlockEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start) */
  paddingBlockStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom) */
  paddingBottom?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline) */
  paddingInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end) */
  paddingInlineEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start) */
  paddingInlineStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-left) */
  paddingLeft?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-right) */
  paddingRight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-top) */
  paddingTop?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page) */
  page?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after) */
  pageBreakAfter?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before) */
  pageBreakBefore?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside) */
  pageBreakInside?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/paint-order) */
  paintOrder?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule) */
  readonly parentRule?: CSSRule | null;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective) */
  perspective?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin) */
  perspectiveOrigin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/place-content) */
  placeContent?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/place-items) */
  placeItems?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/place-self) */
  placeSelf?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events) */
  pointerEvents?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/position) */
  position?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust) */
  printColorAdjust?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/quotes) */
  quotes?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/resize) */
  resize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/right) */
  right?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/rotate) */
  rotate?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/row-gap) */
  rowGap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position) */
  rubyPosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scale) */
  scale?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior) */
  scrollBehavior?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) */
  scrollMargin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block) */
  scrollMarginBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end) */
  scrollMarginBlockEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start) */
  scrollMarginBlockStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom) */
  scrollMarginBottom?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline) */
  scrollMarginInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end) */
  scrollMarginInlineEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start) */
  scrollMarginInlineStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left) */
  scrollMarginLeft?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right) */
  scrollMarginRight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top) */
  scrollMarginTop?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) */
  scrollPadding?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block) */
  scrollPaddingBlock?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end) */
  scrollPaddingBlockEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start) */
  scrollPaddingBlockStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom) */
  scrollPaddingBottom?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline) */
  scrollPaddingInline?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end) */
  scrollPaddingInlineEnd?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start) */
  scrollPaddingInlineStart?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left) */
  scrollPaddingLeft?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right) */
  scrollPaddingRight?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top) */
  scrollPaddingTop?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
  scrollSnapAlign?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
  scrollSnapStop?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
  scrollSnapType?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter) */
  scrollbarGutter?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold) */
  shapeImageThreshold?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin) */
  shapeMargin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside) */
  shapeOutside?: string | ref<string>;
  shapeRendering?: string | ref<string>;
  stopColor?: string | ref<string>;
  stopOpacity?: string | ref<string>;
  stroke?: string | ref<string>;
  strokeDasharray?: string | ref<string>;
  strokeDashoffset?: string | ref<string>;
  strokeLinecap?: string | ref<string>;
  strokeLinejoin?: string | ref<string>;
  strokeMiterlimit?: string | ref<string>;
  strokeOpacity?: string | ref<string>;
  strokeWidth?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/tab-size) */
  tabSize?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/table-layout) */
  tableLayout?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-align) */
  textAlign?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last) */
  textAlignLast?: string | ref<string>;
  textAnchor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright) */
  textCombineUpright?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration) */
  textDecoration?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) */
  textDecorationColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) */
  textDecorationLine?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink) */
  textDecorationSkipInk?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) */
  textDecorationStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) */
  textDecorationThickness?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis) */
  textEmphasis?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color) */
  textEmphasisColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position) */
  textEmphasisPosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style) */
  textEmphasisStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-indent) */
  textIndent?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation) */
  textOrientation?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow) */
  textOverflow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering) */
  textRendering?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow) */
  textShadow?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-transform) */
  textTransform?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset) */
  textUnderlineOffset?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) */
  textUnderlinePosition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/top) */
  top?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/touch-action) */
  touchAction?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform) */
  transform?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-box) */
  transformBox?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin) */
  transformOrigin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-style) */
  transformStyle?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition) */
  transition?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay) */
  transitionDelay?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration) */
  transitionDuration?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-property) */
  transitionProperty?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function) */
  transitionTimingFunction?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/translate) */
  translate?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi) */
  unicodeBidi?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/user-select) */
  userSelect?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align) */
  verticalAlign?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/visibility) */
  visibility?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `alignContent`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  webkitAlignContent?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `alignItems`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  webkitAlignItems?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `alignSelf`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  webkitAlignSelf?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animation`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation)
   */
  webkitAnimation?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationDelay`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
   */
  webkitAnimationDelay?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationDirection`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
   */
  webkitAnimationDirection?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationDuration`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
   */
  webkitAnimationDuration?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationFillMode`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
   */
  webkitAnimationFillMode?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationIterationCount`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
   */
  webkitAnimationIterationCount?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationName`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
   */
  webkitAnimationName?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationPlayState`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
   */
  webkitAnimationPlayState?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationTimingFunction`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
   */
  webkitAnimationTimingFunction?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `appearance`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
   */
  webkitAppearance?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backfaceVisibility`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
   */
  webkitBackfaceVisibility?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backgroundClip`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
   */
  webkitBackgroundClip?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backgroundOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
   */
  webkitBackgroundOrigin?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backgroundSize`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
   */
  webkitBackgroundSize?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderBottomLeftRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
   */
  webkitBorderBottomLeftRadius?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderBottomRightRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
   */
  webkitBorderBottomRightRadius?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
   */
  webkitBorderRadius?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderTopLeftRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
   */
  webkitBorderTopLeftRadius?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderTopRightRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
   */
  webkitBorderTopRightRadius?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxAlign`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
   */
  webkitBoxAlign?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxFlex`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
   */
  webkitBoxFlex?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxOrdinalGroup`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
   */
  webkitBoxOrdinalGroup?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxOrient`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
   */
  webkitBoxOrient?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxPack`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
   */
  webkitBoxPack?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxShadow`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
   */
  webkitBoxShadow?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxSizing`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
   */
  webkitBoxSizing?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `filter`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/filter)
   */
  webkitFilter?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flex`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex)
   */
  webkitFlex?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexBasis`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  webkitFlexBasis?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexDirection`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  webkitFlexDirection?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexFlow`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  webkitFlexFlow?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexGrow`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  webkitFlexGrow?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexShrink`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  webkitFlexShrink?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexWrap`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  webkitFlexWrap?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `justifyContent`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  webkitJustifyContent?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp) */
  webkitLineClamp?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `mask`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask)
   */
  webkitMask?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorder`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border)
   */
  webkitMaskBoxImage?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderOutset`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)
   */
  webkitMaskBoxImageOutset?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderRepeat`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)
   */
  webkitMaskBoxImageRepeat?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderSlice`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)
   */
  webkitMaskBoxImageSlice?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderSource`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-source)
   */
  webkitMaskBoxImageSource?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderWidth`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-width)
   */
  webkitMaskBoxImageWidth?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskClip`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
   */
  webkitMaskClip?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite) */
  webkitMaskComposite?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskImage`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
   */
  webkitMaskImage?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
   */
  webkitMaskOrigin?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskPosition`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
   */
  webkitMaskPosition?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskRepeat`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
   */
  webkitMaskRepeat?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskSize`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
   */
  webkitMaskSize?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `order`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  webkitOrder?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `perspective`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
   */
  webkitPerspective?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `perspectiveOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
   */
  webkitPerspectiveOrigin?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color) */
  webkitTextFillColor?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `textSizeAdjust`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
   */
  webkitTextSizeAdjust?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke) */
  webkitTextStroke?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color) */
  webkitTextStrokeColor?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width) */
  webkitTextStrokeWidth?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transform`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform)
   */
  webkitTransform?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transformOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
   */
  webkitTransformOrigin?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transformStyle`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
   */
  webkitTransformStyle?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transition`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition)
   */
  webkitTransition?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionDelay`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
   */
  webkitTransitionDelay?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionDuration`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
   */
  webkitTransitionDuration?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionProperty`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
   */
  webkitTransitionProperty?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionTimingFunction`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
   */
  webkitTransitionTimingFunction?: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `userSelect`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
   */
  webkitUserSelect?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/white-space) */
  whiteSpace?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/widows) */
  widows?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/width) */
  width?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/will-change) */
  willChange?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/word-break) */
  wordBreak?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing) */
  wordSpacing?: string | ref<string>;
  /**
   * @deprecated
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
   */
  wordWrap?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode) */
  writingMode?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/z-index) */
  zIndex?: string | ref<string>;
}

// @ts-ignore
export interface CSSStyleDeclarationRef {
  get accentColor(): string;
  set accentColor(value: string | ref<string>);
  text?: string | ref<string>;
  className?: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-content) */
  alignContent: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-items) */
  alignItems: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-self) */
  alignSelf: string | ref<string>;
  alignmentBaseline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/all) */
  all: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation) */
  animation: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition) */
  animationComposition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay) */
  animationDelay: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction) */
  animationDirection: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration) */
  animationDuration: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode) */
  animationFillMode: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count) */
  animationIterationCount: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-name) */
  animationName: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state) */
  animationPlayState: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function) */
  animationTimingFunction: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/appearance) */
  appearance: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) */
  aspectRatio: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) */
  backdropFilter: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility) */
  backfaceVisibility: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background) */
  background: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment) */
  backgroundAttachment: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) */
  backgroundBlendMode: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-clip) */
  backgroundClip: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-color) */
  backgroundColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-image) */
  backgroundImage: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-origin) */
  backgroundOrigin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-position) */
  backgroundPosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x) */
  backgroundPositionX: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y) */
  backgroundPositionY: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat) */
  backgroundRepeat: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-size) */
  backgroundSize: string | ref<string>;
  baselineShift: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/block-size) */
  blockSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border) */
  border: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block) */
  borderBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color) */
  borderBlockColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end) */
  borderBlockEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color) */
  borderBlockEndColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style) */
  borderBlockEndStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width) */
  borderBlockEndWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start) */
  borderBlockStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color) */
  borderBlockStartColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style) */
  borderBlockStartStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width) */
  borderBlockStartWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style) */
  borderBlockStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width) */
  borderBlockWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom) */
  borderBottom: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color) */
  borderBottomColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius) */
  borderBottomLeftRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius) */
  borderBottomRightRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style) */
  borderBottomStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width) */
  borderBottomWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse) */
  borderCollapse: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-color) */
  borderColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius) */
  borderEndEndRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius) */
  borderEndStartRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image) */
  borderImage: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset) */
  borderImageOutset: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat) */
  borderImageRepeat: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice) */
  borderImageSlice: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source) */
  borderImageSource: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width) */
  borderImageWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline) */
  borderInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color) */
  borderInlineColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end) */
  borderInlineEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color) */
  borderInlineEndColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style) */
  borderInlineEndStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width) */
  borderInlineEndWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start) */
  borderInlineStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color) */
  borderInlineStartColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style) */
  borderInlineStartStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width) */
  borderInlineStartWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style) */
  borderInlineStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width) */
  borderInlineWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left) */
  borderLeft: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color) */
  borderLeftColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style) */
  borderLeftStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width) */
  borderLeftWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-radius) */
  borderRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right) */
  borderRight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color) */
  borderRightColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style) */
  borderRightStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width) */
  borderRightWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing) */
  borderSpacing: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius) */
  borderStartEndRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius) */
  borderStartStartRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-style) */
  borderStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top) */
  borderTop: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color) */
  borderTopColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius) */
  borderTopLeftRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius) */
  borderTopRightRadius: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style) */
  borderTopStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width) */
  borderTopWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-width) */
  borderWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/bottom) */
  bottom: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow) */
  boxShadow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing) */
  boxSizing: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/break-after) */
  breakAfter: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/break-before) */
  breakBefore: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/break-inside) */
  breakInside: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/caption-side) */
  captionSide: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/caret-color) */
  caretColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/clear) */
  clear: string | ref<string>;
  /**
   * @deprecated
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/clip)
   */
  clip: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/clip-path) */
  clipPath: string | ref<string>;
  clipRule: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/color) */
  color: string | ref<string>;
  colorInterpolation: string | ref<string>;
  colorInterpolationFilters: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme) */
  colorScheme: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-count) */
  columnCount: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-fill) */
  columnFill: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-gap) */
  columnGap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule) */
  columnRule: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color) */
  columnRuleColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style) */
  columnRuleStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width) */
  columnRuleWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-span) */
  columnSpan: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/column-width) */
  columnWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/columns) */
  columns: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain) */
  contain: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-block-size) */
  containIntrinsicBlockSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height) */
  containIntrinsicHeight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-inline-size) */
  containIntrinsicInlineSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size) */
  containIntrinsicSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width) */
  containIntrinsicWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/container) */
  container: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/container-name) */
  containerName: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/container-type) */
  containerType: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/content) */
  content: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment) */
  counterIncrement: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset) */
  counterReset: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/counter-set) */
  counterSet: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat) */
  cssFloat: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText) */
  cssText: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/cursor) */
  cursor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/direction) */
  direction: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/display) */
  display: string | ref<string> | "absolute" | "fixed" | "relative" | "static" | "sticky";
  dominantBaseline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells) */
  emptyCells: string | ref<string>;
  fill: string | ref<string>;
  fillOpacity: string | ref<string>;
  fillRule: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/filter) */
  filter: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex) */
  flex: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis) */
  flexBasis: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction) */
  flexDirection: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow) */
  flexFlow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow) */
  flexGrow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink) */
  flexShrink: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap) */
  flexWrap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/float) */
  float: string | ref<string>;
  floodColor: string | ref<string>;
  floodOpacity: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font) */
  font: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-family) */
  fontFamily: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
  fontFeatureSettings: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning) */
  fontKerning: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
  fontOpticalSizing: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
  fontPalette: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-size) */
  fontSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust) */
  fontSizeAdjust: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch) */
  fontStretch: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-style) */
  fontStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis) */
  fontSynthesis: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
  fontSynthesisSmallCaps: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
  fontSynthesisStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
  fontSynthesisWeight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant) */
  fontVariant: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates) */
  fontVariantAlternates: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
  fontVariantCaps: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
  fontVariantEastAsian: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
  fontVariantLigatures: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
  fontVariantNumeric: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
  fontVariantPosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
  fontVariationSettings: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/font-weight) */
  fontWeight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust) */
  forcedColorAdjust: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/gap) */
  gap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid) */
  grid: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-area) */
  gridArea: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) */
  gridAutoColumns: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) */
  gridAutoFlow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) */
  gridAutoRows: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-column) */
  gridColumn: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) */
  gridColumnEnd: string | ref<string>;
  /** @deprecated This is a legacy alias of `columnGap`. */
  gridColumnGap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) */
  gridColumnStart: string | ref<string>;
  /** @deprecated This is a legacy alias of `gap`. */
  gridGap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-row) */
  gridRow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) */
  gridRowEnd: string | ref<string>;
  /** @deprecated This is a legacy alias of `rowGap`. */
  gridRowGap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) */
  gridRowStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template) */
  gridTemplate: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) */
  gridTemplateAreas: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) */
  gridTemplateColumns: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) */
  gridTemplateRows: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/height) */
  height: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character) */
  hyphenateCharacter: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/hyphens) */
  hyphens: string | ref<string>;
  /**
   * @deprecated
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
   */
  imageOrientation: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering) */
  imageRendering: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inline-size) */
  inlineSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset) */
  inset: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-block) */
  insetBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) */
  insetBlockEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start) */
  insetBlockStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline) */
  insetInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end) */
  insetInlineEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start) */
  insetInlineStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/isolation) */
  isolation: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-content) */
  justifyContent: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-items) */
  justifyItems: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-self) */
  justifySelf: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/left) */
  left: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/length) */
  readonly length: number;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) */
  letterSpacing: string | ref<string>;
  lightingColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/line-break) */
  lineBreak: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/line-height) */
  lineHeight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style) */
  listStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image) */
  listStyleImage: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position) */
  listStylePosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type) */
  listStyleType: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin) */
  margin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-block) */
  marginBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end) */
  marginBlockEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start) */
  marginBlockStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom) */
  marginBottom: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline) */
  marginInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end) */
  marginInlineEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start) */
  marginInlineStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-left) */
  marginLeft: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-right) */
  marginRight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/margin-top) */
  marginTop: string | ref<string>;
  marker: string | ref<string>;
  markerEnd: string | ref<string>;
  markerMid: string | ref<string>;
  markerStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask) */
  mask: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip) */
  maskClip: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite) */
  maskComposite: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-image) */
  maskImage: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode) */
  maskMode: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin) */
  maskOrigin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-position) */
  maskPosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat) */
  maskRepeat: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-size) */
  maskSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-type) */
  maskType: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/math-style) */
  mathStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size) */
  maxBlockSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-height) */
  maxHeight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) */
  maxInlineSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/max-width) */
  maxWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size) */
  minBlockSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-height) */
  minHeight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size) */
  minInlineSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/min-width) */
  minWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) */
  mixBlendMode: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/object-fit) */
  objectFit: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/object-position) */
  objectPosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset) */
  offset: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance) */
  offsetDistance: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset-path) */
  offsetPath: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate) */
  offsetRotate: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/opacity) */
  opacity: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/order) */
  order: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/orphans) */
  orphans: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline) */
  outline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-color) */
  outlineColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset) */
  outlineOffset: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-style) */
  outlineStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/outline-width) */
  outlineWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow) */
  overflow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor) */
  overflowAnchor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin) */
  overflowClipMargin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap) */
  overflowWrap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x) */
  overflowX: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y) */
  overflowY: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) */
  overscrollBehavior: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block) */
  overscrollBehaviorBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline) */
  overscrollBehaviorInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x) */
  overscrollBehaviorX: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y) */
  overscrollBehaviorY: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding) */
  padding: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-block) */
  paddingBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end) */
  paddingBlockEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start) */
  paddingBlockStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom) */
  paddingBottom: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline) */
  paddingInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end) */
  paddingInlineEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start) */
  paddingInlineStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-left) */
  paddingLeft: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-right) */
  paddingRight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/padding-top) */
  paddingTop: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page) */
  page: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after) */
  pageBreakAfter: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before) */
  pageBreakBefore: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside) */
  pageBreakInside: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/paint-order) */
  paintOrder: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule) */
  readonly parentRule: CSSRule | null;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective) */
  perspective: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin) */
  perspectiveOrigin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/place-content) */
  placeContent: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/place-items) */
  placeItems: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/place-self) */
  placeSelf: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events) */
  pointerEvents: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/position) */
  position: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust) */
  printColorAdjust: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/quotes) */
  quotes: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/resize) */
  resize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/right) */
  right: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/rotate) */
  rotate: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/row-gap) */
  rowGap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position) */
  rubyPosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scale) */
  scale: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior) */
  scrollBehavior: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) */
  scrollMargin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block) */
  scrollMarginBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end) */
  scrollMarginBlockEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start) */
  scrollMarginBlockStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom) */
  scrollMarginBottom: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline) */
  scrollMarginInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end) */
  scrollMarginInlineEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start) */
  scrollMarginInlineStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left) */
  scrollMarginLeft: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right) */
  scrollMarginRight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top) */
  scrollMarginTop: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) */
  scrollPadding: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block) */
  scrollPaddingBlock: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end) */
  scrollPaddingBlockEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start) */
  scrollPaddingBlockStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom) */
  scrollPaddingBottom: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline) */
  scrollPaddingInline: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end) */
  scrollPaddingInlineEnd: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start) */
  scrollPaddingInlineStart: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left) */
  scrollPaddingLeft: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right) */
  scrollPaddingRight: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top) */
  scrollPaddingTop: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
  scrollSnapAlign: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
  scrollSnapStop: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
  scrollSnapType: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter) */
  scrollbarGutter: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold) */
  shapeImageThreshold: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin) */
  shapeMargin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside) */
  shapeOutside: string | ref<string>;
  shapeRendering: string | ref<string>;
  stopColor: string | ref<string>;
  stopOpacity: string | ref<string>;
  stroke: string | ref<string>;
  strokeDasharray: string | ref<string>;
  strokeDashoffset: string | ref<string>;
  strokeLinecap: string | ref<string>;
  strokeLinejoin: string | ref<string>;
  strokeMiterlimit: string | ref<string>;
  strokeOpacity: string | ref<string>;
  strokeWidth: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/tab-size) */
  tabSize: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/table-layout) */
  tableLayout: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-align) */
  textAlign: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last) */
  textAlignLast: string | ref<string>;
  textAnchor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright) */
  textCombineUpright: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration) */
  textDecoration: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) */
  textDecorationColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) */
  textDecorationLine: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink) */
  textDecorationSkipInk: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) */
  textDecorationStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) */
  textDecorationThickness: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis) */
  textEmphasis: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color) */
  textEmphasisColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position) */
  textEmphasisPosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style) */
  textEmphasisStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-indent) */
  textIndent: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation) */
  textOrientation: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow) */
  textOverflow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering) */
  textRendering: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow) */
  textShadow: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-transform) */
  textTransform: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset) */
  textUnderlineOffset: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) */
  textUnderlinePosition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/top) */
  top: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/touch-action) */
  touchAction: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform) */
  transform: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-box) */
  transformBox: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin) */
  transformOrigin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-style) */
  transformStyle: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition) */
  transition: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay) */
  transitionDelay: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration) */
  transitionDuration: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-property) */
  transitionProperty: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function) */
  transitionTimingFunction: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/translate) */
  translate: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi) */
  unicodeBidi: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/user-select) */
  userSelect: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align) */
  verticalAlign: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/visibility) */
  visibility: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `alignContent`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  webkitAlignContent: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `alignItems`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  webkitAlignItems: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `alignSelf`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  webkitAlignSelf: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animation`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation)
   */
  webkitAnimation: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationDelay`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
   */
  webkitAnimationDelay: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationDirection`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
   */
  webkitAnimationDirection: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationDuration`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
   */
  webkitAnimationDuration: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationFillMode`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
   */
  webkitAnimationFillMode: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationIterationCount`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
   */
  webkitAnimationIterationCount: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationName`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
   */
  webkitAnimationName: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationPlayState`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
   */
  webkitAnimationPlayState: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `animationTimingFunction`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
   */
  webkitAnimationTimingFunction: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `appearance`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
   */
  webkitAppearance: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backfaceVisibility`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
   */
  webkitBackfaceVisibility: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backgroundClip`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
   */
  webkitBackgroundClip: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backgroundOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
   */
  webkitBackgroundOrigin: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `backgroundSize`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
   */
  webkitBackgroundSize: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderBottomLeftRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
   */
  webkitBorderBottomLeftRadius: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderBottomRightRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
   */
  webkitBorderBottomRightRadius: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
   */
  webkitBorderRadius: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderTopLeftRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
   */
  webkitBorderTopLeftRadius: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `borderTopRightRadius`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
   */
  webkitBorderTopRightRadius: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxAlign`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
   */
  webkitBoxAlign: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxFlex`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
   */
  webkitBoxFlex: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxOrdinalGroup`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
   */
  webkitBoxOrdinalGroup: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxOrient`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
   */
  webkitBoxOrient: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxPack`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
   */
  webkitBoxPack: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxShadow`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
   */
  webkitBoxShadow: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `boxSizing`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
   */
  webkitBoxSizing: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `filter`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/filter)
   */
  webkitFilter: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flex`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex)
   */
  webkitFlex: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexBasis`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  webkitFlexBasis: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexDirection`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  webkitFlexDirection: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexFlow`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  webkitFlexFlow: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexGrow`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  webkitFlexGrow: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexShrink`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  webkitFlexShrink: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `flexWrap`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  webkitFlexWrap: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `justifyContent`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  webkitJustifyContent: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp) */
  webkitLineClamp: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `mask`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask)
   */
  webkitMask: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorder`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border)
   */
  webkitMaskBoxImage: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderOutset`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)
   */
  webkitMaskBoxImageOutset: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderRepeat`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)
   */
  webkitMaskBoxImageRepeat: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderSlice`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)
   */
  webkitMaskBoxImageSlice: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderSource`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-source)
   */
  webkitMaskBoxImageSource: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskBorderWidth`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-width)
   */
  webkitMaskBoxImageWidth: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskClip`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
   */
  webkitMaskClip: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite) */
  webkitMaskComposite: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskImage`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
   */
  webkitMaskImage: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
   */
  webkitMaskOrigin: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskPosition`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
   */
  webkitMaskPosition: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskRepeat`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
   */
  webkitMaskRepeat: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `maskSize`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
   */
  webkitMaskSize: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `order`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  webkitOrder: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `perspective`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
   */
  webkitPerspective: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `perspectiveOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
   */
  webkitPerspectiveOrigin: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color) */
  webkitTextFillColor: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `textSizeAdjust`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
   */
  webkitTextSizeAdjust: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke) */
  webkitTextStroke: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color) */
  webkitTextStrokeColor: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width) */
  webkitTextStrokeWidth: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transform`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform)
   */
  webkitTransform: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transformOrigin`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
   */
  webkitTransformOrigin: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transformStyle`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
   */
  webkitTransformStyle: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transition`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition)
   */
  webkitTransition: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionDelay`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
   */
  webkitTransitionDelay: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionDuration`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
   */
  webkitTransitionDuration: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionProperty`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
   */
  webkitTransitionProperty: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `transitionTimingFunction`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
   */
  webkitTransitionTimingFunction: string | ref<string>;
  /**
   * @deprecated This is a legacy alias of `userSelect`.
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
   */
  webkitUserSelect: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/white-space) */
  whiteSpace: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/widows) */
  widows: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/width) */
  width: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/will-change) */
  willChange: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/word-break) */
  wordBreak: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing) */
  wordSpacing: string | ref<string>;
  /**
   * @deprecated
   *
   * [MDN reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
   */
  wordWrap: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode) */
  writingMode: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/z-index) */
  zIndex: string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) */
  getPropertyPriority(property: string): string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyValue) */
  getPropertyValue(property: string): string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/item) */
  item(index: number): string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/removeProperty) */
  removeProperty(property: string): string | ref<string>;
  /** [MDN reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/setProperty) */
  setProperty(property: string, value: string | ref<string> | null, priority?: string): void;
  [index: number]: string | ref<string>;

  hasOwnProperty(key: string): boolean;
}

const removePropertyOriginal = CSSStyleDeclaration.prototype.removeProperty;

Object.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
  value: function (property: string) {
    removePropertyOriginal.call(this, property);
  },
  writable: true,
  configurable: true,
});

const setPropertyOriginal = CSSStyleDeclaration.prototype.setProperty;

Object.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
  value: function (property: string, value: string | ref<string> | null, priority?: string) {
    const baseref = refType(value);
    if (baseref) baseref.subscribe(this, property);
    else setPropertyOriginal.call(this, property, value, priority);
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(CSSStyleDeclaration.prototype, "hasOwnProperty", {
  value: function (key: string) {
    return key in this;
  },
  writable: true,
  configurable: true,
});

const originalCreateElement = Document.prototype.createElement;

Object.defineProperty(Document.prototype, "createElement", {
  value: function (tagName: string) {
    const element = originalCreateElement.call(this, tagName);
    element["__style__"] = new Proxy(element.style, {
      set: (target, prop, value) => {
        const baseRef = refType(value);
        if (baseRef != undefined && typeof target[prop] != "function") baseRef.subscribe(target, prop);
        else target[prop] = value;
        return true;
      },
      get: (target, prop) => {
        return target[prop];
      },
    });
    Object.defineProperty(element, "style", {
      get: () => element["__style__"],
    });
    return element;
  },
});
