const input = document.getElementById('searchInput');

const articles = document.getElementsByTagName('li');

const  getHTMLlist = (words, search)=>{
    let listHtml = '';
    words.forEach((word) => {
        const wordLower = word.toLowerCase();
        const searchLower = search.toLowerCase();

        const regex = new RegExp(searchLower, 'g');
        let match;
        let lastIndex = 0;
        while ((match = regex.exec(wordLower)) !== null) {
            const startIndex = match.index;
            const endIndex = match.index + search.length;
            listHtml += word.substring(lastIndex, startIndex);
            listHtml += `<span class="highlight">${word.substring(startIndex, endIndex)}</span>`;
            lastIndex = endIndex;
        }
        listHtml += word.substring(lastIndex) + " ";
    });
    listHtml =  listHtml;
    return listHtml;
}

input.addEventListener('input', (e)=>{
    const search = e.target.value;
    if(search != ""){
        const articlesArray = Array.from(articles);

        articlesArray.forEach(article => {
            const words = article.textContent.toLowerCase();
            if (words.includes(search.toLowerCase())) {
                console.log(search, words);
                const allwords= words.split(' ');
                article.innerHTML = getHTMLlist(allwords, search);
            }else{
                article.classList.add("notVisible");
            }
        });
    }else{
        const articlesArray = Array.from(articles);
        articlesArray.forEach(article =>{
            article.innerHTML = article.textContent;
            article.classList.remove("notVisible");
        })
    }
})
