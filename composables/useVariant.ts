export default function useVariant(VARIANT: string) {
  const variant = useCookie(VARIANT);

  const setVariant = (variantName: string) => {
    variant.value = variantName;
  };

  return { variant, setVariant };
}
