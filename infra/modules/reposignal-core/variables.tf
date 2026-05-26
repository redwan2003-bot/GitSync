variable "vpc_id" {
  type        = string
  description = "The VPC ID where the ECS services will be deployed."
}

variable "private_subnet_ids" {
  type        = list(string)
  description = "A list of private subnet IDs for the ECS tasks (Worker & API)."
}

variable "public_subnet_ids" {
  type        = list(string)
  description = "A list of public subnet IDs for the Application Load Balancer."
}

variable "app_name" {
  type        = string
  description = "Prefix for all resources (e.g., reposignal)"
  default     = "reposignal"
}

variable "environment" {
  type        = string
  description = "Environment name (e.g., dev, staging, prod)"
}

variable "api_image" {
  type        = string
  description = "The Docker image URI for the API service."
}

variable "worker_image" {
  type        = string
  description = "The Docker image URI for the Worker service."
}

variable "web_image" {
  type        = string
  description = "The Docker image URI for the Web (Next.js) service."
}

# --- Secrets ARNs (Passed via AWS Secrets Manager) ---
variable "database_url_secret_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing DATABASE_URL"
  sensitive   = true
}

variable "redis_url_secret_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing REDIS_URL"
  sensitive   = true
}

variable "auth_secret_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing AUTH_SECRET"
  sensitive   = true
}

variable "internal_api_secret_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing INTERNAL_API_SECRET"
  sensitive   = true
}

variable "github_app_private_key_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing GITHUB_APP_PRIVATE_KEY"
  sensitive   = true
}

variable "github_webhook_secret_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing GITHUB_WEBHOOK_SECRET"
  sensitive   = true
}

variable "linkedin_client_secret_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing LINKEDIN_CLIENT_SECRET"
  sensitive   = true
}

variable "openai_api_key_arn" {
  type        = string
  description = "The ARN of the AWS Secrets Manager secret containing OPENAI_API_KEY"
  sensitive   = true
}

# --- Non-Secret Environment Variables ---
variable "github_app_id" {
  type        = string
  description = "The GitHub App ID"
}

variable "linkedin_client_id" {
  type        = string
  description = "The LinkedIn Client ID"
}

variable "linkedin_redirect_uri" {
  type        = string
  description = "The LinkedIn Redirect URI"
}

variable "web_app_url" {
  type        = string
  description = "The URL of the Web Application"
}
