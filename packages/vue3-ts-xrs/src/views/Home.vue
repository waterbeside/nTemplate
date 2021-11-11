<template>
  <div class="page-home">
    <p>
      <SvgIcon name="kanban" ></SvgIcon>
      home page
    </p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import SvgIcon from '../components/SvgIcon/index.vue'

export default defineComponent({
  components: {
    SvgIcon
  },
  name: 'Home'

})
</script>