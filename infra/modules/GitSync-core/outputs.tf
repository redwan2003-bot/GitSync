output "alb_dns_name" {
  description = "The DNS name of the Application Load Balancer."
  value       = aws_lb.main.dns_name
}

output "ecs_cluster_name" {
  description = "The name of the ECS cluster."
  value       = aws_ecs_cluster.main.name
}

output "api_target_group_arn" {
  description = "The ARN of the API target group."
  value       = aws_lb_target_group.api.arn
}

output "web_target_group_arn" {
  description = "The ARN of the Web target group."
  value       = aws_lb_target_group.web.arn
}
