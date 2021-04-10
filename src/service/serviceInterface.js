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

export const reserve = async (username, court, time, date) => {
  const newRevervation = {
    courtKey: court.key,
    courtName: court.name,
    date: date,
    time: time,
  }
  await db.ref(`/users/${username}/reservations`).push(newRevervation)
  await db.ref(`/courts/${court.key}/reservations/${date}`).set({ time: time })
}

export const cancelReserve = async (username, key) => {
  await db.ref(`/users/${username}/reservations`).child(key).remove()
}

export const loadAllReservations = (username) => {
  return db.ref(`/users/${username}/reservations`)
}

export const addCourt = async (el) => {
  await db.ref('/courts').push({
    name: el.name,
    address: el.address,
    location: el.location,
    ratings: el.ratings,
    popularity: el.popularity,
    maintainence: el.maintainence,
    rank: 0, //modify later with algo
  })
}

export const loadAllCourts = () => {
  return db.ref('/courts')
}
