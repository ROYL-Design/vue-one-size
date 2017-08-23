# vue-one-size
One size fits on all screens.

## Install

```bash
yarn add vue-one-size
```

## Usage

Register as a global component:

```javascript
import OneSize from 'vue-one-size'
Vue.use(OneSize)
```

```vue
<template>
  <OneSizeContainer>
    ...
  </OneSizeContainer>
</template>
```

Or use it locally:

```vue
<template>
  <OneSizeContainer>
    ...
  </OneSizeContainer>
</template>

<script>
import OneSizeContainer from 'vue-one-size'
Vue.use(OneSizeContainer)

export default {
  ...
  components: { OneSizeContainer }
}
</script>
```
