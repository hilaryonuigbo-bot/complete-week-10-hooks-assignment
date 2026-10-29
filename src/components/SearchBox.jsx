
import { useEffect, useRef, useState } from 'react';

function SearchBox() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [searchText, setSearchText] = useState('');

  renderCount.current += 1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <h2>Search Box</h2>

      <input
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search here..."
      />

      <p>You typed: {searchText}</p>
      <p>Render count: {renderCount.current}</p>
    </section>
  );
}

export default SearchBox;