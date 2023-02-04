export type Routes = { routes: (RouteWithHref | RouteWithSections)[] };

interface RouteBase {
  text: string;
}

interface RouteWithHref extends RouteBase {
  href: string;
}

interface RouteWithSections extends RouteBase {
  sections: RouteWithHref[];
}
