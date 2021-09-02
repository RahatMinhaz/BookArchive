const getError = document.getElementById('errors');

const searchBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    if(searchText === ''){
        getError.innerText = "Search Field Cannot be empty";
        return;
    }
    else{
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResults(data.docs))
    }
}



const displaySearchResults = books => {
    const searchResults = document.getElementById('search-result');
    searchResults.textContent = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class = "card-title">${book.title}</h5>
                <h5>By ${book.author_name}</h5>
                <h5>Published Year: ${book.first_publish_year}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        searchResults.appendChild(div);
    })
}