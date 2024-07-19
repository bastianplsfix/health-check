/**
 * Performs a health check on the given URL.
 *
 * This function sends a GET request to the specified URL and logs the result.
 * If the response status is 200, it logs 'Health check passed'. Otherwise,
 * it logs 'Health check failed' along with the status code. If an error occurs
 * during the fetch operation, it logs 'Health check failed' along with the error message.
 *
 * @param {string} url - The URL to perform the health check on.
 * @returns {Promise<string>} - A promise that resolves with the result of the health check.
 */
export const checkHealth = async (url: string): Promise<string> => {
  // Validate the URL
  try {
    new URL(url);
  } catch (err) {
    return `Invalid URL: ${url}`;
  }

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return "Health check passed";
    } else {
      return `Health check failed with status code: ${response.status}`;
    }
  } catch (error) {
    console.error(`Health check failed: ${error.message}`);
    return `Health check failed: ${error.message}`;
  }
};
