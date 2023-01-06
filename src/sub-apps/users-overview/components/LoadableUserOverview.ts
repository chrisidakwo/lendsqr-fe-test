import loadable from "@loadable/component";

const LoadableUserOverview = loadable(() => import('./UserOverview'));

export default LoadableUserOverview;
