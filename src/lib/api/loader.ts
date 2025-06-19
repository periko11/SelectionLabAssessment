export async function loader<T>(fetchFn: () => Promise<T>): Promise<T> {
  try {
    const data = await fetchFn();
    return data;
  } catch (err) {
    console.error("Load failed:", err);
    throw err;
  }
}
