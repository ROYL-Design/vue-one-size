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
import { OneSizeContainer } from 'vue-one-size'
export default {
  ...
  components: { OneSizeContainer }
}
</script>
```

## Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>375</td>
      <td>Width of the page.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>603</td>
      <td>Height of the page.</td>
    </tr>
    <tr>
      <td>maxRatio</td>
      <td>1</td>
      <td>The maximal ratio to scale up.</td>
    </tr>
  </tbody>
</table>