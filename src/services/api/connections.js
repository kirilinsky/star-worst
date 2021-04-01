import { api } from './base'

export function tryToSignIn(data) {
  return api()
    .post("api/signup", data)
}

export function tryToLogIn(data) {
  return api()
    .post("api/login", data)
}

export function getUserInfo(token) {
  return api()
    .get("api/user", { headers: { "Authorization": `Bearer ${token}` } })
}

export function getUnits() {
  return api()
    .get("units/getAll")
}


export function buyUnit(id, token) {
  return api()
    .post("units/buy", { id }, { headers: { "Authorization": `Bearer ${token}` } })
}
