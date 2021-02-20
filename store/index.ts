import { getterTree, mutationTree, actionTree, getAccessorType } from 'nuxt-typed-vuex';

export const state = () => ({
  isLoading: false
});

export type IRootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  isLoading: (state: IRootState) => state.isLoading
});

// UPPER CASE
export const mutations = mutationTree(state, {
  SET_IS_LOADING: (state: IRootState, isLoading: boolean) => {
    state.isLoading = isLoading;
  }
});

// camelCase
export const actions = actionTree({ state, getters, mutations }, {
  setIsLoading: ({ commit }, isLoading: boolean) => {
    commit('SET_IS_LOADING', isLoading);
  }
});

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
});
