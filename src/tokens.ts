const metadata = /^>>\s*(?<key>.+?):\s*(?<value>.+)/;

const multiwordIngredient =
  /@(?<mIngredientName>[^@#~[]+?)\{(?<mIngredientQuantity>[^]*?)(?:%(?<mIngredientUnits>[^}]+?))?\}(\((?<mIngredientPreparation>[^]*?)\))?/;
// React Native compatible: replaced \p{Zs}\p{P} with explicit Unicode ranges
// \p{Zs} = Unicode space separators: \u0020 (space), \u00A0 (non-breaking space), etc.
// \p{P} = Unicode punctuation: .,;:!?()[]{}'" etc.
const singleWordIngredient =
  /@(?<sIngredientName>[^\s\t\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000.,;:!?()[\]{}'"@#~]+)/;

const multiwordCookware =
  /#(?<mCookwareName>[^@#~[]+?)\{(?<mCookwareQuantity>.*?)\}/;
// React Native compatible: replaced \p{Zs}\p{P} with explicit Unicode ranges
const singleWordCookware =
  /#(?<sCookwareName>[^\s\t\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000.,;:!?()[\]{}'"@#~]+)/;

const timer =
  /~(?<timerName>.*?)(?:\{(?<timerQuantity>.*?)(?:%(?<timerUnits>.+?))?\})/;

export const comment = /--.*/g;
export const blockComment = /\s*\[\-[\s\S]*?\-\]\s*/g;

export const shoppingList = /\n\s*\[(?<name>.+)\]\n(?<items>[^]*?)(?:\n\n|$)/g;
export const tokens = new RegExp(
  [
    metadata,
    multiwordIngredient,
    singleWordIngredient,
    multiwordCookware,
    singleWordCookware,
    timer,
  ]
    .map(r => r.source)
    .join('|'),
  'gu'
);
