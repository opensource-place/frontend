import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import CONSTANTS from '../../redux/actions'

const Search = styled.div`
  display: flex;
  width: 400px;
  height: 480px;
  border: 1px solid black;
  margin: 0 48px 0 0;
`

/*eslint-disable*/
const SearchBox = () => {
  const { filter } = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  return (
    <Search>
      <div>
        <input
          className="Input"
          value={filter}
          onChange={(e) => dispatch({ type: CONSTANTS.FILTER, filter: e.target.value })}
        />
      </div>
    </Search>
  )
}
export default SearchBox
