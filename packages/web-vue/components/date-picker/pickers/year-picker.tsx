import { defineComponent } from 'vue';
import { YearPickerProps } from '../interface';
import Picker from '../picker.vue';

export default defineComponent({
  name: 'YearPicker',
  props: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: [Date, String, Number],
    },
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
      type: [Date, String, Number],
    },
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
     */
    format: {
      type: String,
      default: 'YYYY',
    },
  },
  setup(props: YearPickerProps, { attrs, slots }) {
    return () => <Picker {...props} {...attrs} mode="year" v-slots={slots} />;
  },
});