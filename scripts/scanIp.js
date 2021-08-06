const content_block = document.querySelector('.main-block__list')
const testBtn = document.getElementById('testBtn')
const resetBtn = document.getElementById("resetBtn")
const option = { headers: { accept: 'application/json' } };


const elCreator = (val) => {

    const item_key = document.createElement('strong');
    item_key.classList.add('details__key');
    item_key.append("$>_" + val + " :  ")
    const item = document.createElement('li');
    item.classList.add('list__item')
    item.append(item_key)
    item.append(Data_values[Data_keys.indexOf(val)])
    content_block.append(item)


}
const elDestroyer = (parentNode) => {
    while (parentNode.childElementCount > 0) {
        parentNode.firstElementChild.remove();
    }
}

const vpnTestProcess = () => {
    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=157b238cdaeb49b4b75675c5d012003a`, option)
        .then((response) => {

            elDestroyer(content_block);

            // this is somehow counter intuitive cuz the function elCreator does this as well
            // but, the "is_vpn" feild is nested inside an object which can be accessed by the key "security"
            // thus we cannot use the elCreator function, but we will use it after changing it a bit!
            const item_key = document.createElement('strong');
            item_key.classList.add('details__key');
            item_key.append("$>_" + "is_vpn" + " :")
            const item = document.createElement('li');
            item.append(item_key)
            item.append(response.data.security.is_vpn)
            content_block.append(item)



            // get the keys and the values in deffrent arrays but each key and values will have the same index
            Data_values = Object.values(response.data)
            Data_keys = Object.keys(response.data)



            // select the targeted field then for each feild create it own element and populate it within the DOM
            const targets = ["ip_address", "country", "country_code", "continent", "longitude", "latitude"]
            targets.forEach(element => {
                elCreator(element)

            });



        })
        .catch(err => {
            console.log(err.message);

        })
}




testBtn.addEventListener('click', vpnTestProcess)