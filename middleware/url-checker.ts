import { VARIANT } from "~/helpers/variantsSetting";
import useVariant from "@/composables/useVariant";

export default defineNuxtRouteMiddleware((to) => {
  const { setVariant } = useVariant(VARIANT);
  const variantName = String(to.query.abtest);

  setVariant(variantName);
});
