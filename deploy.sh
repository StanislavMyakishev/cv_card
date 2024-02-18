npm run build
cd out
git init
git remote add origin https://github.com/StanislavMyakishev/stanislavmyakishev.github.io.git
git add .
git commit -m 'repo update'
git branch -M master
git push origin master --force