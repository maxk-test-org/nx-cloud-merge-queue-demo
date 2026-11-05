# nx-cloud-merge-queue-demo

A small Nx workspace connected to Nx Cloud, used to watch how the Nx Cloud
pull request comment and check runs behave when many runs land on a branch
back to back, including GitHub merge queue entries
(`gh-readonly-queue/main/pr-<N>-<sha>`).

CI (`.github/workflows/ci.yml`) runs on `pull_request`, `merge_group` and
pushes to `main`. Three matrix jobs each call `nx` several times, so every
commit produces about a dozen Nx Cloud runs. The `ci` job is the required
status check for the merge queue.
