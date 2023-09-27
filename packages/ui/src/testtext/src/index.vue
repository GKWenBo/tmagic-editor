<template>
    <div>
        <span>this is a Test component:</span>
        <span :style="{ color: color }">{{ config.text }}</span>
    </div>
</template>

<script lang="ts" setup>
import { MComponent } from "@tmagic/schema"
import useApp from "../../useApp"
import { watch, ref } from 'vue';

const props = withDefaults(
    defineProps<{
        config: MComponent;
        model?: any;
    }>(),
    {
        model: () => ({})
    }
)

useApp({
    config: props.config,
    methods: {}
})

const color = ref();

watch(
    () => props.config.color,
    (value = '') => {
        color.value = value
    },
    {
        immediate: true
    }
)

</script>