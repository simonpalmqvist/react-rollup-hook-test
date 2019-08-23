import { withContext } from '../ooh'
import { NameContext } from '../stores/nameStore'

import View from '../components/View'

const mapStateToProps = ({ name, setName }) => ({
  name,
  setName
})

export default withContext(NameContext, mapStateToProps)(View)
