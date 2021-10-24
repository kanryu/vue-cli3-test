import { mount } from '@vue/test-utils'
import Component from '@/components/Menus.vue'

const wrapper = mount(Component, {
  global: {
    mocks: {
      '$t': (msg) => msg,
      '$i18n': {}
    }
  }
})

describe('英語環境', () => {
  it('On/Offチェック - Product On', () => {
    wrapper.vm.initMainMenu({
      availableMenus: {
        products: true,
        customers: false,
        admin: false,
      }
    })
    wrapper.vm.$nextTick().then(() => {
      let text = wrapper.text()
      expect(text).toEqual(expect.stringContaining('Products'))
      expect(text).toEqual(expect.not.stringContaining('Customers'))
      expect(text).toEqual(expect.not.stringContaining('Administrators'))
    })
  })
  it('On/Offチェック - Customers On', () => {
    wrapper.vm.initMainMenu({
      availableMenus: {
        products: false,
        customers: true,
        admin: false,
      }
    })
    wrapper.vm.$nextTick().then(() => {
      let text = wrapper.text()
      expect(text).toEqual(expect.not.stringContaining('Products'))
      expect(text).toEqual(expect.stringContaining('Customers'))
      expect(text).toEqual(expect.not.stringContaining('Administrators'))
    })
  })
  it('On/Offチェック - Administrators On', () => {
    wrapper.vm.initMainMenu({
      availableMenus: {
        products: false,
        customers: false,
        admin: true,
      }
    })
    wrapper.vm.$nextTick().then(() => {
      let text = wrapper.text()
      expect(text).toEqual(expect.not.stringContaining('Products'))
      expect(text).toEqual(expect.not.stringContaining('Customers'))
      expect(text).toEqual(expect.stringContaining('Administrators'))
    })
  })
})




