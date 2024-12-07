import { useToast } from 'vue-toast-notification';

export default async function useFetchApi(url, options) {
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(url, {
      ...options,
      baseURL: process?.env?.API_URL || config?.public?.apiURL,
    });
    if (!response.success) {
      useToast().error(response.message || `서버에 응답이 없습니다.`);
      throw new Error(response.message || `서버에 응답이 없습니다.`);
    }
    return response?.data || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
