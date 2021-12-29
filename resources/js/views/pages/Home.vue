<template>
<div class="container-fluid">
    <div>
        <v-toolbar light extended height="4" v-show="Counter > 0">
            <v-toolbar-title class="dark--text mt-10" style="font-family:Trebuchet MS">
                {{Name}}
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col  class="mt-10" cols="3" v-for="list in product_list" :key="list.product_id">
                <v-card class="mt-10" max-width="400">
                    <v-img class="white--text align-end mt-10" height="200px" src="images/30ml_alcoholder.jpg">
                        <v-card-title>{{list.Name}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                      Available Stock: {{list.stock}} Pcs
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="#7EABA8" text @click="ShowProduct(list.ProductId)">
                            Order
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
    <v-dialog v-model="dialog" max-width="800px">
        <v-card>
            <v-card-text>
                <v-container>
                    <v-row v-for="detail in product_details" :key="detail.ProductId">
                        <v-col cols-3>
                            <v-card class="mx-auto mt-10" color="white" dark max-width="400">
                                <v-card-text class="text-h5 font-weight-bold">
                                    <v-img src="images/30ml_alcoholder.jpg" eager dense></v-img>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols-9>
                            <div class="mt-10">
                                <span>Product Description:</span><br>
                                <div class="mt-5">
                                    <p>
                                         Stay safe with our alcohol holder. Made in genuine leather, silver key hook and key ring. 30ml bottle spray is included!
                                    </p>
                                </div>
                            </div>
                            <div class="mt-10">
                                <span>Quantity:</span><br>
                                <div class="mt-5">
                                    <v-text-field type="text" style="text-align:center" v-model="qty"></v-text-field>
                                </div>
                            </div>
                            <div class="mt-9">
                                <v-btn class="form-control" outlined color="green" @click="Order(detail.ProductId)">
                                    <v-icon>mdi-cart-plus</v-icon> Place Order
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal darken-1" text @click="close">
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        product_list: {},
        qty: 0,
        Name: null,
        product_details: {},
        count: 1

    }),
    created() {
        this.GetProducts()
        
    },
    methods: {
        Order(product_id){
            this.user = JSON.parse(localStorage.getItem('user'))
            axios.post('api/order', {
                ProductId : product_id,
                Qty : this.qty,
                OrderBy : this.user.account_id
            })
            .then(res => {
                this.GetProducts()
                this.dialog = false
            })
        },
        ShowProduct(ProductId) {
            this.dialog = true
            axios.post('api/getproduct', {
                ProductId : ProductId
            })
            .then(res => {
                this.product_details = res.data
                this.Counter = res.data.length
            })
        },
        GetProducts(category_id) {
            axios.get('api/products')
                .then(res => {
                    this.product_list = res.data
                    this.Counter = res.data.length
                })
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
    }
}
</script>

<style scoped>
.a:hover {
    cursor: pointer;
    color: #26c6da
}

p {
    font-family: Trebuchet MS
}

.red {
    background-color: red;
}
</style>
