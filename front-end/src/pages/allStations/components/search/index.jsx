import './index.css'
import { IoSearchSharp } from "react-icons/io5";
import '../../../../styles/utilities.css'


const Search = ({handleSearch,handleTerms})=>{

return (
<div className='flex between search'>
<input type="text" onChange={handleTerms} placeholder='search for stations'/>
<button  onClick={handleSearch}><IoSearchSharp className='icon'/></button>
</div>
)
}

export default Search