const app = Vue.createApp({
    data() {
        return{
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            onSale: true,
            inventory: 5,
            url: 'https://www.camt.cmu.ac.th/index.php/th/'
        }
    }
})