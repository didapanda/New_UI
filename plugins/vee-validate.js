import { extend, configure } from 'vee-validate'
import { required, alpha } from 'vee-validate/dist/rules'

extend('required', required)
extend('alpha', alpha)

export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) => app.i18n.t(`${values._rule_}`),
  })
}
