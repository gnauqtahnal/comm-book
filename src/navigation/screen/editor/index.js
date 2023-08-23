import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '../../../components';

const Context = createContext();

const Provider = ({ children }) => {
  const initialArg = {
    text: '',
    image: {
      uri: '',
      url: '',
    },
    audio: {
      uri: '',
      url: '',
    },
    recording: null,
    duration: {
      minute: 0,
      second: 0,
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'text':
        const text = { ...state.text };

        if (action.text) {
          text = action.text;
        }

        return { ...state, text };

      case 'image':
        const image = { ...state.image };

        if (action.uri) {
          image.uri = action.uri;
        }

        if (action.url) {
          image.uri = action.url;
        }

        return { ...state, image };

      case 'audio':
        const audio = { ...state.audio };

        if (action.uri) {
          audio.uri = action.uri;
        }

        if (action.url) {
          audio.uri = action.url;
        }

        return { ...state, audio };

      case 'recording':
        return { ...state, recording: action.recording };

      case 'sound':
        return { ...state, sound: action.sound };

      case 'duration':
        return {
          ...state,
          duration: {
            minute: action.minute,
            second: action.second,
          },
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialArg);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const ContainerView = ({ children }) => {
  if (Platform.OS === 'ios') {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
      >
        {children}
      </View>
    );
  } else {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
      >
        {children}
      </SafeAreaView>
    );
  }
};

const CardView = () => {
  const { state } = useContext(Context);
  const [sound, setSound] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayback = (status) => {
    /* Update 'isPlaying' status */
    setIsPlaying(status.isPlaying);
  };

  useEffect(() => {
    if (state.audio.uri) {
      /* Create new 'sound' when 'state.audio.uri' changed */
      (async () => {
        const { sound } = await Audio.Sound.createAsync(
          { uri: state.audio.uri },
          {},
          onPlayback
        );
        setSound(sound);
      })();
    }
  }, [state.audio.uri]);

  /* When 'sound' changed or 'CardView' destroyed, unload 'sound' from memory */
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onPress = () => {
    if (sound) {
      if (isPlaying) {
        /* When 'sound' is 'isPlaying' then stop */
        (async () => {
          await sound.stopAsync();
        })();
      } else {
        /* No 'isPlaying' then start play 'sound' from the begin */
        (async () => {
          await sound.replayAsync();
        })();
      }
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card.Comm source={state.image.uri} text={state.text} />
    </TouchableOpacity>
  );
};

const CameraView = memo(() => {
  const { dispatch } = useContext(Context);

  const onPress = () => {
    (async () => {
      try {
        await ImagePicker.requestCameraPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.canceled) {
          dispatch({ type: 'image', uri: result.assets[0].uri });
        }
      } catch (error) {
        Alert.alert('ERROR: Choose Image From Camera', error);
      }
    })();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Entypo name="camera" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
});

const LibraryView = memo(() => {
  const { dispatch } = useContext(Context);

  const onPress = () => {
    (async () => {
      try {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.canceled) {
          dispatch({ type: 'image', uri: result.assets[0].uri });
        }
      } catch (error) {
        Alert.alert('ERROR: Choose Image From Library', error);
      }
    })();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Entypo name="image" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
});

const StartRecView = memo(() => {
  const { dispatch } = useContext(Context);

  const onRecordingStatusUpdate = ({ durationMillis }) => {
    let second = Math.ceil(durationMillis / 1000);
    let minute = Math.floor(second / 60);
    second = second - minute * 60;

    if (durationMillis) {
      dispatch({ type: 'duration', minute: minute, second: second });
    }
  };

  const onPress = () => {
    dispatch({ type: 'duration', minute: 0, second: 0 });

    (async () => {
      try {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        let { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.LOW_QUALITY,
          onRecordingStatusUpdate
        );

        dispatch({ type: 'recording', recording: recording });
      } catch (error) {
        Alert.alert('ERROR: Record Start', error);
      }
    })();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <FontAwesome name="microphone" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
});

const StopRecView = memo(() => {
  const { state, dispatch } = useContext(Context);

  const onPress = () => {
    (async () => {
      try {
        await state.recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
        });

        let uri = state.recording.getURI();

        dispatch({ type: 'audio', uri: uri });
        dispatch({ type: 'recording', recording: null });
      } catch (error) {
        Alert.alert('ERROR: Record Stop', error);
      }
    })();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <FontAwesome name="stop" size={32} color="black" />
      </View>
    </TouchableOpacity>
  );
});

const RecordButton = () => {
  const { state } = useContext(Context);

  if (state.recording) {
    return <StopRecView />;
  } else {
    return <StartRecView />;
  }
};

const RecordView = () => {
  const { state } = useContext(Context);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <RecordButton />
      <Text style={{ marginTop: 8, fontSize: 24 }}>
        {Math.floor(state.duration.minute / 10)}
        {state.duration.minute % 10}:{Math.floor(state.duration.second / 10)}
        {state.duration.second % 10}
      </Text>
    </View>
  );
};

export const EditorScreen = () => {
  return (
    <Provider>
      <ContainerView>
        <CardView />

        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <View style={{ marginRight: 4 }}>
            <CameraView />
          </View>

          <View style={{ marginLeft: 4 }}>
            <LibraryView />
          </View>
        </View>

        <RecordView />
      </ContainerView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#808080',
    width: 60,
    aspectRatio: 1,
    borderRadius: 99,
    borderWidth: 1,
    padding: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
