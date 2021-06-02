import { getterTree, mutationTree, actionTree, getAccessorType } from 'nuxt-typed-vuex';

export const state = () => ({
  isLoading: false,
  themeColor: 'DEFAULT' as string
});

export type IRootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  isLoading: (state: IRootState) => state.isLoading,
  themeColor: (state: IRootState) => state.themeColor
});

// UPPER CASE
export const mutations = mutationTree(state, {
  SET_IS_LOADING: (state: IRootState, isLoading: boolean) => {
    state.isLoading = isLoading;
  },
  SET_THEME_COLOR: (state: IRootState, themeColor: string) => {
    state.themeColor = themeColor;
  }
});

// camelCase
export const actions = actionTree({ state, getters, mutations }, {
  setIsLoading: ({ commit }, isLoading: boolean) => {
    commit('SET_IS_LOADING', isLoading);
  },
  setThemeColor: ({ commit }, themeColor: string) => {
    commit('SET_THEME_COLOR', themeColor);
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
