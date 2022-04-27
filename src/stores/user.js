import { defineStore } from "pinia";
import axios from "axios";
import { setToken, getToken, removeToken } from './tokenStorage'



export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        loggedIn: !!getToken(),
        user: null
    }),
    // persist: {
    //     key: "keep-moment",
    //     storage: window.localStorage,
    //     paths: ["token"],
    // },

    getters: {
        isAuth: (state) => state.loggedIn,
    },
    actions: {
        async login(credentials) {

            // const response = await axios.$post("api/login", credentials);
            // if (response) {
            //   const token = `Bearer ${response.token}`;
            //   setToken(token);
            //   axios.defaults.headers.common["Authorization"] = token;
            //   await this.fetchUser();
            // }

            return new Promise((resolve) => {
                setTimeout(() => {
                    setToken("token");
                    this.fetchUser();
                    resolve();
                }, 1000);
            });
        },

        logout() {
            //const response = await axios.$post("api/logout");
            //if (response) {
              removeToken();
              this.$reset();
            //} 
        },

        fetchUser() {
            // this.user = await axios.$get("api/me");
            this.loggedIn = true;
        },        
    },
});
