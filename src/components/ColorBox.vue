<template>
    <div class="color-box" :style="boxStyle">
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Getter from '../decorators/Getter';

@Component({
    name: 'color-box'
})
export default class ColorBox extends Vue {
    @Getter('colour') colour: string;

    get boxStyle() {
        return {
            'background-color': this.colour
        };
    }
}

</script>

<style scoped>
.color-box {
    width: 150px;
    height: 150px;
}
</style>