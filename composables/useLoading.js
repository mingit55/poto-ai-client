import { useEventBus } from "@vueuse/core";

export default function useLoading(value) {
  useEventBus(value ? 'loadingStart' : 'loadingStop').emit();
}
