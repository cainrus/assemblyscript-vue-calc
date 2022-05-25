import {
    watchEffect,
    createApp,
    computed,
    toRefs,
    reactive,
    ref,
} from 'vue';

import * as releaseApi from "../build/release.js";
import * as debugApi from "../build/debug.js";

const app = createApp({});
app.component('Calculator', {
    template: '#calculator',
    model: {
        termA: 'keyup',
        termB: 'keyup'
    },
    props: {
        termA: {
            default: 0,
        },
        termB: {
            default: 0,
        },
    },
    setup(props) {
        const {
            termA,
            termB,
        } = toRefs(props);
        const debug = ref(localStorage.getItem('debug'));
        const sum = computed(() => api.instance.add(termA.value, termB.value));
        const api = reactive({
            get instance () { return debug.value ? debugApi : releaseApi; },
        });

        watchEffect(() => {
            debug.value === true
                ? localStorage.setItem('debug', '1')
                : localStorage.removeItem('debug');
        });

        const onfocus = (event) => {
            event.target.select();
        }

        return {
            onfocus,
            debug,
            termA,
            termB,
            sum,
        };
    },
});

app.mount('#app');