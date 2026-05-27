module "reposignal_core" {
  source = "../../"

  vpc_id             = "vpc-0123456789abcdef0"
  private_subnet_ids = ["subnet-01111111111111111", "subnet-02222222222222222"]
  public_subnet_ids  = ["subnet-03333333333333333", "subnet-04444444444444444"]
  
  app_name    = "reposignal"
  environment = "prod"

  api_image    = "012345678912.dkr.ecr.us-east-1.amazonaws.com/reposignal-api:latest"
  worker_image = "012345678912.dkr.ecr.us-east-1.amazonaws.com/reposignal-worker:latest"
  web_image    = "012345678912.dkr.ecr.us-east-1.amazonaws.com/reposignal-web:latest"

  database_url_secret_arn    = "arn:aws:secretsmanager:us-east-1:012345678912:secret:db-url-xxx"
  redis_url_secret_arn       = "arn:aws:secretsmanager:us-east-1:012345678912:secret:redis-url-xxx"
  auth_secret_arn            = "arn:aws:secretsmanager:us-east-1:012345678912:secret:auth-xxx"
  internal_api_secret_arn    = "arn:aws:secretsmanager:us-east-1:012345678912:secret:internal-xxx"
  github_app_private_key_arn = "arn:aws:secretsmanager:us-east-1:012345678912:secret:github-pk-xxx"
  github_webhook_secret_arn  = "arn:aws:secretsmanager:us-east-1:012345678912:secret:github-wh-xxx"
  linkedin_client_secret_arn = "arn:aws:secretsmanager:us-east-1:012345678912:secret:linkedin-sec-xxx"
  openai_api_key_arn         = "arn:aws:secretsmanager:us-east-1:012345678912:secret:openai-xxx"

  github_app_id         = "123456"
  linkedin_client_id    = "789012"
  linkedin_redirect_uri = "https://reposignal.com/api/auth/callback/linkedin"
  web_app_url           = "https://reposignal.com"
}
