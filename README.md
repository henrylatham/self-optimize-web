# Scribe App Website
Get millions to journal!

## Local Development
Before starting, install yarn:
```
yarn install
```

To start the development server:
```
yarn dev:website
```

Once development is done, we can build the website using:
```
yarn build:website
```

## Deploying to heroku
Make sure you have heroku cli installed. If not, follow the instructions here to install:
[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

Once heroku-cli is installed, login to heroku via terminal:
```
heroku login
```

For only once, you need to add heroku's git link to the repo. Perform the following command only once when you first cloned the repo.
```
git remote add heroku https://git.heroku.com/scribeapp-web.git
```

Now, you can push to heroku, and it should be automatically deployed to live website.
```
git push heroku master
```

## Bugs

If unable to launch, check node package is up to date & the correct node version
```
node -v
```

## Team

Get in touch with the Scribe team by emailing Henry at:
henrylatham5555@gmail.com
# self-optimize-web
