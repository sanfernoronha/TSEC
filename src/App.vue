<template>
  <v-app>
    <v-content>
      <transition
        name="router-animation"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view>
          <Home />
        </router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
