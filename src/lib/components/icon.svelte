<script>
  import MdMenu from "svelte-icons/md/MdMenu.svelte";

  export let icon = MdMenu;
  export let width = 32;
  export let height = 32;

  let style = `width: ${width}px; height: ${height};`;
</script>

<div class="icon" {style}>
  <svelte:component this={icon} />
</div>
