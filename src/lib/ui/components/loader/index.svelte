<script lang="ts">
    export let isVisible: boolean;
    export let size: string;
</script>

{#if isVisible}
    <div class="loader loader-{size}" />
{/if}
