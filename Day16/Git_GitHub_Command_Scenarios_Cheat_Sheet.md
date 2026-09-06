# Git & GitHub Command Scenarios Cheat Sheet

## 1. Configure Git

``` bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list
```

## 2. Check Active Git Profile

``` bash
git config user.name
git config user.email

git config --global user.name
git config --global user.email

git config --list --show-origin
```

If using GitHub CLI:

``` bash
gh auth status
```

## 3. Initialize a Repository

``` bash
git init
git status
```

## 4. Stage & Commit

``` bash
git add .
git commit -m "Initial Commit"
```

If Git opens Vim:

-   Save commit:
    -   Press `Esc`
    -   Type `:wq`
    -   Press `Enter`
-   Cancel commit:
    -   Press `Esc`
    -   Type `:q!`
    -   Press `Enter`

## 5. View History

``` bash
git log
git log --oneline
```

## 6. Branch Operations

``` bash
git branch
git branch feature/login

git switch feature/login
git switch -c feature/login

git checkout main
git merge feature/login

git branch -d feature/login
```

## 7. Connect to GitHub

``` bash
git remote add origin <repo-url>
git remote -v
```

## 8. Push & Pull

``` bash
git push -u origin main
git pull origin main
```

## 9. Clone Repository

``` bash
git clone <repository-url>
```

## 10. Download Existing Project

### Clone

``` bash
git clone <repository-url>
```

### Existing Local Repository

``` bash
git pull origin main
```

### GitHub UI

**Code → Download ZIP**

## 11. Merge Two Repositories

### Preserve History

``` bash
git remote add repoB <repoB-url>
git fetch repoB
git merge repoB/main --allow-unrelated-histories
```

### Copy Files Only

1.  Clone Repo A.
2.  Copy files from Repo B.
3.  Commit and push.

## 12. Secret Scanning / Push Protection

Typical error:

    GH013: Repository rule violations found.
    Push cannot contain secrets.

Deleting the file alone is **not enough** because GitHub scans commit
history.

### Recommended (new repository)

1.  Add `.env` to `.gitignore`

``` text
*.env
.env
data/apiData/oauthData.env
```

2.  Remove the sensitive history (preferred before first push).

If the repository has never been pushed and only contains local commits,
the quickest recovery is:

-   Backup the project.
-   Remove `.git`.
-   Reinitialize Git.
-   Commit again.
-   Push.

``` bash
rmdir /s /q .git
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

## 13. Useful Commands

``` bash
git status
git diff
git fetch
git stash
git stash list
git stash apply
git restore filename
git restore --staged filename
git remote -v
```

## Daily Workflow

``` bash
git clone <repo-url>

git switch -c feature/login

# Make changes

git add .
git commit -m "Implemented login feature"

git push origin feature/login

# Raise Pull Request

git switch main
git pull origin main
```

## Interview Questions

-   What is Git?
-   What is GitHub?
-   Difference between Git and GitHub?
-   What is a repository?
-   What is the staging area?
-   Difference between `git add` and `git commit`?
-   Difference between `git fetch` and `git pull`?
-   Difference between `git merge` and `git rebase`?
-   What is `HEAD`?
-   What is `origin`?
-   Why does GitHub block pushes containing secrets?
