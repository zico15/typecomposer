import { ref, RefString } from "../../ref";

export type Variant = "default" | "outline" | "solo" | "standard" | "underlined";

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
  "webkitBoxreflect",
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
  /** [MDN reference](https://developer.mozilla.org/docs/Web/CSS/accent-color) */
  text?: string | ref<string>;
  accentColor?: string | ref<string>;
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
  columns?: string | number;
  rows?: string | number;
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

export interface CSSStyleDeclarationRef {
  get accentColor(): string;
  set accentColor(value: string | ref<string>);
  text?: string | ref<string>;
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

  hasOwnProperty?(key: string): boolean;
}

export declare var CSSStyleDeclarationRef: {
  prototype: CSSStyleDeclarationRef;
  new (): CSSStyleDeclarationRef;
};

export class CSSStyleref implements CSSStyleDeclarationRef {
  [index: number]: any;
  private _style: CSSStyleDeclaration;
  private stylerefMap = new Map<string, { data: { ref: any; name: string }; ref: ref<any> }>();

  private setStylerefMap(propertyKey: string, ref: any) {
    if (ref instanceof RefString) {
      ref.refTarget.subscriber(this._style, propertyKey, ref.refPropertyKey);
      return;
    }
    let oldref = this.stylerefMap.get(propertyKey);
    if (oldref) oldref.ref.unsubscribe(oldref.data);
    else oldref = { data: { ref: this._style, name: propertyKey }, ref: ref };
    ref.subscriber(this._style, propertyKey);
  }

  public appendStyleref(propertyKey: string, element: any, ref: ref<any>) {
    let oldref = this.stylerefMap.get(propertyKey);
    if (oldref) oldref.ref.unsubscribe(oldref.data);
    else oldref = { data: { ref: element, name: propertyKey }, ref: ref };
    ref.subscriber(this._style, propertyKey);
  }

  public disconnectedCallback() {
    // this.stylerefMap.forEach((value) => {
    //   value.ref.unsubscribe(value.data);
    // });
  }

  constructor(style: CSSStyleDeclaration | CSSStyleDeclarationRef) {
    this._style = style as CSSStyleDeclaration;
  }

  get accentColor(): string {
    return this._style.accentColor;
  }
  set accentColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("accentColor", value);
    else this._style.accentColor = value as any;
  }

  public get alignContent(): string {
    return this._style.alignContent;
  }

  public set alignContent(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("alignContent", value);
    else this._style.alignContent = value as any;
  }

  public get alignItems(): string {
    return this._style.alignItems;
  }

  public set alignItems(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("alignItems", value);
    else this._style.alignItems = value as any;
  }

  public get alignSelf(): string {
    return this._style.alignSelf;
  }

  public set alignSelf(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("alignSelf", value);
    else this._style.alignSelf = value as any;
  }

  public get alignmentBaseline(): string {
    return this._style.alignmentBaseline;
  }

  public set alignmentBaseline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("alignmentBaseline", value);
    else this._style.alignmentBaseline = value as any;
  }

  public get all(): string {
    return this._style.all;
  }

  public set all(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("all", value);
    else this._style.all = value as any;
  }

  public get animation(): string {
    return this._style.animation;
  }

  public set animation(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animation", value);
    else this._style.animation = value as any;
  }

  public get animationComposition(): string {
    return this._style.animationComposition;
  }

  public set animationComposition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationComposition", value);
    else this._style.animationComposition = value as any;
  }

  public get animationDelay(): string {
    return this._style.animationDelay;
  }

  public set animationDelay(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationDelay", value);
    else this._style.animationDelay = value as any;
  }

  public get animationDirection(): string {
    return this._style.animationDirection;
  }

  public set animationDirection(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationDirection", value);
    else this._style.animationDirection = value as any;
  }

  public get animationDuration(): string {
    return this._style.animationDuration;
  }

  public set animationDuration(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationDuration", value);
    else this._style.animationDuration = value as any;
  }

  public get animationFillMode(): string {
    return this._style.animationFillMode;
  }

  public set animationFillMode(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationFillMode", value);
    else this._style.animationFillMode = value as any;
  }

  public get animationIterationCount(): string {
    return this._style.animationIterationCount;
  }

  public set animationIterationCount(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationIterationCount", value);
    else this._style.animationIterationCount = value as any;
  }

  public get animationName(): string {
    return this._style.animationName;
  }

  public set animationName(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationName", value);
    else this._style.animationName = value as any;
  }

  public get animationPlayState(): string {
    return this._style.animationPlayState;
  }

  public set animationPlayState(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationPlayState", value);
    else this._style.animationPlayState = value as any;
  }

  public get animationTimingFunction(): string {
    return this._style.animationTimingFunction;
  }

  public set animationTimingFunction(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("animationTimingFunction", value);
    else this._style.animationTimingFunction = value as any;
  }

  public get appearance(): string {
    return this._style.appearance;
  }

  public set appearance(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("appearance", value);
    else this._style.appearance = value as any;
  }

  public get aspectRatio(): string {
    return this._style.aspectRatio;
  }

  public set aspectRatio(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("aspectRatio", value);
    else this._style.aspectRatio = value as any;
  }

  public get backdropFilter(): string {
    return this._style.backdropFilter;
  }

  public set backdropFilter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backdropFilter", value);
    else this._style.backdropFilter = value as any;
  }

  public get backfaceVisibility(): string {
    return this._style.backfaceVisibility;
  }

  public set backfaceVisibility(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backfaceVisibility", value);
    else this._style.backfaceVisibility = value as any;
  }

  public get background(): string {
    return this._style.background;
  }

  public set background(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("background", value);
    else this._style.background = value as any;
  }

  public get backgroundAttachment(): string {
    return this._style.backgroundAttachment;
  }

  public set backgroundAttachment(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundAttachment", value);
    else this._style.backgroundAttachment = value as any;
  }

  public get backgroundBlendMode(): string {
    return this._style.backgroundBlendMode;
  }

  public set backgroundBlendMode(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundBlendMode", value);
    else this._style.backgroundBlendMode = value as any;
  }

  public get backgroundClip(): string {
    return this._style.backgroundClip;
  }

  public set backgroundClip(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundClip", value);
    else this._style.backgroundClip = value as any;
  }

  public get backgroundColor(): string {
    return this._style.backgroundColor;
  }

  public set backgroundColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundColor", value);
    else this._style.backgroundColor = value as any;
  }

  public get backgroundImage(): string {
    return this._style.backgroundImage;
  }

  public set backgroundImage(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundImage", value);
    else this._style.backgroundImage = value as any;
  }

  public get backgroundOrigin(): string {
    return this._style.backgroundOrigin;
  }

  public set backgroundOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundOrigin", value);
    else this._style.backgroundOrigin = value as any;
  }

  public get backgroundPosition(): string {
    return this._style.backgroundPosition;
  }

  public set backgroundPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundPosition", value);
    else this._style.backgroundPosition = value as any;
  }

  public get backgroundPositionX(): string {
    return this._style.backgroundPositionX;
  }

  public set backgroundPositionX(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundPositionX", value);
    else this._style.backgroundPositionX = value as any;
  }

  public get backgroundPositionY(): string {
    return this._style.backgroundPositionY;
  }

  public set backgroundPositionY(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundPositionY", value);
    else this._style.backgroundPositionY = value as any;
  }

  public get backgroundRepeat(): string {
    return this._style.backgroundRepeat;
  }

  public set backgroundRepeat(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundRepeat", value);
    else this._style.backgroundRepeat = value as any;
  }

  public get backgroundSize(): string {
    return this._style.backgroundSize;
  }

  public set backgroundSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("backgroundSize", value);
    else this._style.backgroundSize = value as any;
  }

  public get baselineShift(): string {
    return this._style.baselineShift;
  }

  public set baselineShift(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("baselineShift", value);
    else this._style.baselineShift = value as any;
  }

  public get blockSize(): string {
    return this._style.blockSize;
  }

  public set blockSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("blockSize", value);
    else this._style.blockSize = value as any;
  }

  public get border(): string {
    return this._style.border;
  }

  public set border(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("border", value);
    else this._style.border = value as any;
  }

  public get borderBlock(): string {
    return this._style.borderBlock;
  }

  public set borderBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlock", value);
    else this._style.borderBlock = value as any;
  }

  public get borderBlockColor(): string {
    return this._style.borderBlockColor;
  }

  public set borderBlockColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockColor", value);
    else this._style.borderBlockColor = value as any;
  }

  public get borderBlockEnd(): string {
    return this._style.borderBlockEnd;
  }

  public set borderBlockEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockEnd", value);
    else this._style.borderBlockEnd = value as any;
  }

  public get borderBlockEndColor(): string {
    return this._style.borderBlockEndColor;
  }

  public set borderBlockEndColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockEndColor", value);
    else this._style.borderBlockEndColor = value as any;
  }

  public get borderBlockEndStyle(): string {
    return this._style.borderBlockEndStyle;
  }

  public set borderBlockEndStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockEndStyle", value);
    else this._style.borderBlockEndStyle = value as any;
  }

  public get borderBlockEndWidth(): string {
    return this._style.borderBlockEndWidth;
  }

  public set borderBlockEndWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockEndWidth", value);
    else this._style.borderBlockEndWidth = value as any;
  }

  public get borderBlockStart(): string {
    return this._style.borderBlockStart;
  }

  public set borderBlockStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockStart", value);
    else this._style.borderBlockStart = value as any;
  }

  public get borderBlockStartColor(): string {
    return this._style.borderBlockStartColor;
  }

  public set borderBlockStartColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockStartColor", value);
    else this._style.borderBlockStartColor = value as any;
  }

  public get borderBlockStartStyle(): string {
    return this._style.borderBlockStartStyle;
  }

  public set borderBlockStartStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockStartStyle", value);
    else this._style.borderBlockStartStyle = value as any;
  }

  public get borderBlockStartWidth(): string {
    return this._style.borderBlockStartWidth;
  }

  public set borderBlockStartWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockStartWidth", value);
    else this._style.borderBlockStartWidth = value as any;
  }

  public get borderBlockStyle(): string {
    return this._style.borderBlockStyle;
  }

  public set borderBlockStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockStyle", value);
    else this._style.borderBlockStyle = value as any;
  }

  public get borderBlockWidth(): string {
    return this._style.borderBlockWidth;
  }

  public set borderBlockWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBlockWidth", value);
    else this._style.borderBlockWidth = value as any;
  }

  public get borderBottom(): string {
    return this._style.borderBottom;
  }

  public set borderBottom(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBottom", value);
    else this._style.borderBottom = value as any;
  }

  public get borderBottomColor(): string {
    return this._style.borderBottomColor;
  }

  public set borderBottomColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBottomColor", value);
    else this._style.borderBottomColor = value as any;
  }

  public get borderBottomLeftRadius(): string {
    return this._style.borderBottomLeftRadius;
  }

  public set borderBottomLeftRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBottomLeftRadius", value);
    else this._style.borderBottomLeftRadius = value as any;
  }

  public get borderBottomRightRadius(): string {
    return this._style.borderBottomRightRadius;
  }

  public set borderBottomRightRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBottomRightRadius", value);
    else this._style.borderBottomRightRadius = value as any;
  }

  public get borderBottomStyle(): string {
    return this._style.borderBottomStyle;
  }

  public set borderBottomStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBottomStyle", value);
    else this._style.borderBottomStyle = value as any;
  }

  public get borderBottomWidth(): string {
    return this._style.borderBottomWidth;
  }

  public set borderBottomWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderBottomWidth", value);
    else this._style.borderBottomWidth = value as any;
  }

  public get borderCollapse(): string {
    return this._style.borderCollapse;
  }

  public set borderCollapse(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderCollapse", value);
    else this._style.borderCollapse = value as any;
  }

  public get borderColor(): string {
    return this._style.borderColor;
  }

  public set borderColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderColor", value);
    else this._style.borderColor = value as any;
  }

  public get borderEndEndRadius(): string {
    return this._style.borderEndEndRadius;
  }

  public set borderEndEndRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderEndEndRadius", value);
    else this._style.borderEndEndRadius = value as any;
  }

  public get borderEndStartRadius(): string {
    return this._style.borderEndStartRadius;
  }

  public set borderEndStartRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderEndStartRadius", value);
    else this._style.borderEndStartRadius = value as any;
  }

  public get borderImage(): string {
    return this._style.borderImage;
  }

  public set borderImage(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderImage", value);
    else this._style.borderImage = value as any;
  }

  public get borderImageOutset(): string {
    return this._style.borderImageOutset;
  }

  public set borderImageOutset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderImageOutset", value);
    else this._style.borderImageOutset = value as any;
  }

  public get borderImageRepeat(): string {
    return this._style.borderImageRepeat;
  }

  public set borderImageRepeat(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderImageRepeat", value);
    else this._style.borderImageRepeat = value as any;
  }

  public get borderImageSlice(): string {
    return this._style.borderImageSlice;
  }

  public set borderImageSlice(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderImageSlice", value);
    else this._style.borderImageSlice = value as any;
  }

  public get borderImageSource(): string {
    return this._style.borderImageSource;
  }

  public set borderImageSource(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderImageSource", value);
    else this._style.borderImageSource = value as any;
  }

  public get borderImageWidth(): string {
    return this._style.borderImageWidth;
  }

  public set borderImageWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderImageWidth", value);
    else this._style.borderImageWidth = value as any;
  }

  public get borderInline(): string {
    return this._style.borderInline;
  }

  public set borderInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInline", value);
    else this._style.borderInline = value as any;
  }

  public get borderInlineColor(): string {
    return this._style.borderInlineColor;
  }

  public set borderInlineColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineColor", value);
    else this._style.borderInlineColor = value as any;
  }

  public get borderInlineEnd(): string {
    return this._style.borderInlineEnd;
  }

  public set borderInlineEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineEnd", value);
    else this._style.borderInlineEnd = value as any;
  }

  public get borderInlineEndColor(): string {
    return this._style.borderInlineEndColor;
  }

  public set borderInlineEndColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineEndColor", value);
    else this._style.borderInlineEndColor = value as any;
  }

  public get borderInlineEndStyle(): string {
    return this._style.borderInlineEndStyle;
  }

  public set borderInlineEndStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineEndStyle", value);
    else this._style.borderInlineEndStyle = value as any;
  }

  public get borderInlineEndWidth(): string {
    return this._style.borderInlineEndWidth;
  }

  public set borderInlineEndWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineEndWidth", value);
    else this._style.borderInlineEndWidth = value as any;
  }

  public get borderInlineStart(): string {
    return this._style.borderInlineStart;
  }

  public set borderInlineStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineStart", value);
    else this._style.borderInlineStart = value as any;
  }

  public get borderInlineStartColor(): string {
    return this._style.borderInlineStartColor;
  }

  public set borderInlineStartColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineStartColor", value);
    else this._style.borderInlineStartColor = value as any;
  }

  public get borderInlineStartStyle(): string {
    return this._style.borderInlineStartStyle;
  }

  public set borderInlineStartStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineStartStyle", value);
    else this._style.borderInlineStartStyle = value as any;
  }

  public get borderInlineStartWidth(): string {
    return this._style.borderInlineStartWidth;
  }

  public set borderInlineStartWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineStartWidth", value);
    else this._style.borderInlineStartWidth = value as any;
  }

  public get borderInlineStyle(): string {
    return this._style.borderInlineStyle;
  }

  public set borderInlineStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineStyle", value);
    else this._style.borderInlineStyle = value as any;
  }

  public get borderInlineWidth(): string {
    return this._style.borderInlineWidth;
  }

  public set borderInlineWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderInlineWidth", value);
    else this._style.borderInlineWidth = value as any;
  }

  public get borderLeft(): string {
    return this._style.borderLeft;
  }

  public set borderLeft(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderLeft", value);
    else this._style.borderLeft = value as any;
  }

  public get borderLeftColor(): string {
    return this._style.borderLeftColor;
  }

  public set borderLeftColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderLeftColor", value);
    else this._style.borderLeftColor = value as any;
  }

  public get borderLeftStyle(): string {
    return this._style.borderLeftStyle;
  }

  public set borderLeftStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderLeftStyle", value);
    else this._style.borderLeftStyle = value as any;
  }

  public get borderLeftWidth(): string {
    return this._style.borderLeftWidth;
  }

  public set borderLeftWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderLeftWidth", value);
    else this._style.borderLeftWidth = value as any;
  }

  public get borderRadius(): string {
    return this._style.borderRadius;
  }

  public set borderRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderRadius", value);
    else this._style.borderRadius = value as any;
  }

  public get borderRight(): string {
    return this._style.borderRight;
  }

  public set borderRight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderRight", value);
    else this._style.borderRight = value as any;
  }

  public get borderRightColor(): string {
    return this._style.borderRightColor;
  }

  public set borderRightColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderRightColor", value);
    else this._style.borderRightColor = value as any;
  }

  public get borderRightStyle(): string {
    return this._style.borderRightStyle;
  }

  public set borderRightStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderRightStyle", value);
    else this._style.borderRightStyle = value as any;
  }

  public get borderRightWidth(): string {
    return this._style.borderRightWidth;
  }

  public set borderRightWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderRightWidth", value);
    else this._style.borderRightWidth = value as any;
  }

  public get borderSpacing(): string {
    return this._style.borderSpacing;
  }

  public set borderSpacing(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderSpacing", value);
    else this._style.borderSpacing = value as any;
  }

  public get borderStartEndRadius(): string {
    return this._style.borderStartEndRadius;
  }

  public set borderStartEndRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderStartEndRadius", value);
    else this._style.borderStartEndRadius = value as any;
  }

  public get borderStartStartRadius(): string {
    return this._style.borderStartStartRadius;
  }

  public set borderStartStartRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderStartStartRadius", value);
    else this._style.borderStartStartRadius = value as any;
  }

  public get borderStyle(): string {
    return this._style.borderStyle;
  }

  public set borderStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderStyle", value);
    else this._style.borderStyle = value as any;
  }

  public get borderTop(): string {
    return this._style.borderTop;
  }

  public set borderTop(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderTop", value);
    else this._style.borderTop = value as any;
  }

  public get borderTopColor(): string {
    return this._style.borderTopColor;
  }

  public set borderTopColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderTopColor", value);
    else this._style.borderTopColor = value as any;
  }

  public get borderTopLeftRadius(): string {
    return this._style.borderTopLeftRadius;
  }

  public set borderTopLeftRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderTopLeftRadius", value);
    else this._style.borderTopLeftRadius = value as any;
  }

  public get borderTopRightRadius(): string {
    return this._style.borderTopRightRadius;
  }

  public set borderTopRightRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderTopRightRadius", value);
    else this._style.borderTopRightRadius = value as any;
  }

  public get borderTopStyle(): string {
    return this._style.borderTopStyle;
  }

  public set borderTopStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderTopStyle", value);
    else this._style.borderTopStyle = value as any;
  }

  public get borderTopWidth(): string {
    return this._style.borderTopWidth;
  }

  public set borderTopWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderTopWidth", value);
    else this._style.borderTopWidth = value as any;
  }

  public get borderWidth(): string {
    return this._style.borderWidth;
  }

  public set borderWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("borderWidth", value);
    else this._style.borderWidth = value as any;
  }

  public get bottom(): string {
    return this._style.bottom;
  }

  public set bottom(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("bottom", value);
    else this._style.bottom = value as any;
  }

  public get boxShadow(): string {
    return this._style.boxShadow;
  }

  public set boxShadow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("boxShadow", value);
    else this._style.boxShadow = value as any;
  }

  public get boxSizing(): string {
    return this._style.boxSizing;
  }

  public set boxSizing(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("boxSizing", value);
    else this._style.boxSizing = value as any;
  }

  public get breakAfter(): string {
    return this._style.breakAfter;
  }

  public set breakAfter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("breakAfter", value);
    else this._style.breakAfter = value as any;
  }

  public get breakBefore(): string {
    return this._style.breakBefore;
  }

  public set breakBefore(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("breakBefore", value);
    else this._style.breakBefore = value as any;
  }

  public get breakInside(): string {
    return this._style.breakInside;
  }

  public set breakInside(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("breakInside", value);
    else this._style.breakInside = value as any;
  }

  public get captionSide(): string {
    return this._style.captionSide;
  }

  public set captionSide(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("captionSide", value);
    else this._style.captionSide = value as any;
  }

  public get caretColor(): string {
    return this._style.caretColor;
  }

  public set caretColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("caretColor", value);
    else this._style.caretColor = value as any;
  }

  public get clear(): string {
    return this._style.clear;
  }

  public set clear(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("clear", value);
    else this._style.clear = value as any;
  }

  public get clip(): string {
    return this._style.clip;
  }

  public set clip(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("clip", value);
    else this._style.clip = value as any;
  }

  public get clipPath(): string {
    return this._style.clipPath;
  }

  public set clipPath(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("clipPath", value);
    else this._style.clipPath = value as any;
  }

  public get clipRule(): string {
    return this._style.clipRule;
  }

  public set clipRule(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("clipRule", value);
    else this._style.clipRule = value as any;
  }

  public get color(): string {
    return this._style.color;
  }

  public set color(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("color", value);
    else this._style.color = value as any;
  }

  public get colorInterpolation(): string {
    return this._style.colorInterpolation;
  }

  public set colorInterpolation(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("colorInterpolation", value);
    else this._style.colorInterpolation = value as any;
  }

  public get colorInterpolationFilters(): string {
    return this._style.colorInterpolationFilters;
  }

  public set colorInterpolationFilters(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("colorInterpolationFilters", value);
    else this._style.colorInterpolationFilters = value as any;
  }

  public get colorScheme(): string {
    return this._style.colorScheme;
  }

  public set colorScheme(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("colorScheme", value);
    else this._style.colorScheme = value as any;
  }

  public get columnCount(): string {
    return this._style.columnCount;
  }

  public set columnCount(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnCount", value);
    else this._style.columnCount = value as any;
  }

  public get columnFill(): string {
    return this._style.columnFill;
  }

  public set columnFill(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnFill", value);
    else this._style.columnFill = value as any;
  }

  public get columnGap(): string {
    return this._style.columnGap;
  }

  public set columnGap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnGap", value);
    else this._style.columnGap = value as any;
  }

  public get columnRule(): string {
    return this._style.columnRule;
  }

  public set columnRule(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnRule", value);
    else this._style.columnRule = value as any;
  }

  public get columnRuleColor(): string {
    return this._style.columnRuleColor;
  }

  public set columnRuleColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnRuleColor", value);
    else this._style.columnRuleColor = value as any;
  }

  public get columnRuleStyle(): string {
    return this._style.columnRuleStyle;
  }

  public set columnRuleStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnRuleStyle", value);
    else this._style.columnRuleStyle = value as any;
  }

  public get columnRuleWidth(): string {
    return this._style.columnRuleWidth;
  }

  public set columnRuleWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnRuleWidth", value);
    else this._style.columnRuleWidth = value as any;
  }

  public get columnSpan(): string {
    return this._style.columnSpan;
  }

  public set columnSpan(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnSpan", value);
    else this._style.columnSpan = value as any;
  }

  public get columnWidth(): string {
    return this._style.columnWidth;
  }

  public set columnWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columnWidth", value);
    else this._style.columnWidth = value as any;
  }

  public get columns(): string {
    return this._style.columns;
  }

  public set columns(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("columns", value);
    else this._style.columns = value as any;
  }

  public get contain(): string {
    return this._style.contain;
  }

  public set contain(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("contain", value);
    else this._style.contain = value as any;
  }

  public get containIntrinsicBlockSize(): string {
    return this._style.containIntrinsicBlockSize;
  }

  public set containIntrinsicBlockSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containIntrinsicBlockSize", value);
    else this._style.containIntrinsicBlockSize = value as any;
  }

  public get containIntrinsicHeight(): string {
    return this._style.containIntrinsicHeight;
  }

  public set containIntrinsicHeight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containIntrinsicHeight", value);
    else this._style.containIntrinsicHeight = value as any;
  }

  public get containIntrinsicInlineSize(): string {
    return this._style.containIntrinsicInlineSize;
  }

  public set containIntrinsicInlineSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containIntrinsicInlineSize", value);
    else this._style.containIntrinsicInlineSize = value as any;
  }

  public get containIntrinsicSize(): string {
    return this._style.containIntrinsicSize;
  }

  public set containIntrinsicSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containIntrinsicSize", value);
    else this._style.containIntrinsicSize = value as any;
  }

  public get containIntrinsicWidth(): string {
    return this._style.containIntrinsicWidth;
  }

  public set containIntrinsicWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containIntrinsicWidth", value);
    else this._style.containIntrinsicWidth = value as any;
  }

  public get container(): string {
    return this._style.container;
  }

  public set container(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("container", value);
    else this._style.container = value as any;
  }

  public get containerName(): string {
    return this._style.containerName;
  }

  public set containerName(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containerName", value);
    else this._style.containerName = value as any;
  }

  public get containerType(): string {
    return this._style.containerType;
  }

  public set containerType(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("containerType", value);
    else this._style.containerType = value as any;
  }

  public get content(): string {
    return this._style.content;
  }

  public set content(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("content", value);
    else this._style.content = value as any;
  }

  public get counterIncrement(): string {
    return this._style.counterIncrement;
  }

  public set counterIncrement(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("counterIncrement", value);
    else this._style.counterIncrement = value as any;
  }

  public get counterReset(): string {
    return this._style.counterReset;
  }

  public set counterReset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("counterReset", value);
    else this._style.counterReset = value as any;
  }

  public get counterSet(): string {
    return this._style.counterSet;
  }

  public set counterSet(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("counterSet", value);
    else this._style.counterSet = value as any;
  }

  public get cssFloat(): string {
    return this._style.cssFloat;
  }

  public set cssFloat(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("cssFloat", value);
    else this._style.cssFloat = value as any;
  }

  public get cssText(): string {
    return this._style.cssText;
  }

  public set cssText(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("cssText", value);
    else this._style.cssText = value as any;
  }

  public get cursor(): string {
    return this._style.cursor;
  }

  public set cursor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("cursor", value);
    else this._style.cursor = value as any;
  }

  public get direction(): string {
    return this._style.direction;
  }

  public set direction(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("direction", value);
    else this._style.direction = value as any;
  }

  public get display(): string {
    return this._style.display;
  }

  public set display(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("display", value);
    else this._style.display = value as any;
  }

  public get dominantBaseline(): string {
    return this._style.dominantBaseline;
  }

  public set dominantBaseline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("dominantBaseline", value);
    else this._style.dominantBaseline = value as any;
  }

  public get emptyCells(): string {
    return this._style.emptyCells;
  }

  public set emptyCells(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("emptyCells", value);
    else this._style.emptyCells = value as any;
  }

  public get fill(): string {
    return this._style.fill;
  }

  public set fill(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fill", value);
    else this._style.fill = value as any;
  }

  public get fillOpacity(): string {
    return this._style.fillOpacity;
  }

  public set fillOpacity(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fillOpacity", value);
    else this._style.fillOpacity = value as any;
  }

  public get fillRule(): string {
    return this._style.fillRule;
  }

  public set fillRule(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fillRule", value);
    else this._style.fillRule = value as any;
  }

  public get filter(): string {
    return this._style.filter;
  }

  public set filter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("filter", value);
    else this._style.filter = value as any;
  }

  public get flex(): string {
    return this._style.flex;
  }

  public set flex(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flex", value);
    else this._style.flex = value as any;
  }

  public get flexBasis(): string {
    return this._style.flexBasis;
  }

  public set flexBasis(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flexBasis", value);
    else this._style.flexBasis = value as any;
  }

  public get flexDirection(): string {
    return this._style.flexDirection;
  }

  public set flexDirection(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flexDirection", value);
    else this._style.flexDirection = value as any;
  }

  public get flexFlow(): string {
    return this._style.flexFlow;
  }

  public set flexFlow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flexFlow", value);
    else this._style.flexFlow = value as any;
  }

  public get flexGrow(): string {
    return this._style.flexGrow;
  }

  public set flexGrow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flexGrow", value);
    else this._style.flexGrow = value as any;
  }

  public get flexShrink(): string {
    return this._style.flexShrink;
  }

  public set flexShrink(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flexShrink", value);
    else this._style.flexShrink = value as any;
  }

  public get flexWrap(): string {
    return this._style.flexWrap;
  }

  public set flexWrap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("flexWrap", value);
    else this._style.flexWrap = value as any;
  }

  public get float(): string {
    return this._style.float;
  }

  public set float(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("float", value);
    else this._style.float = value as any;
  }

  public get floodColor(): string {
    return this._style.floodColor;
  }

  public set floodColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("floodColor", value);
    else this._style.floodColor = value as any;
  }

  public get floodOpacity(): string {
    return this._style.floodOpacity;
  }

  public set floodOpacity(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("floodOpacity", value);
    else this._style.floodOpacity = value as any;
  }

  public get font(): string {
    return this._style.font;
  }

  public set font(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("font", value);
    else this._style.font = value as any;
  }

  public get fontFamily(): string {
    return this._style.fontFamily;
  }

  public set fontFamily(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontFamily", value);
    else this._style.fontFamily = value as any;
  }

  public get fontFeatureSettings(): string {
    return this._style.fontFeatureSettings;
  }

  public set fontFeatureSettings(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontFeatureSettings", value);
    else this._style.fontFeatureSettings = value as any;
  }

  public get fontKerning(): string {
    return this._style.fontKerning;
  }

  public set fontKerning(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontKerning", value);
    else this._style.fontKerning = value as any;
  }

  public get fontOpticalSizing(): string {
    return this._style.fontOpticalSizing;
  }

  public set fontOpticalSizing(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontOpticalSizing", value);
    else this._style.fontOpticalSizing = value as any;
  }

  public get fontPalette(): string {
    return this._style.fontPalette;
  }

  public set fontPalette(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontPalette", value);
    else this._style.fontPalette = value as any;
  }

  public get fontSize(): string {
    return this._style.fontSize;
  }

  public set fontSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontSize", value);
    else this._style.fontSize = value as any;
  }

  public get fontSizeAdjust(): string {
    return this._style.fontSizeAdjust;
  }

  public set fontSizeAdjust(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontSizeAdjust", value);
    else this._style.fontSizeAdjust = value as any;
  }

  public get fontStretch(): string {
    return this._style.fontStretch;
  }

  public set fontStretch(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontStretch", value);
    else this._style.fontStretch = value as any;
  }

  public get fontStyle(): string {
    return this._style.fontStyle;
  }

  public set fontStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontStyle", value);
    else this._style.fontStyle = value as any;
  }

  public get fontSynthesis(): string {
    return this._style.fontSynthesis;
  }

  public set fontSynthesis(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontSynthesis", value);
    else this._style.fontSynthesis = value as any;
  }

  public get fontSynthesisSmallCaps(): string {
    return this._style.fontSynthesisSmallCaps;
  }

  public set fontSynthesisSmallCaps(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontSynthesisSmallCaps", value);
    else this._style.fontSynthesisSmallCaps = value as any;
  }

  public get fontSynthesisStyle(): string {
    return this._style.fontSynthesisStyle;
  }

  public set fontSynthesisStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontSynthesisStyle", value);
    else this._style.fontSynthesisStyle = value as any;
  }

  public get fontSynthesisWeight(): string {
    return this._style.fontSynthesisWeight;
  }

  public set fontSynthesisWeight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontSynthesisWeight", value);
    else this._style.fontSynthesisWeight = value as any;
  }

  public get fontVariant(): string {
    return this._style.fontVariant;
  }

  public set fontVariant(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariant", value);
    else this._style.fontVariant = value as any;
  }

  public get fontVariantAlternates(): string {
    return this._style.fontVariantAlternates;
  }

  public set fontVariantAlternates(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariantAlternates", value);
    else this._style.fontVariantAlternates = value as any;
  }

  public get fontVariantCaps(): string {
    return this._style.fontVariantCaps;
  }

  public set fontVariantCaps(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariantCaps", value);
    else this._style.fontVariantCaps = value as any;
  }

  public get fontVariantEastAsian(): string {
    return this._style.fontVariantEastAsian;
  }

  public set fontVariantEastAsian(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariantEastAsian", value);
    else this._style.fontVariantEastAsian = value as any;
  }

  public get fontVariantLigatures(): string {
    return this._style.fontVariantLigatures;
  }

  public set fontVariantLigatures(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariantLigatures", value);
    else this._style.fontVariantLigatures = value as any;
  }

  public get fontVariantNumeric(): string {
    return this._style.fontVariantNumeric;
  }

  public set fontVariantNumeric(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariantNumeric", value);
    else this._style.fontVariantNumeric = value as any;
  }

  public get fontVariantPosition(): string {
    return this._style.fontVariantPosition;
  }

  public set fontVariantPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariantPosition", value);
    else this._style.fontVariantPosition = value as any;
  }

  public get fontVariationSettings(): string {
    return this._style.fontVariationSettings;
  }

  public set fontVariationSettings(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontVariationSettings", value);
    else this._style.fontVariationSettings = value as any;
  }

  public get fontWeight(): string {
    return this._style.fontWeight;
  }

  public set fontWeight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("fontWeight", value);
    else this._style.fontWeight = value as any;
  }

  public get forcedColorAdjust(): string {
    return this._style.forcedColorAdjust;
  }

  public set forcedColorAdjust(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("forcedColorAdjust", value);
    else this._style.forcedColorAdjust = value as any;
  }

  public get gap(): string {
    return this._style.gap;
  }

  public set gap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gap", value);
    else this._style.gap = value as any;
  }

  public get grid(): string {
    return this._style.grid;
  }

  public set grid(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("grid", value);
    else this._style.grid = value as any;
  }

  public get gridArea(): string {
    return this._style.gridArea;
  }

  public set gridArea(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridArea", value);
    else this._style.gridArea = value as any;
  }

  public get gridAutoColumns(): string {
    return this._style.gridAutoColumns;
  }

  public set gridAutoColumns(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridAutoColumns", value);
    else this._style.gridAutoColumns = value as any;
  }

  public get gridAutoFlow(): string {
    return this._style.gridAutoFlow;
  }

  public set gridAutoFlow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridAutoFlow", value);
    else this._style.gridAutoFlow = value as any;
  }

  public get gridAutoRows(): string {
    return this._style.gridAutoRows;
  }

  public set gridAutoRows(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridAutoRows", value);
    else this._style.gridAutoRows = value as any;
  }

  public get gridColumn(): string {
    return this._style.gridColumn;
  }

  public set gridColumn(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridColumn", value);
    else this._style.gridColumn = value as any;
  }

  public get gridColumnEnd(): string {
    return this._style.gridColumnEnd;
  }

  public set gridColumnEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridColumnEnd", value);
    else this._style.gridColumnEnd = value as any;
  }

  public get gridColumnGap(): string {
    return this._style.gridColumnGap;
  }

  public set gridColumnGap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridColumnGap", value);
    else this._style.gridColumnGap = value as any;
  }

  public get gridColumnStart(): string {
    return this._style.gridColumnStart;
  }

  public set gridColumnStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridColumnStart", value);
    else this._style.gridColumnStart = value as any;
  }

  public get gridGap(): string {
    return this._style.gridGap;
  }

  public set gridGap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridGap", value);
    else this._style.gridGap = value as any;
  }

  public get gridRow(): string {
    return this._style.gridRow;
  }

  public set gridRow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridRow", value);
    else this._style.gridRow = value as any;
  }

  public get gridRowEnd(): string {
    return this._style.gridRowEnd;
  }

  public set gridRowEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridRowEnd", value);
    else this._style.gridRowEnd = value as any;
  }

  public get gridRowGap(): string {
    return this._style.gridRowGap;
  }

  public set gridRowGap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridRowGap", value);
    else this._style.gridRowGap = value as any;
  }

  public get gridRowStart(): string {
    return this._style.gridRowStart;
  }

  public set gridRowStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridRowStart", value);
    else this._style.gridRowStart = value as any;
  }

  public get gridTemplate(): string {
    return this._style.gridTemplate;
  }

  public set gridTemplate(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridTemplate", value);
    else this._style.gridTemplate = value as any;
  }

  public get gridTemplateAreas(): string {
    return this._style.gridTemplateAreas;
  }

  public set gridTemplateAreas(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridTemplateAreas", value);
    else this._style.gridTemplateAreas = value as any;
  }

  public get gridTemplateColumns(): string {
    return this._style.gridTemplateColumns;
  }

  public set gridTemplateColumns(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridTemplateColumns", value);
    else this._style.gridTemplateColumns = value as any;
  }

  public get gridTemplateRows(): string {
    return this._style.gridTemplateRows;
  }

  public set gridTemplateRows(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("gridTemplateRows", value);
    else this._style.gridTemplateRows = value as any;
  }

  public get height(): string {
    return this._style.height;
  }

  public set height(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("height", value);
    else this._style.height = value as any;
  }

  public get hyphenateCharacter(): string {
    return this._style.hyphenateCharacter;
  }

  public set hyphenateCharacter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("hyphenateCharacter", value);
    else this._style.hyphenateCharacter = value as any;
  }

  public get hyphens(): string {
    return this._style.hyphens;
  }

  public set hyphens(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("hyphens", value);
    else this._style.hyphens = value as any;
  }

  public get imageOrientation(): string {
    return this._style.imageOrientation;
  }

  public set imageOrientation(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("imageOrientation", value);
    else this._style.imageOrientation = value as any;
  }

  public get imageRendering(): string {
    return this._style.imageRendering;
  }

  public set imageRendering(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("imageRendering", value);
    else this._style.imageRendering = value as any;
  }

  public get inlineSize(): string {
    return this._style.inlineSize;
  }

  public set inlineSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("inlineSize", value);
    else this._style.inlineSize = value as any;
  }

  public get inset(): string {
    return this._style.inset;
  }

  public set inset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("inset", value);
    else this._style.inset = value as any;
  }

  public get insetBlock(): string {
    return this._style.insetBlock;
  }

  public set insetBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("insetBlock", value);
    else this._style.insetBlock = value as any;
  }

  public get insetBlockEnd(): string {
    return this._style.insetBlockEnd;
  }

  public set insetBlockEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("insetBlockEnd", value);
    else this._style.insetBlockEnd = value as any;
  }

  public get insetBlockStart(): string {
    return this._style.insetBlockStart;
  }

  public set insetBlockStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("insetBlockStart", value);
    else this._style.insetBlockStart = value as any;
  }

  public get insetInline(): string {
    return this._style.insetInline;
  }

  public set insetInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("insetInline", value);
    else this._style.insetInline = value as any;
  }

  public get insetInlineEnd(): string {
    return this._style.insetInlineEnd;
  }

  public set insetInlineEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("insetInlineEnd", value);
    else this._style.insetInlineEnd = value as any;
  }

  public get insetInlineStart(): string {
    return this._style.insetInlineStart;
  }

  public set insetInlineStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("insetInlineStart", value);
    else this._style.insetInlineStart = value as any;
  }

  public get isolation(): string {
    return this._style.isolation;
  }

  public set isolation(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("isolation", value);
    else this._style.isolation = value as any;
  }

  public get justifyContent(): string {
    return this._style.justifyContent;
  }

  public set justifyContent(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("justifyContent", value);
    else this._style.justifyContent = value as any;
  }

  public get justifyItems(): string {
    return this._style.justifyItems;
  }

  public set justifyItems(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("justifyItems", value);
    else this._style.justifyItems = value as any;
  }

  public get justifySelf(): string {
    return this._style.justifySelf;
  }

  public set justifySelf(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("justifySelf", value);
    else this._style.justifySelf = value as any;
  }

  public get left(): string {
    return this._style.left;
  }

  public set left(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("left", value);
    else this._style.left = value as any;
  }

  public get length(): number {
    return this._style.length;
  }

  public get letterSpacing(): string {
    return this._style.letterSpacing;
  }

  public set letterSpacing(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("letterSpacing", value);
    else this._style.letterSpacing = value as any;
  }

  public get lightingColor(): string {
    return this._style.lightingColor;
  }

  public set lightingColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("lightingColor", value);
    else this._style.lightingColor = value as any;
  }

  public get lineBreak(): string {
    return this._style.lineBreak;
  }

  public set lineBreak(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("lineBreak", value);
    else this._style.lineBreak = value as any;
  }

  public get lineHeight(): string {
    return this._style.lineHeight;
  }

  public set lineHeight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("lineHeight", value);
    else this._style.lineHeight = value as any;
  }

  public get listStyle(): string {
    return this._style.listStyle;
  }

  public set listStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("listStyle", value);
    else this._style.listStyle = value as any;
  }

  public get listStyleImage(): string {
    return this._style.listStyleImage;
  }

  public set listStyleImage(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("listStyleImage", value);
    else this._style.listStyleImage = value as any;
  }

  public get listStylePosition(): string {
    return this._style.listStylePosition;
  }

  public set listStylePosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("listStylePosition", value);
    else this._style.listStylePosition = value as any;
  }

  public get listStyleType(): string {
    return this._style.listStyleType;
  }

  public set listStyleType(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("listStyleType", value);
    else this._style.listStyleType = value as any;
  }

  public get margin(): string {
    return this._style.margin;
  }

  public set margin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("margin", value);
    else this._style.margin = value as any;
  }

  public get marginBlock(): string {
    return this._style.marginBlock;
  }

  public set marginBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginBlock", value);
    else this._style.marginBlock = value as any;
  }

  public get marginBlockEnd(): string {
    return this._style.marginBlockEnd;
  }

  public set marginBlockEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginBlockEnd", value);
    else this._style.marginBlockEnd = value as any;
  }

  public get marginBlockStart(): string {
    return this._style.marginBlockStart;
  }

  public set marginBlockStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginBlockStart", value);
    else this._style.marginBlockStart = value as any;
  }

  public get marginBottom(): string {
    return this._style.marginBottom;
  }

  public set marginBottom(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginBottom", value);
    else this._style.marginBottom = value as any;
  }

  public get marginInline(): string {
    return this._style.marginInline;
  }

  public set marginInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginInline", value);
    else this._style.marginInline = value as any;
  }

  public get marginInlineEnd(): string {
    return this._style.marginInlineEnd;
  }

  public set marginInlineEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginInlineEnd", value);
    else this._style.marginInlineEnd = value as any;
  }

  public get marginInlineStart(): string {
    return this._style.marginInlineStart;
  }

  public set marginInlineStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginInlineStart", value);
    else this._style.marginInlineStart = value as any;
  }

  public get marginLeft(): string {
    return this._style.marginLeft;
  }

  public set marginLeft(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginLeft", value);
    else this._style.marginLeft = value as any;
  }

  public get marginRight(): string {
    return this._style.marginRight;
  }

  public set marginRight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginRight", value);
    else this._style.marginRight = value as any;
  }

  public get marginTop(): string {
    return this._style.marginTop;
  }

  public set marginTop(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marginTop", value);
    else this._style.marginTop = value as any;
  }

  public get marker(): string {
    return this._style.marker;
  }

  public set marker(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("marker", value);
    else this._style.marker = value as any;
  }

  public get markerEnd(): string {
    return this._style.markerEnd;
  }

  public set markerEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("markerEnd", value);
    else this._style.markerEnd = value as any;
  }

  public get markerMid(): string {
    return this._style.markerMid;
  }

  public set markerMid(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("markerMid", value);
    else this._style.markerMid = value as any;
  }

  public get markerStart(): string {
    return this._style.markerStart;
  }

  public set markerStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("markerStart", value);
    else this._style.markerStart = value as any;
  }

  public get mask(): string {
    return this._style.mask;
  }

  public set mask(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("mask", value);
    else this._style.mask = value as any;
  }

  public get maskClip(): string {
    return this._style.maskClip;
  }

  public set maskClip(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskClip", value);
    else this._style.maskClip = value as any;
  }

  public get maskComposite(): string {
    return this._style.maskComposite;
  }

  public set maskComposite(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskComposite", value);
    else this._style.maskComposite = value as any;
  }

  public get maskImage(): string {
    return this._style.maskImage;
  }

  public set maskImage(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskImage", value);
    else this._style.maskImage = value as any;
  }

  public get maskMode(): string {
    return this._style.maskMode;
  }

  public set maskMode(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskMode", value);
    else this._style.maskMode = value as any;
  }

  public get maskOrigin(): string {
    return this._style.maskOrigin;
  }

  public set maskOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskOrigin", value);
    else this._style.maskOrigin = value as any;
  }

  public get maskPosition(): string {
    return this._style.maskPosition;
  }

  public set maskPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskPosition", value);
    else this._style.maskPosition = value as any;
  }

  public get maskRepeat(): string {
    return this._style.maskRepeat;
  }

  public set maskRepeat(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskRepeat", value);
    else this._style.maskRepeat = value as any;
  }

  public get maskSize(): string {
    return this._style.maskSize;
  }

  public set maskSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskSize", value);
    else this._style.maskSize = value as any;
  }

  public get maskType(): string {
    return this._style.maskType;
  }

  public set maskType(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maskType", value);
    else this._style.maskType = value as any;
  }

  public get mathStyle(): string {
    return this._style.mathStyle;
  }

  public set mathStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("mathStyle", value);
    else this._style.mathStyle = value as any;
  }

  public get maxBlockSize(): string {
    return this._style.maxBlockSize;
  }

  public set maxBlockSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maxBlockSize", value);
    else this._style.maxBlockSize = value as any;
  }

  public get maxHeight(): string {
    return this._style.maxHeight;
  }

  public set maxHeight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maxHeight", value);
    else this._style.maxHeight = value as any;
  }

  public get maxInlineSize(): string {
    return this._style.maxInlineSize;
  }

  public set maxInlineSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maxInlineSize", value);
    else this._style.maxInlineSize = value as any;
  }

  public get maxWidth(): string {
    return this._style.maxWidth;
  }

  public set maxWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("maxWidth", value);
    else this._style.maxWidth = value as any;
  }

  public get minBlockSize(): string {
    return this._style.minBlockSize;
  }

  public set minBlockSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("minBlockSize", value);
    else this._style.minBlockSize = value as any;
  }

  public get minHeight(): string {
    return this._style.minHeight;
  }

  public set minHeight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("minHeight", value);
    else this._style.minHeight = value as any;
  }

  public get minInlineSize(): string {
    return this._style.minInlineSize;
  }

  public set minInlineSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("minInlineSize", value);
    else this._style.minInlineSize = value as any;
  }

  public get minWidth(): string {
    return this._style.minWidth;
  }

  public set minWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("minWidth", value);
    else this._style.minWidth = value as any;
  }

  public get mixBlendMode(): string {
    return this._style.mixBlendMode;
  }

  public set mixBlendMode(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("mixBlendMode", value);
    else this._style.mixBlendMode = value as any;
  }

  public get objectFit(): string {
    return this._style.objectFit;
  }

  public set objectFit(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("objectFit", value);
    else this._style.objectFit = value as any;
  }

  public get objectPosition(): string {
    return this._style.objectPosition;
  }

  public set objectPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("objectPosition", value);
    else this._style.objectPosition = value as any;
  }

  public get offset(): string {
    return this._style.offset;
  }

  public set offset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("offset", value);
    else this._style.offset = value as any;
  }

  public get offsetDistance(): string {
    return this._style.offsetDistance;
  }

  public set offsetDistance(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("offsetDistance", value);
    else this._style.offsetDistance = value as any;
  }

  public get offsetPath(): string {
    return this._style.offsetPath;
  }

  public set offsetPath(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("offsetPath", value);
    else this._style.offsetPath = value as any;
  }

  public get offsetRotate(): string {
    return this._style.offsetRotate;
  }

  public set offsetRotate(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("offsetRotate", value);
    else this._style.offsetRotate = value as any;
  }

  public get opacity(): string {
    return this._style.opacity;
  }

  public set opacity(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("opacity", value);
    else this._style.opacity = value as any;
  }

  public get order(): string {
    return this._style.order;
  }

  public set order(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("order", value);
    else this._style.order = value as any;
  }

  public get orphans(): string {
    return this._style.orphans;
  }

  public set orphans(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("orphans", value);
    else this._style.orphans = value as any;
  }

  public get outline(): string {
    return this._style.outline;
  }

  public set outline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("outline", value);
    else this._style.outline = value as any;
  }

  public get outlineColor(): string {
    return this._style.outlineColor;
  }

  public set outlineColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("outlineColor", value);
    else this._style.outlineColor = value as any;
  }

  public get outlineOffset(): string {
    return this._style.outlineOffset;
  }

  public set outlineOffset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("outlineOffset", value);
    else this._style.outlineOffset = value as any;
  }

  public get outlineStyle(): string {
    return this._style.outlineStyle;
  }

  public set outlineStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("outlineStyle", value);
    else this._style.outlineStyle = value as any;
  }

  public get outlineWidth(): string {
    return this._style.outlineWidth;
  }

  public set outlineWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("outlineWidth", value);
    else this._style.outlineWidth = value as any;
  }

  public get overflow(): string {
    return this._style.overflow;
  }

  public set overflow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overflow", value);
    else this._style.overflow = value as any;
  }

  public get overflowAnchor(): string {
    return this._style.overflowAnchor;
  }

  public set overflowAnchor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overflowAnchor", value);
    else this._style.overflowAnchor = value as any;
  }

  public get overflowClipMargin(): string {
    return this._style.overflowClipMargin;
  }

  public set overflowClipMargin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overflowClipMargin", value);
    else this._style.overflowClipMargin = value as any;
  }

  public get overflowWrap(): string {
    return this._style.overflowWrap;
  }

  public set overflowWrap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overflowWrap", value);
    else this._style.overflowWrap = value as any;
  }

  public get overflowX(): string {
    return this._style.overflowX;
  }

  public set overflowX(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overflowX", value);
    else this._style.overflowX = value as any;
  }

  public get overflowY(): string {
    return this._style.overflowY;
  }

  public set overflowY(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overflowY", value);
    else this._style.overflowY = value as any;
  }

  public get overscrollBehavior(): string {
    return this._style.overscrollBehavior;
  }

  public set overscrollBehavior(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overscrollBehavior", value);
    else this._style.overscrollBehavior = value as any;
  }

  public get overscrollBehaviorBlock(): string {
    return this._style.overscrollBehaviorBlock;
  }

  public set overscrollBehaviorBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overscrollBehaviorBlock", value);
    else this._style.overscrollBehaviorBlock = value as any;
  }

  public get overscrollBehaviorInline(): string {
    return this._style.overscrollBehaviorInline;
  }

  public set overscrollBehaviorInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overscrollBehaviorInline", value);
    else this._style.overscrollBehaviorInline = value as any;
  }

  public get overscrollBehaviorX(): string {
    return this._style.overscrollBehaviorX;
  }

  public set overscrollBehaviorX(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overscrollBehaviorX", value);
    else this._style.overscrollBehaviorX = value as any;
  }

  public get overscrollBehaviorY(): string {
    return this._style.overscrollBehaviorY;
  }

  public set overscrollBehaviorY(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("overscrollBehaviorY", value);
    else this._style.overscrollBehaviorY = value as any;
  }

  public get padding(): string {
    return this._style.padding;
  }

  public set padding(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("padding", value);
    else this._style.padding = value as any;
  }

  public get paddingBlock(): string {
    return this._style.paddingBlock;
  }

  public set paddingBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingBlock", value);
    else this._style.paddingBlock = value as any;
  }

  public get paddingBlockEnd(): string {
    return this._style.paddingBlockEnd;
  }

  public set paddingBlockEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingBlockEnd", value);
    else this._style.paddingBlockEnd = value as any;
  }

  public get paddingBlockStart(): string {
    return this._style.paddingBlockStart;
  }

  public set paddingBlockStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingBlockStart", value);
    else this._style.paddingBlockStart = value as any;
  }

  public get paddingBottom(): string {
    return this._style.paddingBottom;
  }

  public set paddingBottom(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingBottom", value);
    else this._style.paddingBottom = value as any;
  }

  public get paddingInline(): string {
    return this._style.paddingInline;
  }

  public set paddingInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingInline", value);
    else this._style.paddingInline = value as any;
  }

  public get paddingInlineEnd(): string {
    return this._style.paddingInlineEnd;
  }

  public set paddingInlineEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingInlineEnd", value);
    else this._style.paddingInlineEnd = value as any;
  }

  public get paddingInlineStart(): string {
    return this._style.paddingInlineStart;
  }

  public set paddingInlineStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingInlineStart", value);
    else this._style.paddingInlineStart = value as any;
  }

  public get paddingLeft(): string {
    return this._style.paddingLeft;
  }

  public set paddingLeft(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingLeft", value);
    else this._style.paddingLeft = value as any;
  }

  public get paddingRight(): string {
    return this._style.paddingRight;
  }

  public set paddingRight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingRight", value);
    else this._style.paddingRight = value as any;
  }

  public get paddingTop(): string {
    return this._style.paddingTop;
  }

  public set paddingTop(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paddingTop", value);
    else this._style.paddingTop = value as any;
  }

  public get page(): string {
    return this._style.page;
  }

  public set page(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("page", value);
    else this._style.page = value as any;
  }

  public get pageBreakAfter(): string {
    return this._style.pageBreakAfter;
  }

  public set pageBreakAfter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("pageBreakAfter", value);
    else this._style.pageBreakAfter = value as any;
  }

  public get pageBreakBefore(): string {
    return this._style.pageBreakBefore;
  }

  public set pageBreakBefore(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("pageBreakBefore", value);
    else this._style.pageBreakBefore = value as any;
  }

  public get pageBreakInside(): string {
    return this._style.pageBreakInside;
  }

  public set pageBreakInside(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("pageBreakInside", value);
    else this._style.pageBreakInside = value as any;
  }

  public get paintOrder(): string {
    return this._style.paintOrder;
  }

  public set paintOrder(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("paintOrder", value);
    else this._style.paintOrder = value as any;
  }

  public get parentRule(): CSSRule | null {
    return this._style.parentRule;
  }

  public get perspective(): string {
    return this._style.perspective;
  }

  public set perspective(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("perspective", value);
    else this._style.perspective = value as any;
  }

  public get perspectiveOrigin(): string {
    return this._style.perspectiveOrigin;
  }

  public set perspectiveOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("perspectiveOrigin", value);
    else this._style.perspectiveOrigin = value as any;
  }

  public get placeContent(): string {
    return this._style.placeContent;
  }

  public set placeContent(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("placeContent", value);
    else this._style.placeContent = value as any;
  }

  public get placeItems(): string {
    return this._style.placeItems;
  }

  public set placeItems(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("placeItems", value);
    else this._style.placeItems = value as any;
  }

  public get placeSelf(): string {
    return this._style.placeSelf;
  }

  public set placeSelf(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("placeSelf", value);
    else this._style.placeSelf = value as any;
  }

  public get pointerEvents(): string {
    return this._style.pointerEvents;
  }

  public set pointerEvents(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("pointerEvents", value);
    else this._style.pointerEvents = value as any;
  }

  public get position(): string {
    return this._style.position;
  }

  public set position(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("position", value);
    else this._style.position = value as any;
  }

  public get printColorAdjust(): string {
    return this._style.printColorAdjust;
  }

  public set printColorAdjust(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("printColorAdjust", value);
    else this._style.printColorAdjust = value as any;
  }

  public get quotes(): string {
    return this._style.quotes;
  }

  public set quotes(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("quotes", value);
    else this._style.quotes = value as any;
  }

  public get resize(): string {
    return this._style.resize;
  }

  public set resize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("resize", value);
    else this._style.resize = value as any;
  }

  public get right(): string {
    return this._style.right;
  }

  public set right(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("right", value);
    else this._style.right = value as any;
  }

  public get rotate(): string {
    return this._style.rotate;
  }

  public set rotate(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("rotate", value);
    else this._style.rotate = value as any;
  }

  public get rowGap(): string {
    return this._style.rowGap;
  }

  public set rowGap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("rowGap", value);
    else this._style.rowGap = value as any;
  }

  public get rubyPosition(): string {
    return this._style.rubyPosition;
  }

  public set rubyPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("rubyPosition", value);
    else this._style.rubyPosition = value as any;
  }

  public get scale(): string {
    return this._style.scale;
  }

  public set scale(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scale", value);
    else this._style.scale = value as any;
  }

  public get scrollBehavior(): string {
    return this._style.scrollBehavior;
  }

  public set scrollBehavior(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollBehavior", value);
    else this._style.scrollBehavior = value as any;
  }

  public get scrollMargin(): string {
    return this._style.scrollMargin;
  }

  public set scrollMargin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMargin", value);
    else this._style.scrollMargin = value as any;
  }

  public get scrollMarginBlock(): string {
    return this._style.scrollMarginBlock;
  }

  public set scrollMarginBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginBlock", value);
    else this._style.scrollMarginBlock = value as any;
  }

  public get scrollMarginBlockEnd(): string {
    return this._style.scrollMarginBlockEnd;
  }

  public set scrollMarginBlockEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginBlockEnd", value);
    else this._style.scrollMarginBlockEnd = value as any;
  }

  public get scrollMarginBlockStart(): string {
    return this._style.scrollMarginBlockStart;
  }

  public set scrollMarginBlockStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginBlockStart", value);
    else this._style.scrollMarginBlockStart = value as any;
  }

  public get scrollMarginBottom(): string {
    return this._style.scrollMarginBottom;
  }

  public set scrollMarginBottom(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginBottom", value);
    else this._style.scrollMarginBottom = value as any;
  }

  public get scrollMarginInline(): string {
    return this._style.scrollMarginInline;
  }

  public set scrollMarginInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginInline", value);
    else this._style.scrollMarginInline = value as any;
  }

  public get scrollMarginInlineEnd(): string {
    return this._style.scrollMarginInlineEnd;
  }

  public set scrollMarginInlineEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginInlineEnd", value);
    else this._style.scrollMarginInlineEnd = value as any;
  }

  public get scrollMarginInlineStart(): string {
    return this._style.scrollMarginInlineStart;
  }

  public set scrollMarginInlineStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginInlineStart", value);
    else this._style.scrollMarginInlineStart = value as any;
  }

  public get scrollMarginLeft(): string {
    return this._style.scrollMarginLeft;
  }

  public set scrollMarginLeft(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginLeft", value);
    else this._style.scrollMarginLeft = value as any;
  }

  public get scrollMarginRight(): string {
    return this._style.scrollMarginRight;
  }

  public set scrollMarginRight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginRight", value);
    else this._style.scrollMarginRight = value as any;
  }

  public get scrollMarginTop(): string {
    return this._style.scrollMarginTop;
  }

  public set scrollMarginTop(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollMarginTop", value);
    else this._style.scrollMarginTop = value as any;
  }

  public get scrollPadding(): string {
    return this._style.scrollPadding;
  }

  public set scrollPadding(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPadding", value);
    else this._style.scrollPadding = value as any;
  }

  public get scrollPaddingBlock(): string {
    return this._style.scrollPaddingBlock;
  }

  public set scrollPaddingBlock(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingBlock", value);
    else this._style.scrollPaddingBlock = value as any;
  }

  public get scrollPaddingBlockEnd(): string {
    return this._style.scrollPaddingBlockEnd;
  }

  public set scrollPaddingBlockEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingBlockEnd", value);
    else this._style.scrollPaddingBlockEnd = value as any;
  }

  public get scrollPaddingBlockStart(): string {
    return this._style.scrollPaddingBlockStart;
  }

  public set scrollPaddingBlockStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingBlockStart", value);
    else this._style.scrollPaddingBlockStart = value as any;
  }

  public get scrollPaddingBottom(): string {
    return this._style.scrollPaddingBottom;
  }

  public set scrollPaddingBottom(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingBottom", value);
    else this._style.scrollPaddingBottom = value as any;
  }

  public get scrollPaddingInline(): string {
    return this._style.scrollPaddingInline;
  }

  public set scrollPaddingInline(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingInline", value);
    else this._style.scrollPaddingInline = value as any;
  }

  public get scrollPaddingInlineEnd(): string {
    return this._style.scrollPaddingInlineEnd;
  }

  public set scrollPaddingInlineEnd(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingInlineEnd", value);
    else this._style.scrollPaddingInlineEnd = value as any;
  }

  public get scrollPaddingInlineStart(): string {
    return this._style.scrollPaddingInlineStart;
  }

  public set scrollPaddingInlineStart(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingInlineStart", value);
    else this._style.scrollPaddingInlineStart = value as any;
  }

  public get scrollPaddingLeft(): string {
    return this._style.scrollPaddingLeft;
  }

  public set scrollPaddingLeft(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingLeft", value);
    else this._style.scrollPaddingLeft = value as any;
  }

  public get scrollPaddingRight(): string {
    return this._style.scrollPaddingRight;
  }

  public set scrollPaddingRight(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingRight", value);
    else this._style.scrollPaddingRight = value as any;
  }

  public get scrollPaddingTop(): string {
    return this._style.scrollPaddingTop;
  }

  public set scrollPaddingTop(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollPaddingTop", value);
    else this._style.scrollPaddingTop = value as any;
  }

  public get scrollSnapAlign(): string {
    return this._style.scrollSnapAlign;
  }

  public set scrollSnapAlign(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollSnapAlign", value);
    else this._style.scrollSnapAlign = value as any;
  }

  public get scrollSnapStop(): string {
    return this._style.scrollSnapStop;
  }

  public set scrollSnapStop(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollSnapStop", value);
    else this._style.scrollSnapStop = value as any;
  }

  public get scrollSnapType(): string {
    return this._style.scrollSnapType;
  }

  public set scrollSnapType(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollSnapType", value);
    else this._style.scrollSnapType = value as any;
  }

  public get scrollbarGutter(): string {
    return this._style.scrollbarGutter;
  }

  public set scrollbarGutter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("scrollbarGutter", value);
    else this._style.scrollbarGutter = value as any;
  }

  public get shapeImageThreshold(): string {
    return this._style.shapeImageThreshold;
  }

  public set shapeImageThreshold(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("shapeImageThreshold", value);
    else this._style.shapeImageThreshold = value as any;
  }

  public get shapeMargin(): string {
    return this._style.shapeMargin;
  }

  public set shapeMargin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("shapeMargin", value);
    else this._style.shapeMargin = value as any;
  }

  public get shapeOutside(): string {
    return this._style.shapeOutside;
  }

  public set shapeOutside(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("shapeOutside", value);
    else this._style.shapeOutside = value as any;
  }

  public get shapeRendering(): string {
    return this._style.shapeRendering;
  }

  public set shapeRendering(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("shapeRendering", value);
    else this._style.shapeRendering = value as any;
  }

  public get stopColor(): string {
    return this._style.stopColor;
  }

  public set stopColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("stopColor", value);
    else this._style.stopColor = value as any;
  }

  public get stopOpacity(): string {
    return this._style.stopOpacity;
  }

  public set stopOpacity(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("stopOpacity", value);
    else this._style.stopOpacity = value as any;
  }

  public get stroke(): string {
    return this._style.stroke;
  }

  public set stroke(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("stroke", value);
    else this._style.stroke = value as any;
  }

  public get strokeDasharray(): string {
    return this._style.strokeDasharray;
  }

  public set strokeDasharray(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeDasharray", value);
    else this._style.strokeDasharray = value as any;
  }

  public get strokeDashoffset(): string {
    return this._style.strokeDashoffset;
  }

  public set strokeDashoffset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeDashoffset", value);
    else this._style.strokeDashoffset = value as any;
  }

  public get strokeLinecap(): string {
    return this._style.strokeLinecap;
  }

  public set strokeLinecap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeLinecap", value);
    else this._style.strokeLinecap = value as any;
  }

  public get strokeLinejoin(): string {
    return this._style.strokeLinejoin;
  }

  public set strokeLinejoin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeLinejoin", value);
    else this._style.strokeLinejoin = value as any;
  }

  public get strokeMiterlimit(): string {
    return this._style.strokeMiterlimit;
  }

  public set strokeMiterlimit(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeMiterlimit", value);
    else this._style.strokeMiterlimit = value as any;
  }

  public get strokeOpacity(): string {
    return this._style.strokeOpacity;
  }

  public set strokeOpacity(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeOpacity", value);
    else this._style.strokeOpacity = value as any;
  }

  public get strokeWidth(): string {
    return this._style.strokeWidth;
  }

  public set strokeWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("strokeWidth", value);
    else this._style.strokeWidth = value as any;
  }

  public get tabSize(): string {
    return this._style.tabSize;
  }

  public set tabSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("tabSize", value);
    else this._style.tabSize = value as any;
  }

  public get tableLayout(): string {
    return this._style.tableLayout;
  }

  public set tableLayout(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("tableLayout", value);
    else this._style.tableLayout = value as any;
  }

  public get textAlign(): string {
    return this._style.textAlign;
  }

  public set textAlign(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textAlign", value);
    else this._style.textAlign = value as any;
  }

  public get textAlignLast(): string {
    return this._style.textAlignLast;
  }

  public set textAlignLast(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textAlignLast", value);
    else this._style.textAlignLast = value as any;
  }

  public get textAnchor(): string {
    return this._style.textAnchor;
  }

  public set textAnchor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textAnchor", value);
    else this._style.textAnchor = value as any;
  }

  public get textCombineUpright(): string {
    return this._style.textCombineUpright;
  }

  public set textCombineUpright(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textCombineUpright", value);
    else this._style.textCombineUpright = value as any;
  }

  public get textDecoration(): string {
    return this._style.textDecoration;
  }

  public set textDecoration(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textDecoration", value);
    else this._style.textDecoration = value as any;
  }

  public get textDecorationColor(): string {
    return this._style.textDecorationColor;
  }

  public set textDecorationColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textDecorationColor", value);
    else this._style.textDecorationColor = value as any;
  }

  public get textDecorationLine(): string {
    return this._style.textDecorationLine;
  }

  public set textDecorationLine(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textDecorationLine", value);
    else this._style.textDecorationLine = value as any;
  }

  public get textDecorationSkipInk(): string {
    return this._style.textDecorationSkipInk;
  }

  public set textDecorationSkipInk(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textDecorationSkipInk", value);
    else this._style.textDecorationSkipInk = value as any;
  }

  public get textDecorationStyle(): string {
    return this._style.textDecorationStyle;
  }

  public set textDecorationStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textDecorationStyle", value);
    else this._style.textDecorationStyle = value as any;
  }

  public get textDecorationThickness(): string {
    return this._style.textDecorationThickness;
  }

  public set textDecorationThickness(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textDecorationThickness", value);
    else this._style.textDecorationThickness = value as any;
  }

  public get textEmphasis(): string {
    return this._style.textEmphasis;
  }

  public set textEmphasis(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textEmphasis", value);
    else this._style.textEmphasis = value as any;
  }

  public get textEmphasisColor(): string {
    return this._style.textEmphasisColor;
  }

  public set textEmphasisColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textEmphasisColor", value);
    else this._style.textEmphasisColor = value as any;
  }

  public get textEmphasisPosition(): string {
    return this._style.textEmphasisPosition;
  }

  public set textEmphasisPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textEmphasisPosition", value);
    else this._style.textEmphasisPosition = value as any;
  }

  public get textEmphasisStyle(): string {
    return this._style.textEmphasisStyle;
  }

  public set textEmphasisStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textEmphasisStyle", value);
    else this._style.textEmphasisStyle = value as any;
  }

  public get textIndent(): string {
    return this._style.textIndent;
  }

  public set textIndent(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textIndent", value);
    else this._style.textIndent = value as any;
  }

  public get textOrientation(): string {
    return this._style.textOrientation;
  }

  public set textOrientation(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textOrientation", value);
    else this._style.textOrientation = value as any;
  }

  public get textOverflow(): string {
    return this._style.textOverflow;
  }

  public set textOverflow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textOverflow", value);
    else this._style.textOverflow = value as any;
  }

  public get textRendering(): string {
    return this._style.textRendering;
  }

  public set textRendering(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textRendering", value);
    else this._style.textRendering = value as any;
  }

  public get textShadow(): string {
    return this._style.textShadow;
  }

  public set textShadow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textShadow", value);
    else this._style.textShadow = value as any;
  }

  public get textTransform(): string {
    return this._style.textTransform;
  }

  public set textTransform(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textTransform", value);
    else this._style.textTransform = value as any;
  }

  public get textUnderlineOffset(): string {
    return this._style.textUnderlineOffset;
  }

  public set textUnderlineOffset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textUnderlineOffset", value);
    else this._style.textUnderlineOffset = value as any;
  }

  public get textUnderlinePosition(): string {
    return this._style.textUnderlinePosition;
  }

  public set textUnderlinePosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("textUnderlinePosition", value);
    else this._style.textUnderlinePosition = value as any;
  }

  public get top(): string {
    return this._style.top;
  }

  public set top(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("top", value);
    else this._style.top = value as any;
  }

  public get touchAction(): string {
    return this._style.touchAction;
  }

  public set touchAction(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("touchAction", value);
    else this._style.touchAction = value as any;
  }

  public get transform(): string {
    return this._style.transform;
  }

  public set transform(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transform", value);
    else this._style.transform = value as any;
  }

  public get transformBox(): string {
    return this._style.transformBox;
  }

  public set transformBox(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transformBox", value);
    else this._style.transformBox = value as any;
  }

  public get transformOrigin(): string {
    return this._style.transformOrigin;
  }

  public set transformOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transformOrigin", value);
    else this._style.transformOrigin = value as any;
  }

  public get transformStyle(): string {
    return this._style.transformStyle;
  }

  public set transformStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transformStyle", value);
    else this._style.transformStyle = value as any;
  }

  public get transition(): string {
    return this._style.transition;
  }

  public set transition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transition", value);
    else this._style.transition = value as any;
  }

  public get transitionDelay(): string {
    return this._style.transitionDelay;
  }

  public set transitionDelay(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transitionDelay", value);
    else this._style.transitionDelay = value as any;
  }

  public get transitionDuration(): string {
    return this._style.transitionDuration;
  }

  public set transitionDuration(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transitionDuration", value);
    else this._style.transitionDuration = value as any;
  }

  public get transitionProperty(): string {
    return this._style.transitionProperty;
  }

  public set transitionProperty(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transitionProperty", value);
    else this._style.transitionProperty = value as any;
  }

  public get transitionTimingFunction(): string {
    return this._style.transitionTimingFunction;
  }

  public set transitionTimingFunction(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("transitionTimingFunction", value);
    else this._style.transitionTimingFunction = value as any;
  }

  public get translate(): string {
    return this._style.translate;
  }

  public set translate(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("translate", value);
    else this._style.translate = value as any;
  }

  public get unicodeBidi(): string {
    return this._style.unicodeBidi;
  }

  public set unicodeBidi(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("unicodeBidi", value);
    else this._style.unicodeBidi = value as any;
  }

  public get userSelect(): string {
    return this._style.userSelect;
  }

  public set userSelect(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("userSelect", value);
    else this._style.userSelect = value as any;
  }

  public get verticalAlign(): string {
    return this._style.verticalAlign;
  }

  public set verticalAlign(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("verticalAlign", value);
    else this._style.verticalAlign = value as any;
  }

  public get visibility(): string {
    return this._style.visibility;
  }

  public set visibility(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("visibility", value);
    else this._style.visibility = value as any;
  }

  public get webkitAlignContent(): string {
    return this._style.webkitAlignContent;
  }

  public set webkitAlignContent(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAlignContent", value);
    else this._style.webkitAlignContent = value as any;
  }

  public get webkitAlignItems(): string {
    return this._style.webkitAlignItems;
  }

  public set webkitAlignItems(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAlignItems", value);
    else this._style.webkitAlignItems = value as any;
  }

  public get webkitAlignSelf(): string {
    return this._style.webkitAlignSelf;
  }

  public set webkitAlignSelf(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAlignSelf", value);
    else this._style.webkitAlignSelf = value as any;
  }

  public get webkitAnimation(): string {
    return this._style.webkitAnimation;
  }

  public set webkitAnimation(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimation", value);
    else this._style.webkitAnimation = value as any;
  }

  public get webkitAnimationDelay(): string {
    return this._style.webkitAnimationDelay;
  }

  public set webkitAnimationDelay(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationDelay", value);
    else this._style.webkitAnimationDelay = value as any;
  }

  public get webkitAnimationDirection(): string {
    return this._style.webkitAnimationDirection;
  }

  public set webkitAnimationDirection(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationDirection", value);
    else this._style.webkitAnimationDirection = value as any;
  }

  public get webkitAnimationDuration(): string {
    return this._style.webkitAnimationDuration;
  }

  public set webkitAnimationDuration(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationDuration", value);
    else this._style.webkitAnimationDuration = value as any;
  }

  public get webkitAnimationFillMode(): string {
    return this._style.webkitAnimationFillMode;
  }

  public set webkitAnimationFillMode(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationFillMode", value);
    else this._style.webkitAnimationFillMode = value as any;
  }

  public get webkitAnimationIterationCount(): string {
    return this._style.webkitAnimationIterationCount;
  }

  public set webkitAnimationIterationCount(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationIterationCount", value);
    else this._style.webkitAnimationIterationCount = value as any;
  }

  public get webkitAnimationName(): string {
    return this._style.webkitAnimationName;
  }

  public set webkitAnimationName(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationName", value);
    else this._style.webkitAnimationName = value as any;
  }

  public get webkitAnimationPlayState(): string {
    return this._style.webkitAnimationPlayState;
  }

  public set webkitAnimationPlayState(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationPlayState", value);
    else this._style.webkitAnimationPlayState = value as any;
  }

  public get webkitAnimationTimingFunction(): string {
    return this._style.webkitAnimationTimingFunction;
  }

  public set webkitAnimationTimingFunction(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAnimationTimingFunction", value);
    else this._style.webkitAnimationTimingFunction = value as any;
  }

  public get webkitAppearance(): string {
    return this._style.webkitAppearance;
  }

  public set webkitAppearance(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitAppearance", value);
    else this._style.webkitAppearance = value as any;
  }

  public get webkitBackfaceVisibility(): string {
    return this._style.webkitBackfaceVisibility;
  }

  public set webkitBackfaceVisibility(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBackfaceVisibility", value);
    else this._style.webkitBackfaceVisibility = value as any;
  }

  public get webkitBackgroundClip(): string {
    return this._style.webkitBackgroundClip;
  }

  public set webkitBackgroundClip(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBackgroundClip", value);
    else this._style.webkitBackgroundClip = value as any;
  }

  public get webkitBackgroundOrigin(): string {
    return this._style.webkitBackgroundOrigin;
  }

  public set webkitBackgroundOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBackgroundOrigin", value);
    else this._style.webkitBackgroundOrigin = value as any;
  }

  public get webkitBackgroundSize(): string {
    return this._style.webkitBackgroundSize;
  }

  public set webkitBackgroundSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBackgroundSize", value);
    else this._style.webkitBackgroundSize = value as any;
  }

  public get webkitBorderBottomLeftRadius(): string {
    return this._style.webkitBorderBottomLeftRadius;
  }

  public set webkitBorderBottomLeftRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBorderBottomLeftRadius", value);
    else this._style.webkitBorderBottomLeftRadius = value as any;
  }

  public get webkitBorderBottomRightRadius(): string {
    return this._style.webkitBorderBottomRightRadius;
  }

  public set webkitBorderBottomRightRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBorderBottomRightRadius", value);
    else this._style.webkitBorderBottomRightRadius = value as any;
  }

  public get webkitBorderRadius(): string {
    return this._style.webkitBorderRadius;
  }

  public set webkitBorderRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBorderRadius", value);
    else this._style.webkitBorderRadius = value as any;
  }

  public get webkitBorderTopLeftRadius(): string {
    return this._style.webkitBorderTopLeftRadius;
  }

  public set webkitBorderTopLeftRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBorderTopLeftRadius", value);
    else this._style.webkitBorderTopLeftRadius = value as any;
  }

  public get webkitBorderTopRightRadius(): string {
    return this._style.webkitBorderTopRightRadius;
  }

  public set webkitBorderTopRightRadius(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBorderTopRightRadius", value);
    else this._style.webkitBorderTopRightRadius = value as any;
  }

  public get webkitBoxAlign(): string {
    return this._style.webkitBoxAlign;
  }

  public set webkitBoxAlign(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxAlign", value);
    else this._style.webkitBoxAlign = value as any;
  }

  public get webkitBoxFlex(): string {
    return this._style.webkitBoxFlex;
  }

  public set webkitBoxFlex(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxFlex", value);
    else this._style.webkitBoxFlex = value as any;
  }

  public get webkitBoxOrdinalGroup(): string {
    return this._style.webkitBoxOrdinalGroup;
  }

  public set webkitBoxOrdinalGroup(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxOrdinalGroup", value);
    else this._style.webkitBoxOrdinalGroup = value as any;
  }

  public get webkitBoxOrient(): string {
    return this._style.webkitBoxOrient;
  }

  public set webkitBoxOrient(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxOrient", value);
    else this._style.webkitBoxOrient = value as any;
  }

  public get webkitBoxPack(): string {
    return this._style.webkitBoxPack;
  }

  public set webkitBoxPack(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxPack", value);
    else this._style.webkitBoxPack = value as any;
  }

  public get webkitBoxShadow(): string {
    return this._style.webkitBoxShadow;
  }

  public set webkitBoxShadow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxShadow", value);
    else this._style.webkitBoxShadow = value as any;
  }

  public get webkitBoxSizing(): string {
    return this._style.webkitBoxSizing;
  }

  public set webkitBoxSizing(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitBoxSizing", value);
    else this._style.webkitBoxSizing = value as any;
  }

  public get webkitFilter(): string {
    return this._style.webkitFilter;
  }

  public set webkitFilter(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFilter", value);
    else this._style.webkitFilter = value as any;
  }

  public get webkitFlex(): string {
    return this._style.webkitFlex;
  }

  public set webkitFlex(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlex", value);
    else this._style.webkitFlex = value as any;
  }

  public get webkitFlexBasis(): string {
    return this._style.webkitFlexBasis;
  }

  public set webkitFlexBasis(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlexBasis", value);
    else this._style.webkitFlexBasis = value as any;
  }

  public get webkitFlexDirection(): string {
    return this._style.webkitFlexDirection;
  }

  public set webkitFlexDirection(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlexDirection", value);
    else this._style.webkitFlexDirection = value as any;
  }

  public get webkitFlexFlow(): string {
    return this._style.webkitFlexFlow;
  }

  public set webkitFlexFlow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlexFlow", value);
    else this._style.webkitFlexFlow = value as any;
  }

  public get webkitFlexGrow(): string {
    return this._style.webkitFlexGrow;
  }

  public set webkitFlexGrow(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlexGrow", value);
    else this._style.webkitFlexGrow = value as any;
  }

  public get webkitFlexShrink(): string {
    return this._style.webkitFlexShrink;
  }

  public set webkitFlexShrink(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlexShrink", value);
    else this._style.webkitFlexShrink = value as any;
  }

  public get webkitFlexWrap(): string {
    return this._style.webkitFlexWrap;
  }

  public set webkitFlexWrap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitFlexWrap", value);
    else this._style.webkitFlexWrap = value as any;
  }

  public get webkitJustifyContent(): string {
    return this._style.webkitJustifyContent;
  }

  public set webkitJustifyContent(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitJustifyContent", value);
    else this._style.webkitJustifyContent = value as any;
  }

  public get webkitLineClamp(): string {
    return this._style.webkitLineClamp;
  }

  public set webkitLineClamp(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitLineClamp", value);
    else this._style.webkitLineClamp = value as any;
  }

  public get webkitMask(): string {
    return this._style.webkitMask;
  }

  public set webkitMask(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMask", value);
    else this._style.webkitMask = value as any;
  }

  public get webkitMaskBoxImage(): string {
    return this._style.webkitMaskBoxImage;
  }

  public set webkitMaskBoxImage(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskBoxImage", value);
    else this._style.webkitMaskBoxImage = value as any;
  }

  public get webkitMaskBoxImageOutset(): string {
    return this._style.webkitMaskBoxImageOutset;
  }

  public set webkitMaskBoxImageOutset(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskBoxImageOutset", value);
    else this._style.webkitMaskBoxImageOutset = value as any;
  }

  public get webkitMaskBoxImageRepeat(): string {
    return this._style.webkitMaskBoxImageRepeat;
  }

  public set webkitMaskBoxImageRepeat(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskBoxImageRepeat", value);
    else this._style.webkitMaskBoxImageRepeat = value as any;
  }

  public get webkitMaskBoxImageSlice(): string {
    return this._style.webkitMaskBoxImageSlice;
  }

  public set webkitMaskBoxImageSlice(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskBoxImageSlice", value);
    else this._style.webkitMaskBoxImageSlice = value as any;
  }

  public get webkitMaskBoxImageSource(): string {
    return this._style.webkitMaskBoxImageSource;
  }

  public set webkitMaskBoxImageSource(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskBoxImageSource", value);
    else this._style.webkitMaskBoxImageSource = value as any;
  }

  public get webkitMaskBoxImageWidth(): string {
    return this._style.webkitMaskBoxImageWidth;
  }

  public set webkitMaskBoxImageWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskBoxImageWidth", value);
    else this._style.webkitMaskBoxImageWidth = value as any;
  }

  public get webkitMaskClip(): string {
    return this._style.webkitMaskClip;
  }

  public set webkitMaskClip(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskClip", value);
    else this._style.webkitMaskClip = value as any;
  }

  public get webkitMaskComposite(): string {
    return this._style.webkitMaskComposite;
  }

  public set webkitMaskComposite(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskComposite", value);
    else this._style.webkitMaskComposite = value as any;
  }

  public get webkitMaskImage(): string {
    return this._style.webkitMaskImage;
  }

  public set webkitMaskImage(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskImage", value);
    else this._style.webkitMaskImage = value as any;
  }

  public get webkitMaskOrigin(): string {
    return this._style.webkitMaskOrigin;
  }

  public set webkitMaskOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskOrigin", value);
    else this._style.webkitMaskOrigin = value as any;
  }

  public get webkitMaskPosition(): string {
    return this._style.webkitMaskPosition;
  }

  public set webkitMaskPosition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskPosition", value);
    else this._style.webkitMaskPosition = value as any;
  }

  public get webkitMaskRepeat(): string {
    return this._style.webkitMaskRepeat;
  }

  public set webkitMaskRepeat(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskRepeat", value);
    else this._style.webkitMaskRepeat = value as any;
  }

  public get webkitMaskSize(): string {
    return this._style.webkitMaskSize;
  }

  public set webkitMaskSize(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitMaskSize", value);
    else this._style.webkitMaskSize = value as any;
  }

  public get webkitOrder(): string {
    return this._style.webkitOrder;
  }

  public set webkitOrder(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitOrder", value);
    else this._style.webkitOrder = value as any;
  }

  public get webkitPerspective(): string {
    return this._style.webkitPerspective;
  }

  public set webkitPerspective(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitPerspective", value);
    else this._style.webkitPerspective = value as any;
  }

  public get webkitPerspectiveOrigin(): string {
    return this._style.webkitPerspectiveOrigin;
  }

  public set webkitPerspectiveOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitPerspectiveOrigin", value);
    else this._style.webkitPerspectiveOrigin = value as any;
  }

  public get webkitTextFillColor(): string {
    return this._style.webkitTextFillColor;
  }

  public set webkitTextFillColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTextFillColor", value);
    else this._style.webkitTextFillColor = value as any;
  }

  public get webkitTextSizeAdjust(): string {
    return this._style.webkitTextSizeAdjust;
  }

  public set webkitTextSizeAdjust(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTextSizeAdjust", value);
    else this._style.webkitTextSizeAdjust = value as any;
  }

  public get webkitTextStroke(): string {
    return this._style.webkitTextStroke;
  }

  public set webkitTextStroke(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTextStroke", value);
    else this._style.webkitTextStroke = value as any;
  }

  public get webkitTextStrokeColor(): string {
    return this._style.webkitTextStrokeColor;
  }

  public set webkitTextStrokeColor(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTextStrokeColor", value);
    else this._style.webkitTextStrokeColor = value as any;
  }

  public get webkitTextStrokeWidth(): string {
    return this._style.webkitTextStrokeWidth;
  }

  public set webkitTextStrokeWidth(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTextStrokeWidth", value);
    else this._style.webkitTextStrokeWidth = value as any;
  }

  public get webkitTransform(): string {
    return this._style.webkitTransform;
  }

  public set webkitTransform(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransform", value);
    else this._style.webkitTransform = value as any;
  }

  public get webkitTransformOrigin(): string {
    return this._style.webkitTransformOrigin;
  }

  public set webkitTransformOrigin(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransformOrigin", value);
    else this._style.webkitTransformOrigin = value as any;
  }

  public get webkitTransformStyle(): string {
    return this._style.webkitTransformStyle;
  }

  public set webkitTransformStyle(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransformStyle", value);
    else this._style.webkitTransformStyle = value as any;
  }

  public get webkitTransition(): string {
    return this._style.webkitTransition;
  }

  public set webkitTransition(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransition", value);
    else this._style.webkitTransition = value as any;
  }

  public get webkitTransitionDelay(): string {
    return this._style.webkitTransitionDelay;
  }

  public set webkitTransitionDelay(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransitionDelay", value);
    else this._style.webkitTransitionDelay = value as any;
  }

  public get webkitTransitionDuration(): string {
    return this._style.webkitTransitionDuration;
  }

  public set webkitTransitionDuration(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransitionDuration", value);
    else this._style.webkitTransitionDuration = value as any;
  }

  public get webkitTransitionProperty(): string {
    return this._style.webkitTransitionProperty;
  }

  public set webkitTransitionProperty(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransitionProperty", value);
    else this._style.webkitTransitionProperty = value as any;
  }

  public get webkitTransitionTimingFunction(): string {
    return this._style.webkitTransitionTimingFunction;
  }

  public set webkitTransitionTimingFunction(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitTransitionTimingFunction", value);
    else this._style.webkitTransitionTimingFunction = value as any;
  }

  public get webkitUserSelect(): string {
    return this._style.webkitUserSelect;
  }

  public set webkitUserSelect(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("webkitUserSelect", value);
    else this._style.webkitUserSelect = value as any;
  }

  public get whiteSpace(): string {
    return this._style.whiteSpace;
  }

  public set whiteSpace(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("whiteSpace", value);
    else this._style.whiteSpace = value as any;
  }

  public get widows(): string {
    return this._style.widows;
  }

  public set widows(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("widows", value);
    else this._style.widows = value as any;
  }

  public get width(): string {
    return this._style.width;
  }

  public set width(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("width", value);
    else this._style.width = value as any;
  }

  public get willChange(): string {
    return this._style.willChange;
  }

  public set willChange(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("willChange", value);
    else this._style.willChange = value as any;
  }

  public get wordBreak(): string {
    return this._style.wordBreak;
  }

  public set wordBreak(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("wordBreak", value);
    else this._style.wordBreak = value as any;
  }

  public get wordSpacing(): string {
    return this._style.wordSpacing;
  }

  public set wordSpacing(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("wordSpacing", value);
    else this._style.wordSpacing = value as any;
  }

  public get wordWrap(): string {
    return this._style.wordWrap;
  }

  public set wordWrap(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("wordWrap", value);
    else this._style.wordWrap = value as any;
  }

  public get writingMode(): string {
    return this._style.writingMode;
  }

  public set writingMode(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("writingMode", value);
    else this._style.writingMode = value as any;
  }

  public get zIndex(): string {
    return this._style.zIndex;
  }

  public set zIndex(value: string | ref<string>) {
    if (typeof value !== "string") this.setStylerefMap("zIndex", value);
    else this._style.zIndex = value as any;
  }

  // @ts-ignore
  getPropertyPriority(property: string) {
    this._style.getPropertyPriority(property);
  }
  // @ts-ignore

  getPropertyValue(property: string) {
    this._style.getPropertyValue(property);
  }

  // @ts-ignore
  item(index: number) {
    this._style.item(index);
  }

  // @ts-ignore
  removeProperty(property: string) {
    if (this.stylerefMap.has(property)) {
      const data = this.stylerefMap.get(property);
      data?.ref.unsubscribe(data.data);
      this.stylerefMap.delete(property);
      return;
    }
    this._style.removeProperty(property);
  }
  setProperty(property: string, value: string | null, priority?: string | undefined): void {
    if (Object.keys(this._style).includes(property)) {
      (this as any)[property] = value;
    }
  }

  hasOwnProperty(property: string) {
    if (property) return _styleAtributtes.includes(property);
    return false;
  }
}
