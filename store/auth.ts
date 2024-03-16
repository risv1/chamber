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
        const { user }: any = await useFetch("http://localhost:3000/api/session")
        if(user){
            this.user = user
        }
    },
    async setUser(user: {email: string, name: string}){
        this.user = user
    }
  }
})