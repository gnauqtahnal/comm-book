import { imagePickFromCamera, imagePickFromLibrary } from "./picker"
import { imageResize } from "./resize"

export const ImageAction = {
  pick: {
    library: imagePickFromLibrary,
    camera: imagePickFromCamera,
  },
  resize: imageResize,
}
