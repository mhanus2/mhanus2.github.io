import { computed } from 'vue';
import { p as propsFactory, L as getCurrentInstanceName } from './server.mjs';

const allowedDensities = [null, "default", "comfortable", "compact"];
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  const densityClasses = computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}

export { makeDensityProps as m, useDensity as u };
//# sourceMappingURL=density-6PUP58Wc.mjs.map
