import { defineStore } from "pinia"

type User = {
    email: string
    name: string
}

export const useAuthStore = defineStore({
  id: "user",
  state: () => ({
    user: null as User | null
  }),
  actions: {
    async fetchUser(){
        const res = await fetch("http://localhost:3000/api/session", {
            method: "GET",
            credentials: "include",
            headers: {"Content-Type": "application/json"}
        })
          const data = await res.json()
          this.user = data.userData
          console.log("User set: ", this.user)
    },
    async setUser(user: {email: string, name: string}){
        this.user = user
    }
  }
})