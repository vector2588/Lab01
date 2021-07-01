const app = Vue.createApp({
    data() {
        return{
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            onSale: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            url: 'https://www.camt.cmu.ac.th/index.php/th/'
        }
    }
})