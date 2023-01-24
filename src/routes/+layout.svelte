<script lang="ts">
  import {
    Column,
    Content,
    Grid,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    Row,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    SkipToContent,
  } from 'carbon-components-svelte';
  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  let isSideNavOpen = false;
</script>

<Header platformName="murep" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href={data.dashboard.href} text={data.dashboard.text} />
    <HeaderNavMenu text={data.repertoire.text}>
      {#each data.repertoire.sections as section}
        <HeaderNavItem href={section.href} text={section.text} />
      {/each}
    </HeaderNavMenu>
    <HeaderNavMenu text={data.ensembles.text}>
      {#each data.ensembles.sections as section}
        <HeaderNavItem href={section.href} text={section.text} />
      {/each}
    </HeaderNavMenu>
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href={data.dashboard.href} text={data.dashboard.text} />
    <SideNavMenu text={data.repertoire.text} expanded>
      {#each data.repertoire.sections as section}
        <SideNavMenuItem href={section.href} text={section.text} />
      {/each}
    </SideNavMenu>
    <SideNavMenu text={data.ensembles.text} expanded>
      {#each data.ensembles.sections as section}
        <SideNavMenuItem href={section.href} text={section.text} />
      {/each}
    </SideNavMenu>
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <slot />
      </Column>
    </Row>
  </Grid>
</Content>
