import { withContext } from '../ooh'
import { ItemContext } from '../stores/itemStore'

import Header from '../components/Header'

const mapStateToProps = ({ item }) => ({ item })

export default withContext(ItemContext, mapStateToProps)(Header)
