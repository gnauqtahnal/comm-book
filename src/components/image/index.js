import { Image as ImageBase } from "expo-image"

export const Image = ({ ...rest }) => {
  return <ImageBase contentFit="contain" cachePolicy="memory-disk" {...rest} />
}
