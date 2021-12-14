import Vue from 'vue';
import { abilitiesPlugin } from '@casl/vue';
import defineAbilityFor from '@/mixins/ability.js';


export default function setCaslPermissions(permissions) {
    const ability = defineAbilityFor(permissions);
    Vue.use(abilitiesPlugin, ability);
};