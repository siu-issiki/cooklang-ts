# Cooklang-TS React Native

![cooklang-ts logo](https://github.com/cooklang/cooklang-ts/blob/main/assets/logo_white_bg.svg?raw=true)

<div align="center">
    React Native compatible fork of <a href="https://github.com/cooklang/cooklang-ts">Cooklang-TS</a> - a TypeScript library for parsing and manipulating <a href="https://cooklang.org/">Cooklang</a> recipes.
    <br><br>
    <a href="https://github.com/siu-issiki/cooklang-ts/actions/workflows/tests.yml"><img src="https://github.com/siu-issiki/cooklang-ts/actions/workflows/tests.yml/badge.svg?branch=main"></a>
    <a href="https://www.npmjs.com/package/@cooklang/cooklang-ts-rn"><img src="https://img.shields.io/npm/v/@cooklang/cooklang-ts-rn"></a>
</div>

## 🚀 Why this fork?

The original CookLang-TS library uses **Unicode Property Escapes** (`\p{Zs}`, `\p{P}`) in regular expressions, which are **not supported by React Native's Hermes JavaScript engine**. This fork replaces those patterns with explicit Unicode character ranges for full React Native compatibility.

### ✅ Compatibility

- ✅ **React Native** (Hermes engine)
- ✅ **React Native** (JSC engine)
- ✅ **Expo**
- ✅ **Node.js**
- ✅ **Web browsers**

### 🔧 Changes from Original

- Replaced `\p{Zs}` (Unicode space separators) with explicit Unicode ranges
- Replaced `\p{P}` (Unicode punctuation) with explicit character classes
- Maintained **100% API compatibility** with original library
- Added React Native specific package configuration

## 📦 Installation

```bash
npm install @cooklang/cooklang-ts-rn
```

## Usage

```typescript
import { Recipe, Parser, getImageURL } from '@cooklang/cooklang-ts-rn';

const source = `
>> source: https://www.dinneratthezoo.com/wprm_print/6796
>> total time: 6 minutes
>> servings: 2

Place the @apple juice{1,5%cups}, @banana{one sliced}, @frozen mixed berries{1,5%cups} and @vanilla greek yogurt{3/4%cup} in a #blender{}; blend until smooth. If the smoothie seems too thick, add a little more liquid (1/4 cup).

Taste and add @honey{} if desired. Pour into two glasses and garnish with fresh berries and mint sprigs if desired.
`;

console.log(new Recipe(source));
// {
//     ingredients: [...],
//     cookwares: [...],
//     metadata: {...},
//     steps: [
//         [...],
//         [...],
//     ],
//     shoppingList: {},
// }

console.log(new Parser().parse(source).metadata);
// {
//     source: 'https://www.dinneratthezoo.com/wprm_print/6796',
//     'total time': '6 minutes',
//     servings: '2',
// }

console.log(
  getImageURL('Mixed Berry Smoothie', {
    step: 1,
    extension: 'png',
  })
);
// 'Mixed Berry Smoothie.1.png'
```

## Cooklang Specification

The specification can be found [here](https://cooklang.org/docs/spec/).

## GitHub

The repository can be found [here](https://github.com/cooklang/cooklang-ts).

## Testing

Tests are as found in https://github.com/cooklang/spec/blob/main/tests/canonical.yaml.

```
npm test
```
