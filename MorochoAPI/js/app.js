const btn = document.getElementById('btn')

// API Key KADZwEqjkTxFLi8E1LnA5gJnC2i0REIzUk0grKeG6Ao


async function getMethod(){
    const data = await fetch('https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2').then((e) => e.json())
    console.log(data)
}

btn.addEventListener('click', getMethod)