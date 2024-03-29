export default function useVariant(VARIANT) {
  const variant = useCookie(VARIANT);

  const setVariant = (variantName: string) => {
    variant.value = variantName;
  };

  return { variant, setVariant };
}
