
const form = document.querySelector('#gifForm')
const btn = document.querySelector('#btn')
const div = document.querySelector('#image')
const remove = document.querySelector('#remove')


     async function searchGif(search){
         const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=BTGNnq4FQSEXmbQC4mFM8e2ACFo7r9tC
`)
         const numResults = Math.floor(Math.random() * 33)

         const img = document.createElement('img')
         img.src = res.data.data[numResults].images.original.url
        div.append(img)
}

form.addEventListener('submit',function(evt){
evt.preventDefault();
    const text = document.querySelector('#gifName')
    let val = text.value
    searchGif(val)
})

remove.addEventListener('click', function () {
    div.innerHTML = ''
})
