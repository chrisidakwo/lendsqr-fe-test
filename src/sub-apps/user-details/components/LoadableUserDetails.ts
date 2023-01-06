import loadable from "@loadable/component";

const LoadableUserDetails = loadable(() => import('./UserDetail'));

export default LoadableUserDetails;
