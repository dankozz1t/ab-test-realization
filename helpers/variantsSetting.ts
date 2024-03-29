const VARIANT = "variant";

enum VariantNames {
  VariantA = "VariantA",
  VariantB = "VariantB",
}

type PageVariants = {
  [key: string]: {
    variants: {
      [variant: string]: VariantNames;
    };
  };
};

const pageVariants: PageVariants = {
  variant: {
    variants: {
      var1: VariantNames.VariantA,
      var2: VariantNames.VariantB,
    },
  },
} as const;

type VarianName = keyof typeof pageVariants;
const getPageComponent = (componentName: VarianName) => {
  return defineAsyncComponent(
    () => import(`~/components/${componentName}/${componentName}.vue`)
  );
};

export { VARIANT, pageVariants, getPageComponent };
