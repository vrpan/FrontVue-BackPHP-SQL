import Vue from 'vue';

new Vue({
  render: function (createElement) {
    return createElement('div', 'Hello, World!');
  },
}).$mount('#app');
