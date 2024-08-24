const cardsContainer = document.querySelector('.cards-container');
const getPostsAsyncDate = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(post => {
            cardsContainer.innerHTML = `
            <div class="card">
                <h2>${}</h2>
            </div>
        `;
        })

    }catch (e){
        console.error(e);
    }
}