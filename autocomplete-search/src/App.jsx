import { useState } from 'react';
import './App.css';
import countryData from './resources/countryData.json';

function App() {
  const [search, setSearch] = useState('');
  const getVal = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const escFunc = (e) => {
    if (e.key === 'Escape') {
      document.getElementById('options').style.display = 'none';
      console.log('Escape')
    } else {
      document.getElementById('options').style.display = 'inline';
    }
  };
  const searchValue = search.toLowerCase();
  return (
    <div className="App">
      <h1>Search</h1>
      <div className="SearchArea">
        <div className='searchBar'>
          <input type="text" value={search} onChange={getVal} style={{ color: 'black' }} onKeyDown={escFunc} />
          <button className='searchButton'>Search</button>
        </div>
      </div>
      <div id="options" style={{ display: searchValue ? 'block' : 'none' }}>
        {countryData.filter((j) => {
            const name = j.name.toLowerCase();
            return searchValue && name.startsWith(searchValue);
          }).map((i) => (
            <div className='optionRow'>{i.name}</div>
          ))}
      </div>
    </div>
  );
}
export default App;