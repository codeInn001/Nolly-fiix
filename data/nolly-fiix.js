const main = document.querySelector('.main')

const datas = [
    {
        id:0,
        image:'https://drive.google.com/uc?export=view&amp;id=1ylNvNlyBOcqGCzC7KrQLG956T7682CLo',
        title:'The Redemption',
        year: 2020,
        likes:0,
        price:'$20'
    },
    {
        id:1,
        image:'https://drive.google.com/uc?export=view&amp;id=1ylNvNlyBOcqGCzC7KrQLG956T7682CLo',
        title:'Africa Tech Root',
        year: 2020,
        likes:10,
        price:'$20'
    },
    {
        id:2,
        image:'https://drive.google.com/uc?export=view&amp;id=1ylNvNlyBOcqGCzC7KrQLG956T7682CLo',
        title:'The Invisible Man',
        year: 2020,
        likes:4,
        price:'$20'
    },
    {
        id:3,
        image:'https://drive.google.com/uc?export=view&amp;id=1ylNvNlyBOcqGCzC7KrQLG956T7682CLo',
        title:'The Complicated Project',
        year: 2020,
        likes:7,
        price:'$20'
    },
    {
        id:4,
        image:'https://drive.google.com/uc?export=view&amp;id=1ylNvNlyBOcqGCzC7KrQLG956T7682CLo',
        title:'Simply Javascript',
        year: 2020,
        likes:0,
        price:'$20'
    },
    {
        id:5,
        image:'https://drive.google.com/uc?export=view&amp;id=1ylNvNlyBOcqGCzC7KrQLG956T7682CLo',
        title:'The New Web',
        year: 2020,
        likes:5,
        price:'$20'
    }
]

console.log('hh')

let storage = setItem.localtorage('storage', JSON.stringify(datas))

getStorage ? getItem(JSON.stringify('storage')) : datas;
console.log(getStorage)
const sortedArray = getStorage.sort((a,b) => b.likes - a.likes);



function moviesTemplate(_data) {
    return 
    `<section class="movie-section" data-id=${_data.id}>
        <img src=${_data.image} alt="" width="250" height="300">
        <div class="movie-details">
            <h3 class="movie-name">${_data.title}</h3>
            <p class="movie-year">${_data.year}</p>
            <i class="fa fa-heart-o" aria-hidden="true" data-id=${_data.id}></i><span class="likes-number">${_data.likes} likes</span>
            <p class="price"  data-id=${_data.id}>${_data.price}</p>
        </div>
    </section>`
}

function renderMovies() {}


window.addEventListener('load', ()=> {
    const each = sortedArray.forEach(data => {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = moviesTemplate(data)
        main.appendChild(newDiv)
        
    })
})


main.addEventListener('click', (e)=> {
    const id = e.target.dataset.id
    if(e.target.className.includes('fa-heart-o')) {
        console.log(e.target)
        sortedArray[id].likes++
        e.target.nextSibling.innerHTML = sortedArray[id].likes + ' likes'
        console.log(datas[id].likes)
    }
})

function increasePrice(_id) {
    const parent = e.target.parent
    if(sortedArray[id].likes % 20 === 0) {
        sortedArray[_id].price++
        parent.lastChild.innerHTML = sortedArray[_id].price
    }

    return;
}
console.log(sortedArray)
