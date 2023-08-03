<script lang="ts">
    import Psychology from './Psychology.svelte'
    import OtherHouses from "./OtherHouses.svelte"
    import Lan from "./Lan.svelte"
    import HexagonPattern from './HexagonPattern.svelte'

    const colorsPsychology = {
            red: '#f39c9b',
            dark: '#6eb2dc',
            medium: '#9dcce8',
            light: '#cee4f3'
        },
        colorsOtherHouses = {
            red: '#f39c9b',
            dark: '#6e99c6',
            medium: '#9dbad8',
            light: '#cedcea'
        },
        colorsLan = {
            red: '#f39c9b',
            dark: '#6c829c',
            medium: '#9eacbc',
            light: '#ced5dd'
        }

</script>

<div class="row p-5 gap-3">
    <div class="col">
        <HexagonPattern colors={colorsPsychology}>
            <Psychology/>
        </HexagonPattern>
    </div>
    <div class="col">
        <HexagonPattern colors={colorsOtherHouses} scaleSymbol={0.05}>
            <OtherHouses/>
        </HexagonPattern>
    </div>
    <div class="col">
        <HexagonPattern colors={colorsLan} scaleSymbol={0.05}>
            <Lan/>
        </HexagonPattern>
    </div>
</div>
