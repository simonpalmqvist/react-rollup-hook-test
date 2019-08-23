import { withContext } from '../ooh'
import { ItemContext } from '../stores/itemStore'

import View2 from '../components/View2'

const mapStateToProps = ({ item }) => ({
  item
})

export default withContext(ItemContext, mapStateToProps)(View2)
