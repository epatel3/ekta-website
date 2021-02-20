<script>
  import Link from './Link.svelte';

  export let hideMobile = false;
  export let icon;
  export let text;
  export let link;
</script>

<style>
  :global(.icon svg) {
    display: inline-block;
    vertical-align: middle;
    width: 1.2em; /* 20px; */
    height: 1.2em; /* 20px; */
  }

  :global(.social) {
    font-size: 0.9em; /* 17px; */
    line-height: 1.7em; /* 29px; */
  }

  :global(.middle) {
    padding-left: 0.2em; /* 3px; */
    display: inline-block;
    vertical-align: middle;
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    :global(.social) {
      padding: 0.2em 0;
    }
  }
</style>

<Link noUnderline={true} href={link} aria={text}>
  <div class="social" class:hide={hideMobile}>
    <span class="icon">{@html icon}</span>&nbsp;<span class="middle">{text}</span>
  </div>
</Link>
