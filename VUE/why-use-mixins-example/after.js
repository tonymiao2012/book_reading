/**
 * Created by antowa on 12/15/17.
 */
const toggle = {

    data() {

        return {

            isShowing: false

        }

    },

    methods: {

        toggleShow() {

            this.isShowing = !this.isShowing;

        }

    }

}

const Modal = {

    template: '#modal',

    mixins: [toggle],

    components: {

        appChild: Child

    }

};

const Tooltip = {

    template: '#tooltip',

    mixins: [toggle],

    components: {

        appChild: Child

    }

};