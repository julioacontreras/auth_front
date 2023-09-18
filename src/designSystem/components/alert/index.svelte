<script lang="ts">
    export let type: string;
    export let title: string;
    export let message: any;
    export let isVisible: boolean;

    const close = () => {
        isVisible = false
    } 
</script>

{#if isVisible}
<section class="alert alert-{type}">
    <div class="message-area">
        <span>{title}</span>: <span> {message}</span>
    </div>
    <div class="close-area">
        <button on:click={close}>X</button>
    </div>
</section>  
{/if}       
