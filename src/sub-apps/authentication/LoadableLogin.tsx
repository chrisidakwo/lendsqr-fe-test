import loadable from '@loadable/component'

const LoadableLogin = loadable(() => import('./components/Login'));

export default LoadableLogin;
