### Add and push tags
git tag -a v1.0.0 -m "first relese"
git push --follow-tags

## semantic tagging
npm install @semantic-release/git @semantic-release/github --save-dev
--> npm install @semantic-release/git @semantic-release/github -D 
after install create new file in the action dir. = release.config.json

### commit messages
- name: release
        run: npx semantic-release
        
git commit -m "fix: semantaic versioning"

#### gGrant workflow access 
permissions:
   contents: write
   issues: write
   pull-request: write
   

