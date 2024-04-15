<script lang="ts">
  export let settings: any = {};
</script>

<div class="statement-wrapper">
  <div class="statement">
    <div class="statement-heading">{settings.headline2}</div>
    <div class="statement-body">
      {settings.description2}
    </div>
  </div>
  <img src={settings.image2} alt={settings.headline2} />
</div>

<style>
  .statement-wrapper {
    @apply flex px-4 py-8 flex-col lg:flex-row;
  }

  .statement {
    @apply flex flex-1 flex-col mb-4 lg:pt-20 pt-0 lg:pr-8 pr-0;
  }

  .statement-wrapper > img {
    @apply lg:w-1/2;
  }

  .statement-heading {
    @apply text-4xl lg:text-6xl font-bold text-black mb-4;
  }
</style>
