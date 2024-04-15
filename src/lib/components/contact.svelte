<script lang="ts">
  export let settings: any = {};
</script>

<div class="contact-wrapper" id="contact">
  <div class="contact">
    <div class="contact-heading">{settings.headline3}</div>
    <div class="contact-body">
      {settings.description3}
    </div>
  </div>
  <img src={settings.image3} alt={settings.headline3} />
</div>

<style>
  .contact-wrapper {
    @apply flex px-4 py-12 flex-col lg:flex-row;
  }

  .contact {
    @apply flex flex-1 flex-col mb-4 lg:pt-20 pt-0 lg:pr-8 pr-0;
  }

  .contact-wrapper > img {
    @apply lg:w-1/2;
  }

  .contact-heading {
    @apply text-4xl lg:text-6xl font-bold text-black mb-4;
  }
</style>
