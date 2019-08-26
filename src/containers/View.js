import { withContext } from '../ooh'
import { ItemContext } from '../stores/itemStore'

import View from '../components/View'

const mapStateToProps = ({ list, addItem, pickItem, isFetchingList }) => ({
  list,
  addItem,
  pickItem,
  isFetchingList
})

export default withContext(ItemContext, mapStateToProps)(View)
