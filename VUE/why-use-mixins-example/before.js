/**
 * Created by antowa on 12/15/17.
 */
// 模态框

const Modal = {

    template: '#modal',

    data() {

        return {

            isShowing: false

        }

    },

    methods: {

        toggleShow() {

            this.isShowing = !this.isShowing;

        }

    },

    components: {

        appChild: Child

    }

}

// 提示框

const Tooltip = {

    template: '#tooltip',

    data() {

        return {

            isShowing: false

        }

    },

    methods: {

        toggleShow() {

            this.isShowing = !this.isShowing;

        }

    },

    components: {

        appChild: Child

    }

}