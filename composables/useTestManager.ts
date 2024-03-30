import {
  VARIANT,
  pageVariants,
  getPageComponent,
} from "~/helpers/variantsSetting";
import useVariant from "@/composables/useVariant";

export default function useTestManager() {
  const { variants } = pageVariants[VARIANT];

  const { variant, setVariant } = useVariant(VARIANT);

  if (!variant.value) {
    const randomVariantIndex = Math.floor(
      Math.random() * Object.keys(variants).length
    );
    const currentVar = Object.keys(variants)[randomVariantIndex];

    setVariant(String(currentVar));
  }

  return getPageComponent(variants[String(variant.value)]);
}
