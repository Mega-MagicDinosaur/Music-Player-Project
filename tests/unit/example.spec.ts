import { mount } from '@vue/test-utils'
import HomePage from '@/views/MainPage.vue'

describe('MainPage.vue', () => {
  it('renders home vue', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
