<script>
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '@skeletonlabs/skeleton/styles/all.css';
  import '../app.postcss';
  import { AppBar, AppRail, AppRailTile, AppShell, Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="h-full">
  <AppShell>
    <svelte:fragment slot="header"
      ><AppBar>
        <svelte:fragment slot="lead"><h1>murep</h1></svelte:fragment>
        <svelte:fragment slot="trail"><Avatar src="https://i.pravatar.cc/" /></svelte:fragment>
      </AppBar></svelte:fragment
    >
    <svelte:fragment slot="sidebarLeft"
      ><AppRail>
        <AppRailTile tag="a" href="/">Dashboard</AppRailTile>
        <AppRailTile tag="a" href="/repertoire">Repertoire</AppRailTile>
        <AppRailTile tag="a" href="/ensembles">Ensembles</AppRailTile>
      </AppRail></svelte:fragment
    >
    <!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
    <!-- Router Slot -->
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-64"><slot /></div>
    <!-- ---- / ---- -->
    <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
  <svelte:fragment slot="footer">Footer</svelte:fragment> -->
  </AppShell>
</div>
