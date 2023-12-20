import { tr } from "date-fns/locale";
import { Ref } from "../../ref";

export type Variant =
  | "default"
  | "outline"
  | "solo"
  | "standard"
  | "underlined";

const _styleAtributtes = [
  "accentColor",
  "additiveSymbols",
  "alignContent",
  "alignItems",
  "alignSelf",
  "alignmentBaseline",
  "all",
  "animation",
  "animationComposition",
  "animationDelay",
  "animationDirection",
  "animationDuration",
  "animationFillMode",
  "animationIterationCount",
  "animationName",
  "animationPlayState",
  "animationRange",
  "animationRangeEnd",
  "animationRangeStart",
  "animationTimeline",
  "animationTimingFunction",
  "appRegion",
  "appearance",
  "ascentOverride",
  "aspectRatio",
  "backdropFilter",
  "backfaceVisibility",
  "background",
  "backgroundAttachment",
  "backgroundBlendMode",
  "backgroundClip",
  "backgroundColor",
  "backgroundImage",
  "backgroundOrigin",
  "backgroundPosition",
  "backgroundPositionX",
  "backgroundPositionY",
  "backgroundRepeat",
  "backgroundRepeatX",
  "backgroundRepeatY",
  "backgroundSize",
  "basePalette",
  "baselineShift",
  "baselineSource",
  "blockSize",
  "border",
  "borderBlock",
  "borderBlockColor",
  "borderBlockEnd",
  "borderBlockEndColor",
  "borderBlockEndStyle",
  "borderBlockEndWidth",
  "borderBlockStart",
  "borderBlockStartColor",
  "borderBlockStartStyle",
  "borderBlockStartWidth",
  "borderBlockStyle",
  "borderBlockWidth",
  "borderBottom",
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStyle",
  "borderBottomWidth",
  "borderCollapse",
  "borderColor",
  "borderEndEndRadius",
  "borderEndStartRadius",
  "borderImage",
  "borderImageOutset",
  "borderImageRepeat",
  "borderImageSlice",
  "borderImageSource",
  "borderImageWidth",
  "borderInline",
  "borderInlineColor",
  "borderInlineEnd",
  "borderInlineEndColor",
  "borderInlineEndStyle",
  "borderInlineEndWidth",
  "borderInlineStart",
  "borderInlineStartColor",
  "borderInlineStartStyle",
  "borderInlineStartWidth",
  "borderInlineStyle",
  "borderInlineWidth",
  "borderLeft",
  "borderLeftColor",
  "borderLeftStyle",
  "borderLeftWidth",
  "borderRadius",
  "borderRight",
  "borderRightColor",
  "borderRightStyle",
  "borderRightWidth",
  "borderSpacing",
  "borderStartEndRadius",
  "borderStartStartRadius",
  "borderStyle",
  "borderTop",
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStyle",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "boxShadow",
  "boxSizing",
  "breakAfter",
  "breakBefore",
  "breakInside",
  "bufferedRendering",
  "captionSide",
  "caretColor",
  "clear",
  "clip",
  "clipPath",
  "clipRule",
  "color",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorRendering",
  "colorScheme",
  "columnCount",
  "columnFill",
  "columnGap",
  "columnRule",
  "columnRuleColor",
  "columnRuleStyle",
  "columnRuleWidth",
  "columnSpan",
  "columnWidth",
  "columns",
  "contain",
  "containIntrinsicBlockSize",
  "containIntrinsicHeight",
  "containIntrinsicInlineSize",
  "containIntrinsicSize",
  "containIntrinsicWidth",
  "container",
  "containerName",
  "containerType",
  "content",
  "contentVisibility",
  "counterIncrement",
  "counterReset",
  "counterSet",
  "cursor",
  "cx",
  "cy",
  "d",
  "descentOverride",
  "direction",
  "display",
  "dominantBaseline",
  "emptyCells",
  "fallback",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexFlow",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "float",
  "floodColor",
  "floodOpacity",
  "font",
  "fontDisplay",
  "fontFamily",
  "fontFeatureSettings",
  "fontKerning",
  "fontOpticalSizing",
  "fontPalette",
  "fontSize",
  "fontStretch",
  "fontStyle",
  "fontSynthesis",
  "fontSynthesisSmallCaps",
  "fontSynthesisStyle",
  "fontSynthesisWeight",
  "fontVariant",
  "fontVariantAlternates",
  "fontVariantCaps",
  "fontVariantEastAsian",
  "fontVariantLigatures",
  "fontVariantNumeric",
  "fontVariantPosition",
  "fontVariationSettings",
  "fontWeight",
  "forcedColorAdjust",
  "gap",
  "grid",
  "gridArea",
  "gridAutoColumns",
  "gridAutoFlow",
  "gridAutoRows",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnGap",
  "gridColumnStart",
  "gridGap",
  "gridRow",
  "gridRowEnd",
  "gridRowGap",
  "gridRowStart",
  "gridTemplate",
  "gridTemplateAreas",
  "gridTemplateColumns",
  "gridTemplateRows",
  "height",
  "hyphenateCharacter",
  "hyphenateLimitChars",
  "hyphens",
  "imageOrientation",
  "imageRendering",
  "inherits",
  "initialLetter",
  "initialValue",
  "inlineSize",
  "inset",
  "insetBlock",
  "insetBlockEnd",
  "insetBlockStart",
  "insetInline",
  "insetInlineEnd",
  "insetInlineStart",
  "isolation",
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "left",
  "letterSpacing",
  "lightingColor",
  "lineBreak",
  "lineGapOverride",
  "lineHeight",
  "listStyle",
  "listStyleImage",
  "listStylePosition",
  "listStyleType",
  "margin",
  "marginBlock",
  "marginBlockEnd",
  "marginBlockStart",
  "marginBottom",
  "marginInline",
  "marginInlineEnd",
  "marginInlineStart",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marker",
  "markerEnd",
  "markerMid",
  "markerStart",
  "mask",
  "maskType",
  "mathDepth",
  "mathShift",
  "mathStyle",
  "maxBlockSize",
  "maxHeight",
  "maxInlineSize",
  "maxWidth",
  "minBlockSize",
  "minHeight",
  "minInlineSize",
  "minWidth",
  "mixBlendMode",
  "negative",
  "objectFit",
  "objectPosition",
  "objectViewBox",
  "offset",
  "offsetAnchor",
  "offsetDistance",
  "offsetPath",
  "offsetPosition",
  "offsetRotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outlineColor",
  "outlineOffset",
  "outlineStyle",
  "outlineWidth",
  "overflow",
  "overflowAnchor",
  "overflowClipMargin",
  "overflowWrap",
  "overflowX",
  "overflowY",
  "overlay",
  "overrideColors",
  "overscrollBehavior",
  "overscrollBehaviorBlock",
  "overscrollBehaviorInline",
  "overscrollBehaviorX",
  "overscrollBehaviorY",
  "pad",
  "padding",
  "paddingBlock",
  "paddingBlockEnd",
  "paddingBlockStart",
  "paddingBottom",
  "paddingInline",
  "paddingInlineEnd",
  "paddingInlineStart",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "page",
  "pageBreakAfter",
  "pageBreakBefore",
  "pageBreakInside",
  "pageOrientation",
  "paintOrder",
  "perspective",
  "perspectiveOrigin",
  "placeContent",
  "placeItems",
  "placeSelf",
  "pointerEvents",
  "position",
  "prefix",
  "quotes",
  "r",
  "range",
  "resize",
  "right",
  "rotate",
  "rowGap",
  "rubyPosition",
  "rx",
  "ry",
  "scale",
  "scrollBehavior",
  "scrollMargin",
  "scrollMarginBlock",
  "scrollMarginBlockEnd",
  "scrollMarginBlockStart",
  "scrollMarginBottom",
  "scrollMarginInline",
  "scrollMarginInlineEnd",
  "scrollMarginInlineStart",
  "scrollMarginLeft",
  "scrollMarginRight",
  "scrollMarginTop",
  "scrollPadding",
  "scrollPaddingBlock",
  "scrollPaddingBlockEnd",
  "scrollPaddingBlockStart",
  "scrollPaddingBottom",
  "scrollPaddingInline",
  "scrollPaddingInlineEnd",
  "scrollPaddingInlineStart",
  "scrollPaddingLeft",
  "scrollPaddingRight",
  "scrollPaddingTop",
  "scrollSnapAlign",
  "scrollSnapStop",
  "scrollSnapType",
  "scrollTimeline",
  "scrollTimelineAxis",
  "scrollTimelineName",
  "scrollbarGutter",
  "shapeImageThreshold",
  "shapeMargin",
  "shapeOutside",
  "shapeRendering",
  "size",
  "sizeAdjust",
  "speak",
  "speakAs",
  "src",
  "stopColor",
  "stopOpacity",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "suffix",
  "symbols",
  "syntax",
  "system",
  "tabSize",
  "tableLayout",
  "textAlign",
  "textAlignLast",
  "textAnchor",
  "textCombineUpright",
  "textDecoration",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationSkipInk",
  "textDecorationStyle",
  "textDecorationThickness",
  "textEmphasis",
  "textEmphasisColor",
  "textEmphasisPosition",
  "textEmphasisStyle",
  "textIndent",
  "textOrientation",
  "textOverflow",
  "textRendering",
  "textShadow",
  "textSizeAdjust",
  "textTransform",
  "textUnderlineOffset",
  "textUnderlinePosition",
  "textWrap",
  "timelineScope",
  "top",
  "touchAction",
  "transform",
  "transformBox",
  "transformOrigin",
  "transformStyle",
  "transition",
  "transitionBehavior",
  "transitionDelay",
  "transitionDuration",
  "transitionProperty",
  "transitionTimingFunction",
  "translate",
  "unicodeBidi",
  "unicodeRange",
  "userSelect",
  "vectorEffect",
  "verticalAlign",
  "viewTimeline",
  "viewTimelineAxis",
  "viewTimelineInset",
  "viewTimelineName",
  "viewTransitionName",
  "visibility",
  "webkitAlignContent",
  "webkitAlignItems",
  "webkitAlignSelf",
  "webkitAnimation",
  "webkitAnimationDelay",
  "webkitAnimationDirection",
  "webkitAnimationDuration",
  "webkitAnimationFillMode",
  "webkitAnimationIterationCount",
  "webkitAnimationName",
  "webkitAnimationPlayState",
  "webkitAnimationTimingFunction",
  "webkitAppRegion",
  "webkitAppearance",
  "webkitBackfaceVisibility",
  "webkitBackgroundClip",
  "webkitBackgroundOrigin",
  "webkitBackgroundSize",
  "webkitBorderAfter",
  "webkitBorderAfterColor",
  "webkitBorderAfterStyle",
  "webkitBorderAfterWidth",
  "webkitBorderBefore",
  "webkitBorderBeforeColor",
  "webkitBorderBeforeStyle",
  "webkitBorderBeforeWidth",
  "webkitBorderBottomLeftRadius",
  "webkitBorderBottomRightRadius",
  "webkitBorderEnd",
  "webkitBorderEndColor",
  "webkitBorderEndStyle",
  "webkitBorderEndWidth",
  "webkitBorderHorizontalSpacing",
  "webkitBorderImage",
  "webkitBorderRadius",
  "webkitBorderStart",
  "webkitBorderStartColor",
  "webkitBorderStartStyle",
  "webkitBorderStartWidth",
  "webkitBorderTopLeftRadius",
  "webkitBorderTopRightRadius",
  "webkitBorderVerticalSpacing",
  "webkitBoxAlign",
  "webkitBoxDecorationBreak",
  "webkitBoxDirection",
  "webkitBoxFlex",
  "webkitBoxOrdinalGroup",
  "webkitBoxOrient",
  "webkitBoxPack",
  "webkitBoxReflect",
  "webkitBoxShadow",
  "webkitBoxSizing",
  "webkitClipPath",
  "webkitColumnBreakAfter",
  "webkitColumnBreakBefore",
  "webkitColumnBreakInside",
  "webkitColumnCount",
  "webkitColumnGap",
  "webkitColumnRule",
  "webkitColumnRuleColor",
  "webkitColumnRuleStyle",
  "webkitColumnRuleWidth",
  "webkitColumnSpan",
  "webkitColumnWidth",
  "webkitColumns",
  "webkitFilter",
  "webkitFlex",
  "webkitFlexBasis",
  "webkitFlexDirection",
  "webkitFlexFlow",
  "webkitFlexGrow",
  "webkitFlexShrink",
  "webkitFlexWrap",
  "webkitFontFeatureSettings",
  "webkitFontSmoothing",
  "webkitHyphenateCharacter",
  "webkitJustifyContent",
  "webkitLineBreak",
  "webkitLineClamp",
  "webkitLocale",
  "webkitLogicalHeight",
  "webkitLogicalWidth",
  "webkitMarginAfter",
  "webkitMarginBefore",
  "webkitMarginEnd",
  "webkitMarginStart",
  "webkitMask",
  "webkitMaskBoxImage",
  "webkitMaskBoxImageOutset",
  "webkitMaskBoxImageRepeat",
  "webkitMaskBoxImageSlice",
  "webkitMaskBoxImageSource",
  "webkitMaskBoxImageWidth",
  "webkitMaskClip",
  "webkitMaskComposite",
  "webkitMaskImage",
  "webkitMaskOrigin",
  "webkitMaskPosition",
  "webkitMaskPositionX",
  "webkitMaskPositionY",
  "webkitMaskRepeat",
  "webkitMaskRepeatX",
  "webkitMaskRepeatY",
  "webkitMaskSize",
  "webkitMaxLogicalHeight",
  "webkitMaxLogicalWidth",
  "webkitMinLogicalHeight",
  "webkitMinLogicalWidth",
  "webkitOpacity",
  "webkitOrder",
  "webkitPaddingAfter",
  "webkitPaddingBefore",
  "webkitPaddingEnd",
  "webkitPaddingStart",
  "webkitPerspective",
  "webkitPerspectiveOrigin",
  "webkitPerspectiveOriginX",
  "webkitPerspectiveOriginY",
  "webkitPrintColorAdjust",
  "webkitRtlOrdering",
  "webkitRubyPosition",
  "webkitShapeImageThreshold",
  "webkitShapeMargin",
  "webkitShapeOutside",
  "webkitTapHighlightColor",
  "webkitTextCombine",
  "webkitTextDecorationsInEffect",
  "webkitTextEmphasis",
  "webkitTextEmphasisColor",
  "webkitTextEmphasisPosition",
  "webkitTextEmphasisStyle",
  "webkitTextFillColor",
  "webkitTextOrientation",
  "webkitTextSecurity",
  "webkitTextSizeAdjust",
  "webkitTextStroke",
  "webkitTextStrokeColor",
  "webkitTextStrokeWidth",
  "webkitTransform",
  "webkitTransformOrigin",
  "webkitTransformOriginX",
  "webkitTransformOriginY",
  "webkitTransformOriginZ",
  "webkitTransformStyle",
  "webkitTransition",
  "webkitTransitionDelay",
  "webkitTransitionDuration",
  "webkitTransitionProperty",
  "webkitTransitionTimingFunction",
  "webkitUserDrag",
  "webkitUserModify",
  "webkitUserSelect",
  "webkitWritingMode",
  "whiteSpace",
  "whiteSpaceCollapse",
  "widows",
  "width",
  "willChange",
  "wordBreak",
  "wordSpacing",
  "wordWrap",
  "writingMode",
  "x",
  "y",
  "zIndex",
  "zoom",
];

export interface CSSStyleDeclarationOptional {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
  text?: string | Ref<string> | any;
  accentColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content) */
  alignContent?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items) */
  alignItems?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self) */
  alignSelf?: string | Ref<string> | any;
  alignmentBaseline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all) */
  all?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation) */
  animation?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition) */
  animationComposition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay) */
  animationDelay?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction) */
  animationDirection?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration) */
  animationDuration?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode) */
  animationFillMode?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count) */
  animationIterationCount?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name) */
  animationName?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state) */
  animationPlayState?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function) */
  animationTimingFunction?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance) */
  appearance?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) */
  aspectRatio?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) */
  backdropFilter?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility) */
  backfaceVisibility?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background) */
  background?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment) */
  backgroundAttachment?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) */
  backgroundBlendMode?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip) */
  backgroundClip?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color) */
  backgroundColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image) */
  backgroundImage?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin) */
  backgroundOrigin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position) */
  backgroundPosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x) */
  backgroundPositionX?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y) */
  backgroundPositionY?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat) */
  backgroundRepeat?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size) */
  backgroundSize?: string | Ref<string> | any;
  baselineShift?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size) */
  blockSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border) */
  border?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block) */
  borderBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color) */
  borderBlockColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end) */
  borderBlockEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color) */
  borderBlockEndColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style) */
  borderBlockEndStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width) */
  borderBlockEndWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start) */
  borderBlockStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color) */
  borderBlockStartColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style) */
  borderBlockStartStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width) */
  borderBlockStartWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style) */
  borderBlockStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width) */
  borderBlockWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom) */
  borderBottom?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color) */
  borderBottomColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius) */
  borderBottomLeftRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius) */
  borderBottomRightRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style) */
  borderBottomStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width) */
  borderBottomWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse) */
  borderCollapse?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color) */
  borderColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius) */
  borderEndEndRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius) */
  borderEndStartRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image) */
  borderImage?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset) */
  borderImageOutset?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat) */
  borderImageRepeat?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice) */
  borderImageSlice?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source) */
  borderImageSource?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width) */
  borderImageWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline) */
  borderInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color) */
  borderInlineColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end) */
  borderInlineEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color) */
  borderInlineEndColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style) */
  borderInlineEndStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width) */
  borderInlineEndWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start) */
  borderInlineStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color) */
  borderInlineStartColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style) */
  borderInlineStartStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width) */
  borderInlineStartWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style) */
  borderInlineStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width) */
  borderInlineWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left) */
  borderLeft?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color) */
  borderLeftColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style) */
  borderLeftStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width) */
  borderLeftWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius) */
  borderRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right) */
  borderRight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color) */
  borderRightColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style) */
  borderRightStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width) */
  borderRightWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing) */
  borderSpacing?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius) */
  borderStartEndRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius) */
  borderStartStartRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style) */
  borderStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top) */
  borderTop?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color) */
  borderTopColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius) */
  borderTopLeftRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius) */
  borderTopRightRadius?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style) */
  borderTopStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width) */
  borderTopWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width) */
  borderWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom) */
  bottom?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow) */
  boxShadow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing) */
  boxSizing?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-after) */
  breakAfter?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-before) */
  breakBefore?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-inside) */
  breakInside?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side) */
  captionSide?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color) */
  caretColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear) */
  clear?: string | Ref<string> | any;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip)
   */
  clip?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path) */
  clipPath?: string | Ref<string> | any;
  clipRule?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color) */
  color?: string | Ref<string> | any;
  colorInterpolation?: string | Ref<string> | any;
  colorInterpolationFilters?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme) */
  colorScheme?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count) */
  columnCount?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill) */
  columnFill?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-gap) */
  columnGap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule) */
  columnRule?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color) */
  columnRuleColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style) */
  columnRuleStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width) */
  columnRuleWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span) */
  columnSpan?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width) */
  columnWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns) */
  columns?: string | number;
  rows?: string | number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain) */
  contain?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-block-size) */
  containIntrinsicBlockSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height) */
  containIntrinsicHeight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-inline-size) */
  containIntrinsicInlineSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size) */
  containIntrinsicSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width) */
  containIntrinsicWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container) */
  container?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-name) */
  containerName?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-type) */
  containerType?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content) */
  content?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment) */
  counterIncrement?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset) */
  counterReset?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set) */
  counterSet?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat) */
  cssFloat?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText) */
  cssText?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor) */
  cursor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction) */
  direction?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display) */
  display?: string | Ref<string> | any;
  dominantBaseline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells) */
  emptyCells?: string | Ref<string> | any;
  fill?: string | Ref<string> | any;
  fillOpacity?: string | Ref<string> | any;
  fillRule?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter) */
  filter?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex) */
  flex?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis) */
  flexBasis?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction) */
  flexDirection?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow) */
  flexFlow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow) */
  flexGrow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink) */
  flexShrink?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap) */
  flexWrap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float) */
  float?: string | Ref<string> | any;
  floodColor?: string | Ref<string> | any;
  floodOpacity?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font) */
  font?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family) */
  fontFamily?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
  fontFeatureSettings?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning) */
  fontKerning?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
  fontOpticalSizing?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
  fontPalette?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size) */
  fontSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust) */
  fontSizeAdjust?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch) */
  fontStretch?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style) */
  fontStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis) */
  fontSynthesis?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
  fontSynthesisSmallCaps?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
  fontSynthesisStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
  fontSynthesisWeight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant) */
  fontVariant?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates) */
  fontVariantAlternates?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
  fontVariantCaps?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
  fontVariantEastAsian?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
  fontVariantLigatures?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
  fontVariantNumeric?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
  fontVariantPosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
  fontVariationSettings?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight) */
  fontWeight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust) */
  forcedColorAdjust?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/gap) */
  gap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid) */
  grid?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area) */
  gridArea?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) */
  gridAutoColumns?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) */
  gridAutoFlow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) */
  gridAutoRows?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column) */
  gridColumn?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) */
  gridColumnEnd?: string | Ref<string> | any;
  /** @deprecated This is a legacy alias of `columnGap`. */
  gridColumnGap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) */
  gridColumnStart?: string | Ref<string> | any;
  /** @deprecated This is a legacy alias of `gap`. */
  gridGap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row) */
  gridRow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) */
  gridRowEnd?: string | Ref<string> | any;
  /** @deprecated This is a legacy alias of `rowGap`. */
  gridRowGap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) */
  gridRowStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template) */
  gridTemplate?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) */
  gridTemplateAreas?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) */
  gridTemplateColumns?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) */
  gridTemplateRows?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height) */
  height?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character) */
  hyphenateCharacter?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens) */
  hyphens?: string | Ref<string> | any;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
   */
  imageOrientation?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering) */
  imageRendering?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size) */
  inlineSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset) */
  inset?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block) */
  insetBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) */
  insetBlockEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start) */
  insetBlockStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline) */
  insetInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end) */
  insetInlineEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start) */
  insetInlineStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation) */
  isolation?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content) */
  justifyContent?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-items) */
  justifyItems?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-self) */
  justifySelf?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left) */
  left?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/length) */
  readonly length?: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) */
  letterSpacing?: string | Ref<string> | any;
  lightingColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break) */
  lineBreak?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height) */
  lineHeight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style) */
  listStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image) */
  listStyleImage?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position) */
  listStylePosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type) */
  listStyleType?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin) */
  margin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block) */
  marginBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end) */
  marginBlockEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start) */
  marginBlockStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom) */
  marginBottom?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline) */
  marginInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end) */
  marginInlineEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start) */
  marginInlineStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left) */
  marginLeft?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right) */
  marginRight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top) */
  marginTop?: string | Ref<string> | any;
  marker?: string | Ref<string> | any;
  markerEnd?: string | Ref<string> | any;
  markerMid?: string | Ref<string> | any;
  markerStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask) */
  mask?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip) */
  maskClip?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite) */
  maskComposite?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image) */
  maskImage?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode) */
  maskMode?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin) */
  maskOrigin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position) */
  maskPosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat) */
  maskRepeat?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size) */
  maskSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type) */
  maskType?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-style) */
  mathStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size) */
  maxBlockSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height) */
  maxHeight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) */
  maxInlineSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width) */
  maxWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size) */
  minBlockSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height) */
  minHeight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size) */
  minInlineSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width) */
  minWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) */
  mixBlendMode?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit) */
  objectFit?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position) */
  objectPosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset) */
  offset?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance) */
  offsetDistance?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path) */
  offsetPath?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate) */
  offsetRotate?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity) */
  opacity?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order) */
  order?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans) */
  orphans?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline) */
  outline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color) */
  outlineColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset) */
  outlineOffset?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style) */
  outlineStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width) */
  outlineWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow) */
  overflow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor) */
  overflowAnchor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin) */
  overflowClipMargin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap) */
  overflowWrap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x) */
  overflowX?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y) */
  overflowY?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) */
  overscrollBehavior?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block) */
  overscrollBehaviorBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline) */
  overscrollBehaviorInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x) */
  overscrollBehaviorX?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y) */
  overscrollBehaviorY?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding) */
  padding?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block) */
  paddingBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end) */
  paddingBlockEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start) */
  paddingBlockStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom) */
  paddingBottom?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline) */
  paddingInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end) */
  paddingInlineEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start) */
  paddingInlineStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left) */
  paddingLeft?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right) */
  paddingRight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top) */
  paddingTop?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page) */
  page?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after) */
  pageBreakAfter?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before) */
  pageBreakBefore?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside) */
  pageBreakInside?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order) */
  paintOrder?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule) */
  readonly parentRule?: CSSRule | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective) */
  perspective?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin) */
  perspectiveOrigin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-content) */
  placeContent?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-items) */
  placeItems?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-self) */
  placeSelf?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events) */
  pointerEvents?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position) */
  position?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust) */
  printColorAdjust?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes) */
  quotes?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize) */
  resize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right) */
  right?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate) */
  rotate?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/row-gap) */
  rowGap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position) */
  rubyPosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale) */
  scale?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior) */
  scrollBehavior?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) */
  scrollMargin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block) */
  scrollMarginBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end) */
  scrollMarginBlockEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start) */
  scrollMarginBlockStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom) */
  scrollMarginBottom?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline) */
  scrollMarginInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end) */
  scrollMarginInlineEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start) */
  scrollMarginInlineStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left) */
  scrollMarginLeft?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right) */
  scrollMarginRight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top) */
  scrollMarginTop?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) */
  scrollPadding?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block) */
  scrollPaddingBlock?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end) */
  scrollPaddingBlockEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start) */
  scrollPaddingBlockStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom) */
  scrollPaddingBottom?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline) */
  scrollPaddingInline?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end) */
  scrollPaddingInlineEnd?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start) */
  scrollPaddingInlineStart?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left) */
  scrollPaddingLeft?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right) */
  scrollPaddingRight?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top) */
  scrollPaddingTop?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
  scrollSnapAlign?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
  scrollSnapStop?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
  scrollSnapType?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter) */
  scrollbarGutter?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold) */
  shapeImageThreshold?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin) */
  shapeMargin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside) */
  shapeOutside?: string | Ref<string> | any;
  shapeRendering?: string | Ref<string> | any;
  stopColor?: string | Ref<string> | any;
  stopOpacity?: string | Ref<string> | any;
  stroke?: string | Ref<string> | any;
  strokeDasharray?: string | Ref<string> | any;
  strokeDashoffset?: string | Ref<string> | any;
  strokeLinecap?: string | Ref<string> | any;
  strokeLinejoin?: string | Ref<string> | any;
  strokeMiterlimit?: string | Ref<string> | any;
  strokeOpacity?: string | Ref<string> | any;
  strokeWidth?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size) */
  tabSize?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout) */
  tableLayout?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align) */
  textAlign?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last) */
  textAlignLast?: string | Ref<string> | any;
  textAnchor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright) */
  textCombineUpright?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration) */
  textDecoration?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) */
  textDecorationColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) */
  textDecorationLine?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink) */
  textDecorationSkipInk?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) */
  textDecorationStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) */
  textDecorationThickness?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis) */
  textEmphasis?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color) */
  textEmphasisColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position) */
  textEmphasisPosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style) */
  textEmphasisStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent) */
  textIndent?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation) */
  textOrientation?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow) */
  textOverflow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering) */
  textRendering?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow) */
  textShadow?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform) */
  textTransform?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset) */
  textUnderlineOffset?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) */
  textUnderlinePosition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top) */
  top?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action) */
  touchAction?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform) */
  transform?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box) */
  transformBox?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin) */
  transformOrigin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style) */
  transformStyle?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition) */
  transition?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay) */
  transitionDelay?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration) */
  transitionDuration?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property) */
  transitionProperty?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function) */
  transitionTimingFunction?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate) */
  translate?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi) */
  unicodeBidi?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select) */
  userSelect?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align) */
  verticalAlign?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility) */
  visibility?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `alignContent`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  webkitAlignContent?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `alignItems`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  webkitAlignItems?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `alignSelf`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  webkitAlignSelf?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animation`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)
   */
  webkitAnimation?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationDelay`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
   */
  webkitAnimationDelay?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationDirection`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
   */
  webkitAnimationDirection?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationDuration`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
   */
  webkitAnimationDuration?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationFillMode`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
   */
  webkitAnimationFillMode?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationIterationCount`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
   */
  webkitAnimationIterationCount?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationName`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
   */
  webkitAnimationName?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationPlayState`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
   */
  webkitAnimationPlayState?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationTimingFunction`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
   */
  webkitAnimationTimingFunction?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `appearance`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
   */
  webkitAppearance?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backfaceVisibility`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
   */
  webkitBackfaceVisibility?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backgroundClip`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
   */
  webkitBackgroundClip?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backgroundOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
   */
  webkitBackgroundOrigin?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backgroundSize`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
   */
  webkitBackgroundSize?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderBottomLeftRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
   */
  webkitBorderBottomLeftRadius?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderBottomRightRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
   */
  webkitBorderBottomRightRadius?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
   */
  webkitBorderRadius?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderTopLeftRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
   */
  webkitBorderTopLeftRadius?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderTopRightRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
   */
  webkitBorderTopRightRadius?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxAlign`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
   */
  webkitBoxAlign?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxFlex`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
   */
  webkitBoxFlex?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxOrdinalGroup`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
   */
  webkitBoxOrdinalGroup?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxOrient`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
   */
  webkitBoxOrient?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxPack`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
   */
  webkitBoxPack?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxShadow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
   */
  webkitBoxShadow?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxSizing`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
   */
  webkitBoxSizing?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `filter`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)
   */
  webkitFilter?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flex`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)
   */
  webkitFlex?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexBasis`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  webkitFlexBasis?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexDirection`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  webkitFlexDirection?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexFlow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  webkitFlexFlow?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexGrow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  webkitFlexGrow?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexShrink`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  webkitFlexShrink?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexWrap`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  webkitFlexWrap?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `justifyContent`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  webkitJustifyContent?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp) */
  webkitLineClamp?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `mask`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)
   */
  webkitMask?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorder`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border)
   */
  webkitMaskBoxImage?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderOutset`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)
   */
  webkitMaskBoxImageOutset?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderRepeat`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)
   */
  webkitMaskBoxImageRepeat?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderSlice`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)
   */
  webkitMaskBoxImageSlice?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderSource`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-source)
   */
  webkitMaskBoxImageSource?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderWidth`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-width)
   */
  webkitMaskBoxImageWidth?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskClip`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
   */
  webkitMaskClip?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite) */
  webkitMaskComposite?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskImage`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
   */
  webkitMaskImage?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
   */
  webkitMaskOrigin?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskPosition`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
   */
  webkitMaskPosition?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskRepeat`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
   */
  webkitMaskRepeat?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskSize`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
   */
  webkitMaskSize?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `order`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  webkitOrder?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `perspective`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
   */
  webkitPerspective?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `perspectiveOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
   */
  webkitPerspectiveOrigin?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color) */
  webkitTextFillColor?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `textSizeAdjust`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
   */
  webkitTextSizeAdjust?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke) */
  webkitTextStroke?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color) */
  webkitTextStrokeColor?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width) */
  webkitTextStrokeWidth?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transform`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)
   */
  webkitTransform?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transformOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
   */
  webkitTransformOrigin?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transformStyle`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
   */
  webkitTransformStyle?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transition`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)
   */
  webkitTransition?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionDelay`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
   */
  webkitTransitionDelay?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionDuration`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
   */
  webkitTransitionDuration?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionProperty`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
   */
  webkitTransitionProperty?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionTimingFunction`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
   */
  webkitTransitionTimingFunction?: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `userSelect`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
   */
  webkitUserSelect?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space) */
  whiteSpace?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows) */
  widows?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width) */
  width?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change) */
  willChange?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break) */
  wordBreak?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing) */
  wordSpacing?: string | Ref<string> | any;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
   */
  wordWrap?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode) */
  writingMode?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index) */
  zIndex?: string | Ref<string> | any;
}

export interface CSSStyleDeclarationRef {
  get accentColor(): string;
  set accentColor(value: string | Ref<string>);
  text?: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content) */
  alignContent: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items) */
  alignItems: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self) */
  alignSelf: string | Ref<string> | any;
  alignmentBaseline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/all) */
  all: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation) */
  animation: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-composition) */
  animationComposition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay) */
  animationDelay: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction) */
  animationDirection: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration) */
  animationDuration: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode) */
  animationFillMode: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count) */
  animationIterationCount: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name) */
  animationName: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state) */
  animationPlayState: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function) */
  animationTimingFunction: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance) */
  appearance: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/aspect-ratio) */
  aspectRatio: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) */
  backdropFilter: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility) */
  backfaceVisibility: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background) */
  background: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-attachment) */
  backgroundAttachment: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) */
  backgroundBlendMode: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip) */
  backgroundClip: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-color) */
  backgroundColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-image) */
  backgroundImage: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin) */
  backgroundOrigin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position) */
  backgroundPosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-x) */
  backgroundPositionX: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-position-y) */
  backgroundPositionY: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-repeat) */
  backgroundRepeat: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size) */
  backgroundSize: string | Ref<string> | any;
  baselineShift: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/block-size) */
  blockSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border) */
  border: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block) */
  borderBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-color) */
  borderBlockColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end) */
  borderBlockEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-color) */
  borderBlockEndColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-style) */
  borderBlockEndStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-end-width) */
  borderBlockEndWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start) */
  borderBlockStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-color) */
  borderBlockStartColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-style) */
  borderBlockStartStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-start-width) */
  borderBlockStartWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-style) */
  borderBlockStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-block-width) */
  borderBlockWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom) */
  borderBottom: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-color) */
  borderBottomColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius) */
  borderBottomLeftRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius) */
  borderBottomRightRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-style) */
  borderBottomStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-width) */
  borderBottomWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-collapse) */
  borderCollapse: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-color) */
  borderColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius) */
  borderEndEndRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius) */
  borderEndStartRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image) */
  borderImage: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-outset) */
  borderImageOutset: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-repeat) */
  borderImageRepeat: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-slice) */
  borderImageSlice: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-source) */
  borderImageSource: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-image-width) */
  borderImageWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline) */
  borderInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-color) */
  borderInlineColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end) */
  borderInlineEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color) */
  borderInlineEndColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style) */
  borderInlineEndStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width) */
  borderInlineEndWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start) */
  borderInlineStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color) */
  borderInlineStartColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style) */
  borderInlineStartStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width) */
  borderInlineStartWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-style) */
  borderInlineStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-inline-width) */
  borderInlineWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left) */
  borderLeft: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-color) */
  borderLeftColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-style) */
  borderLeftStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-left-width) */
  borderLeftWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius) */
  borderRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right) */
  borderRight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-color) */
  borderRightColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-style) */
  borderRightStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-right-width) */
  borderRightWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-spacing) */
  borderSpacing: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius) */
  borderStartEndRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius) */
  borderStartStartRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-style) */
  borderStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top) */
  borderTop: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-color) */
  borderTopColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius) */
  borderTopLeftRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius) */
  borderTopRightRadius: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-style) */
  borderTopStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-width) */
  borderTopWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-width) */
  borderWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/bottom) */
  bottom: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow) */
  boxShadow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing) */
  boxSizing: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-after) */
  breakAfter: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-before) */
  breakBefore: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/break-inside) */
  breakInside: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caption-side) */
  captionSide: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/caret-color) */
  caretColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clear) */
  clear: string | Ref<string> | any;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip)
   */
  clip: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/clip-path) */
  clipPath: string | Ref<string> | any;
  clipRule: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color) */
  color: string | Ref<string> | any;
  colorInterpolation: string | Ref<string> | any;
  colorInterpolationFilters: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/color-scheme) */
  colorScheme: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-count) */
  columnCount: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-fill) */
  columnFill: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-gap) */
  columnGap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule) */
  columnRule: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-color) */
  columnRuleColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-style) */
  columnRuleStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-rule-width) */
  columnRuleWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-span) */
  columnSpan: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/column-width) */
  columnWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/columns) */
  columns: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain) */
  contain: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-block-size) */
  containIntrinsicBlockSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-height) */
  containIntrinsicHeight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-contain-intrinsic-inline-size) */
  containIntrinsicInlineSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size) */
  containIntrinsicSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-width) */
  containIntrinsicWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container) */
  container: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-name) */
  containerName: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/container-type) */
  containerType: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/content) */
  content: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-increment) */
  counterIncrement: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-reset) */
  counterReset: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/counter-set) */
  counterSet: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssFloat) */
  cssFloat: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/cssText) */
  cssText: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/cursor) */
  cursor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/direction) */
  direction: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/display) */
  display: string | Ref<string> | any;
  dominantBaseline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/empty-cells) */
  emptyCells: string | Ref<string> | any;
  fill: string | Ref<string> | any;
  fillOpacity: string | Ref<string> | any;
  fillRule: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter) */
  filter: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex) */
  flex: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis) */
  flexBasis: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction) */
  flexDirection: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow) */
  flexFlow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow) */
  flexGrow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink) */
  flexShrink: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap) */
  flexWrap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/float) */
  float: string | Ref<string> | any;
  floodColor: string | Ref<string> | any;
  floodOpacity: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font) */
  font: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-family) */
  fontFamily: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings) */
  fontFeatureSettings: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-kerning) */
  fontKerning: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing) */
  fontOpticalSizing: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-palette) */
  fontPalette: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size) */
  fontSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-size-adjust) */
  fontSizeAdjust: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-stretch) */
  fontStretch: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-style) */
  fontStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis) */
  fontSynthesis: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-small-caps) */
  fontSynthesisSmallCaps: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-style) */
  fontSynthesisStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-synthesis-weight) */
  fontSynthesisWeight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant) */
  fontVariant: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates) */
  fontVariantAlternates: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps) */
  fontVariantCaps: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian) */
  fontVariantEastAsian: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) */
  fontVariantLigatures: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric) */
  fontVariantNumeric: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variant-position) */
  fontVariantPosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings) */
  fontVariationSettings: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/font-weight) */
  fontWeight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust) */
  forcedColorAdjust: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/gap) */
  gap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid) */
  grid: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-area) */
  gridArea: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns) */
  gridAutoColumns: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow) */
  gridAutoFlow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows) */
  gridAutoRows: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column) */
  gridColumn: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-end) */
  gridColumnEnd: string | Ref<string> | any;
  /** @deprecated This is a legacy alias of `columnGap`. */
  gridColumnGap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-column-start) */
  gridColumnStart: string | Ref<string> | any;
  /** @deprecated This is a legacy alias of `gap`. */
  gridGap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row) */
  gridRow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-end) */
  gridRowEnd: string | Ref<string> | any;
  /** @deprecated This is a legacy alias of `rowGap`. */
  gridRowGap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-row-start) */
  gridRowStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template) */
  gridTemplate: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-areas) */
  gridTemplateAreas: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-columns) */
  gridTemplateColumns: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/grid-template-rows) */
  gridTemplateRows: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/height) */
  height: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphenate-character) */
  hyphenateCharacter: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/hyphens) */
  hyphens: string | Ref<string> | any;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-orientation)
   */
  imageOrientation: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/image-rendering) */
  imageRendering: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inline-size) */
  inlineSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset) */
  inset: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block) */
  insetBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-end) */
  insetBlockEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-block-start) */
  insetBlockStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline) */
  insetInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-end) */
  insetInlineEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/inset-inline-start) */
  insetInlineStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/isolation) */
  isolation: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content) */
  justifyContent: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-items) */
  justifyItems: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-self) */
  justifySelf: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/left) */
  left: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/length) */
  readonly length: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) */
  letterSpacing: string | Ref<string> | any;
  lightingColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-break) */
  lineBreak: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/line-height) */
  lineHeight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style) */
  listStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-image) */
  listStyleImage: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-position) */
  listStylePosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/list-style-type) */
  listStyleType: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin) */
  margin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block) */
  marginBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-end) */
  marginBlockEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-block-start) */
  marginBlockStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-bottom) */
  marginBottom: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline) */
  marginInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-end) */
  marginInlineEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-inline-start) */
  marginInlineStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-left) */
  marginLeft: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-right) */
  marginRight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/margin-top) */
  marginTop: string | Ref<string> | any;
  marker: string | Ref<string> | any;
  markerEnd: string | Ref<string> | any;
  markerMid: string | Ref<string> | any;
  markerStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask) */
  mask: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip) */
  maskClip: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-composite) */
  maskComposite: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image) */
  maskImage: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-mode) */
  maskMode: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin) */
  maskOrigin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position) */
  maskPosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat) */
  maskRepeat: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size) */
  maskSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-type) */
  maskType: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/math-style) */
  mathStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-block-size) */
  maxBlockSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-height) */
  maxHeight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-inline-size) */
  maxInlineSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/max-width) */
  maxWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-block-size) */
  minBlockSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-height) */
  minHeight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-inline-size) */
  minInlineSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/min-width) */
  minWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) */
  mixBlendMode: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-fit) */
  objectFit: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/object-position) */
  objectPosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset) */
  offset: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-distance) */
  offsetDistance: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-path) */
  offsetPath: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/offset-rotate) */
  offsetRotate: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/opacity) */
  opacity: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order) */
  order: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/orphans) */
  orphans: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline) */
  outline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-color) */
  outlineColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-offset) */
  outlineOffset: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-style) */
  outlineStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/outline-width) */
  outlineWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow) */
  overflow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-anchor) */
  overflowAnchor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin) */
  overflowClipMargin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap) */
  overflowWrap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-x) */
  overflowX: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-y) */
  overflowY: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) */
  overscrollBehavior: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block) */
  overscrollBehaviorBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline) */
  overscrollBehaviorInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x) */
  overscrollBehaviorX: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y) */
  overscrollBehaviorY: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding) */
  padding: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block) */
  paddingBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-end) */
  paddingBlockEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-block-start) */
  paddingBlockStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-bottom) */
  paddingBottom: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline) */
  paddingInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-end) */
  paddingInlineEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-inline-start) */
  paddingInlineStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-left) */
  paddingLeft: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-right) */
  paddingRight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/padding-top) */
  paddingTop: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page) */
  page: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-after) */
  pageBreakAfter: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-before) */
  pageBreakBefore: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/page-break-inside) */
  pageBreakInside: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/paint-order) */
  paintOrder: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/parentRule) */
  readonly parentRule: CSSRule | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective) */
  perspective: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin) */
  perspectiveOrigin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-content) */
  placeContent: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-items) */
  placeItems: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/place-self) */
  placeSelf: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/pointer-events) */
  pointerEvents: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/position) */
  position: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/print-color-adjust) */
  printColorAdjust: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/quotes) */
  quotes: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/resize) */
  resize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/right) */
  right: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/rotate) */
  rotate: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/row-gap) */
  rowGap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/ruby-position) */
  rubyPosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scale) */
  scale: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-behavior) */
  scrollBehavior: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) */
  scrollMargin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block) */
  scrollMarginBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end) */
  scrollMarginBlockEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start) */
  scrollMarginBlockStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom) */
  scrollMarginBottom: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline) */
  scrollMarginInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end) */
  scrollMarginInlineEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start) */
  scrollMarginInlineStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left) */
  scrollMarginLeft: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right) */
  scrollMarginRight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top) */
  scrollMarginTop: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) */
  scrollPadding: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block) */
  scrollPaddingBlock: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end) */
  scrollPaddingBlockEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start) */
  scrollPaddingBlockStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom) */
  scrollPaddingBottom: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline) */
  scrollPaddingInline: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end) */
  scrollPaddingInlineEnd: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start) */
  scrollPaddingInlineStart: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left) */
  scrollPaddingLeft: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right) */
  scrollPaddingRight: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top) */
  scrollPaddingTop: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
  scrollSnapAlign: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
  scrollSnapStop: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
  scrollSnapType: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter) */
  scrollbarGutter: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold) */
  shapeImageThreshold: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-margin) */
  shapeMargin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/shape-outside) */
  shapeOutside: string | Ref<string> | any;
  shapeRendering: string | Ref<string> | any;
  stopColor: string | Ref<string> | any;
  stopOpacity: string | Ref<string> | any;
  stroke: string | Ref<string> | any;
  strokeDasharray: string | Ref<string> | any;
  strokeDashoffset: string | Ref<string> | any;
  strokeLinecap: string | Ref<string> | any;
  strokeLinejoin: string | Ref<string> | any;
  strokeMiterlimit: string | Ref<string> | any;
  strokeOpacity: string | Ref<string> | any;
  strokeWidth: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/tab-size) */
  tabSize: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/table-layout) */
  tableLayout: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align) */
  textAlign: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-align-last) */
  textAlignLast: string | Ref<string> | any;
  textAnchor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-combine-upright) */
  textCombineUpright: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration) */
  textDecoration: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) */
  textDecorationColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) */
  textDecorationLine: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink) */
  textDecorationSkipInk: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) */
  textDecorationStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) */
  textDecorationThickness: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis) */
  textEmphasis: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color) */
  textEmphasisColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position) */
  textEmphasisPosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style) */
  textEmphasisStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-indent) */
  textIndent: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-orientation) */
  textOrientation: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-overflow) */
  textOverflow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-rendering) */
  textRendering: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-shadow) */
  textShadow: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-transform) */
  textTransform: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-offset) */
  textUnderlineOffset: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) */
  textUnderlinePosition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/top) */
  top: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/touch-action) */
  touchAction: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform) */
  transform: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-box) */
  transformBox: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin) */
  transformOrigin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style) */
  transformStyle: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition) */
  transition: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay) */
  transitionDelay: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration) */
  transitionDuration: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property) */
  transitionProperty: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function) */
  transitionTimingFunction: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/translate) */
  translate: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/unicode-bidi) */
  unicodeBidi: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select) */
  userSelect: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/vertical-align) */
  verticalAlign: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/visibility) */
  visibility: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `alignContent`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-content)
   */
  webkitAlignContent: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `alignItems`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-items)
   */
  webkitAlignItems: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `alignSelf`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/align-self)
   */
  webkitAlignSelf: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animation`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation)
   */
  webkitAnimation: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationDelay`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
   */
  webkitAnimationDelay: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationDirection`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-direction)
   */
  webkitAnimationDirection: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationDuration`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-duration)
   */
  webkitAnimationDuration: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationFillMode`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode)
   */
  webkitAnimationFillMode: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationIterationCount`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count)
   */
  webkitAnimationIterationCount: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationName`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-name)
   */
  webkitAnimationName: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationPlayState`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-play-state)
   */
  webkitAnimationPlayState: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `animationTimingFunction`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/animation-timing-function)
   */
  webkitAnimationTimingFunction: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `appearance`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/appearance)
   */
  webkitAppearance: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backfaceVisibility`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/backface-visibility)
   */
  webkitBackfaceVisibility: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backgroundClip`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-clip)
   */
  webkitBackgroundClip: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backgroundOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-origin)
   */
  webkitBackgroundOrigin: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `backgroundSize`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/background-size)
   */
  webkitBackgroundSize: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderBottomLeftRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius)
   */
  webkitBorderBottomLeftRadius: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderBottomRightRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius)
   */
  webkitBorderBottomRightRadius: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-radius)
   */
  webkitBorderRadius: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderTopLeftRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius)
   */
  webkitBorderTopLeftRadius: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `borderTopRightRadius`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius)
   */
  webkitBorderTopRightRadius: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxAlign`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-align)
   */
  webkitBoxAlign: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxFlex`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-flex)
   */
  webkitBoxFlex: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxOrdinalGroup`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-ordinal-group)
   */
  webkitBoxOrdinalGroup: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxOrient`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-orient)
   */
  webkitBoxOrient: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxPack`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-pack)
   */
  webkitBoxPack: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxShadow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-shadow)
   */
  webkitBoxShadow: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `boxSizing`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/box-sizing)
   */
  webkitBoxSizing: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `filter`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/filter)
   */
  webkitFilter: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flex`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex)
   */
  webkitFlex: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexBasis`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-basis)
   */
  webkitFlexBasis: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexDirection`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-direction)
   */
  webkitFlexDirection: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexFlow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-flow)
   */
  webkitFlexFlow: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexGrow`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-grow)
   */
  webkitFlexGrow: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexShrink`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-shrink)
   */
  webkitFlexShrink: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `flexWrap`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/flex-wrap)
   */
  webkitFlexWrap: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `justifyContent`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/justify-content)
   */
  webkitJustifyContent: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-line-clamp) */
  webkitLineClamp: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `mask`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask)
   */
  webkitMask: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorder`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border)
   */
  webkitMaskBoxImage: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderOutset`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-outset)
   */
  webkitMaskBoxImageOutset: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderRepeat`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat)
   */
  webkitMaskBoxImageRepeat: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderSlice`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-slice)
   */
  webkitMaskBoxImageSlice: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderSource`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-source)
   */
  webkitMaskBoxImageSource: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskBorderWidth`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-border-width)
   */
  webkitMaskBoxImageWidth: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskClip`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-clip)
   */
  webkitMaskClip: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-mask-composite) */
  webkitMaskComposite: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskImage`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-image)
   */
  webkitMaskImage: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-origin)
   */
  webkitMaskOrigin: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskPosition`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-position)
   */
  webkitMaskPosition: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskRepeat`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-repeat)
   */
  webkitMaskRepeat: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `maskSize`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/mask-size)
   */
  webkitMaskSize: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `order`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/order)
   */
  webkitOrder: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `perspective`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective)
   */
  webkitPerspective: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `perspectiveOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/perspective-origin)
   */
  webkitPerspectiveOrigin: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-fill-color) */
  webkitTextFillColor: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `textSizeAdjust`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/text-size-adjust)
   */
  webkitTextSizeAdjust: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke) */
  webkitTextStroke: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-color) */
  webkitTextStrokeColor: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/-webkit-text-stroke-width) */
  webkitTextStrokeWidth: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transform`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform)
   */
  webkitTransform: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transformOrigin`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-origin)
   */
  webkitTransformOrigin: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transformStyle`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transform-style)
   */
  webkitTransformStyle: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transition`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition)
   */
  webkitTransition: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionDelay`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-delay)
   */
  webkitTransitionDelay: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionDuration`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-duration)
   */
  webkitTransitionDuration: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionProperty`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-property)
   */
  webkitTransitionProperty: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `transitionTimingFunction`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/transition-timing-function)
   */
  webkitTransitionTimingFunction: string | Ref<string> | any;
  /**
   * @deprecated This is a legacy alias of `userSelect`.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/user-select)
   */
  webkitUserSelect: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/white-space) */
  whiteSpace: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/widows) */
  widows: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/width) */
  width: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/will-change) */
  willChange: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-break) */
  wordBreak: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/word-spacing) */
  wordSpacing: string | Ref<string> | any;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/overflow-wrap)
   */
  wordWrap: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/writing-mode) */
  writingMode: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/CSS/z-index) */
  zIndex: string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) */
  getPropertyPriority(property: string): string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyValue) */
  getPropertyValue(property: string): string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/item) */
  item(index: number): string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/removeProperty) */
  removeProperty(property: string): string | Ref<string> | any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/setProperty) */
  setProperty(
    property: string,
    value: string | Ref<string> | null,
    priority?: string,
  ): void;
  [index: number]: string | Ref<string> | any;

  hasOwnProperty?(key: string): boolean;
}

declare var CSSStyleDeclarationRef: {
  prototype: CSSStyleDeclarationRef;
  new (): CSSStyleDeclarationRef;
};

export class CSSStyleRef implements CSSStyleDeclarationRef {
  [index: number]: any;
  private _style: CSSStyleDeclaration | any;
  private styleRefMap = new Map<
    string,
    { data: { ref: any; name: string }; ref: Ref<any> }
  >();

  private setStyleRefMap(value: string, ref: Ref<any>) {
    let oldRef = this.styleRefMap.get(value);
    if (oldRef) oldRef.ref.unsubscribe(oldRef.data);
    else oldRef = { data: { ref: this._style, name: value }, ref: ref };
    ref.subscriber(oldRef.data);
  }

  public appendStyleRef(value: string, element: any, ref: Ref<any>) {
    let oldRef = this.styleRefMap.get(value);
    if (oldRef) oldRef.ref.unsubscribe(oldRef.data);
    else oldRef = { data: { ref: element, name: value }, ref: ref };
    ref.subscriber(oldRef.data);
  }

  public disconnectedCallback() {
    this.styleRefMap.forEach((value) => {
      value.ref.unsubscribe(value.data);
    });
  }

  constructor(style: CSSStyleDeclaration) {
    this._style = style;
  }

  get accentColor(): string {
    return this._style.accentColor;
  }
  set accentColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("accentColor", value);
    else this._style.accentColor = value as any;
  }

  public get alignContent(): string {
    return this._style.alignContent;
  }

  public set alignContent(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("alignContent", value);
    else this._style.alignContent = value as any;
  }

  public get alignItems(): string {
    return this._style.alignItems;
  }

  public set alignItems(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("alignItems", value);
    else this._style.alignItems = value as any;
  }

  public get alignSelf(): string {
    return this._style.alignSelf;
  }

  public set alignSelf(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("alignSelf", value);
    else this._style.alignSelf = value as any;
  }

  public get alignmentBaseline(): string {
    return this._style.alignmentBaseline;
  }

  public set alignmentBaseline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("alignmentBaseline", value);
    else this._style.alignmentBaseline = value as any;
  }

  public get all(): string {
    return this._style.all;
  }

  public set all(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("all", value);
    else this._style.all = value as any;
  }

  public get animation(): string {
    return this._style.animation;
  }

  public set animation(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animation", value);
    else this._style.animation = value as any;
  }

  public get animationComposition(): string {
    return this._style.animationComposition;
  }

  public set animationComposition(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("animationComposition", value);
    else this._style.animationComposition = value as any;
  }

  public get animationDelay(): string {
    return this._style.animationDelay;
  }

  public set animationDelay(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animationDelay", value);
    else this._style.animationDelay = value as any;
  }

  public get animationDirection(): string {
    return this._style.animationDirection;
  }

  public set animationDirection(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animationDirection", value);
    else this._style.animationDirection = value as any;
  }

  public get animationDuration(): string {
    return this._style.animationDuration;
  }

  public set animationDuration(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animationDuration", value);
    else this._style.animationDuration = value as any;
  }

  public get animationFillMode(): string {
    return this._style.animationFillMode;
  }

  public set animationFillMode(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animationFillMode", value);
    else this._style.animationFillMode = value as any;
  }

  public get animationIterationCount(): string {
    return this._style.animationIterationCount;
  }

  public set animationIterationCount(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("animationIterationCount", value);
    else this._style.animationIterationCount = value as any;
  }

  public get animationName(): string {
    return this._style.animationName;
  }

  public set animationName(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animationName", value);
    else this._style.animationName = value as any;
  }

  public get animationPlayState(): string {
    return this._style.animationPlayState;
  }

  public set animationPlayState(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("animationPlayState", value);
    else this._style.animationPlayState = value as any;
  }

  public get animationTimingFunction(): string {
    return this._style.animationTimingFunction;
  }

  public set animationTimingFunction(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("animationTimingFunction", value);
    else this._style.animationTimingFunction = value as any;
  }

  public get appearance(): string {
    return this._style.appearance;
  }

  public set appearance(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("appearance", value);
    else this._style.appearance = value as any;
  }

  public get aspectRatio(): string {
    return this._style.aspectRatio;
  }

  public set aspectRatio(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("aspectRatio", value);
    else this._style.aspectRatio = value as any;
  }

  public get backdropFilter(): string {
    return this._style.backdropFilter;
  }

  public set backdropFilter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backdropFilter", value);
    else this._style.backdropFilter = value as any;
  }

  public get backfaceVisibility(): string {
    return this._style.backfaceVisibility;
  }

  public set backfaceVisibility(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backfaceVisibility", value);
    else this._style.backfaceVisibility = value as any;
  }

  public get background(): string {
    return this._style.background;
  }

  public set background(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("background", value);
    else this._style.background = value as any;
  }

  public get backgroundAttachment(): string {
    return this._style.backgroundAttachment;
  }

  public set backgroundAttachment(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("backgroundAttachment", value);
    else this._style.backgroundAttachment = value as any;
  }

  public get backgroundBlendMode(): string {
    return this._style.backgroundBlendMode;
  }

  public set backgroundBlendMode(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundBlendMode", value);
    else this._style.backgroundBlendMode = value as any;
  }

  public get backgroundClip(): string {
    return this._style.backgroundClip;
  }

  public set backgroundClip(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundClip", value);
    else this._style.backgroundClip = value as any;
  }

  public get backgroundColor(): string {
    return this._style.backgroundColor;
  }

  public set backgroundColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundColor", value);
    else this._style.backgroundColor = value as any;
  }

  public get backgroundImage(): string {
    return this._style.backgroundImage;
  }

  public set backgroundImage(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundImage", value);
    else this._style.backgroundImage = value as any;
  }

  public get backgroundOrigin(): string {
    return this._style.backgroundOrigin;
  }

  public set backgroundOrigin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundOrigin", value);
    else this._style.backgroundOrigin = value as any;
  }

  public get backgroundPosition(): string {
    return this._style.backgroundPosition;
  }

  public set backgroundPosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundPosition", value);
    else this._style.backgroundPosition = value as any;
  }

  public get backgroundPositionX(): string {
    return this._style.backgroundPositionX;
  }

  public set backgroundPositionX(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundPositionX", value);
    else this._style.backgroundPositionX = value as any;
  }

  public get backgroundPositionY(): string {
    return this._style.backgroundPositionY;
  }

  public set backgroundPositionY(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundPositionY", value);
    else this._style.backgroundPositionY = value as any;
  }

  public get backgroundRepeat(): string {
    return this._style.backgroundRepeat;
  }

  public set backgroundRepeat(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundRepeat", value);
    else this._style.backgroundRepeat = value as any;
  }

  public get backgroundSize(): string {
    return this._style.backgroundSize;
  }

  public set backgroundSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("backgroundSize", value);
    else this._style.backgroundSize = value as any;
  }

  public get baselineShift(): string {
    return this._style.baselineShift;
  }

  public set baselineShift(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("baselineShift", value);
    else this._style.baselineShift = value as any;
  }

  public get blockSize(): string {
    return this._style.blockSize;
  }

  public set blockSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("blockSize", value);
    else this._style.blockSize = value as any;
  }

  public get border(): string {
    return this._style.border;
  }

  public set border(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("border", value);
    else this._style.border = value as any;
  }

  public get borderBlock(): string {
    return this._style.borderBlock;
  }

  public set borderBlock(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlock", value);
    else this._style.borderBlock = value as any;
  }

  public get borderBlockColor(): string {
    return this._style.borderBlockColor;
  }

  public set borderBlockColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockColor", value);
    else this._style.borderBlockColor = value as any;
  }

  public get borderBlockEnd(): string {
    return this._style.borderBlockEnd;
  }

  public set borderBlockEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockEnd", value);
    else this._style.borderBlockEnd = value as any;
  }

  public get borderBlockEndColor(): string {
    return this._style.borderBlockEndColor;
  }

  public set borderBlockEndColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockEndColor", value);
    else this._style.borderBlockEndColor = value as any;
  }

  public get borderBlockEndStyle(): string {
    return this._style.borderBlockEndStyle;
  }

  public set borderBlockEndStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockEndStyle", value);
    else this._style.borderBlockEndStyle = value as any;
  }

  public get borderBlockEndWidth(): string {
    return this._style.borderBlockEndWidth;
  }

  public set borderBlockEndWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockEndWidth", value);
    else this._style.borderBlockEndWidth = value as any;
  }

  public get borderBlockStart(): string {
    return this._style.borderBlockStart;
  }

  public set borderBlockStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockStart", value);
    else this._style.borderBlockStart = value as any;
  }

  public get borderBlockStartColor(): string {
    return this._style.borderBlockStartColor;
  }

  public set borderBlockStartColor(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderBlockStartColor", value);
    else this._style.borderBlockStartColor = value as any;
  }

  public get borderBlockStartStyle(): string {
    return this._style.borderBlockStartStyle;
  }

  public set borderBlockStartStyle(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderBlockStartStyle", value);
    else this._style.borderBlockStartStyle = value as any;
  }

  public get borderBlockStartWidth(): string {
    return this._style.borderBlockStartWidth;
  }

  public set borderBlockStartWidth(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderBlockStartWidth", value);
    else this._style.borderBlockStartWidth = value as any;
  }

  public get borderBlockStyle(): string {
    return this._style.borderBlockStyle;
  }

  public set borderBlockStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockStyle", value);
    else this._style.borderBlockStyle = value as any;
  }

  public get borderBlockWidth(): string {
    return this._style.borderBlockWidth;
  }

  public set borderBlockWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBlockWidth", value);
    else this._style.borderBlockWidth = value as any;
  }

  public get borderBottom(): string {
    return this._style.borderBottom;
  }

  public set borderBottom(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBottom", value);
    else this._style.borderBottom = value as any;
  }

  public get borderBottomColor(): string {
    return this._style.borderBottomColor;
  }

  public set borderBottomColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBottomColor", value);
    else this._style.borderBottomColor = value as any;
  }

  public get borderBottomLeftRadius(): string {
    return this._style.borderBottomLeftRadius;
  }

  public set borderBottomLeftRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderBottomLeftRadius", value);
    else this._style.borderBottomLeftRadius = value as any;
  }

  public get borderBottomRightRadius(): string {
    return this._style.borderBottomRightRadius;
  }

  public set borderBottomRightRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderBottomRightRadius", value);
    else this._style.borderBottomRightRadius = value as any;
  }

  public get borderBottomStyle(): string {
    return this._style.borderBottomStyle;
  }

  public set borderBottomStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBottomStyle", value);
    else this._style.borderBottomStyle = value as any;
  }

  public get borderBottomWidth(): string {
    return this._style.borderBottomWidth;
  }

  public set borderBottomWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderBottomWidth", value);
    else this._style.borderBottomWidth = value as any;
  }

  public get borderCollapse(): string {
    return this._style.borderCollapse;
  }

  public set borderCollapse(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderCollapse", value);
    else this._style.borderCollapse = value as any;
  }

  public get borderColor(): string {
    return this._style.borderColor;
  }

  public set borderColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderColor", value);
    else this._style.borderColor = value as any;
  }

  public get borderEndEndRadius(): string {
    return this._style.borderEndEndRadius;
  }

  public set borderEndEndRadius(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderEndEndRadius", value);
    else this._style.borderEndEndRadius = value as any;
  }

  public get borderEndStartRadius(): string {
    return this._style.borderEndStartRadius;
  }

  public set borderEndStartRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderEndStartRadius", value);
    else this._style.borderEndStartRadius = value as any;
  }

  public get borderImage(): string {
    return this._style.borderImage;
  }

  public set borderImage(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderImage", value);
    else this._style.borderImage = value as any;
  }

  public get borderImageOutset(): string {
    return this._style.borderImageOutset;
  }

  public set borderImageOutset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderImageOutset", value);
    else this._style.borderImageOutset = value as any;
  }

  public get borderImageRepeat(): string {
    return this._style.borderImageRepeat;
  }

  public set borderImageRepeat(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderImageRepeat", value);
    else this._style.borderImageRepeat = value as any;
  }

  public get borderImageSlice(): string {
    return this._style.borderImageSlice;
  }

  public set borderImageSlice(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderImageSlice", value);
    else this._style.borderImageSlice = value as any;
  }

  public get borderImageSource(): string {
    return this._style.borderImageSource;
  }

  public set borderImageSource(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderImageSource", value);
    else this._style.borderImageSource = value as any;
  }

  public get borderImageWidth(): string {
    return this._style.borderImageWidth;
  }

  public set borderImageWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderImageWidth", value);
    else this._style.borderImageWidth = value as any;
  }

  public get borderInline(): string {
    return this._style.borderInline;
  }

  public set borderInline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderInline", value);
    else this._style.borderInline = value as any;
  }

  public get borderInlineColor(): string {
    return this._style.borderInlineColor;
  }

  public set borderInlineColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderInlineColor", value);
    else this._style.borderInlineColor = value as any;
  }

  public get borderInlineEnd(): string {
    return this._style.borderInlineEnd;
  }

  public set borderInlineEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderInlineEnd", value);
    else this._style.borderInlineEnd = value as any;
  }

  public get borderInlineEndColor(): string {
    return this._style.borderInlineEndColor;
  }

  public set borderInlineEndColor(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderInlineEndColor", value);
    else this._style.borderInlineEndColor = value as any;
  }

  public get borderInlineEndStyle(): string {
    return this._style.borderInlineEndStyle;
  }

  public set borderInlineEndStyle(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderInlineEndStyle", value);
    else this._style.borderInlineEndStyle = value as any;
  }

  public get borderInlineEndWidth(): string {
    return this._style.borderInlineEndWidth;
  }

  public set borderInlineEndWidth(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderInlineEndWidth", value);
    else this._style.borderInlineEndWidth = value as any;
  }

  public get borderInlineStart(): string {
    return this._style.borderInlineStart;
  }

  public set borderInlineStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderInlineStart", value);
    else this._style.borderInlineStart = value as any;
  }

  public get borderInlineStartColor(): string {
    return this._style.borderInlineStartColor;
  }

  public set borderInlineStartColor(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderInlineStartColor", value);
    else this._style.borderInlineStartColor = value as any;
  }

  public get borderInlineStartStyle(): string {
    return this._style.borderInlineStartStyle;
  }

  public set borderInlineStartStyle(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderInlineStartStyle", value);
    else this._style.borderInlineStartStyle = value as any;
  }

  public get borderInlineStartWidth(): string {
    return this._style.borderInlineStartWidth;
  }

  public set borderInlineStartWidth(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderInlineStartWidth", value);
    else this._style.borderInlineStartWidth = value as any;
  }

  public get borderInlineStyle(): string {
    return this._style.borderInlineStyle;
  }

  public set borderInlineStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderInlineStyle", value);
    else this._style.borderInlineStyle = value as any;
  }

  public get borderInlineWidth(): string {
    return this._style.borderInlineWidth;
  }

  public set borderInlineWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderInlineWidth", value);
    else this._style.borderInlineWidth = value as any;
  }

  public get borderLeft(): string {
    return this._style.borderLeft;
  }

  public set borderLeft(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderLeft", value);
    else this._style.borderLeft = value as any;
  }

  public get borderLeftColor(): string {
    return this._style.borderLeftColor;
  }

  public set borderLeftColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderLeftColor", value);
    else this._style.borderLeftColor = value as any;
  }

  public get borderLeftStyle(): string {
    return this._style.borderLeftStyle;
  }

  public set borderLeftStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderLeftStyle", value);
    else this._style.borderLeftStyle = value as any;
  }

  public get borderLeftWidth(): string {
    return this._style.borderLeftWidth;
  }

  public set borderLeftWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderLeftWidth", value);
    else this._style.borderLeftWidth = value as any;
  }

  public get borderRadius(): string {
    return this._style.borderRadius;
  }

  public set borderRadius(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderRadius", value);
    else this._style.borderRadius = value as any;
  }

  public get borderRight(): string {
    return this._style.borderRight;
  }

  public set borderRight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderRight", value);
    else this._style.borderRight = value as any;
  }

  public get borderRightColor(): string {
    return this._style.borderRightColor;
  }

  public set borderRightColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderRightColor", value);
    else this._style.borderRightColor = value as any;
  }

  public get borderRightStyle(): string {
    return this._style.borderRightStyle;
  }

  public set borderRightStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderRightStyle", value);
    else this._style.borderRightStyle = value as any;
  }

  public get borderRightWidth(): string {
    return this._style.borderRightWidth;
  }

  public set borderRightWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderRightWidth", value);
    else this._style.borderRightWidth = value as any;
  }

  public get borderSpacing(): string {
    return this._style.borderSpacing;
  }

  public set borderSpacing(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderSpacing", value);
    else this._style.borderSpacing = value as any;
  }

  public get borderStartEndRadius(): string {
    return this._style.borderStartEndRadius;
  }

  public set borderStartEndRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderStartEndRadius", value);
    else this._style.borderStartEndRadius = value as any;
  }

  public get borderStartStartRadius(): string {
    return this._style.borderStartStartRadius;
  }

  public set borderStartStartRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderStartStartRadius", value);
    else this._style.borderStartStartRadius = value as any;
  }

  public get borderStyle(): string {
    return this._style.borderStyle;
  }

  public set borderStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderStyle", value);
    else this._style.borderStyle = value as any;
  }

  public get borderTop(): string {
    return this._style.borderTop;
  }

  public set borderTop(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderTop", value);
    else this._style.borderTop = value as any;
  }

  public get borderTopColor(): string {
    return this._style.borderTopColor;
  }

  public set borderTopColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderTopColor", value);
    else this._style.borderTopColor = value as any;
  }

  public get borderTopLeftRadius(): string {
    return this._style.borderTopLeftRadius;
  }

  public set borderTopLeftRadius(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderTopLeftRadius", value);
    else this._style.borderTopLeftRadius = value as any;
  }

  public get borderTopRightRadius(): string {
    return this._style.borderTopRightRadius;
  }

  public set borderTopRightRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("borderTopRightRadius", value);
    else this._style.borderTopRightRadius = value as any;
  }

  public get borderTopStyle(): string {
    return this._style.borderTopStyle;
  }

  public set borderTopStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderTopStyle", value);
    else this._style.borderTopStyle = value as any;
  }

  public get borderTopWidth(): string {
    return this._style.borderTopWidth;
  }

  public set borderTopWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderTopWidth", value);
    else this._style.borderTopWidth = value as any;
  }

  public get borderWidth(): string {
    return this._style.borderWidth;
  }

  public set borderWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("borderWidth", value);
    else this._style.borderWidth = value as any;
  }

  public get bottom(): string {
    return this._style.bottom;
  }

  public set bottom(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("bottom", value);
    else this._style.bottom = value as any;
  }

  public get boxShadow(): string {
    return this._style.boxShadow;
  }

  public set boxShadow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("boxShadow", value);
    else this._style.boxShadow = value as any;
  }

  public get boxSizing(): string {
    return this._style.boxSizing;
  }

  public set boxSizing(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("boxSizing", value);
    else this._style.boxSizing = value as any;
  }

  public get breakAfter(): string {
    return this._style.breakAfter;
  }

  public set breakAfter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("breakAfter", value);
    else this._style.breakAfter = value as any;
  }

  public get breakBefore(): string {
    return this._style.breakBefore;
  }

  public set breakBefore(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("breakBefore", value);
    else this._style.breakBefore = value as any;
  }

  public get breakInside(): string {
    return this._style.breakInside;
  }

  public set breakInside(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("breakInside", value);
    else this._style.breakInside = value as any;
  }

  public get captionSide(): string {
    return this._style.captionSide;
  }

  public set captionSide(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("captionSide", value);
    else this._style.captionSide = value as any;
  }

  public get caretColor(): string {
    return this._style.caretColor;
  }

  public set caretColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("caretColor", value);
    else this._style.caretColor = value as any;
  }

  public get clear(): string {
    return this._style.clear;
  }

  public set clear(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("clear", value);
    else this._style.clear = value as any;
  }

  public get clip(): string {
    return this._style.clip;
  }

  public set clip(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("clip", value);
    else this._style.clip = value as any;
  }

  public get clipPath(): string {
    return this._style.clipPath;
  }

  public set clipPath(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("clipPath", value);
    else this._style.clipPath = value as any;
  }

  public get clipRule(): string {
    return this._style.clipRule;
  }

  public set clipRule(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("clipRule", value);
    else this._style.clipRule = value as any;
  }

  public get color(): string {
    return this._style.color;
  }

  public set color(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("color", value);
    else this._style.color = value as any;
  }

  public get colorInterpolation(): string {
    return this._style.colorInterpolation;
  }

  public set colorInterpolation(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("colorInterpolation", value);
    else this._style.colorInterpolation = value as any;
  }

  public get colorInterpolationFilters(): string {
    return this._style.colorInterpolationFilters;
  }

  public set colorInterpolationFilters(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("colorInterpolationFilters", value);
    else this._style.colorInterpolationFilters = value as any;
  }

  public get colorScheme(): string {
    return this._style.colorScheme;
  }

  public set colorScheme(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("colorScheme", value);
    else this._style.colorScheme = value as any;
  }

  public get columnCount(): string {
    return this._style.columnCount;
  }

  public set columnCount(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnCount", value);
    else this._style.columnCount = value as any;
  }

  public get columnFill(): string {
    return this._style.columnFill;
  }

  public set columnFill(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnFill", value);
    else this._style.columnFill = value as any;
  }

  public get columnGap(): string {
    return this._style.columnGap;
  }

  public set columnGap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnGap", value);
    else this._style.columnGap = value as any;
  }

  public get columnRule(): string {
    return this._style.columnRule;
  }

  public set columnRule(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnRule", value);
    else this._style.columnRule = value as any;
  }

  public get columnRuleColor(): string {
    return this._style.columnRuleColor;
  }

  public set columnRuleColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnRuleColor", value);
    else this._style.columnRuleColor = value as any;
  }

  public get columnRuleStyle(): string {
    return this._style.columnRuleStyle;
  }

  public set columnRuleStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnRuleStyle", value);
    else this._style.columnRuleStyle = value as any;
  }

  public get columnRuleWidth(): string {
    return this._style.columnRuleWidth;
  }

  public set columnRuleWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnRuleWidth", value);
    else this._style.columnRuleWidth = value as any;
  }

  public get columnSpan(): string {
    return this._style.columnSpan;
  }

  public set columnSpan(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnSpan", value);
    else this._style.columnSpan = value as any;
  }

  public get columnWidth(): string {
    return this._style.columnWidth;
  }

  public set columnWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columnWidth", value);
    else this._style.columnWidth = value as any;
  }

  public get columns(): string {
    return this._style.columns;
  }

  public set columns(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("columns", value);
    else this._style.columns = value as any;
  }

  public get contain(): string {
    return this._style.contain;
  }

  public set contain(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("contain", value);
    else this._style.contain = value as any;
  }

  public get containIntrinsicBlockSize(): string {
    return this._style.containIntrinsicBlockSize;
  }

  public set containIntrinsicBlockSize(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("containIntrinsicBlockSize", value);
    else this._style.containIntrinsicBlockSize = value as any;
  }

  public get containIntrinsicHeight(): string {
    return this._style.containIntrinsicHeight;
  }

  public set containIntrinsicHeight(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("containIntrinsicHeight", value);
    else this._style.containIntrinsicHeight = value as any;
  }

  public get containIntrinsicInlineSize(): string {
    return this._style.containIntrinsicInlineSize;
  }

  public set containIntrinsicInlineSize(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("containIntrinsicInlineSize", value);
    else this._style.containIntrinsicInlineSize = value as any;
  }

  public get containIntrinsicSize(): string {
    return this._style.containIntrinsicSize;
  }

  public set containIntrinsicSize(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("containIntrinsicSize", value);
    else this._style.containIntrinsicSize = value as any;
  }

  public get containIntrinsicWidth(): string {
    return this._style.containIntrinsicWidth;
  }

  public set containIntrinsicWidth(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("containIntrinsicWidth", value);
    else this._style.containIntrinsicWidth = value as any;
  }

  public get container(): string {
    return this._style.container;
  }

  public set container(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("container", value);
    else this._style.container = value as any;
  }

  public get containerName(): string {
    return this._style.containerName;
  }

  public set containerName(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("containerName", value);
    else this._style.containerName = value as any;
  }

  public get containerType(): string {
    return this._style.containerType;
  }

  public set containerType(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("containerType", value);
    else this._style.containerType = value as any;
  }

  public get content(): string {
    return this._style.content;
  }

  public set content(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("content", value);
    else this._style.content = value as any;
  }

  public get counterIncrement(): string {
    return this._style.counterIncrement;
  }

  public set counterIncrement(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("counterIncrement", value);
    else this._style.counterIncrement = value as any;
  }

  public get counterReset(): string {
    return this._style.counterReset;
  }

  public set counterReset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("counterReset", value);
    else this._style.counterReset = value as any;
  }

  public get counterSet(): string {
    return this._style.counterSet;
  }

  public set counterSet(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("counterSet", value);
    else this._style.counterSet = value as any;
  }

  public get cssFloat(): string {
    return this._style.cssFloat;
  }

  public set cssFloat(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("cssFloat", value);
    else this._style.cssFloat = value as any;
  }

  public get cssText(): string {
    return this._style.cssText;
  }

  public set cssText(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("cssText", value);
    else this._style.cssText = value as any;
  }

  public get cursor(): string {
    return this._style.cursor;
  }

  public set cursor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("cursor", value);
    else this._style.cursor = value as any;
  }

  public get direction(): string {
    return this._style.direction;
  }

  public set direction(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("direction", value);
    else this._style.direction = value as any;
  }

  public get display(): string {
    return this._style.display;
  }

  public set display(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("display", value);
    else this._style.display = value as any;
  }

  public get dominantBaseline(): string {
    return this._style.dominantBaseline;
  }

  public set dominantBaseline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("dominantBaseline", value);
    else this._style.dominantBaseline = value as any;
  }

  public get emptyCells(): string {
    return this._style.emptyCells;
  }

  public set emptyCells(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("emptyCells", value);
    else this._style.emptyCells = value as any;
  }

  public get fill(): string {
    return this._style.fill;
  }

  public set fill(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fill", value);
    else this._style.fill = value as any;
  }

  public get fillOpacity(): string {
    return this._style.fillOpacity;
  }

  public set fillOpacity(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fillOpacity", value);
    else this._style.fillOpacity = value as any;
  }

  public get fillRule(): string {
    return this._style.fillRule;
  }

  public set fillRule(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fillRule", value);
    else this._style.fillRule = value as any;
  }

  public get filter(): string {
    return this._style.filter;
  }

  public set filter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("filter", value);
    else this._style.filter = value as any;
  }

  public get flex(): string {
    return this._style.flex;
  }

  public set flex(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flex", value);
    else this._style.flex = value as any;
  }

  public get flexBasis(): string {
    return this._style.flexBasis;
  }

  public set flexBasis(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flexBasis", value);
    else this._style.flexBasis = value as any;
  }

  public get flexDirection(): string {
    return this._style.flexDirection;
  }

  public set flexDirection(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flexDirection", value);
    else this._style.flexDirection = value as any;
  }

  public get flexFlow(): string {
    return this._style.flexFlow;
  }

  public set flexFlow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flexFlow", value);
    else this._style.flexFlow = value as any;
  }

  public get flexGrow(): string {
    return this._style.flexGrow;
  }

  public set flexGrow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flexGrow", value);
    else this._style.flexGrow = value as any;
  }

  public get flexShrink(): string {
    return this._style.flexShrink;
  }

  public set flexShrink(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flexShrink", value);
    else this._style.flexShrink = value as any;
  }

  public get flexWrap(): string {
    return this._style.flexWrap;
  }

  public set flexWrap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("flexWrap", value);
    else this._style.flexWrap = value as any;
  }

  public get float(): string {
    return this._style.float;
  }

  public set float(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("float", value);
    else this._style.float = value as any;
  }

  public get floodColor(): string {
    return this._style.floodColor;
  }

  public set floodColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("floodColor", value);
    else this._style.floodColor = value as any;
  }

  public get floodOpacity(): string {
    return this._style.floodOpacity;
  }

  public set floodOpacity(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("floodOpacity", value);
    else this._style.floodOpacity = value as any;
  }

  public get font(): string {
    return this._style.font;
  }

  public set font(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("font", value);
    else this._style.font = value as any;
  }

  public get fontFamily(): string {
    return this._style.fontFamily;
  }

  public set fontFamily(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontFamily", value);
    else this._style.fontFamily = value as any;
  }

  public get fontFeatureSettings(): string {
    return this._style.fontFeatureSettings;
  }

  public set fontFeatureSettings(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontFeatureSettings", value);
    else this._style.fontFeatureSettings = value as any;
  }

  public get fontKerning(): string {
    return this._style.fontKerning;
  }

  public set fontKerning(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontKerning", value);
    else this._style.fontKerning = value as any;
  }

  public get fontOpticalSizing(): string {
    return this._style.fontOpticalSizing;
  }

  public set fontOpticalSizing(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontOpticalSizing", value);
    else this._style.fontOpticalSizing = value as any;
  }

  public get fontPalette(): string {
    return this._style.fontPalette;
  }

  public set fontPalette(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontPalette", value);
    else this._style.fontPalette = value as any;
  }

  public get fontSize(): string {
    return this._style.fontSize;
  }

  public set fontSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontSize", value);
    else this._style.fontSize = value as any;
  }

  public get fontSizeAdjust(): string {
    return this._style.fontSizeAdjust;
  }

  public set fontSizeAdjust(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontSizeAdjust", value);
    else this._style.fontSizeAdjust = value as any;
  }

  public get fontStretch(): string {
    return this._style.fontStretch;
  }

  public set fontStretch(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontStretch", value);
    else this._style.fontStretch = value as any;
  }

  public get fontStyle(): string {
    return this._style.fontStyle;
  }

  public set fontStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontStyle", value);
    else this._style.fontStyle = value as any;
  }

  public get fontSynthesis(): string {
    return this._style.fontSynthesis;
  }

  public set fontSynthesis(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontSynthesis", value);
    else this._style.fontSynthesis = value as any;
  }

  public get fontSynthesisSmallCaps(): string {
    return this._style.fontSynthesisSmallCaps;
  }

  public set fontSynthesisSmallCaps(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("fontSynthesisSmallCaps", value);
    else this._style.fontSynthesisSmallCaps = value as any;
  }

  public get fontSynthesisStyle(): string {
    return this._style.fontSynthesisStyle;
  }

  public set fontSynthesisStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontSynthesisStyle", value);
    else this._style.fontSynthesisStyle = value as any;
  }

  public get fontSynthesisWeight(): string {
    return this._style.fontSynthesisWeight;
  }

  public set fontSynthesisWeight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontSynthesisWeight", value);
    else this._style.fontSynthesisWeight = value as any;
  }

  public get fontVariant(): string {
    return this._style.fontVariant;
  }

  public set fontVariant(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontVariant", value);
    else this._style.fontVariant = value as any;
  }

  public get fontVariantAlternates(): string {
    return this._style.fontVariantAlternates;
  }

  public set fontVariantAlternates(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("fontVariantAlternates", value);
    else this._style.fontVariantAlternates = value as any;
  }

  public get fontVariantCaps(): string {
    return this._style.fontVariantCaps;
  }

  public set fontVariantCaps(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontVariantCaps", value);
    else this._style.fontVariantCaps = value as any;
  }

  public get fontVariantEastAsian(): string {
    return this._style.fontVariantEastAsian;
  }

  public set fontVariantEastAsian(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("fontVariantEastAsian", value);
    else this._style.fontVariantEastAsian = value as any;
  }

  public get fontVariantLigatures(): string {
    return this._style.fontVariantLigatures;
  }

  public set fontVariantLigatures(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("fontVariantLigatures", value);
    else this._style.fontVariantLigatures = value as any;
  }

  public get fontVariantNumeric(): string {
    return this._style.fontVariantNumeric;
  }

  public set fontVariantNumeric(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontVariantNumeric", value);
    else this._style.fontVariantNumeric = value as any;
  }

  public get fontVariantPosition(): string {
    return this._style.fontVariantPosition;
  }

  public set fontVariantPosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontVariantPosition", value);
    else this._style.fontVariantPosition = value as any;
  }

  public get fontVariationSettings(): string {
    return this._style.fontVariationSettings;
  }

  public set fontVariationSettings(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("fontVariationSettings", value);
    else this._style.fontVariationSettings = value as any;
  }

  public get fontWeight(): string {
    return this._style.fontWeight;
  }

  public set fontWeight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("fontWeight", value);
    else this._style.fontWeight = value as any;
  }

  public get forcedColorAdjust(): string {
    return this._style.forcedColorAdjust;
  }

  public set forcedColorAdjust(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("forcedColorAdjust", value);
    else this._style.forcedColorAdjust = value as any;
  }

  public get gap(): string {
    return this._style.gap;
  }

  public set gap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gap", value);
    else this._style.gap = value as any;
  }

  public get grid(): string {
    return this._style.grid;
  }

  public set grid(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("grid", value);
    else this._style.grid = value as any;
  }

  public get gridArea(): string {
    return this._style.gridArea;
  }

  public set gridArea(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridArea", value);
    else this._style.gridArea = value as any;
  }

  public get gridAutoColumns(): string {
    return this._style.gridAutoColumns;
  }

  public set gridAutoColumns(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridAutoColumns", value);
    else this._style.gridAutoColumns = value as any;
  }

  public get gridAutoFlow(): string {
    return this._style.gridAutoFlow;
  }

  public set gridAutoFlow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridAutoFlow", value);
    else this._style.gridAutoFlow = value as any;
  }

  public get gridAutoRows(): string {
    return this._style.gridAutoRows;
  }

  public set gridAutoRows(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridAutoRows", value);
    else this._style.gridAutoRows = value as any;
  }

  public get gridColumn(): string {
    return this._style.gridColumn;
  }

  public set gridColumn(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridColumn", value);
    else this._style.gridColumn = value as any;
  }

  public get gridColumnEnd(): string {
    return this._style.gridColumnEnd;
  }

  public set gridColumnEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridColumnEnd", value);
    else this._style.gridColumnEnd = value as any;
  }

  public get gridColumnGap(): string {
    return this._style.gridColumnGap;
  }

  public set gridColumnGap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridColumnGap", value);
    else this._style.gridColumnGap = value as any;
  }

  public get gridColumnStart(): string {
    return this._style.gridColumnStart;
  }

  public set gridColumnStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridColumnStart", value);
    else this._style.gridColumnStart = value as any;
  }

  public get gridGap(): string {
    return this._style.gridGap;
  }

  public set gridGap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridGap", value);
    else this._style.gridGap = value as any;
  }

  public get gridRow(): string {
    return this._style.gridRow;
  }

  public set gridRow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridRow", value);
    else this._style.gridRow = value as any;
  }

  public get gridRowEnd(): string {
    return this._style.gridRowEnd;
  }

  public set gridRowEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridRowEnd", value);
    else this._style.gridRowEnd = value as any;
  }

  public get gridRowGap(): string {
    return this._style.gridRowGap;
  }

  public set gridRowGap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridRowGap", value);
    else this._style.gridRowGap = value as any;
  }

  public get gridRowStart(): string {
    return this._style.gridRowStart;
  }

  public set gridRowStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridRowStart", value);
    else this._style.gridRowStart = value as any;
  }

  public get gridTemplate(): string {
    return this._style.gridTemplate;
  }

  public set gridTemplate(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridTemplate", value);
    else this._style.gridTemplate = value as any;
  }

  public get gridTemplateAreas(): string {
    return this._style.gridTemplateAreas;
  }

  public set gridTemplateAreas(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridTemplateAreas", value);
    else this._style.gridTemplateAreas = value as any;
  }

  public get gridTemplateColumns(): string {
    return this._style.gridTemplateColumns;
  }

  public set gridTemplateColumns(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridTemplateColumns", value);
    else this._style.gridTemplateColumns = value as any;
  }

  public get gridTemplateRows(): string {
    return this._style.gridTemplateRows;
  }

  public set gridTemplateRows(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("gridTemplateRows", value);
    else this._style.gridTemplateRows = value as any;
  }

  public get height(): string {
    return this._style.height;
  }

  public set height(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("height", value);
    else this._style.height = value as any;
  }

  public get hyphenateCharacter(): string {
    return this._style.hyphenateCharacter;
  }

  public set hyphenateCharacter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("hyphenateCharacter", value);
    else this._style.hyphenateCharacter = value as any;
  }

  public get hyphens(): string {
    return this._style.hyphens;
  }

  public set hyphens(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("hyphens", value);
    else this._style.hyphens = value as any;
  }

  public get imageOrientation(): string {
    return this._style.imageOrientation;
  }

  public set imageOrientation(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("imageOrientation", value);
    else this._style.imageOrientation = value as any;
  }

  public get imageRendering(): string {
    return this._style.imageRendering;
  }

  public set imageRendering(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("imageRendering", value);
    else this._style.imageRendering = value as any;
  }

  public get inlineSize(): string {
    return this._style.inlineSize;
  }

  public set inlineSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("inlineSize", value);
    else this._style.inlineSize = value as any;
  }

  public get inset(): string {
    return this._style.inset;
  }

  public set inset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("inset", value);
    else this._style.inset = value as any;
  }

  public get insetBlock(): string {
    return this._style.insetBlock;
  }

  public set insetBlock(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("insetBlock", value);
    else this._style.insetBlock = value as any;
  }

  public get insetBlockEnd(): string {
    return this._style.insetBlockEnd;
  }

  public set insetBlockEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("insetBlockEnd", value);
    else this._style.insetBlockEnd = value as any;
  }

  public get insetBlockStart(): string {
    return this._style.insetBlockStart;
  }

  public set insetBlockStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("insetBlockStart", value);
    else this._style.insetBlockStart = value as any;
  }

  public get insetInline(): string {
    return this._style.insetInline;
  }

  public set insetInline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("insetInline", value);
    else this._style.insetInline = value as any;
  }

  public get insetInlineEnd(): string {
    return this._style.insetInlineEnd;
  }

  public set insetInlineEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("insetInlineEnd", value);
    else this._style.insetInlineEnd = value as any;
  }

  public get insetInlineStart(): string {
    return this._style.insetInlineStart;
  }

  public set insetInlineStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("insetInlineStart", value);
    else this._style.insetInlineStart = value as any;
  }

  public get isolation(): string {
    return this._style.isolation;
  }

  public set isolation(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("isolation", value);
    else this._style.isolation = value as any;
  }

  public get justifyContent(): string {
    return this._style.justifyContent;
  }

  public set justifyContent(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("justifyContent", value);
    else this._style.justifyContent = value as any;
  }

  public get justifyItems(): string {
    return this._style.justifyItems;
  }

  public set justifyItems(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("justifyItems", value);
    else this._style.justifyItems = value as any;
  }

  public get justifySelf(): string {
    return this._style.justifySelf;
  }

  public set justifySelf(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("justifySelf", value);
    else this._style.justifySelf = value as any;
  }

  public get left(): string {
    return this._style.left;
  }

  public set left(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("left", value);
    else this._style.left = value as any;
  }

  public get length(): number {
    return this._style.length;
  }

  public get letterSpacing(): string {
    return this._style.letterSpacing;
  }

  public set letterSpacing(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("letterSpacing", value);
    else this._style.letterSpacing = value as any;
  }

  public get lightingColor(): string {
    return this._style.lightingColor;
  }

  public set lightingColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("lightingColor", value);
    else this._style.lightingColor = value as any;
  }

  public get lineBreak(): string {
    return this._style.lineBreak;
  }

  public set lineBreak(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("lineBreak", value);
    else this._style.lineBreak = value as any;
  }

  public get lineHeight(): string {
    return this._style.lineHeight;
  }

  public set lineHeight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("lineHeight", value);
    else this._style.lineHeight = value as any;
  }

  public get listStyle(): string {
    return this._style.listStyle;
  }

  public set listStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("listStyle", value);
    else this._style.listStyle = value as any;
  }

  public get listStyleImage(): string {
    return this._style.listStyleImage;
  }

  public set listStyleImage(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("listStyleImage", value);
    else this._style.listStyleImage = value as any;
  }

  public get listStylePosition(): string {
    return this._style.listStylePosition;
  }

  public set listStylePosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("listStylePosition", value);
    else this._style.listStylePosition = value as any;
  }

  public get listStyleType(): string {
    return this._style.listStyleType;
  }

  public set listStyleType(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("listStyleType", value);
    else this._style.listStyleType = value as any;
  }

  public get margin(): string {
    return this._style.margin;
  }

  public set margin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("margin", value);
    else this._style.margin = value as any;
  }

  public get marginBlock(): string {
    return this._style.marginBlock;
  }

  public set marginBlock(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginBlock", value);
    else this._style.marginBlock = value as any;
  }

  public get marginBlockEnd(): string {
    return this._style.marginBlockEnd;
  }

  public set marginBlockEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginBlockEnd", value);
    else this._style.marginBlockEnd = value as any;
  }

  public get marginBlockStart(): string {
    return this._style.marginBlockStart;
  }

  public set marginBlockStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginBlockStart", value);
    else this._style.marginBlockStart = value as any;
  }

  public get marginBottom(): string {
    return this._style.marginBottom;
  }

  public set marginBottom(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginBottom", value);
    else this._style.marginBottom = value as any;
  }

  public get marginInline(): string {
    return this._style.marginInline;
  }

  public set marginInline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginInline", value);
    else this._style.marginInline = value as any;
  }

  public get marginInlineEnd(): string {
    return this._style.marginInlineEnd;
  }

  public set marginInlineEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginInlineEnd", value);
    else this._style.marginInlineEnd = value as any;
  }

  public get marginInlineStart(): string {
    return this._style.marginInlineStart;
  }

  public set marginInlineStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginInlineStart", value);
    else this._style.marginInlineStart = value as any;
  }

  public get marginLeft(): string {
    return this._style.marginLeft;
  }

  public set marginLeft(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginLeft", value);
    else this._style.marginLeft = value as any;
  }

  public get marginRight(): string {
    return this._style.marginRight;
  }

  public set marginRight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginRight", value);
    else this._style.marginRight = value as any;
  }

  public get marginTop(): string {
    return this._style.marginTop;
  }

  public set marginTop(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marginTop", value);
    else this._style.marginTop = value as any;
  }

  public get marker(): string {
    return this._style.marker;
  }

  public set marker(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("marker", value);
    else this._style.marker = value as any;
  }

  public get markerEnd(): string {
    return this._style.markerEnd;
  }

  public set markerEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("markerEnd", value);
    else this._style.markerEnd = value as any;
  }

  public get markerMid(): string {
    return this._style.markerMid;
  }

  public set markerMid(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("markerMid", value);
    else this._style.markerMid = value as any;
  }

  public get markerStart(): string {
    return this._style.markerStart;
  }

  public set markerStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("markerStart", value);
    else this._style.markerStart = value as any;
  }

  public get mask(): string {
    return this._style.mask;
  }

  public set mask(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("mask", value);
    else this._style.mask = value as any;
  }

  public get maskClip(): string {
    return this._style.maskClip;
  }

  public set maskClip(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskClip", value);
    else this._style.maskClip = value as any;
  }

  public get maskComposite(): string {
    return this._style.maskComposite;
  }

  public set maskComposite(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskComposite", value);
    else this._style.maskComposite = value as any;
  }

  public get maskImage(): string {
    return this._style.maskImage;
  }

  public set maskImage(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskImage", value);
    else this._style.maskImage = value as any;
  }

  public get maskMode(): string {
    return this._style.maskMode;
  }

  public set maskMode(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskMode", value);
    else this._style.maskMode = value as any;
  }

  public get maskOrigin(): string {
    return this._style.maskOrigin;
  }

  public set maskOrigin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskOrigin", value);
    else this._style.maskOrigin = value as any;
  }

  public get maskPosition(): string {
    return this._style.maskPosition;
  }

  public set maskPosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskPosition", value);
    else this._style.maskPosition = value as any;
  }

  public get maskRepeat(): string {
    return this._style.maskRepeat;
  }

  public set maskRepeat(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskRepeat", value);
    else this._style.maskRepeat = value as any;
  }

  public get maskSize(): string {
    return this._style.maskSize;
  }

  public set maskSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskSize", value);
    else this._style.maskSize = value as any;
  }

  public get maskType(): string {
    return this._style.maskType;
  }

  public set maskType(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maskType", value);
    else this._style.maskType = value as any;
  }

  public get mathStyle(): string {
    return this._style.mathStyle;
  }

  public set mathStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("mathStyle", value);
    else this._style.mathStyle = value as any;
  }

  public get maxBlockSize(): string {
    return this._style.maxBlockSize;
  }

  public set maxBlockSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maxBlockSize", value);
    else this._style.maxBlockSize = value as any;
  }

  public get maxHeight(): string {
    return this._style.maxHeight;
  }

  public set maxHeight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maxHeight", value);
    else this._style.maxHeight = value as any;
  }

  public get maxInlineSize(): string {
    return this._style.maxInlineSize;
  }

  public set maxInlineSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maxInlineSize", value);
    else this._style.maxInlineSize = value as any;
  }

  public get maxWidth(): string {
    return this._style.maxWidth;
  }

  public set maxWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("maxWidth", value);
    else this._style.maxWidth = value as any;
  }

  public get minBlockSize(): string {
    return this._style.minBlockSize;
  }

  public set minBlockSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("minBlockSize", value);
    else this._style.minBlockSize = value as any;
  }

  public get minHeight(): string {
    return this._style.minHeight;
  }

  public set minHeight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("minHeight", value);
    else this._style.minHeight = value as any;
  }

  public get minInlineSize(): string {
    return this._style.minInlineSize;
  }

  public set minInlineSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("minInlineSize", value);
    else this._style.minInlineSize = value as any;
  }

  public get minWidth(): string {
    return this._style.minWidth;
  }

  public set minWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("minWidth", value);
    else this._style.minWidth = value as any;
  }

  public get mixBlendMode(): string {
    return this._style.mixBlendMode;
  }

  public set mixBlendMode(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("mixBlendMode", value);
    else this._style.mixBlendMode = value as any;
  }

  public get objectFit(): string {
    return this._style.objectFit;
  }

  public set objectFit(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("objectFit", value);
    else this._style.objectFit = value as any;
  }

  public get objectPosition(): string {
    return this._style.objectPosition;
  }

  public set objectPosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("objectPosition", value);
    else this._style.objectPosition = value as any;
  }

  public get offset(): string {
    return this._style.offset;
  }

  public set offset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("offset", value);
    else this._style.offset = value as any;
  }

  public get offsetDistance(): string {
    return this._style.offsetDistance;
  }

  public set offsetDistance(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("offsetDistance", value);
    else this._style.offsetDistance = value as any;
  }

  public get offsetPath(): string {
    return this._style.offsetPath;
  }

  public set offsetPath(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("offsetPath", value);
    else this._style.offsetPath = value as any;
  }

  public get offsetRotate(): string {
    return this._style.offsetRotate;
  }

  public set offsetRotate(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("offsetRotate", value);
    else this._style.offsetRotate = value as any;
  }

  public get opacity(): string {
    return this._style.opacity;
  }

  public set opacity(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("opacity", value);
    else this._style.opacity = value as any;
  }

  public get order(): string {
    return this._style.order;
  }

  public set order(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("order", value);
    else this._style.order = value as any;
  }

  public get orphans(): string {
    return this._style.orphans;
  }

  public set orphans(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("orphans", value);
    else this._style.orphans = value as any;
  }

  public get outline(): string {
    return this._style.outline;
  }

  public set outline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("outline", value);
    else this._style.outline = value as any;
  }

  public get outlineColor(): string {
    return this._style.outlineColor;
  }

  public set outlineColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("outlineColor", value);
    else this._style.outlineColor = value as any;
  }

  public get outlineOffset(): string {
    return this._style.outlineOffset;
  }

  public set outlineOffset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("outlineOffset", value);
    else this._style.outlineOffset = value as any;
  }

  public get outlineStyle(): string {
    return this._style.outlineStyle;
  }

  public set outlineStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("outlineStyle", value);
    else this._style.outlineStyle = value as any;
  }

  public get outlineWidth(): string {
    return this._style.outlineWidth;
  }

  public set outlineWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("outlineWidth", value);
    else this._style.outlineWidth = value as any;
  }

  public get overflow(): string {
    return this._style.overflow;
  }

  public set overflow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overflow", value);
    else this._style.overflow = value as any;
  }

  public get overflowAnchor(): string {
    return this._style.overflowAnchor;
  }

  public set overflowAnchor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overflowAnchor", value);
    else this._style.overflowAnchor = value as any;
  }

  public get overflowClipMargin(): string {
    return this._style.overflowClipMargin;
  }

  public set overflowClipMargin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overflowClipMargin", value);
    else this._style.overflowClipMargin = value as any;
  }

  public get overflowWrap(): string {
    return this._style.overflowWrap;
  }

  public set overflowWrap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overflowWrap", value);
    else this._style.overflowWrap = value as any;
  }

  public get overflowX(): string {
    return this._style.overflowX;
  }

  public set overflowX(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overflowX", value);
    else this._style.overflowX = value as any;
  }

  public get overflowY(): string {
    return this._style.overflowY;
  }

  public set overflowY(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overflowY", value);
    else this._style.overflowY = value as any;
  }

  public get overscrollBehavior(): string {
    return this._style.overscrollBehavior;
  }

  public set overscrollBehavior(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overscrollBehavior", value);
    else this._style.overscrollBehavior = value as any;
  }

  public get overscrollBehaviorBlock(): string {
    return this._style.overscrollBehaviorBlock;
  }

  public set overscrollBehaviorBlock(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("overscrollBehaviorBlock", value);
    else this._style.overscrollBehaviorBlock = value as any;
  }

  public get overscrollBehaviorInline(): string {
    return this._style.overscrollBehaviorInline;
  }

  public set overscrollBehaviorInline(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("overscrollBehaviorInline", value);
    else this._style.overscrollBehaviorInline = value as any;
  }

  public get overscrollBehaviorX(): string {
    return this._style.overscrollBehaviorX;
  }

  public set overscrollBehaviorX(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overscrollBehaviorX", value);
    else this._style.overscrollBehaviorX = value as any;
  }

  public get overscrollBehaviorY(): string {
    return this._style.overscrollBehaviorY;
  }

  public set overscrollBehaviorY(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("overscrollBehaviorY", value);
    else this._style.overscrollBehaviorY = value as any;
  }

  public get padding(): string {
    return this._style.padding;
  }

  public set padding(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("padding", value);
    else this._style.padding = value as any;
  }

  public get paddingBlock(): string {
    return this._style.paddingBlock;
  }

  public set paddingBlock(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingBlock", value);
    else this._style.paddingBlock = value as any;
  }

  public get paddingBlockEnd(): string {
    return this._style.paddingBlockEnd;
  }

  public set paddingBlockEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingBlockEnd", value);
    else this._style.paddingBlockEnd = value as any;
  }

  public get paddingBlockStart(): string {
    return this._style.paddingBlockStart;
  }

  public set paddingBlockStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingBlockStart", value);
    else this._style.paddingBlockStart = value as any;
  }

  public get paddingBottom(): string {
    return this._style.paddingBottom;
  }

  public set paddingBottom(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingBottom", value);
    else this._style.paddingBottom = value as any;
  }

  public get paddingInline(): string {
    return this._style.paddingInline;
  }

  public set paddingInline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingInline", value);
    else this._style.paddingInline = value as any;
  }

  public get paddingInlineEnd(): string {
    return this._style.paddingInlineEnd;
  }

  public set paddingInlineEnd(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingInlineEnd", value);
    else this._style.paddingInlineEnd = value as any;
  }

  public get paddingInlineStart(): string {
    return this._style.paddingInlineStart;
  }

  public set paddingInlineStart(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingInlineStart", value);
    else this._style.paddingInlineStart = value as any;
  }

  public get paddingLeft(): string {
    return this._style.paddingLeft;
  }

  public set paddingLeft(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingLeft", value);
    else this._style.paddingLeft = value as any;
  }

  public get paddingRight(): string {
    return this._style.paddingRight;
  }

  public set paddingRight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingRight", value);
    else this._style.paddingRight = value as any;
  }

  public get paddingTop(): string {
    return this._style.paddingTop;
  }

  public set paddingTop(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paddingTop", value);
    else this._style.paddingTop = value as any;
  }

  public get page(): string {
    return this._style.page;
  }

  public set page(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("page", value);
    else this._style.page = value as any;
  }

  public get pageBreakAfter(): string {
    return this._style.pageBreakAfter;
  }

  public set pageBreakAfter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("pageBreakAfter", value);
    else this._style.pageBreakAfter = value as any;
  }

  public get pageBreakBefore(): string {
    return this._style.pageBreakBefore;
  }

  public set pageBreakBefore(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("pageBreakBefore", value);
    else this._style.pageBreakBefore = value as any;
  }

  public get pageBreakInside(): string {
    return this._style.pageBreakInside;
  }

  public set pageBreakInside(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("pageBreakInside", value);
    else this._style.pageBreakInside = value as any;
  }

  public get paintOrder(): string {
    return this._style.paintOrder;
  }

  public set paintOrder(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("paintOrder", value);
    else this._style.paintOrder = value as any;
  }

  public get parentRule(): CSSRule | null {
    return this._style.parentRule;
  }

  public get perspective(): string {
    return this._style.perspective;
  }

  public set perspective(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("perspective", value);
    else this._style.perspective = value as any;
  }

  public get perspectiveOrigin(): string {
    return this._style.perspectiveOrigin;
  }

  public set perspectiveOrigin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("perspectiveOrigin", value);
    else this._style.perspectiveOrigin = value as any;
  }

  public get placeContent(): string {
    return this._style.placeContent;
  }

  public set placeContent(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("placeContent", value);
    else this._style.placeContent = value as any;
  }

  public get placeItems(): string {
    return this._style.placeItems;
  }

  public set placeItems(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("placeItems", value);
    else this._style.placeItems = value as any;
  }

  public get placeSelf(): string {
    return this._style.placeSelf;
  }

  public set placeSelf(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("placeSelf", value);
    else this._style.placeSelf = value as any;
  }

  public get pointerEvents(): string {
    return this._style.pointerEvents;
  }

  public set pointerEvents(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("pointerEvents", value);
    else this._style.pointerEvents = value as any;
  }

  public get position(): string {
    return this._style.position;
  }

  public set position(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("position", value);
    else this._style.position = value as any;
  }

  public get printColorAdjust(): string {
    return this._style.printColorAdjust;
  }

  public set printColorAdjust(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("printColorAdjust", value);
    else this._style.printColorAdjust = value as any;
  }

  public get quotes(): string {
    return this._style.quotes;
  }

  public set quotes(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("quotes", value);
    else this._style.quotes = value as any;
  }

  public get resize(): string {
    return this._style.resize;
  }

  public set resize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("resize", value);
    else this._style.resize = value as any;
  }

  public get right(): string {
    return this._style.right;
  }

  public set right(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("right", value);
    else this._style.right = value as any;
  }

  public get rotate(): string {
    return this._style.rotate;
  }

  public set rotate(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("rotate", value);
    else this._style.rotate = value as any;
  }

  public get rowGap(): string {
    return this._style.rowGap;
  }

  public set rowGap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("rowGap", value);
    else this._style.rowGap = value as any;
  }

  public get rubyPosition(): string {
    return this._style.rubyPosition;
  }

  public set rubyPosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("rubyPosition", value);
    else this._style.rubyPosition = value as any;
  }

  public get scale(): string {
    return this._style.scale;
  }

  public set scale(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scale", value);
    else this._style.scale = value as any;
  }

  public get scrollBehavior(): string {
    return this._style.scrollBehavior;
  }

  public set scrollBehavior(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollBehavior", value);
    else this._style.scrollBehavior = value as any;
  }

  public get scrollMargin(): string {
    return this._style.scrollMargin;
  }

  public set scrollMargin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMargin", value);
    else this._style.scrollMargin = value as any;
  }

  public get scrollMarginBlock(): string {
    return this._style.scrollMarginBlock;
  }

  public set scrollMarginBlock(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMarginBlock", value);
    else this._style.scrollMarginBlock = value as any;
  }

  public get scrollMarginBlockEnd(): string {
    return this._style.scrollMarginBlockEnd;
  }

  public set scrollMarginBlockEnd(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollMarginBlockEnd", value);
    else this._style.scrollMarginBlockEnd = value as any;
  }

  public get scrollMarginBlockStart(): string {
    return this._style.scrollMarginBlockStart;
  }

  public set scrollMarginBlockStart(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollMarginBlockStart", value);
    else this._style.scrollMarginBlockStart = value as any;
  }

  public get scrollMarginBottom(): string {
    return this._style.scrollMarginBottom;
  }

  public set scrollMarginBottom(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMarginBottom", value);
    else this._style.scrollMarginBottom = value as any;
  }

  public get scrollMarginInline(): string {
    return this._style.scrollMarginInline;
  }

  public set scrollMarginInline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMarginInline", value);
    else this._style.scrollMarginInline = value as any;
  }

  public get scrollMarginInlineEnd(): string {
    return this._style.scrollMarginInlineEnd;
  }

  public set scrollMarginInlineEnd(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollMarginInlineEnd", value);
    else this._style.scrollMarginInlineEnd = value as any;
  }

  public get scrollMarginInlineStart(): string {
    return this._style.scrollMarginInlineStart;
  }

  public set scrollMarginInlineStart(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollMarginInlineStart", value);
    else this._style.scrollMarginInlineStart = value as any;
  }

  public get scrollMarginLeft(): string {
    return this._style.scrollMarginLeft;
  }

  public set scrollMarginLeft(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMarginLeft", value);
    else this._style.scrollMarginLeft = value as any;
  }

  public get scrollMarginRight(): string {
    return this._style.scrollMarginRight;
  }

  public set scrollMarginRight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMarginRight", value);
    else this._style.scrollMarginRight = value as any;
  }

  public get scrollMarginTop(): string {
    return this._style.scrollMarginTop;
  }

  public set scrollMarginTop(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollMarginTop", value);
    else this._style.scrollMarginTop = value as any;
  }

  public get scrollPadding(): string {
    return this._style.scrollPadding;
  }

  public set scrollPadding(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPadding", value);
    else this._style.scrollPadding = value as any;
  }

  public get scrollPaddingBlock(): string {
    return this._style.scrollPaddingBlock;
  }

  public set scrollPaddingBlock(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPaddingBlock", value);
    else this._style.scrollPaddingBlock = value as any;
  }

  public get scrollPaddingBlockEnd(): string {
    return this._style.scrollPaddingBlockEnd;
  }

  public set scrollPaddingBlockEnd(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollPaddingBlockEnd", value);
    else this._style.scrollPaddingBlockEnd = value as any;
  }

  public get scrollPaddingBlockStart(): string {
    return this._style.scrollPaddingBlockStart;
  }

  public set scrollPaddingBlockStart(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollPaddingBlockStart", value);
    else this._style.scrollPaddingBlockStart = value as any;
  }

  public get scrollPaddingBottom(): string {
    return this._style.scrollPaddingBottom;
  }

  public set scrollPaddingBottom(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPaddingBottom", value);
    else this._style.scrollPaddingBottom = value as any;
  }

  public get scrollPaddingInline(): string {
    return this._style.scrollPaddingInline;
  }

  public set scrollPaddingInline(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPaddingInline", value);
    else this._style.scrollPaddingInline = value as any;
  }

  public get scrollPaddingInlineEnd(): string {
    return this._style.scrollPaddingInlineEnd;
  }

  public set scrollPaddingInlineEnd(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollPaddingInlineEnd", value);
    else this._style.scrollPaddingInlineEnd = value as any;
  }

  public get scrollPaddingInlineStart(): string {
    return this._style.scrollPaddingInlineStart;
  }

  public set scrollPaddingInlineStart(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("scrollPaddingInlineStart", value);
    else this._style.scrollPaddingInlineStart = value as any;
  }

  public get scrollPaddingLeft(): string {
    return this._style.scrollPaddingLeft;
  }

  public set scrollPaddingLeft(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPaddingLeft", value);
    else this._style.scrollPaddingLeft = value as any;
  }

  public get scrollPaddingRight(): string {
    return this._style.scrollPaddingRight;
  }

  public set scrollPaddingRight(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPaddingRight", value);
    else this._style.scrollPaddingRight = value as any;
  }

  public get scrollPaddingTop(): string {
    return this._style.scrollPaddingTop;
  }

  public set scrollPaddingTop(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollPaddingTop", value);
    else this._style.scrollPaddingTop = value as any;
  }

  public get scrollSnapAlign(): string {
    return this._style.scrollSnapAlign;
  }

  public set scrollSnapAlign(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollSnapAlign", value);
    else this._style.scrollSnapAlign = value as any;
  }

  public get scrollSnapStop(): string {
    return this._style.scrollSnapStop;
  }

  public set scrollSnapStop(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollSnapStop", value);
    else this._style.scrollSnapStop = value as any;
  }

  public get scrollSnapType(): string {
    return this._style.scrollSnapType;
  }

  public set scrollSnapType(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollSnapType", value);
    else this._style.scrollSnapType = value as any;
  }

  public get scrollbarGutter(): string {
    return this._style.scrollbarGutter;
  }

  public set scrollbarGutter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("scrollbarGutter", value);
    else this._style.scrollbarGutter = value as any;
  }

  public get shapeImageThreshold(): string {
    return this._style.shapeImageThreshold;
  }

  public set shapeImageThreshold(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("shapeImageThreshold", value);
    else this._style.shapeImageThreshold = value as any;
  }

  public get shapeMargin(): string {
    return this._style.shapeMargin;
  }

  public set shapeMargin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("shapeMargin", value);
    else this._style.shapeMargin = value as any;
  }

  public get shapeOutside(): string {
    return this._style.shapeOutside;
  }

  public set shapeOutside(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("shapeOutside", value);
    else this._style.shapeOutside = value as any;
  }

  public get shapeRendering(): string {
    return this._style.shapeRendering;
  }

  public set shapeRendering(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("shapeRendering", value);
    else this._style.shapeRendering = value as any;
  }

  public get stopColor(): string {
    return this._style.stopColor;
  }

  public set stopColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("stopColor", value);
    else this._style.stopColor = value as any;
  }

  public get stopOpacity(): string {
    return this._style.stopOpacity;
  }

  public set stopOpacity(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("stopOpacity", value);
    else this._style.stopOpacity = value as any;
  }

  public get stroke(): string {
    return this._style.stroke;
  }

  public set stroke(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("stroke", value);
    else this._style.stroke = value as any;
  }

  public get strokeDasharray(): string {
    return this._style.strokeDasharray;
  }

  public set strokeDasharray(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeDasharray", value);
    else this._style.strokeDasharray = value as any;
  }

  public get strokeDashoffset(): string {
    return this._style.strokeDashoffset;
  }

  public set strokeDashoffset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeDashoffset", value);
    else this._style.strokeDashoffset = value as any;
  }

  public get strokeLinecap(): string {
    return this._style.strokeLinecap;
  }

  public set strokeLinecap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeLinecap", value);
    else this._style.strokeLinecap = value as any;
  }

  public get strokeLinejoin(): string {
    return this._style.strokeLinejoin;
  }

  public set strokeLinejoin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeLinejoin", value);
    else this._style.strokeLinejoin = value as any;
  }

  public get strokeMiterlimit(): string {
    return this._style.strokeMiterlimit;
  }

  public set strokeMiterlimit(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeMiterlimit", value);
    else this._style.strokeMiterlimit = value as any;
  }

  public get strokeOpacity(): string {
    return this._style.strokeOpacity;
  }

  public set strokeOpacity(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeOpacity", value);
    else this._style.strokeOpacity = value as any;
  }

  public get strokeWidth(): string {
    return this._style.strokeWidth;
  }

  public set strokeWidth(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("strokeWidth", value);
    else this._style.strokeWidth = value as any;
  }

  public get tabSize(): string {
    return this._style.tabSize;
  }

  public set tabSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("tabSize", value);
    else this._style.tabSize = value as any;
  }

  public get tableLayout(): string {
    return this._style.tableLayout;
  }

  public set tableLayout(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("tableLayout", value);
    else this._style.tableLayout = value as any;
  }

  public get textAlign(): string {
    return this._style.textAlign;
  }

  public set textAlign(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textAlign", value);
    else this._style.textAlign = value as any;
  }

  public get textAlignLast(): string {
    return this._style.textAlignLast;
  }

  public set textAlignLast(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textAlignLast", value);
    else this._style.textAlignLast = value as any;
  }

  public get textAnchor(): string {
    return this._style.textAnchor;
  }

  public set textAnchor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textAnchor", value);
    else this._style.textAnchor = value as any;
  }

  public get textCombineUpright(): string {
    return this._style.textCombineUpright;
  }

  public set textCombineUpright(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textCombineUpright", value);
    else this._style.textCombineUpright = value as any;
  }

  public get textDecoration(): string {
    return this._style.textDecoration;
  }

  public set textDecoration(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textDecoration", value);
    else this._style.textDecoration = value as any;
  }

  public get textDecorationColor(): string {
    return this._style.textDecorationColor;
  }

  public set textDecorationColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textDecorationColor", value);
    else this._style.textDecorationColor = value as any;
  }

  public get textDecorationLine(): string {
    return this._style.textDecorationLine;
  }

  public set textDecorationLine(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textDecorationLine", value);
    else this._style.textDecorationLine = value as any;
  }

  public get textDecorationSkipInk(): string {
    return this._style.textDecorationSkipInk;
  }

  public set textDecorationSkipInk(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("textDecorationSkipInk", value);
    else this._style.textDecorationSkipInk = value as any;
  }

  public get textDecorationStyle(): string {
    return this._style.textDecorationStyle;
  }

  public set textDecorationStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textDecorationStyle", value);
    else this._style.textDecorationStyle = value as any;
  }

  public get textDecorationThickness(): string {
    return this._style.textDecorationThickness;
  }

  public set textDecorationThickness(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("textDecorationThickness", value);
    else this._style.textDecorationThickness = value as any;
  }

  public get textEmphasis(): string {
    return this._style.textEmphasis;
  }

  public set textEmphasis(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textEmphasis", value);
    else this._style.textEmphasis = value as any;
  }

  public get textEmphasisColor(): string {
    return this._style.textEmphasisColor;
  }

  public set textEmphasisColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textEmphasisColor", value);
    else this._style.textEmphasisColor = value as any;
  }

  public get textEmphasisPosition(): string {
    return this._style.textEmphasisPosition;
  }

  public set textEmphasisPosition(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("textEmphasisPosition", value);
    else this._style.textEmphasisPosition = value as any;
  }

  public get textEmphasisStyle(): string {
    return this._style.textEmphasisStyle;
  }

  public set textEmphasisStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textEmphasisStyle", value);
    else this._style.textEmphasisStyle = value as any;
  }

  public get textIndent(): string {
    return this._style.textIndent;
  }

  public set textIndent(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textIndent", value);
    else this._style.textIndent = value as any;
  }

  public get textOrientation(): string {
    return this._style.textOrientation;
  }

  public set textOrientation(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textOrientation", value);
    else this._style.textOrientation = value as any;
  }

  public get textOverflow(): string {
    return this._style.textOverflow;
  }

  public set textOverflow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textOverflow", value);
    else this._style.textOverflow = value as any;
  }

  public get textRendering(): string {
    return this._style.textRendering;
  }

  public set textRendering(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textRendering", value);
    else this._style.textRendering = value as any;
  }

  public get textShadow(): string {
    return this._style.textShadow;
  }

  public set textShadow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textShadow", value);
    else this._style.textShadow = value as any;
  }

  public get textTransform(): string {
    return this._style.textTransform;
  }

  public set textTransform(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textTransform", value);
    else this._style.textTransform = value as any;
  }

  public get textUnderlineOffset(): string {
    return this._style.textUnderlineOffset;
  }

  public set textUnderlineOffset(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("textUnderlineOffset", value);
    else this._style.textUnderlineOffset = value as any;
  }

  public get textUnderlinePosition(): string {
    return this._style.textUnderlinePosition;
  }

  public set textUnderlinePosition(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("textUnderlinePosition", value);
    else this._style.textUnderlinePosition = value as any;
  }

  public get top(): string {
    return this._style.top;
  }

  public set top(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("top", value);
    else this._style.top = value as any;
  }

  public get touchAction(): string {
    return this._style.touchAction;
  }

  public set touchAction(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("touchAction", value);
    else this._style.touchAction = value as any;
  }

  public get transform(): string {
    return this._style.transform;
  }

  public set transform(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transform", value);
    else this._style.transform = value as any;
  }

  public get transformBox(): string {
    return this._style.transformBox;
  }

  public set transformBox(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transformBox", value);
    else this._style.transformBox = value as any;
  }

  public get transformOrigin(): string {
    return this._style.transformOrigin;
  }

  public set transformOrigin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transformOrigin", value);
    else this._style.transformOrigin = value as any;
  }

  public get transformStyle(): string {
    return this._style.transformStyle;
  }

  public set transformStyle(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transformStyle", value);
    else this._style.transformStyle = value as any;
  }

  public get transition(): string {
    return this._style.transition;
  }

  public set transition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transition", value);
    else this._style.transition = value as any;
  }

  public get transitionDelay(): string {
    return this._style.transitionDelay;
  }

  public set transitionDelay(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transitionDelay", value);
    else this._style.transitionDelay = value as any;
  }

  public get transitionDuration(): string {
    return this._style.transitionDuration;
  }

  public set transitionDuration(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transitionDuration", value);
    else this._style.transitionDuration = value as any;
  }

  public get transitionProperty(): string {
    return this._style.transitionProperty;
  }

  public set transitionProperty(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("transitionProperty", value);
    else this._style.transitionProperty = value as any;
  }

  public get transitionTimingFunction(): string {
    return this._style.transitionTimingFunction;
  }

  public set transitionTimingFunction(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("transitionTimingFunction", value);
    else this._style.transitionTimingFunction = value as any;
  }

  public get translate(): string {
    return this._style.translate;
  }

  public set translate(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("translate", value);
    else this._style.translate = value as any;
  }

  public get unicodeBidi(): string {
    return this._style.unicodeBidi;
  }

  public set unicodeBidi(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("unicodeBidi", value);
    else this._style.unicodeBidi = value as any;
  }

  public get userSelect(): string {
    return this._style.userSelect;
  }

  public set userSelect(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("userSelect", value);
    else this._style.userSelect = value as any;
  }

  public get verticalAlign(): string {
    return this._style.verticalAlign;
  }

  public set verticalAlign(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("verticalAlign", value);
    else this._style.verticalAlign = value as any;
  }

  public get visibility(): string {
    return this._style.visibility;
  }

  public set visibility(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("visibility", value);
    else this._style.visibility = value as any;
  }

  public get webkitAlignContent(): string {
    return this._style.webkitAlignContent;
  }

  public set webkitAlignContent(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitAlignContent", value);
    else this._style.webkitAlignContent = value as any;
  }

  public get webkitAlignItems(): string {
    return this._style.webkitAlignItems;
  }

  public set webkitAlignItems(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitAlignItems", value);
    else this._style.webkitAlignItems = value as any;
  }

  public get webkitAlignSelf(): string {
    return this._style.webkitAlignSelf;
  }

  public set webkitAlignSelf(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitAlignSelf", value);
    else this._style.webkitAlignSelf = value as any;
  }

  public get webkitAnimation(): string {
    return this._style.webkitAnimation;
  }

  public set webkitAnimation(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitAnimation", value);
    else this._style.webkitAnimation = value as any;
  }

  public get webkitAnimationDelay(): string {
    return this._style.webkitAnimationDelay;
  }

  public set webkitAnimationDelay(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationDelay", value);
    else this._style.webkitAnimationDelay = value as any;
  }

  public get webkitAnimationDirection(): string {
    return this._style.webkitAnimationDirection;
  }

  public set webkitAnimationDirection(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationDirection", value);
    else this._style.webkitAnimationDirection = value as any;
  }

  public get webkitAnimationDuration(): string {
    return this._style.webkitAnimationDuration;
  }

  public set webkitAnimationDuration(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationDuration", value);
    else this._style.webkitAnimationDuration = value as any;
  }

  public get webkitAnimationFillMode(): string {
    return this._style.webkitAnimationFillMode;
  }

  public set webkitAnimationFillMode(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationFillMode", value);
    else this._style.webkitAnimationFillMode = value as any;
  }

  public get webkitAnimationIterationCount(): string {
    return this._style.webkitAnimationIterationCount;
  }

  public set webkitAnimationIterationCount(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationIterationCount", value);
    else this._style.webkitAnimationIterationCount = value as any;
  }

  public get webkitAnimationName(): string {
    return this._style.webkitAnimationName;
  }

  public set webkitAnimationName(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitAnimationName", value);
    else this._style.webkitAnimationName = value as any;
  }

  public get webkitAnimationPlayState(): string {
    return this._style.webkitAnimationPlayState;
  }

  public set webkitAnimationPlayState(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationPlayState", value);
    else this._style.webkitAnimationPlayState = value as any;
  }

  public get webkitAnimationTimingFunction(): string {
    return this._style.webkitAnimationTimingFunction;
  }

  public set webkitAnimationTimingFunction(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitAnimationTimingFunction", value);
    else this._style.webkitAnimationTimingFunction = value as any;
  }

  public get webkitAppearance(): string {
    return this._style.webkitAppearance;
  }

  public set webkitAppearance(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitAppearance", value);
    else this._style.webkitAppearance = value as any;
  }

  public get webkitBackfaceVisibility(): string {
    return this._style.webkitBackfaceVisibility;
  }

  public set webkitBackfaceVisibility(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBackfaceVisibility", value);
    else this._style.webkitBackfaceVisibility = value as any;
  }

  public get webkitBackgroundClip(): string {
    return this._style.webkitBackgroundClip;
  }

  public set webkitBackgroundClip(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBackgroundClip", value);
    else this._style.webkitBackgroundClip = value as any;
  }

  public get webkitBackgroundOrigin(): string {
    return this._style.webkitBackgroundOrigin;
  }

  public set webkitBackgroundOrigin(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBackgroundOrigin", value);
    else this._style.webkitBackgroundOrigin = value as any;
  }

  public get webkitBackgroundSize(): string {
    return this._style.webkitBackgroundSize;
  }

  public set webkitBackgroundSize(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBackgroundSize", value);
    else this._style.webkitBackgroundSize = value as any;
  }

  public get webkitBorderBottomLeftRadius(): string {
    return this._style.webkitBorderBottomLeftRadius;
  }

  public set webkitBorderBottomLeftRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBorderBottomLeftRadius", value);
    else this._style.webkitBorderBottomLeftRadius = value as any;
  }

  public get webkitBorderBottomRightRadius(): string {
    return this._style.webkitBorderBottomRightRadius;
  }

  public set webkitBorderBottomRightRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBorderBottomRightRadius", value);
    else this._style.webkitBorderBottomRightRadius = value as any;
  }

  public get webkitBorderRadius(): string {
    return this._style.webkitBorderRadius;
  }

  public set webkitBorderRadius(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBorderRadius", value);
    else this._style.webkitBorderRadius = value as any;
  }

  public get webkitBorderTopLeftRadius(): string {
    return this._style.webkitBorderTopLeftRadius;
  }

  public set webkitBorderTopLeftRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBorderTopLeftRadius", value);
    else this._style.webkitBorderTopLeftRadius = value as any;
  }

  public get webkitBorderTopRightRadius(): string {
    return this._style.webkitBorderTopRightRadius;
  }

  public set webkitBorderTopRightRadius(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBorderTopRightRadius", value);
    else this._style.webkitBorderTopRightRadius = value as any;
  }

  public get webkitBoxAlign(): string {
    return this._style.webkitBoxAlign;
  }

  public set webkitBoxAlign(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBoxAlign", value);
    else this._style.webkitBoxAlign = value as any;
  }

  public get webkitBoxFlex(): string {
    return this._style.webkitBoxFlex;
  }

  public set webkitBoxFlex(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBoxFlex", value);
    else this._style.webkitBoxFlex = value as any;
  }

  public get webkitBoxOrdinalGroup(): string {
    return this._style.webkitBoxOrdinalGroup;
  }

  public set webkitBoxOrdinalGroup(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitBoxOrdinalGroup", value);
    else this._style.webkitBoxOrdinalGroup = value as any;
  }

  public get webkitBoxOrient(): string {
    return this._style.webkitBoxOrient;
  }

  public set webkitBoxOrient(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBoxOrient", value);
    else this._style.webkitBoxOrient = value as any;
  }

  public get webkitBoxPack(): string {
    return this._style.webkitBoxPack;
  }

  public set webkitBoxPack(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBoxPack", value);
    else this._style.webkitBoxPack = value as any;
  }

  public get webkitBoxShadow(): string {
    return this._style.webkitBoxShadow;
  }

  public set webkitBoxShadow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBoxShadow", value);
    else this._style.webkitBoxShadow = value as any;
  }

  public get webkitBoxSizing(): string {
    return this._style.webkitBoxSizing;
  }

  public set webkitBoxSizing(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitBoxSizing", value);
    else this._style.webkitBoxSizing = value as any;
  }

  public get webkitFilter(): string {
    return this._style.webkitFilter;
  }

  public set webkitFilter(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFilter", value);
    else this._style.webkitFilter = value as any;
  }

  public get webkitFlex(): string {
    return this._style.webkitFlex;
  }

  public set webkitFlex(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlex", value);
    else this._style.webkitFlex = value as any;
  }

  public get webkitFlexBasis(): string {
    return this._style.webkitFlexBasis;
  }

  public set webkitFlexBasis(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlexBasis", value);
    else this._style.webkitFlexBasis = value as any;
  }

  public get webkitFlexDirection(): string {
    return this._style.webkitFlexDirection;
  }

  public set webkitFlexDirection(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlexDirection", value);
    else this._style.webkitFlexDirection = value as any;
  }

  public get webkitFlexFlow(): string {
    return this._style.webkitFlexFlow;
  }

  public set webkitFlexFlow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlexFlow", value);
    else this._style.webkitFlexFlow = value as any;
  }

  public get webkitFlexGrow(): string {
    return this._style.webkitFlexGrow;
  }

  public set webkitFlexGrow(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlexGrow", value);
    else this._style.webkitFlexGrow = value as any;
  }

  public get webkitFlexShrink(): string {
    return this._style.webkitFlexShrink;
  }

  public set webkitFlexShrink(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlexShrink", value);
    else this._style.webkitFlexShrink = value as any;
  }

  public get webkitFlexWrap(): string {
    return this._style.webkitFlexWrap;
  }

  public set webkitFlexWrap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitFlexWrap", value);
    else this._style.webkitFlexWrap = value as any;
  }

  public get webkitJustifyContent(): string {
    return this._style.webkitJustifyContent;
  }

  public set webkitJustifyContent(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitJustifyContent", value);
    else this._style.webkitJustifyContent = value as any;
  }

  public get webkitLineClamp(): string {
    return this._style.webkitLineClamp;
  }

  public set webkitLineClamp(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitLineClamp", value);
    else this._style.webkitLineClamp = value as any;
  }

  public get webkitMask(): string {
    return this._style.webkitMask;
  }

  public set webkitMask(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMask", value);
    else this._style.webkitMask = value as any;
  }

  public get webkitMaskBoxImage(): string {
    return this._style.webkitMaskBoxImage;
  }

  public set webkitMaskBoxImage(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskBoxImage", value);
    else this._style.webkitMaskBoxImage = value as any;
  }

  public get webkitMaskBoxImageOutset(): string {
    return this._style.webkitMaskBoxImageOutset;
  }

  public set webkitMaskBoxImageOutset(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitMaskBoxImageOutset", value);
    else this._style.webkitMaskBoxImageOutset = value as any;
  }

  public get webkitMaskBoxImageRepeat(): string {
    return this._style.webkitMaskBoxImageRepeat;
  }

  public set webkitMaskBoxImageRepeat(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitMaskBoxImageRepeat", value);
    else this._style.webkitMaskBoxImageRepeat = value as any;
  }

  public get webkitMaskBoxImageSlice(): string {
    return this._style.webkitMaskBoxImageSlice;
  }

  public set webkitMaskBoxImageSlice(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitMaskBoxImageSlice", value);
    else this._style.webkitMaskBoxImageSlice = value as any;
  }

  public get webkitMaskBoxImageSource(): string {
    return this._style.webkitMaskBoxImageSource;
  }

  public set webkitMaskBoxImageSource(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitMaskBoxImageSource", value);
    else this._style.webkitMaskBoxImageSource = value as any;
  }

  public get webkitMaskBoxImageWidth(): string {
    return this._style.webkitMaskBoxImageWidth;
  }

  public set webkitMaskBoxImageWidth(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitMaskBoxImageWidth", value);
    else this._style.webkitMaskBoxImageWidth = value as any;
  }

  public get webkitMaskClip(): string {
    return this._style.webkitMaskClip;
  }

  public set webkitMaskClip(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskClip", value);
    else this._style.webkitMaskClip = value as any;
  }

  public get webkitMaskComposite(): string {
    return this._style.webkitMaskComposite;
  }

  public set webkitMaskComposite(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskComposite", value);
    else this._style.webkitMaskComposite = value as any;
  }

  public get webkitMaskImage(): string {
    return this._style.webkitMaskImage;
  }

  public set webkitMaskImage(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskImage", value);
    else this._style.webkitMaskImage = value as any;
  }

  public get webkitMaskOrigin(): string {
    return this._style.webkitMaskOrigin;
  }

  public set webkitMaskOrigin(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskOrigin", value);
    else this._style.webkitMaskOrigin = value as any;
  }

  public get webkitMaskPosition(): string {
    return this._style.webkitMaskPosition;
  }

  public set webkitMaskPosition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskPosition", value);
    else this._style.webkitMaskPosition = value as any;
  }

  public get webkitMaskRepeat(): string {
    return this._style.webkitMaskRepeat;
  }

  public set webkitMaskRepeat(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskRepeat", value);
    else this._style.webkitMaskRepeat = value as any;
  }

  public get webkitMaskSize(): string {
    return this._style.webkitMaskSize;
  }

  public set webkitMaskSize(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitMaskSize", value);
    else this._style.webkitMaskSize = value as any;
  }

  public get webkitOrder(): string {
    return this._style.webkitOrder;
  }

  public set webkitOrder(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitOrder", value);
    else this._style.webkitOrder = value as any;
  }

  public get webkitPerspective(): string {
    return this._style.webkitPerspective;
  }

  public set webkitPerspective(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitPerspective", value);
    else this._style.webkitPerspective = value as any;
  }

  public get webkitPerspectiveOrigin(): string {
    return this._style.webkitPerspectiveOrigin;
  }

  public set webkitPerspectiveOrigin(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitPerspectiveOrigin", value);
    else this._style.webkitPerspectiveOrigin = value as any;
  }

  public get webkitTextFillColor(): string {
    return this._style.webkitTextFillColor;
  }

  public set webkitTextFillColor(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitTextFillColor", value);
    else this._style.webkitTextFillColor = value as any;
  }

  public get webkitTextSizeAdjust(): string {
    return this._style.webkitTextSizeAdjust;
  }

  public set webkitTextSizeAdjust(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTextSizeAdjust", value);
    else this._style.webkitTextSizeAdjust = value as any;
  }

  public get webkitTextStroke(): string {
    return this._style.webkitTextStroke;
  }

  public set webkitTextStroke(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitTextStroke", value);
    else this._style.webkitTextStroke = value as any;
  }

  public get webkitTextStrokeColor(): string {
    return this._style.webkitTextStrokeColor;
  }

  public set webkitTextStrokeColor(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTextStrokeColor", value);
    else this._style.webkitTextStrokeColor = value as any;
  }

  public get webkitTextStrokeWidth(): string {
    return this._style.webkitTextStrokeWidth;
  }

  public set webkitTextStrokeWidth(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTextStrokeWidth", value);
    else this._style.webkitTextStrokeWidth = value as any;
  }

  public get webkitTransform(): string {
    return this._style.webkitTransform;
  }

  public set webkitTransform(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitTransform", value);
    else this._style.webkitTransform = value as any;
  }

  public get webkitTransformOrigin(): string {
    return this._style.webkitTransformOrigin;
  }

  public set webkitTransformOrigin(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTransformOrigin", value);
    else this._style.webkitTransformOrigin = value as any;
  }

  public get webkitTransformStyle(): string {
    return this._style.webkitTransformStyle;
  }

  public set webkitTransformStyle(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTransformStyle", value);
    else this._style.webkitTransformStyle = value as any;
  }

  public get webkitTransition(): string {
    return this._style.webkitTransition;
  }

  public set webkitTransition(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitTransition", value);
    else this._style.webkitTransition = value as any;
  }

  public get webkitTransitionDelay(): string {
    return this._style.webkitTransitionDelay;
  }

  public set webkitTransitionDelay(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTransitionDelay", value);
    else this._style.webkitTransitionDelay = value as any;
  }

  public get webkitTransitionDuration(): string {
    return this._style.webkitTransitionDuration;
  }

  public set webkitTransitionDuration(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTransitionDuration", value);
    else this._style.webkitTransitionDuration = value as any;
  }

  public get webkitTransitionProperty(): string {
    return this._style.webkitTransitionProperty;
  }

  public set webkitTransitionProperty(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTransitionProperty", value);
    else this._style.webkitTransitionProperty = value as any;
  }

  public get webkitTransitionTimingFunction(): string {
    return this._style.webkitTransitionTimingFunction;
  }

  public set webkitTransitionTimingFunction(value: string | Ref<string>) {
    if (value instanceof Ref)
      this.setStyleRefMap("webkitTransitionTimingFunction", value);
    else this._style.webkitTransitionTimingFunction = value as any;
  }

  public get webkitUserSelect(): string {
    return this._style.webkitUserSelect;
  }

  public set webkitUserSelect(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("webkitUserSelect", value);
    else this._style.webkitUserSelect = value as any;
  }

  public get whiteSpace(): string {
    return this._style.whiteSpace;
  }

  public set whiteSpace(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("whiteSpace", value);
    else this._style.whiteSpace = value as any;
  }

  public get widows(): string {
    return this._style.widows;
  }

  public set widows(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("widows", value);
    else this._style.widows = value as any;
  }

  public get width(): string {
    return this._style.width;
  }

  public set width(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("width", value);
    else this._style.width = value as any;
  }

  public get willChange(): string {
    return this._style.willChange;
  }

  public set willChange(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("willChange", value);
    else this._style.willChange = value as any;
  }

  public get wordBreak(): string {
    return this._style.wordBreak;
  }

  public set wordBreak(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("wordBreak", value);
    else this._style.wordBreak = value as any;
  }

  public get wordSpacing(): string {
    return this._style.wordSpacing;
  }

  public set wordSpacing(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("wordSpacing", value);
    else this._style.wordSpacing = value as any;
  }

  public get wordWrap(): string {
    return this._style.wordWrap;
  }

  public set wordWrap(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("wordWrap", value);
    else this._style.wordWrap = value as any;
  }

  public get writingMode(): string {
    return this._style.writingMode;
  }

  public set writingMode(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("writingMode", value);
    else this._style.writingMode = value as any;
  }

  public get zIndex(): string {
    return this._style.zIndex;
  }

  public set zIndex(value: string | Ref<string>) {
    if (value instanceof Ref) this.setStyleRefMap("zIndex", value);
    else this._style.zIndex = value as any;
  }

  getPropertyPriority(property: string) {
    this._style.getPropertyPriority(property);
  }
  getPropertyValue(property: string) {
    this._style.getPropertyValue(property);
  }
  item(index: number) {
    this._style.item(index);
  }
  removeProperty(property: string) {
    if (this.styleRefMap.has(property)) {
      const data = this.styleRefMap.get(property);
      data?.ref.unsubscribe(data.data);
      this.styleRefMap.delete(property);
      return;
    }
    this._style.removeProperty(property);
  }
  setProperty(
    property: string,
    value: string | null,
    priority?: string | undefined,
  ): void {
    if (Object.keys(this._style).includes(property)) {
      (this as any)[property] = value;
    }
  }

  hasOwnProperty(property: string) {
    if (property) return _styleAtributtes.includes(property);
    return false;
  }
}
