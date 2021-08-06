const content_block = document.querySelector('.main-block__list')
const testBtn = document.getElementById('testBtn')
const resetBtn = document.getElementById("resetBtn")
const option = { headers: { accept: 'application/json' } };

// const scanIp = () => {
//     axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=157b238cdaeb49b4b75675c5d012003a`, option)
//         .then((response) => {
//             console.log(response.data)
//         })
//         .catch(err => {
//             console.log(err.message);
//         })

// }

const vpnTestProcess = () => {
    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=157b238cdaeb49b4b75675c5d012003a`, option)
        .then((response) => {
            const targets = ["is_vpn", "ip_address", "country"];
            document.createElement('li').classList.add('list__item details').appendChild('<strong class="details__key">$>_is vpn enabled:</strong>')
                //   <li class="list__item details" id="is_vpn"><strong class="details__key">$>_is vpn enabled:</strong> </li>')
            content_block.append("Some text")
        })
        .catch(err => {
            console.log(err.message);
        })
}



testBtn.addEventListener('click', vpnTestProcess)








//     let SearchForm = document.querySelector('#searchForm')
// let Delete = document.querySelector('#Delete')
// let btnSearch = document.querySelector('#TvSearchBtn');
// let inputSearch = document.querySelector('#TvSearchInput');
// let div = document.querySelector('#imgContainer')
// let config = { headers: { Accept: 'application/json' } }

// let searchfn = async() => {
//     let request = await axios.get(`http://api.tvmaze.com/search/shows?q=${inputSearch.value}`, config);
//     let result = request.data;
//     try {
//         for (peice of result) {
//             if (peice.show.image) {
//                 let imgsSource = peice.show.image.medium
//                 imgMaker(imgsSource);
//                 inputSearch.value = ''
//             }
//         }
//     } catch (e) {
//         alert(e);
//     }

// }

// let imgMaker = (Src) => {
//     let Img = document.createElement('img')
//     Img.src = Src;
//     Img.classList.add("img")
//     div.append(Img);
//     div.classList.add('grey')

// }

// let Deletefn = () => {
//     if (div.childElementCount === 0) {
//         alert('YOUR CONTAINER IS EMPTY!')
//     } else {
//         for (let i = 0; i < div.childElementCount; i++) {
//             div.firstElementChild.remove()
//             div.lastElementChild.remove()
//         }
//     }

// }



// SearchForm.addEventListener('submit', (evnt) => {
//     evnt.preventDefault()
// })
// btnSearch.addEventListener('click', searchfn)
// Delete.addEventListener('click', Deletefn)