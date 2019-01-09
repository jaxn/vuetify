// Styles
import  './VBanner.sass'

// Extensions
import VSheet from '../VSheet'

// Types
import { VNode } from 'vue'
import { PropValidator } from 'vue/types/options'
import mixins, { ExtractVue } from '../../util/mixins'

const baseMixins = mixins(
  VSheet
)

interface options extends ExtractVue<typeof baseMixins> {
  $el: HTMLElement
}

export default baseMixins.extend<options>().extend({
  name: 'v-banner',
  props: {
    icon: {
      type: [Boolean, String],
      default: undefined
    },
    value: null as any as PropValidator<any>
  },

  data: () => ({}),

  computed: {
    classes (): any {
      const classes = {
        'v-banner': true
      }
      

      if (this.icon) {
        classes['v-banner--icon'] = true
	
        if (typeof this.icon !== 'boolean') {
	  classes[`v-banner--icon-${this.icon}`] = true
	}
      }

      return classes
    },
  },
  methods: {
    genContent (): VNode {
      return this.$createElement(
        'div',
	{ 'class': 'v-btn__content' },
	this.$slots.default
      )
    }
  },

  render (h): VNode {
    const children = [
      this.genContent()
      // add dismissive action (required)
      // add confirmation action
    ]

    const render = h('div', children)

    return render
  }
})
