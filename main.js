const app = Vue.createApp({
    data() {
        return{
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            onSale: true,
            inventory: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            cart: 0,
            status: 'Available',
            status2: 'Unavailable'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            this.inventory += 1
            this.cart -= 1
            
        }
    }
})