import { GetterTree } from 'vuex';

import State from './state';

const getters: GetterTree<State, State> = {
    colour(state: State): string {
        return state.color;
    }
};

export default getters;
