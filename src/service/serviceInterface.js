import { db } from '../../db'

export const createUser = async (username, password) => {
  await db.ref('/users').child(username).set({
    password: password,
  })
}

export const allUsers = async () => {
  return db.ref('/users')
}

export const checkIfUserExists = async (username) => {
  let a = true
  await db
    .ref('/users')
    .child(username)
    .once('value', (snapshot) => {
      a = snapshot.val() ? Object.values(snapshot.val())[0] : false
    })

  return a
}

export const reserve = async (username, court, time) => {
  const newRevervation = {
    court: court,
    time: time,
  }
  await db.ref(`/users/${username}/reservations`).push(newRevervation)
}

export const loadAllReservations = (username) => {
  return db.ref(`/users/${username}/reservations`)
}
