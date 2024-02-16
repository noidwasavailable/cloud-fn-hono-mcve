```bash
nvm use 18
yarn
yarn run serve
```

Sending a POST request with any body to /test will trigger the `Response body object should not be disturbed or locked` TypeError.

```bash
> curl -X POST -H 'Content-Type: application/json' -d '{"message":"hello"}' FIREBASE_URL/api/test
```

The problem persists if you use [`c.req.raw()`](https://hono.dev/api/request#raw) to get the unwrapped `Request` object and cloning it with [`Request.clone()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/clone).

```bash
> curl -X POST -H 'Content-Type: application/json' -d '{"message":"hello"}' FIREBASE_URL/api/raw
```
