<script lang="ts">
    import { v4 as uuidv4 } from 'uuid'
    import translations from './translations'

    export let colors,
        scaleSymbol = 0.06

    function randomColor(){
        const random = Math.random() * 10
        if (random < .8)
            return colors.red
        if (random < 2.5)
            return colors.dark
        if (random < 8)
            return colors.medium
        else
            return colors.light
    }

    const idPattern = uuidv4().split('-')[0],
        idSymbol = uuidv4().split('-')[0]
</script>

<svg viewBox="0 0 20 20">
    <defs>
        <pattern
                id={idPattern}
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
        >
            <desc>Sechseckgitter</desc>
            <symbol id={idSymbol} >
                <slot/>
            </symbol>
            {#each translations as t}
                <use
                        href={'#' + idSymbol}
                        transform={'translate(' + t + ') scale('+scaleSymbol+','+scaleSymbol+')'}
                        fill={randomColor()}
                />
            {/each}
        </pattern>
    </defs>

    <rect width="30" height="30" fill={'url(#' + idPattern + ')'} />
</svg>