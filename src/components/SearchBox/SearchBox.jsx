import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    const handleInputValues = (evt) => {
        onChange(evt.target.value.toLowerCase())
    }

  return (
    <div className={css.searchContainer}>
        <p>Find contacts by name</p>
        <input onChange={handleInputValues} value={value} type="text" />
    </div>
  )
}

export default SearchBox