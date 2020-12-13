import { by, device, element, expect } from 'detox'

describe('E2E テストのテスト', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })
  it('ラベルが「文字を入力してね」である', async () => {
    await expect(element(by.text('文字を入力してね'))).toBeVisible()
  })
  it('テキストを入力すると、「文字数をカウントする」に変わる', async () => {
    await element(by.id('Input')).replaceText('Hello Detox')
    await expect(element(by.text('文字数をカウントする'))).toBeVisible()
  })
  it('テキスト "Hello Detox" を入力してボタンを押すと、「文字数は11です。」が表示される', async () => {
    await element(by.id('Input')).replaceText('Hello Detox')
    await element(by.id('Button')).tap()
    await expect(element(by.text('文字数は11です。'))).toBeVisible()
  })
  it('テキスト "🍺" を入力すると、「文字数は1です。」が表示される', async () => {
    await element(by.id('Input')).replaceText('🍺')
    await element(by.id('Button')).tap()
    await expect(element(by.text('文字数は1です。'))).toBeVisible()
  })
})
