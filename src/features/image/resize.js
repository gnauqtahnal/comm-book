import { SaveFormat, manipulateAsync } from "expo-image-manipulator"
import { Alert } from "react-native"

import { Constant } from "../../constant"

export const imageResize = async (source) => {
  try {
    const result = await manipulateAsync(
      source,
      [
        {
          resize: {
            height: Constant.image.resize.height,
            width: Constant.image.resize.width,
          },
        },
      ],
      {
        compress: 1,
        format: SaveFormat.PNG,
      },
    )
    return result.uri
  } catch (error) {
    Alert.alert("Image Resize", error)
    return undefined
  }
}
