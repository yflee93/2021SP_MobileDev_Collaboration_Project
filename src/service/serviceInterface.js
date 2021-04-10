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
    courtKey: court.key,
    courtName: court.name,
    time: time,
  }
  await db.ref(`/users/${username}/reservations`).push(newRevervation)
  let index = convertTimetoIndex(time)
  await db.ref(`/courts/${court.key}/reservations/${index}`).set(false)
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
    reservations: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
  })
}

export const loadAllCourts = () => {
  return db.ref('/courts')
}

export const convertTimetoIndex = (time) => {
  const timetable = [
    '6am-7am',
    '7am-8am',
    '8am-9am',
    '9am-10am',
    '10am-11am',
    '11am-12pm',
    '12pm-1pm',
    '1pm-2pm',
    '2pm-3pm',
    '3pm-4pm',
    '4pm-5pm',
    '5pm-6pm',
    '6pm-7pm',
    '7pm-8pm',
    '8pm-9pm',
    '9pm-10pm',
    '10pm-11pm',
    '11pm-12am',
  ]
  return timetable.indexOf(time)
}
