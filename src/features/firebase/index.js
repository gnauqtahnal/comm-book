import * as app from './app'
import * as auth from './auth'
import * as storage from './storage'

export const firebase = {
  storage: {
    getRef: storage.getRef,
    upload: storage.upload,
    useUploadProgress: storage.useUploadProgress,
  },
}
