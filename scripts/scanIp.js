const content_block = document.querySelector('.main-block__list')
const testBtn = document.getElementById('testBtn')
const resetBtn = document.getElementById("resetBtn")
const option = { headers: { accept: 'application/json' } };

const vpnTestProcess = () => {
    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=157b238cdaeb49b4b75675c5d012003a`, option)
        .then((response) => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err.message);
        })
}







testBtn.addEventListener('click', vpnTestProcess)