import { createSound } from "./audio"
import { startRecording, stopRecording } from "./recording"

export const SoundAction = {
  record: {
    start: startRecording,
    stop: stopRecording,
  },
  sound: {
    create: createSound,
  },
}
