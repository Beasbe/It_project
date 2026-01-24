
cd dist
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/Beasbe/It_project.git
git push -u origin gh-pages --force