<template>
<div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <div style="text-align:center;" class="mt-5">
            <h6 style="font-family: Trebuchet MS">{{user_details.name}}</h6>
            <v-chip outlined small color="#7EABA8">
                <v-icon left>mdi-account-circle</v-icon>
                <span style="font-family: Trebuchet MS">LOGGED-In AS {{role}}</span>
            </v-chip>

        </div>
        <hr>
        <v-list dense>
            <template v-for="item in items" :to="item.to">
                <v-row v-if="item.heading" :key="item.heading" align="center">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <a href="#!" class="body-2 black--text">EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="" :to="item.to">
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item class="a" v-for="(child, i) in item.children" :key="i" link :to="child.to">
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item class="a" v-else :key="item.text" link :to="item.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dense color="#7EABA8" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">DISHTANSYA</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon href="#" style="text-decoration: none;">
            <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="#" style="text-decoration: none;">
            <v-icon>mdi-instagram</v-icon>
        </v-btn>
         <v-btn icon style="text-decoration: none;" @click="logout()">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        drawer: null,
        user_details: {},
        items: [
            {
                icon: 'mdi-chat',
                text: 'Message Us',
                to: 'message',
            },
            {
                icon: 'mdi-cart',
                text: 'My Shopping Cart',
                to: 'cart',
            },
            {
                icon: 'mdi-chevron-up',
                'icon-alt': 'mdi-chevron-down',
                text: 'Settings',
                children: [
                    {
                        icon: 'mdi-plus',
                        text: 'Category',
                        to: 'category'
                    },
                    {
                        icon: 'mdi-plus',
                        text: 'New Product',
                        to: 'new_product'
                    },
                ]
            }
        ]
    }),
    created(){
        this.users()
        var user = localStorage.getItem('user')
    },
    methods: {
        logout() {
            this.$router.push({
                name: 'login'
            })
            
        },
        users() {
            this.user_details = JSON.parse(localStorage.getItem('user'))
            this.role = this.user_details.role == 1 ? 'ADMIN' : 'USER';
        },
    },
    props: {
        source: String
    }
}
</script>
<style scoped>
.a:hover {
    cursor: pointer;
    color: #F28DBC;
    text-decoration: none;
}
</style>



