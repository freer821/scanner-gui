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
    fetchAllImages({ commit }, images) {
      return new Promise((resolve, reject) => {
        try {
          commit("setImages", images);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },

    scanImage({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          fetch("http://localhost:5000/api/image")
            .then((reponse) => reponse.blob())
            .then((blob) => {
              commit("addImage", { blob: blob });
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
