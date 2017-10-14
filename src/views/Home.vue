<template>
    <div id="home">
        <div>
            <!-- 🎨 color picker -->
            <sketch-picker :value='colour' @input='updateColor'></sketch-picker>
        </div>
        <div class="box">
            <color-box></color-box>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Getter from '../decorators/Getter';
@Component({
    name: 'Home'
})
export default class Home extends Vue {
    @Getter('colour') colour: string;
    
    updateColor(newColor) {
        let newColorHex: string = newColor.hex;
        this.$store.dispatch('updateColor', newColorHex);
    }
}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: row;
}
</style>

