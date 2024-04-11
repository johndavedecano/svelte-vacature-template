<script>
  import Container from "./container.svelte";
</script>

<footer>
  <Container>
    <div class="footer-content">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Terms</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
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

  footer ul {
    @apply flex items-center gap-4 justify-center;
  }
</style>
