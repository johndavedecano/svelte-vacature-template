<script lang="ts">
  import Vacatures from "$lib/components/vacatures.svelte";
  import Vacature from "$lib/components/vacature.svelte";
  import Perks from "$lib/components/perks.svelte";
  import Wrapper from "$lib/components/wrapper.svelte";
  import Header from "$lib/components/header.svelte";
  import Container from "$lib/components/container.svelte";
  import Statement from "$lib/components/statement.svelte";
  import Contact from "$lib/components/contact.svelte";

  let vacatures = new Array(20);
</script>

<Wrapper>
  <Header />
  <Container>
    <Statement />
  </Container>
  <Container>
    <Perks />
  </Container>
  <Container>
    <Vacatures>
      {#each vacatures as item}
        <Vacature />
      {/each}
    </Vacatures>
  </Container>
  <Container>
    <Contact />
  </Container>
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
</Wrapper>

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
