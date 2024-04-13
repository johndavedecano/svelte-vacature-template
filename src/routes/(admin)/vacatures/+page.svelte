<script lang="ts">
  import axios from "axios";
  import type { Vacature } from "$lib/types";
  import { onMount } from "svelte";
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
  import MdDelete from "svelte-icons/md/MdDelete.svelte";
  import Icon from "$lib/components/icon.svelte";

  let loading = false;
  let items: Vacature[] = [];

  const onLoad = () => {
    loading = true;
    axios
      .get("/vacatures/index")
      .then((response) => response.data)
      .then((response) => (items = response.data))
      .catch((error) => {})
      .finally(() => (loading = false));
  };

  onMount(() => onLoad());
</script>

<div class="card">
  <div class="card-header">
    <div class="card-title">Vacatures</div>
  </div>
  <div class="card-body">
    <table class="table table-zebra">
      <thead>
        <tr>
          <th>Title</th>
          <th>Location</th>
          <th>Company</th>
          <th>Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each items as item}
          <tr>
            <td>{item.title}</td>
            <td>{item.location}</td>
            <td>{item.company}</td>
            <td>{item.type}</td>
            <td>
              <button class="btn btn-primary">
                <Icon icon={MdEdit} />
              </button>

              <button class="btn btn-danger">
                <Icon icon={MdDelete} />
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
