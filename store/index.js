export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      value: 'name',
    },
    { text: 'Phone', value: 'Phone' },
    { text: 'Espresso', value: 'Espresso' },
    { text: 'Americano', value: 'Americano' },
    { text: 'Latte', value: 'Latte' },
    { text: 'Cappuccino', value: 'Cappuccino' },
    { text: 'Mocha', value: 'Mocha' },
    { text: 'Macchiato', value: 'Macchiato' },
    { text: 'Frappe', value: 'Frappe' },
    { text: 'Affogato', value: 'Affogato' },
  ],
})
export const mutations = {
  input(
    state,
    {
      name,
      Phone,
      Espresso,
      Americano,
      Latte,
      Cappuccino,
      Mocha,
      Macchiato,
      Frappe,
      Affogato,
    }
  ) {
    state.data.push({
      name,
      Phone,
      Espresso,
      Americano,
      Latte,
      Cappuccino,
      Mocha,
      Macchiato,
      Frappe,
      Affogato,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
