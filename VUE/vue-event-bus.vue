//Creating event bus
import Vue from 'vue'
export const bus = new Vue();

//Sending events
<template>
    <div class="pleeease-click-me" @click="emitGlobalClickEvent()"></div>
</template>

<script>
    // Import the EventBus we just created.
    import { EventBus } from './event-bus.js';

    export default {
        data() {
            return {
                clickCount: 0
            }
        },

        methods: {
            emitGlobalClickEvent() {
                this.clickCount++;
                // Send the event on a channel (i-got-clicked) with a payload (the click count.)
                EventBus.$emit('i-got-clicked', this.clickCount);
            }
        }
    }

    //Receiving event
    import { EventBus } from './event-bus.js';

    // Listen for the i-got-clicked event and its payload.
    EventBus.$on('i-got-clicked', clickCount => {
        console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
    });

    // Listen to the event.
    EventBus.$on('i-got-clicked', clickHandler);

    // Stop listening.
    EventBus.$off('i-got-clicked', clickHandler);
</script>