export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      value: 'name',
    },
    { text: 'Phone', value: 'Phone' },
    { text: 'Phone', value: 'Phone' },
    { text: 'Espresso', value: 'Es' },
    { text: 'Americano', value: 'Am' },
    { text: 'Latte', value: 'La' },
    { text: 'Cappuccino', value: 'Ca' },
    { text: 'Mocha', value: 'Mo' },
  ],
})
export const mutations = {
  input(state, { name, Phone, Es, Am, La, Ca, Mo }) {
    state.data.push({
      name,
      Phone,
      Es,
      Am,
      La,
      Ca,
      Mo,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
