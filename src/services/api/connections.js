import { api } from './base'

export function tryToSignIn(data) {
  return api()
    .post("auth/signup", data, {
      withCredentials: true
    })
}