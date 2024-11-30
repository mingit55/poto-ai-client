import { useEventBus as $ev } from "@vueuse/core";

export default function useEventBus(name) {
  return $ev(name);
}
