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
    .get("user/get", { headers: { "Authorization": `Bearer ${token}` } })
}

export function getUnits() {
  return api()
    .get("units/getAll")
}



export function getUnit(id) {
  return api()
    .get(`units/get/${id}` )
}

export function buyUnit(id, token) {
  return api()
    .post("units/buy", { id }, { headers: { "Authorization": `Bearer ${token}` } })
}


export function sellUnit(id, token) {
  return api()
    .post("units/sell", { id }, { headers: { "Authorization": `Bearer ${token}` } })
}



/* get all perks without auth middleware*/
export function getAllPerks(id) {
  return api()
    .get(`perks/getAll/${id}`)
}

export function buyPerk(unitId, perkId, token) {
  return api()
    .post("perks/buy", { unitId, perkId }, { headers: { "Authorization": `Bearer ${token}` } })
}