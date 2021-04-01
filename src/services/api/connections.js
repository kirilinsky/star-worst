import { api } from './base'

export function tryToSignIn(data) {
  return api()
    .post("api/signup", data)
}

export function tryToLogIn(data) {
  return api()
    .post("api/login", data)
}

export function getUserInfo() {
  return api()
    .get("api/user")
}

export function getUnits() {
  return api()
    .get("units/getAll")
}
 


export function buyUnit(id, token) {
  return api()
    .post("units/getAll", { id }, { headers: { "Authorization": `Bearer ${token}` } })
}
