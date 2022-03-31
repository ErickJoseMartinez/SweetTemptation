import { createStore } from 'vuex'

export default createStore({
  state: {
    colorChange: "",
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    gender: 'male',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    registro: '2008-04-11T11:56:41.461Z',
    phone: '031-202-9548',
    age: '18'
  },
  getters: {
  },
  mutations: {
    colorChange(state, color) {
      state.color = color;
    },
    dataChange(state,results){
      state.firstName = results[0].name.first;
      state.lastName = results[0].name.last;
      state.email = results[0].email;
      state.gender = results[0].gender;
      state.picture = results[0].picture.large;
      state.registro = results[0].registered.date;
      state.phone = results[0].phone;
      state.age = results[0].registered.age;
    }
  },
  actions: {
    async getUser({commit}) {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      console.log(results);
      commit("dataChange",results);
    },  
    colorChange({commit}, color) {
      commit("colorChange", color);
      console.log(color);
    }
  },
  modules: {
  }
})
