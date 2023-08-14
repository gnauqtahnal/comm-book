import { getAuth, signInAnonymously } from "firebase/auth"

export const auth = getAuth()

// signInAnonymously(auth)
//   .then(() => {
//     // Signed in..
//     console.log('signed in')
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//     // ...
//   })
