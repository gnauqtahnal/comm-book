import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Text, TextInput } from '../../core'
import { EditAction, useEdit } from './reducer'
import { InputView } from './style'

function TitleInput() {
  const { edit, dispatch } = useEdit()
  // const ref = React.useRef('');

  return (
    <InputView>
      <Text tw="text-lg">Nhãn của thẻ</Text>
      <KeyboardAvoidingView>
        <TextInput
          tw="w-full text-2xl border p-2"
          defaultValue={edit.title}
          // ref={ref}
          onChangeText={(text) => {
            dispatch({ type: EditAction.SetTitle, title: text });
          }}
        />
      </KeyboardAvoidingView>
    </InputView>
  )
}

const TitleInputMemo = React.memo(TitleInput)

export default TitleInputMemo
