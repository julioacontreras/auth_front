<script lang="ts">
    import './style.scss'
    
    export let href: string;
</script>

<a class="link" href="{href}"> 
    <slot />
</a>    
