<template>
  <div id="app">
    <b-button v-on:click.left="openModal" variant="success" class="mr-2">Open</b-button>
    <DemoModal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
  import DemoModal from '@/components/forms/updateAppForm.vue';
  export default {
    name: 'App',
    components: {
      DemoModal,
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      openModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
</script>
