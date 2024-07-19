# Health Check Utility

This repository contains a simple utility function to perform health checks on given URLs. The function sends a GET request to the specified URL and logs the result, indicating whether the health check passed or failed.

## Function Overview

### `checkHealth(url: string): Promise<string>`

Performs a health check on the given URL.

#### Parameters

-  `url` (string): The URL to perform the health check on.

#### Returns

-  `Promise<string>`: A promise that resolves with the result of the health check.

#### Description

This function sends a GET request to the specified URL and logs the result. If the response status is `200`, it logs 'Health check passed'. Otherwise, it logs 'Health check failed' along with the status code. If an error occurs during the fetch operation, it logs 'Health check failed' along with the error message.

## Usage

### Installation

To use this utility function in your project, you can simply copy the function into your codebase. Ensure you have a modern JavaScript or TypeScript environment that supports async/await and the Fetch API.

### Example

```typescript
import { checkHealth } from './path/to/your/utility';

const url = 'https://example.com';

checkHealth(url)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Error Handling

The function includes basic error handling to manage invalid URLs and issues during the fetch operation. It uses `console.error` for logging errors, which can be useful for debugging purposes.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

