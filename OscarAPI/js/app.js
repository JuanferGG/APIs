const URL = 'https://api.themoviedb.org/3/movie/510?api_key=83f306c47065c18c987e852022b702fb'
const btn = document.getElementById('btn')

// API key 83f306c47065c18c987e852022b702fb
// URL https://api.themoviedb.org/3/movie/550?api_key=83f306c47065c18c987e852022b702fb

async function getMethod(){
    const data = await fetch(URL).then((e) => e.json())

    
    console.log(data)
}


btn.addEventListener('click', getMethod)