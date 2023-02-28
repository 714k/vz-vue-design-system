import Logo from './Logo.ce.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'color',
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['mobile', 'desktop']
      }
    }
  },
}

const Template = (args) => ({
  components: { Logo },
  setup() {
    return { args };
  },
  template: '<Logo v-bind="args" />'
});

export const Mobile = Template.bind({});
Mobile.args = {}