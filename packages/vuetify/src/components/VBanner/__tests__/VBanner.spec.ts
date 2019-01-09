// Libraries
import Vue from 'vue'


// Components
import VBanner from '../VBanner'

// Utilities
import {
  createLocalVue,
  mount,
  Wrapper
} from '@vue/test-utils'
import { compileToFunctions } from 'vue-template-compiler'

describe('VBanner.ts', () => {
  let mountFunction: (options?: object) => Wrapper<Vue>
  let localVue: typeof Vue

  beforeEach(() => {
    localVue = createLocalVue()

    mountFunction = (options = {}) => {
      return mount(VBanner, {
        localVue,
        ...options
      })
    }
  })

  it('should render component and match snapshot', () => {
    expect(mountFunction().html()).toMatchSnapshot()
  })

  // render dismissive action

  // render confirmation action

  // emit confirmation action
}
