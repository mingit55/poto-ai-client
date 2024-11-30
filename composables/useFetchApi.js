export default async function useFetchApi(url, options) {
  const config = useRuntimeConfig();
  console.info(options);
  try {
    const response = await $fetch(url, {
      ...options,
      baseURL: process?.env?.API_URL || config?.public?.apiURL,
    });
    if (!response.success) {
      throw new Error(response.message || `서버에 응답이 없습니다.`);
    }
    return response?.data || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
