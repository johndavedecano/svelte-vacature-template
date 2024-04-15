<script lang="ts">
  import Container from "./container.svelte";

  export let settings: any = {};
</script>

<footer>
  <Container>
    <div class="footer-content">
      {@html settings.footer_links}
    </div>
  </Container>
</footer>

<style>
  footer {
    @apply bg-black text-white w-full min-h-32 flex items-center;
  }

  .footer-content {
    @apply p-4;
  }
</style>
