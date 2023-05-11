const btn = document.getElementById('btn')

// API Key KADZwEqjkTxFLi8E1LnA5gJnC2i0REIzUk0grKeG6Ao

// HTML

const imgAPI = document.getElementById('imgAPI')
const description = document.getElementById('description')
const created_at = document.getElementById('created_at')



async function getMethod(){
    const data = await fetch(`https://api.unsplash.com/photos/?client_id=KADZwEqjkTxFLi8E1LnA5gJnC2i0REIzUk0grKeG6Ao`).then((e) => e.json())
    const dataRandom = Math.floor(Math.random() * data.length)

    imgAPI.style.backgroundImage = `url('${data[dataRandom].urls.full}')`
    description.textContent = `DEscription: ${data[dataRandom].alt_description}`
    created_at.textContent = `Date: ${data[dataRandom].created_at}`


    console.log(data[dataRandom].urls.full)
    console.log(data[dataRandom].alt_description)
    console.log(data[dataRandom].created_at)


}

btn.addEventListener('click', getMethod)