import { withContext } from '../ooh'
import { NameContext } from '../stores/nameStore'

import View2 from '../components/View2'

const mapStateToProps = ({ quote }) => ({
  quote
})

export default withContext(NameContext, mapStateToProps)(View2)
