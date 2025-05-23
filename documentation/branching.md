
# 🗂️ GitHub Branch Management – SMART Project

## Overview
This document explains the new branching strategy for the SMART Project repository. It aims to ensure a clean, maintainable workflow that supports legacy code preservation, active development, and future feature expansion.

---

## 🌳 Branch Structure

| Branch                          | Purpose                                                                 |
|---------------------------------|-------------------------------------------------------------------------|
| `master`                        | **Production** – reflects current live version (SMART 2.0 code)        |
| `gh-pages`                      | **Test deployment** – used for preview/testing before production       |
| `smart1.0`                      | **Legacy** – archived version of the original SMART 1.0                |
| `smart2.0`                      | **Legacy** – snapshot of SMART 2.0 prior to React refactor             |
| `smartApp/stable`               | **Stable base** for ongoing development (React refactor)               |
| `smartApp/features/*`           | **Feature branches** – used to build new components or improvements    |
| `smartApp/hotfix/*`             | **Quick fix branches** – used to make quick patches or urgent fixes    |

---

## 🔀 Workflow

### 1. **Creating a Feature Branch**
All new features must branch off from `smartApp/stable`.

```bash
git checkout smartApp/stable
git pull origin smartApp/stable
git checkout -b smartApp/features/your-feature-name
```

### 2. **Working in Feature Branch**
Develop and commit normally:
```bash
git add .
git commit -m "Add: your feature description"
```

### 3. **Push & Track**
```bash
git push --set-upstream origin smartApp/features/your-feature-name
```

### 4. **Submit a Pull Request**
Go to the link GitHub provides or manually visit:
```
https://github.com/[your-username]/smartcenter/compare
```
Target branch: `smartApp/stable`

---

## 🧹 Housekeeping

- Avoid working directly on `master`, `smartApp/stable`, or `gh-pages`.
- Delete obsolete or merged feature branches regularly:
  ```bash
  git branch -d smartApp/features/old-branch
  git push origin --delete smartApp/features/old-branch
  ```

---

## 💡 Naming Convention

| Prefix                        | Use Case                        |
|-------------------------------|----------------------------------|
| `smartApp/features/`         | New features                     |
| `smartApp/bugfix/`           | Fixes to existing functionality  |
| `smartApp/refactor/`         | Structural improvements          |
| `smartApp/hotfix/`           | Urgent fixes or quick additions  |

Examples:
- `smartApp/features/new-cards`
- `smartApp/refactor/state-management`
- `smartApp/bugfix/navbar-click`

---

## 🔒 Notes

- All branches are pushed to GitHub and can be reviewed via PRs.
- Legacy branches like `smart1.0` and `smart2.0` are frozen and not to be modified.
- Branch protection rules can be enforced on `master` and `smartApp/stable` as needed.
