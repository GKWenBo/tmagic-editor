<template>
    <div>
        <ElDivider
        :border-style="props.config.borderStyle"/>
    </div>
</template>

<script lang="ts" setup>
import { MComponent } from "@tmagic/schema";
import useApp from "../../useApp";
import { ElDivider } from "element-plus";
import "element-plus/dist/index.css";

const props = withDefaults(
    defineProps<{
        config: MComponent;
        model?: any
    }>(),
    {
        model: () => ({})
    }
)

useApp({
    config: props.config,
    methods: {},
})

</script>
