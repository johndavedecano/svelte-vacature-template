<script lang="ts">
  import Vacatures from "$lib/components/vacatures.svelte";
  import VacatureItem from "$lib/components/vacature.svelte";
  import Perks from "$lib/components/perks.svelte";
  import Wrapper from "$lib/components/wrapper.svelte";
  import Header from "$lib/components/header.svelte";
  import Container from "$lib/components/container.svelte";
  import Statement from "$lib/components/statement.svelte";
  import Contact from "$lib/components/contact.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Vacature from "$lib/components/vacature.svelte";

  export let data = { vacatures: [], settings: {} };

  let vacatures: Vacature[] = [];

  let settings: any = {
    name: data.settings.name,
    headline1: data.settings.headline1,
    description1: data.settings.description1,
    image1: data.settings.image1,
    headline2: data.settings.headline2,
    description2: data.settings.description2,
    image2: data.settings.image2,
    headline3: data.settings.headline3,
    description3: data.settings.description3,
    image3: data.settings.image3,
    footer_links: data.settings.footer_links,
  };
</script>

<Wrapper>
  <Header {settings} />
  <Container>
    <Statement {settings} />
  </Container>
  <Container>
    <Perks />
  </Container>
  <Container>
    <Vacatures>
      {#each data.vacatures as vacature}
        <VacatureItem {vacature} />
      {/each}
    </Vacatures>
  </Container>
  <Container>
    <Contact {settings} />
  </Container>
  <Footer {settings} />
</Wrapper>
