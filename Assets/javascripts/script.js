document.getElementById('convertBtn').addEventListener('click', async function (event) {
    event.preventDefault();
    var input = document.getElementById('url').value;
    let response = await fetch(`https://y2mp3-backend.vercel.app/download/${input}`);
    let data = await response.json();
    console.log(data);
})
