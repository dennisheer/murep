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
    <AppRail width="w-20 xl:w-48">
      <AppRailTile tag="a" href="/" class="text-xs xl:text-base xl:h-16">Dashboard</AppRailTile>
      <AppRailTile tag="a" href="/repertoire" class="text-xs xl:text-base xl:h-16">
        Repertoire
      </AppRailTile>
      <AppRailTile tag="a" href="/ensembles" class="text-xs xl:text-base xl:h-16">
        Ensembles
      </AppRailTile>
      <svelte:fragment slot="trail">
        <AppRailTile tag="a" href="/settings" class="text-xs xl:text-base xl:h-16">
          Settings
        </AppRailTile>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  <div class="mx-auto max-w-7xl px-6 py-4 md:px-12 md:py-8 lg:px-24 lg:py-16">
    <slot />
  </div>
</AppShell>
