import { VARIANT } from "~/helpers/variantsSetting";
import useVariant from "@/composables/useVariant";

export default defineNuxtRouteMiddleware((to, from) => {
  const { variant, setVariant } = useVariant(VARIANT);
  const variantName = to.query.abtest;

  setVariant(variantName);
});
