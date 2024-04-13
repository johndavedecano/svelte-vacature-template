<script lang="ts">
  import axios from "axios";
  import { goto } from "$app/navigation";
  import type { Vacature } from "$lib/types";

  let loading = false;
  let field: Vacature = {
    title: "",
    type: "",
    location: "",
    description: "",
    href: "",
    company: "",
  };

  const onSubmit = () => {
    loading = true;
    axios
      .post("/vacatures", field)
      .then(() => {
        alert("successfully created");
        goto("/vacatures");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => (loading = false));
  };
</script>

<div class="card">
  <div class="card-header">
    <div class="card-title">Nieuwe Vacature</div>
  </div>
  <form action="" method="POST" on:submit|preventDefault={onSubmit}>
    <div class="card-body">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" bind:value={field.title} />
      </div>

      <div class="form-group">
        <label for="type">Type</label>
        <select name="type" bind:value={field.type}>
          <option value="on-site">ON-SITE</option>
          <option value="hybrid">HYBRID</option>
          <option value="remote">REMOTE</option>
        </select>
      </div>

      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" name="location" bind:value={field.location} />
      </div>

      <div class="form-group">
        <label for="company">Company</label>
        <input type="text" name="company" bind:value={field.company} />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea name="description" rows="10" bind:value={field.description} />
      </div>

      <div class="form-group">
        <label for="href">Link</label>
        <input type="url" name="href" bind:value={field.href} />
      </div>
    </div>
    <div class="card-actions">
      <div class="card-spacer"></div>
      <button class="btn btn-primary mr-4" disabled={loading}>Submit</button>
      <button class="btn btn-primary-outline">Cancel</button>
    </div>
  </form>
</div>
