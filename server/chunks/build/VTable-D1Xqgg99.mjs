import { createVNode } from 'vue';
import { p as propsFactory, m as makeComponentProps, s as makeThemeProps, g as genericComponent, t as provideTheme, h as useRender, x as convertToUnit } from './server.mjs';
import { m as makeDensityProps, u as useDensity } from './density-6PUP58Wc.mjs';
import { m as makeTagProps } from './dimensions-DxHl50uj.mjs';

const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
const VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover
      }, themeClasses.value, densityClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b, _c;
        return [(_a = slots.top) == null ? undefined : _a.call(slots), slots.default ? createVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? undefined : _b.call(slots), (_c = slots.bottom) == null ? undefined : _c.call(slots)];
      }
    }));
    return {};
  }
});

export { VTable as V };
//# sourceMappingURL=VTable-D1Xqgg99.mjs.map
