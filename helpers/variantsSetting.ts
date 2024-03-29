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
  "page-test1": {
    variants: {
      var1: VariantNames.VariantA,
      var2: VariantNames.VariantB,
    },
  },
} as const;

type VarianName = keyof typeof pageVariants;
const getPageComponent = (componentName: VarianName) => {
  console.log(`componentName:`, componentName);
  return defineAsyncComponent(
    () => import(`~/components/${componentName}/${componentName}.vue`)
  );
};

export { pageVariants, getPageComponent };
export type { VarianName };
