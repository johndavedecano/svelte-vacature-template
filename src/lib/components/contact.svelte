<div class="contact-wrapper" id="contact">
  <div class="contact">
    <div class="contact-heading">Neem contact met ons op</div>
    <div class="contact-body">
      Maria staat altijd voor je klaar.<br /> Je kunt haar bellen of sms'en op
      06-0000000.<br /> Stuur je liever een e-mail? Dat kan ook via<br />
      youremail@yourcompany.com
    </div>
  </div>
  <img src="/contact.jpg" alt="" />
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
