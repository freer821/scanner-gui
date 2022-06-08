import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      images: [],
    };
  },
  mutations: {
    addImage(state, image) {
      state.images.push(image);
    },
    setImages(state, images) {
      state.images = images;
    },
  },
  getters: {
    getImages(state) {
      return state.images;
    },

    getImage(state, id) {
      return state.images.filter((image) => image.id === id);
    },
  },
  actions: {
    fetchAllImages({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          fetch("http://localhost:5555/image-list")
            .then(reponse => reponse.json())
            .then(data => {
              console.log(data)
              commit("addImage", data);
              resolve();
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        }
      });
    },

    scanImage({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          fetch("http://localhost:5555/capture")
            .then((reponse) => reponse.json())
            .then(data => {
              commit("addImage", data);
              resolve();
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        }
      });
    },
  },
});

export default store;
