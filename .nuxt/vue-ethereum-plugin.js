import Vue from 'vue'

import VueEthereum from 'vue-ethereum'

Vue.use(VueEthereum)

export default ({app}) => {
    // inject options from module
    const pluginOptions = [{}][0]
    app.eth = new VueEthereum(pluginOptions)
}
