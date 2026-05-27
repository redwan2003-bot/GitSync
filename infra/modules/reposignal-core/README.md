# RepoSignal Core AWS Infrastructure Module

This module provisions the core AWS infrastructure for RepoSignal, including:
- Amazon ECS (Fargate) Cluster and Services for Web, API, and Worker components.
- Application Load Balancer (ALB) for routing traffic to the Web and API tasks.
- IAM Roles and Security Groups.

## Usage

```hcl
module "reposignal_core" {
  source = "./modules/reposignal-core"

  vpc_id             = var.vpc_id
  private_subnet_ids = var.private_subnet_ids
  public_subnet_ids  = var.public_subnet_ids
  
  app_name    = "reposignal"
  environment = "prod"

  api_image    = var.api_image
  worker_image = var.worker_image
  web_image    = var.web_image

  # Secrets ARNs
  database_url_secret_arn    = aws_secretsmanager_secret.db_url.arn
  # ... (other secrets)

  # Variables
  github_app_id         = var.github_app_id
  linkedin_client_id    = var.linkedin_client_id
  linkedin_redirect_uri = var.linkedin_redirect_uri
  web_app_url           = var.web_app_url
}
```

## Requirements
- Terraform >= 1.7.0
- AWS Provider >= 5.0

## Inputs
- `vpc_id` (string): The VPC ID where the ECS services will be deployed.
- `private_subnet_ids` (list(string)): Private subnet IDs for ECS tasks.
- `public_subnet_ids` (list(string)): Public subnet IDs for the ALB.
- `api_image`, `worker_image`, `web_image` (string): Docker image URIs for the components.
- All Secret ARNs (e.g., `database_url_secret_arn`, `redis_url_secret_arn`)
- Public config variables (`github_app_id`, etc.)

## Outputs
- `alb_dns_name`: The DNS name of the created ALB.
- `ecs_cluster_name`: The name of the ECS cluster.
- `api_target_group_arn`: The ARN of the API target group.
- `web_target_group_arn`: The ARN of the Web target group.
