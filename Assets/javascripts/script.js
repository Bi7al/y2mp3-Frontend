document.getElementById('convertBtn').addEventListener('click', async function (event) {
    event.preventDefault();
    var input_value = document.getElementById('url').value;
    const encodedUrl = encodeURIComponent(input_value);
    try {
        let response = await fetch(`https://y2mp3-backend.vercel.app/download/${encodedUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch MP3 file.');
        }

        // Create a blob for the MP3 file
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // Create a temporary anchor element to download the file
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'converted.mp3';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(downloadUrl); // Clean up the blob URL
    } catch (error) {
        console.error('Error:', error);
    }
})

