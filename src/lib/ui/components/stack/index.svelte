<script lang="ts">
    import './style.scss'

    export let classes: string;
</script>

<section class="stack {classes}">
    <slot />
</section>
