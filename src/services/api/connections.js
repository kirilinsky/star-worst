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
    .get("api/units")
}