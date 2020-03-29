# OneCommit Github Action

Validates pull request for maximum allowed commits 

## Usage

Create a github workflow in the `.github` folder, e.g. `.github/workflows/onecommit.yml`:

```yaml
name: OneCommit
on: [pull_request]
jobs:
  oneCommit:
    runs-on: ubuntu-latest
    name: restrict commit messages
    steps:
      - uses: actions/checkout@v1
      - uses: Gaurang033/OneCommit@v1
        with:
          max_commits: 2
```