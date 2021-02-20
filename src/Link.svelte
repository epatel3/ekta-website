<script>
  export let href;
  export let noUnderline = false;
  export let aria = null;
</script>

<style>
  :global(a) {
    text-decoration: underline;
    color: #172fa5;
  }

  :global(a.nounder) {
    text-decoration: none;
    display: inline;
  }
</style>

{#if aria != null}
<a aria-label={aria} class:nounder={noUnderline} {href} rel="noreferrer noopener" target="_blank"><slot></slot></a>
{:else}
<a class:nounder={noUnderline} {href} rel="noreferrer noopener" target="_blank"><slot></slot></a>
{/if}
