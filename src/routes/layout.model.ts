export type RouteDefinition = { [key in Module]: Route | { text: string; sections: Route[] } };

export type RouteDefinitionTest = {
  [key in Module]: ({ text: string } & { href: string }) | { sections: Route[] };
};

type Module = 'dashboard' | 'repertoire' | 'ensembles';

type Route = {
  href: string;
  text: string;
};
