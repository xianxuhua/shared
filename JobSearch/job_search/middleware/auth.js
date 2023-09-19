export default function ({ route, store, redirect }) {
  if (route.path === "/my" && store.state.user.is_enterprise) {
    return redirect("/my_enterprise")
  }
  if (route.path === "my_enterprise" && !store.state.user.is_enterprise) {
    return redirect("/my")
  }
  if (!store.state.user.token) {
    return redirect('/login')
  }
}
