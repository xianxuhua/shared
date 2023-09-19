import fa from "element-ui/src/locale/lang/fa";

export const state = () => ({
  user: {
    id: 0,
    token: "",
    is_enterprise: false,
    enterprise_id: 0,
    is_admin: false,
  }
});

export const mutations = {
  setToken(state, user) {
    state.user.id = user.id
    state.user.token = user.token
    state.user.is_enterprise = user.is_enterprise
    state.user.enterprise_id = user.enterprise_id
    state.user.is_admin = user.is_admin
  }
};

