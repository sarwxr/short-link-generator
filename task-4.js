const makeShorten = async(longLink) => {
    try{
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`);
        const data = await res.json();
        loadLinks(data.result);
    } catch(error) {
        console.log(error);
    }
}

// load link from data
const loadLinks = (result) => {
    console.log(result);
    const container = document.getElementById('link-container');
    const p = document.createElement('p');
    p.classList.add('text-3xl', 'text-green-600');
    p.innerHTML = `
        Generated link: ${result.short_link}
    `;
    container.appendChild(p);
}



// event
document.getElementById('generate-button').addEventListener('click', function(){
    const longLink = document.getElementById('link-field').value;

    makeShorten(longLink);
})

// function is called in html onclick