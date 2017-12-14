/**
 * Created by antowa on 12/14/17.
 * JSFiddle link: https://jsfiddle.net/L613xva0/13/
 */
const Foo = {
    name: 'foo',
    template: '<div><p v-for="n in numbers">{{ n }}</p></div>',
    data: function() {
        return {
            numbers: [Math.round(Math.random() * 10), Math.round(Math.random() * 10)]
        }
    }
}

const Bar = {
    template: '<div><p v-for="n in numbers"><strong>{{ n }}</strong></p></div>',
    data: function() {
        return {
            numbers: [Math.round(Math.random() * 10), Math.round(Math.random() * 10)]
        }
    }
}

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');