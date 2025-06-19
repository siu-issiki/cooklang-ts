const metadata = /^>>\s*(?<key>.+?):\s*(?<value>.+)/;

const multiwordIngredient =
    /@(?<mIngredientName>[^@#~[]+?)\{(?<mIngredientQuantity>[^]*?)(?:%(?<mIngredientUnits>[^}]+?))?\}(\((?<mIngredientPreparation>[^]*?)\))?/;
const singleWordIngredient = /@(?<sIngredientName>[^\s\t\p{Zs}\p{P}]+)/u;

const multiwordCookware = /#(?<mCookwareName>[^@#~[]+?)\{(?<mCookwareQuantity>.*?)\}/;
const singleWordCookware = /#(?<sCookwareName>[^\s\t\p{Zs}\p{P}]+)/u;

const timer = /~(?<timerName>.*?)(?:\{(?<timerQuantity>.*?)(?:%(?<timerUnits>.+?))?\})/;

export const comment = /--.*/g;
export const blockComment = /\s*\[\-[\s\S]*?\-\]\s*/g;

export const shoppingList = /\n\s*\[(?<name>.+)\]\n(?<items>[^]*?)(?:\n\n|$)/g;
export const tokens = new RegExp(
    [metadata, multiwordIngredient, singleWordIngredient, multiwordCookware, singleWordCookware, timer]
        .map((r) => r.source)
        .join("|"),
    "gu"
);

// Array of the individual token regexes, preserving Babel's _wrapRegExp wrappers so
// that named capture groups are available at runtime even on engines (e.g., Hermes)
// that do not natively support them. Do NOT add the global flag here – we rely on
// local exec calls and resetting lastIndex explicitly in Parser.
export const tokenRegexes = [
    metadata,
    multiwordIngredient,
    singleWordIngredient,
    multiwordCookware,
    singleWordCookware,
    timer,
];
