import React from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export const App = () => {
  const [formText, setFormText] = React.useState('')
  const [resultText, setResultText] = React.useState('')
  const handleChangeText = React.useCallback(
    (value: string) => {
      setFormText(value)
    },
    [formText],
  )
  const handlePress = React.useCallback(() => {
    setResultText(formText)
  }, [formText])
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.inner} behavior="padding">
        {resultText ? (
          <View>
            <Text accessibilityLiveRegion="polite">
              文字数は{[...resultText].length}です。
            </Text>
          </View>
        ) : null}
        <View style={styles.formWrapper}>
          <Text style={styles.label}>何らかのテキストを入力</Text>
          <TextInput
            accessible
            accessibilityLabel={'カウントしたい文字を入力'}
            defaultValue={formText}
            onChangeText={handleChangeText}
            style={styles.input}
            testID="Input"
          />
        </View>
        <View style={styles.buttonWraper}>
          <TouchableOpacity
            accessible
            accessibilityLabel="入力された文字数をカウントする"
            accessibilityRole="button"
            onPress={handlePress}
            disabled={!formText?.length}
            testID="Button"
          >
            <Text>
              {formText?.length ? '文字数をカウントする' : '文字を入力してね'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  inner: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  formWrapper: {},
  label: {},
  input: {
    borderWidth: 1,
    marginTop: 8,
  },
  buttonWraper: {
    marginTop: 16,
  },
  button: {},
})
