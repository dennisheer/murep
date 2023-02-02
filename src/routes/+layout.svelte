<script>
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.css';
  import { AppBar, AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <h1>murep</h1>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailTile tag="a" href="/" class="text-xs md:text-md">Dashboard</AppRailTile>
      <AppRailTile tag="a" href="/repertoire" class="text-xs md:text-md">Repertoire</AppRailTile>
      <AppRailTile tag="a" href="/ensembles" class="text-xs md:text-md">Ensembles</AppRailTile>
    </AppRail>
  </svelte:fragment>
  <div class="mx-auto max-w-7xl px-6 py-4 md:px-12 md:py-8 lg:px-24 lg:py-16">
    <slot />
  </div>
</AppShell>
