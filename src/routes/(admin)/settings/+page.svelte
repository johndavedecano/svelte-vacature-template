<script lang="ts">
  import axios from "axios";

  import { goto } from "$app/navigation";

  export let data: any = { settings: {} };

  let settings: any = data.settings;

  let loading = false;

  let field = {
    name: settings.name,
    headline1: settings.headline1,
    description1: settings.description1,
    image1: settings.image1,
    headline2: settings.headline2,
    description2: settings.description2,
    image2: settings.image2,
    headline3: settings.headline3,
    description3: settings.description3,
    image3: settings.image3,
    footer_links: settings.footer_links,
  };

  const onSubmit = () => {
    loading = true;
    axios
      .post("/settings", field)
      .then(() => {
        alert("successfully updated");
        goto("/settings");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => (loading = false));
  };
</script>

<div class="card">
  <div class="card-header">
    <div class="card-title">Instellingen</div>
  </div>
  <form action="" method="POST" on:submit|preventDefault={onSubmit}>
    <div class="card-body">
      <div class="form-group">
        <label for="name">Company Name</label>
        <input type="text" name="name" bind:value={field.name} />
      </div>

      <div class="form-group">
        <label for="headline1">Headline 1</label>
        <input type="text" name="headline1" bind:value={field.headline1} />
      </div>

      <div class="form-group">
        <label for="description1">Description 1</label>
        <textarea
          name="description1"
          rows="10"
          bind:value={field.description1}
        />
      </div>

      <div class="form-group">
        <label for="image1">Image 1</label>
        <input type="text" name="image1" bind:value={field.image1} />
      </div>

      <div class="form-group">
        <label for="headline2">Headline 2</label>
        <input type="text" name="headline2" bind:value={field.headline2} />
      </div>

      <div class="form-group">
        <label for="description2">Description 2</label>
        <textarea
          name="description2"
          rows="10"
          bind:value={field.description2}
        />
      </div>

      <div class="form-group">
        <label for="image2">Image 2</label>
        <input type="text" name="image2" bind:value={field.image2} />
      </div>

      <div class="form-group">
        <label for="headline3">Headline 3</label>
        <input type="text" name="headline3" bind:value={field.headline3} />
      </div>

      <div class="form-group">
        <label for="description3">Description 3</label>
        <textarea
          name="description3"
          rows="10"
          bind:value={field.description3}
        />
      </div>

      <div class="form-group">
        <label for="image3">Image 3</label>
        <input type="text" name="image3" bind:value={field.image3} />
      </div>

      <div class="form-group">
        <label for="footer_links">Footer Links</label>
        <textarea
          name="footer_links"
          rows="10"
          bind:value={field.footer_links}
        />
      </div>
    </div>
    <div class="card-actions">
      <div class="card-spacer"></div>
      <button class="btn btn-primary mr-4" disabled={loading}>Submit</button>
      <button class="btn btn-primary-outline">Cancel</button>
    </div>
  </form>
</div>
