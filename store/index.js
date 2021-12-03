export const state = () => ({
    colorTheme: '#1976d2',
    isDart: false,
    itemCharacter: {}
})

export const mutations = {
    setModoOscuro(state, modoOscuro) {
        state.isDart = modoOscuro
    },
    setColorTheme(state, Color) {
        state.colorTheme = Color
    },
    setItemCharacter(state, item) {
        state.itemCharacter = item
    }
}

export const getters = {
    getModoOscuro(state) {
        return state.isDart
    },
    getColorTheme(state) {
        return state.colorTheme
    },
    getItemCharacter(state) {
        return state.itemCharacter
    }
}
