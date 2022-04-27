import { useUserStore } from "../stores/user";

export default {
  install: ({ config }) => {
    const userStore = useUserStore(); 
    config.globalProperties.$auth = userStore

    if (userStore.loggedIn) {
        userStore.fetchUser();
    }
  },
};