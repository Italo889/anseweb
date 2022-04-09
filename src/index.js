let root = document.querySelector("#root")
let search = document.querySelector("#search")
let btn = document.querySelector("#btn")
let anime = search.value


btn.addEventListener("click", () => {
  let anime = `https://api.jikan.moe/v4/anime?q=${search.value.toLowerCase().replace(" ", "%")}`
  apiRequest(anime)
})


const apiRequest = async (animeSearch) => {
  const request = await fetch(`https://api.jikan.moe/v4/anime?q=${animeSearch}&limit=12`)
    .then(req => req.json())
    .then(res => res)

  animeList(request)
}



const animeList = async (anime) => {
  const animeData = await anime.data.map(list => {
    createCards(list)
  })
}

const createCards = (animeData) => {
  let div = document.createElement("div"),
    image = document.createElement('img'),
    title = document.createElement("p"),
    original_title = document.createElement("p"),
    source = document.createElement("p"),
    type = document.createElement("p"),
    episodes = document.createElement("p"),
    status = document.createElement("p")

  image.setAttribute('class', 'card-image')
  div.setAttribute("class", "card")
  title.setAttribute("class", "nome")
  original_title.setAttribute("class", "nome-original")
  source.setAttribute("class", "fonte")
  type.setAttribute("class", "tipo")
  episodes.setAttribute("class", "episodios")
  status.setAttribute("class", "status")

  image.src = `${animeData.images.webp.image_url}`
  title.innerHTML = `Nome: ${animeData.title}`
  original_title.innerHTML = `Nome original: ${animeData.title_japanese}`
  source.innerHTML = `Fonte: ${animeData.source}`
  type.innerHTML = `Tipo: ${animeData.type}`
  episodes.innerHTML = `Episódios: ${animeData.episodes}`
  status.innerHTML = `Status: ${animeData.status}`

  root.appendChild(div)
  div.appendChild(image)
  div.appendChild(title)
  div.appendChild(original_title)
  div.appendChild(source)
  div.appendChild(type)
  div.appendChild(episodes)
  div.appendChild(status)
}

apiLoad()

