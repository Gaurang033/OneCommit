import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    // const token = core.getInput('github-token', {required: true})
    const maxCommits: number = parseInt(core.getInput('max_commits'))

    const {pull_request: pr} = github.context.payload
    if (!pr) {
      throw new Error('Event payload missing `pull_request`')
    }

    core.info(`total number of commits are: ${pr['commits']}`)
    if (pr['commits'] > maxCommits) {
      core.setFailed(
        `total number of commits are greater than ${maxCommits}, please squash your commits`
      )
    }
    // const client = new github.GitHub(token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
