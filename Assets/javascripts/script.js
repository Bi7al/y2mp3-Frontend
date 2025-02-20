document.getElementById('convertBtn').addEventListener('click', async function (event) {
    event.preventDefault();
    var input = document.getElementById('url').value;
    const encodedUrl = encodeURIComponent(input);
    let response = await fetch(`https://y2mp3-backend.vercel.app/download/${encodedUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json();
    console.log(data);
})
