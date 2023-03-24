module.exports = {
   branches: "main",
   repositoryUrl: "git@github.com:Devops-Master-projects/Action_Test.git",
   plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
}