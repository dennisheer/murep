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
  import type {LayoutData} from './$types';

  export let data: LayoutData;
  let isSideNavOpen = false;
</script>

<Header platformName="murep" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent/>
  </svelte:fragment>
  <HeaderNav>
    {#each data.routes as route (route.text)}
      {#if route.sections}
        <HeaderNavMenu text={route.text}>
          {#each route.sections as section}
            <HeaderNavItem href={section.href} text={section.text}/>
          {/each}
        </HeaderNavMenu>
      {:else}
        <HeaderNavItem href={route.href} text={route.text}/>
      {/if}
    {/each}
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    {#each data.routes as route (route.text)}
      {#if route.sections}
        <SideNavMenu text={route.text} expanded>
          {#each route.sections as section}
            <SideNavMenuItem href={section.href} text={section.text}/>
          {/each}
        </SideNavMenu>
      {:else}
        <SideNavLink href={route.href} text={route.text}/>
      {/if}
    {/each}
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <slot/>
      </Column>
    </Row>
  </Grid>
</Content>
