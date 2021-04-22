import { wrapFunctional } from './utils'

export { default as Toast } from '../../components/Toast.vue'

export const LazyToast = import('../../components/Toast.vue' /* webpackChunkName: "components/toast" */).then(c => wrapFunctional(c.default || c))
