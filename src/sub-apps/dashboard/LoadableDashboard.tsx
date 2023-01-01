import loadable from '@loadable/component'

const LoadableDashboard = loadable(() => import('./Dashboard'));

export default LoadableDashboard;
