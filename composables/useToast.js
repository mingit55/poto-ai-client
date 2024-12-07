import { useToast as ut } from 'vue-toast-notification';

export default function useToast() {
  return ut({
    position: 'top',
    duration: 5000,
  });
}
