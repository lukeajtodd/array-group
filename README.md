## Utilities

General purpose utilities including classes for Number and Array utilities.

### Installation

```
npm install general-utils-lt
```

```
yarn add general-utils-lt
```

### Usage (npm)

Typescript or Javascript

```js
import { ArrayUtils } from 'general-utils-lt'

const utils = new ArrayUtils()

utils.groupArrayElements([1, 2, 3, 4, 5], 3)
// [ [1, 2], [3, 4], [5] ]
```

### Usage (deno)

```ts
import GeneralUtils from 'https://cdn.skypack.dev/general-utils-lt'

const utils = new GeneralUtils.ArrayUtils()

utils.groupArrayElements([1, 2, 3, 4, 5], 3)
// [ [1, 2], [3, 4], [5] ]
```

### Usage (Skypack)

```html
<script>
import { ArrayUtils } from 'https://cdn.skypack.dev/general-utils-lt'

const utils = new ArrayUtils()

utils.groupArrayElements([1, 2, 3, 4, 5], 3)
// [ [1, 2], [3, 4], [5] ]
</script>
```