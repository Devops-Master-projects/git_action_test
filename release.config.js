module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/Devops-Master-projects/git_action_test",
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/git',
    '@semantic-release/github'],
    "githubToken": "${GH_TOKEN}"
}