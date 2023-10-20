Vue.component('alert-box', {
  template: `
    <div>
      <slot></slot>
    </div>
  `
})

Vue.component('app-bar', {
  props: {
    swapDisabled: Boolean,
    swapLoading: Boolean,
    exportDisabled: Boolean,
    exportLoading: Boolean
  },
  template: `
    <v-app-bar dense flat>
      Wefio Face Swap
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="mr-2"
        small
        @click="$emit('do-swap')"
        :disabled="swapDisabled"
        :loading="swapLoading"
      >
        <v-icon
          left
          dark
        >
          mdi-swap-horizontal
        </v-icon>
        Swap
      </v-btn>
      <v-btn
        @click="$emit('do-export')"
        color="success"
        small
        :disabled="exportDisabled"
        :loading="exportLoading"
      >
        <v-icon
          left
          dark
        >
          mdi-export
        </v-icon>
        Export
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        @click="$emit('open-settings')"
        color="secondary"
        class="mr-2"
        small
      >
        <v-icon
          dark
        >
          mdi-cog
        </v-icon>
      </v-btn>
    </v-app-bar>
  `
})

Vue.component('preview-image', {
  props: ['src', 'lazy-src'],
  template: `
    <div class="preview-image">
      <v-img
        aspect-ratio="1.33"
        contain
        :src="src"
        :lazy-src="lazySrc"
      ></v-img>
    </div>
  `
})

Vue.component('result-image', {
  props: ['src'],
  template: `
    <div class="result-image">
      <v-img
        aspect-ratio="1"
        contain
        :src="src"
      ></v-img>
    </div>
  `
})