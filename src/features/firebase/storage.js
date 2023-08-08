import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { app } from './app'
import { Alert } from 'react-native'
import { useMemo, useState } from 'react'

export const storage = getStorage(app)

export const getRef = (path) => ref(storage, path)

export const useUploadProgress = () => {
  const [task, setTask] = useState(undefined)
  const [progress, setProgress] = useState(0)

  return useMemo(() => {
    return {
      task: task,
      setTask: setTask,
      progress: progress,
      setProgress: setProgress,
    }
  }, [task, progress])
}

export const upload = async (file, ref) => {
  const task = uploadBytesResumable(ref, file)

  task.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Uploading', progress, '%', snapshot.state)
    },
    (error) => {
      Alert.alert('UploadFile', `${error}`)
    },
    () => {
      getDownloadURL(task.snapshot.ref).then((url) => {
        console.log('Uploaded:', url)
      })
    }
  )
}
