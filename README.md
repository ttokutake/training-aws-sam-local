# AWS Document

- https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/test-sam-local.html
- https://aws.amazon.com/jp/blogs/aws/new-aws-sam-local-beta-build-and-test-serverless-applications-locally/

# How to install aws-sam-local via asdf & nodejs

1. `$ asdf global nodejs <VERSION>`
2. `$ npm install -g aws-sam-local`

# How to use localstack

1. Clone git@github.com:localstack/localstack.git
2. `$ TMPDIR=/private$TMPDIR docker-compose up # for Mac`

# How to start locally

1. `$ sam local start-api`
2. `$ curl http://localhost:3000/products`
