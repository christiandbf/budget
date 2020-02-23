# Budget

An easy way to manage your money.

## Scripts

Deploy the Service

```bash
    serverless deploy -v
```

Deploy a Function

```bash
    serverless deploy function -f fn
```

Invoke the Function

```bash
    serverless invoke -f fn -l
```

Fetch the Function Logs

```bash
    serverless logs -f fn -t
```

Cleanup

```bash
    serverless remove
```

Invoke with mock

```bash
    serverless invoke --function fn --path ./mocks/fn.json
```
