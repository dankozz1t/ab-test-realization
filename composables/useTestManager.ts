import {
  pageVariants,
  getPageComponent,
  type VarianName,
} from "~/helpers/variantsSetting";

export default function useTestManager(name: VarianName) {
  const { variants } = pageVariants[name];
  const variant = useCookie(`variant-${name}`);

  if (!variant.value) {
    const randomVariantIndex = Math.floor(
      Math.random() * Object.keys(variants).length
    );
    const currentVar = Object.keys(variants)[randomVariantIndex];

    variant.value = String(currentVar);
  }

  console.log(`variant[variant]:`, variants[variant.value]);
  return getPageComponent(variants[variant.value]);
}
