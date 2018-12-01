import Vue from 'vue'
import * as allComponents from '@/components'
import Vuetify, {
  VApp,
  VAlert,
  VAutocomplete,
  VAvatar,
  VBadge,
  VBottomNav,
  VBottomSheet,
  VBreadcrumbs,
  VBreadcrumbsItem,
  VBreadcrumbsDivider,
  VBtn,
  VBtnToggle,
  VCard,
  VCardMedia,
  VCardTitle,
  VCardActions,
  VCardText,
  VCarousel,
  VCarouselItem,
  VCheckbox,
  VChip,
  VCombobox,
  VCounter,
  VDataIterator,
  VDataTable,
  VEditDialog,
  VTableOverflow,
  VDatePicker,
  VDatePickerTitle,
  VDatePickerHeader,
  VDatePickerDateTable,
  VDatePickerMonthTable,
  VDatePickerYears,
  VDialog,
  VDivider,
  VExpansionPanel,
  VExpansionPanelContent,
  VFooter,
  VForm,
  VContainer,
  VContent,
  VFlex,
  VLayout,
  VSpacer,
  VHover,
  VIcon,
  VImg,
  VInput,
  VItem,
  VItemGroup,
  VJumbotron,
  VLabel,
  VList,
  VListGroup,
  VListTile,
  VListTileAction,
  VListTileAvatar,
  VListTileActionText,
  VListTileContent,
  VListTileTitle,
  VListTileSubTitle,
  VMenu,
  VMessages,
  VNavigationDrawer,
  VOverflowBtn,
  VPagination,
  VSheet,
  VParallax,
  VPicker,
  VProgressCircular,
  VProgressLinear,
  VRadioGroup,
  VRadio,
  VRangeSlider,
  VRating,
  VResponsive,
  VSelect,
  VSlider,
  VSnackbar,
  VSparkline,
  VSpeedDial,
  VStepper,
  VStepperContent,
  VStepperStep,
  VStepperHeader,
  VStepperItems,
  VSubheader,
  VSwitch,
  VSystemBar,
  VTabs,
  VTab,
  VTabItem,
  VTabsItems,
  VTabsSlider,
  VTextarea,
  VTextField,
  VTimeline,
  VTimelineItem,
  VTimePicker,
  VTimePickerClock,
  VTimePickerTitle,
  VToolbar,
  VToolbarSideIcon,
  VToolbarTitle,
  VToolbarItems,
  VTooltip,
  VTreeview,
  VTreeviewNode,
  VWindow,
  VWindowItem,
  VBottomSheetTransition,
  VCarouselTransition,
  VCarouselReverseTransition,
  VTabTransition,
  VTabReverseTransition,
  VMenuTransition,
  VFabTransition,
  VDialogTransition,
  VDialogBottomTransition,
  VFadeTransition,
  VScaleTransition,
  VScrollXTransition,
  VScrollXReverseTransition,
  VScrollYTransition,
  VScrollYReverseTransition,
  VSlideXTransition,
  VSlideXReverseTransition,
  VSlideYTransition,
  VSlideYReverseTransition,
  VExpandTransition,
  VRowExpandTransition
} from '@/entry-lib'

const components = {
  VApp,
  VAlert,
  VAutocomplete,
  VAvatar,
  VBadge,
  VBottomNav,
  VBottomSheet,
  VBreadcrumbs,
  VBreadcrumbsItem,
  VBreadcrumbsDivider,
  VBtn,
  VBtnToggle,
  VCard,
  VCardMedia,
  VCardTitle,
  VCardActions,
  VCardText,
  VCarousel,
  VCarouselItem,
  VCheckbox,
  VChip,
  VCombobox,
  VCounter,
  VDataIterator,
  VDataTable,
  VEditDialog,
  VTableOverflow,
  VDatePicker,
  VDatePickerTitle,
  VDatePickerHeader,
  VDatePickerDateTable,
  VDatePickerMonthTable,
  VDatePickerYears,
  VDialog,
  VDivider,
  VExpansionPanel,
  VExpansionPanelContent,
  VFooter,
  VForm,
  VContainer,
  VContent,
  VFlex,
  VLayout,
  VSpacer,
  VHover,
  VIcon,
  VImg,
  VInput,
  VItem,
  VItemGroup,
  VJumbotron,
  VLabel,
  VList,
  VListGroup,
  VListTile,
  VListTileAction,
  VListTileAvatar,
  VListTileActionText,
  VListTileContent,
  VListTileTitle,
  VListTileSubTitle,
  VMenu,
  VMessages,
  VNavigationDrawer,
  VOverflowBtn,
  VPagination,
  VSheet,
  VParallax,
  VPicker,
  VProgressCircular,
  VProgressLinear,
  VRadioGroup,
  VRadio,
  VRangeSlider,
  VRating,
  VResponsive,
  VSelect,
  VSlider,
  VSnackbar,
  VSparkline,
  VSpeedDial,
  VStepper,
  VStepperContent,
  VStepperStep,
  VStepperHeader,
  VStepperItems,
  VSubheader,
  VSwitch,
  VSystemBar,
  VTabs,
  VTab,
  VTabItem,
  VTabsItems,
  VTabsSlider,
  VTextarea,
  VTextField,
  VTimeline,
  VTimelineItem,
  VTimePicker,
  VTimePickerClock,
  VTimePickerTitle,
  VToolbar,
  VToolbarSideIcon,
  VToolbarTitle,
  VToolbarItems,
  VTooltip,
  VTreeview,
  VTreeviewNode,
  VWindow,
  VWindowItem,
  VBottomSheetTransition,
  VCarouselTransition,
  VCarouselReverseTransition,
  VTabTransition,
  VTabReverseTransition,
  VMenuTransition,
  VFabTransition,
  VDialogTransition,
  VDialogBottomTransition,
  VFadeTransition,
  VScaleTransition,
  VScrollXTransition,
  VScrollXReverseTransition,
  VScrollYTransition,
  VScrollYReverseTransition,
  VSlideXTransition,
  VSlideXReverseTransition,
  VSlideYTransition,
  VSlideYReverseTransition,
  VExpandTransition,
  VRowExpandTransition
}

delete allComponents.default // TODO: update ts-jest

describe('a-la-carte import - from /lib', () => {
  Vue.use(Vuetify, {
    components
  })
  const registeredComponents = Object.keys(Vue.options.components).sort()

  // remove vue builtins
  registeredComponents.splice(0, 3)

  it('should register all subcomponents', () => {
    expect(registeredComponents).toMatchSnapshot()
  })

  it('should register all names in PascalCase', () => {
    registeredComponents.forEach(name =>
      expect(name).toMatch(/^(?:[A-Z][a-z]*)+$/)
    )
  })

  it('should check all components', () => {
    expect(registeredComponents).toEqual(Object.keys(allComponents).sort())
  })
})