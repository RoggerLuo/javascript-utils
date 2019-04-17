import React from 'react';
import { connect } from 'dva';
import dvax,{Model} from 'dvax'
import fetch,{uploadFetch} from 'components/dvaxFetch'
import App from './App'
import './model'
dvax.config({ effects: {fetch,uploadFetch}})
const DvaxApp = dvax.connect(App)
export default DvaxApp
// export default connect(state=>state.productAudit)(DvaxApp)
