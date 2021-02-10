/*eslint-disable*/
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import { SearchBox, InstantSearch, Hits } from 'react-instantsearch-dom'
import { ProjectCard } from '../../components'

const Search = styled.div`
  display: flex;
  width: 400px;
  height: 480px;
  border: 1px solid black;
  margin: 0 48px 0 0;
`
const searchClient = algoliasearch('J3QJG4NGK8', '183866f0a1fd2f4bcb439b652550151c')

const SearchBoxx = () => {
  return (
    <Search>
      <InstantSearch indexName="issues" searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={({ hit }) => JSON.stringify(hit, null, 2)} />
      </InstantSearch>
    </Search>
  )
}
export default SearchBoxx
