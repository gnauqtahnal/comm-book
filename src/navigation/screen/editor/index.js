import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import React, { createContext, memo, useContext, useReducer } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
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
    sound: null,
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
  const { state, dispatch } = useContext(Context);

  const onPress = () => {
    (async () => {
      if (state.sound) {
        await state.sound.replayAsync();
      }
    })();
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

  const onRecordingStatusUpdate = () => {};

  const progressUpdateIntervalMillis = () => {};

  const onPress = () => {
    (async () => {
      try {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        let { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.LOW_QUALITY,
          onRecordingStatusUpdate,
          progressUpdateIntervalMillis
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

        let { sound } = await Audio.Sound.createAsync({ uri });

        dispatch({ type: 'sound', sound: sound });
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
  return (
    <View>
      <RecordButton />
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
