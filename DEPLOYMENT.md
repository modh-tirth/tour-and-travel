# CI/CD Deployment Strategy

## Architecture Flow

```
Developer
   ↓
GitHub Repo
   ↓
Jenkins CI/CD Pipeline
   ↓
Docker Images
   ↓
AWS ECR
   ↓
EKS Cluster
   ├── staging namespace
   └── production namespace
   ↓
Ingress Controller (ALB)
   ↓
Domain + SSL
   ↓
Live Users
   ↓
MongoDB Atlas
```

## Prerequisites

### 1. AWS Setup
- AWS Account with ECR, EKS access
- AWS CLI configured
- kubectl installed
- eksctl installed

### 2. Create ECR Repositories
```bash
aws ecr create-repository --repository-name tour-travel-frontend --region us-east-1
aws ecr create-repository --repository-name tour-travel-backend --region us-east-1
```

### 3. Create EKS Cluster
```bash
eksctl create cluster \
  --name tour-travel-cluster \
  --region us-east-1 \
  --nodegroup-name standard-workers \
  --node-type t3.medium \
  --nodes 3 \
  --nodes-min 2 \
  --nodes-max 4
```

### 4. Install AWS Load Balancer Controller
```bash
kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller//crds?ref=master"
helm repo add eks https://aws.github.io/eks-charts
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=tour-travel-cluster
```

### 5. MongoDB Atlas Setup
1. Create MongoDB Atlas account
2. Create cluster
3. Whitelist EKS IPs
4. Get connection string
5. Update `k8s/secrets.yaml`

### 6. SSL Certificate
```bash
# Request certificate in AWS ACM
aws acm request-certificate \
  --domain-name yourdomain.com \
  --subject-alternative-names *.yourdomain.com \
  --validation-method DNS
```

## Jenkins Setup

### 1. Install Jenkins Plugins
- Docker Pipeline
- Kubernetes CLI
- AWS Steps
- Git

### 2. Configure Jenkins Credentials
- AWS credentials (ID: `aws-credentials`)
- GitHub credentials (ID: `github-credentials`)
- Kubeconfig (ID: `kubeconfig`)

### 3. Create Jenkins Pipeline Job
- New Item → Pipeline
- Pipeline from SCM → Git
- Repository URL: your-repo-url
- Script Path: Jenkinsfile

## Deployment Steps

### Initial Setup
```bash
# Create namespaces
kubectl apply -f k8s/namespaces.yaml

# Create secrets
kubectl apply -f k8s/secrets.yaml

# Deploy to staging
kubectl apply -f k8s/staging/

# Deploy to production
kubectl apply -f k8s/production/
```

### Update Jenkinsfile
Replace placeholders:
- `<your-account-id>` with your AWS account ID
- `<your-acm-certificate-arn>` with your ACM certificate ARN

### Update Kubernetes Files
Replace in all k8s files:
- `<your-account-id>` with your AWS account ID
- `<your-acm-certificate-arn>` with your ACM certificate ARN
- `yourdomain.com` with your actual domain

## Branch Strategy

### Development Flow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Merge to staging
git checkout staging
git merge feature/new-feature
git push origin staging
# Jenkins auto-deploys to staging namespace

# Test on staging.yourdomain.com

# Merge to production
git checkout main
git merge staging
git push origin main
# Jenkins auto-deploys to production namespace
```

## Monitoring

### Check Deployments
```bash
# Staging
kubectl get pods -n staging
kubectl get svc -n staging
kubectl get ingress -n staging

# Production
kubectl get pods -n production
kubectl get svc -n production
kubectl get ingress -n production
```

### View Logs
```bash
# Backend logs
kubectl logs -f deployment/backend-deployment -n staging
kubectl logs -f deployment/backend-deployment -n production

# Frontend logs
kubectl logs -f deployment/frontend-deployment -n staging
kubectl logs -f deployment/frontend-deployment -n production
```

### Scale Deployments
```bash
# Scale staging
kubectl scale deployment/backend-deployment --replicas=3 -n staging

# Scale production
kubectl scale deployment/backend-deployment --replicas=5 -n production
```

## Rollback

```bash
# Rollback staging
kubectl rollout undo deployment/backend-deployment -n staging
kubectl rollout undo deployment/frontend-deployment -n staging

# Rollback production
kubectl rollout undo deployment/backend-deployment -n production
kubectl rollout undo deployment/frontend-deployment -n production
```

## Environment URLs

- **Staging**: https://staging.yourdomain.com
- **Production**: https://yourdomain.com

## Security Notes

1. Never commit `secrets.yaml` with real credentials
2. Use AWS Secrets Manager or Kubernetes Secrets
3. Enable RBAC on EKS cluster
4. Use private subnets for worker nodes
5. Enable CloudWatch logging
6. Set up AWS WAF for ALB
