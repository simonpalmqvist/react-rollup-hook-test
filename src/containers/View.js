import { withContext } from '../ooh'
import { ItemContext } from '../stores/itemStore'

import View from '../components/View'

const mapStateToProps = ({ list, addItem, pickItem }) => ({
  list,
  addItem,
  pickItem
})

export default withContext(ItemContext, mapStateToProps)(View)
