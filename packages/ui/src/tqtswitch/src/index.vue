<template>
  <div>
    <el-switch
      v-model="props.config.switchon"
      class="ml-2"
      :style="{
        '--el-switch-on-color': props.config.oncolor,
        '--el-switch-off-color': props.config.offcolor,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { MComponent } from "@tmagic/schema";
import useApp from "../../useApp";
import { ElSwitch } from "element-plus";
import "element-plus/dist/index.css";

const props = withDefaults(
  defineProps<{
    config: MComponent;
    model?: any;
  }>(),
  {
    model: () => ({}),
  }
);
useApp({
  config: props.config,
  methods: {},
});
</script>
