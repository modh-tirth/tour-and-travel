pipeline {
    agent any
    
    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REGISTRY = '927709485530.dkr.ecr.ap-south-1.amazonaws.com'
        FRONTEND_IMAGE = 'tour-travel-frontend'
        BACKEND_IMAGE = 'tour-travel-backend'
        EKS_CLUSTER = 'tour-travel-cluster'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Frontend') {
            steps {
                script {
                    sh 'docker build -t ${FRONTEND_IMAGE}:${BUILD_NUMBER} .'
                    sh 'docker tag ${FRONTEND_IMAGE}:${BUILD_NUMBER} ${ECR_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER}'
                    sh 'docker tag ${FRONTEND_IMAGE}:${BUILD_NUMBER} ${ECR_REGISTRY}/${FRONTEND_IMAGE}:latest'
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                script {
                    sh 'docker build -t ${BACKEND_IMAGE}:${BUILD_NUMBER} ./backend'
                    sh 'docker tag ${BACKEND_IMAGE}:${BUILD_NUMBER} ${ECR_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER}'
                    sh 'docker tag ${BACKEND_IMAGE}:${BUILD_NUMBER} ${ECR_REGISTRY}/${BACKEND_IMAGE}:latest'
                }
            }
        }
        
        stage('Push to ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}'
                    sh 'docker push ${ECR_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER}'
                    sh 'docker push ${ECR_REGISTRY}/${FRONTEND_IMAGE}:latest'
                    sh 'docker push ${ECR_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER}'
                    sh 'docker push ${ECR_REGISTRY}/${BACKEND_IMAGE}:latest'
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'staging'
            }
            steps {
                script {
                    sh 'aws eks update-kubeconfig --region ${AWS_REGION} --name ${EKS_CLUSTER}'
                    sh 'kubectl apply -f k8s/staging/ -n staging'
                    sh 'kubectl set image deployment/frontend-deployment frontend=${ECR_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER} -n staging'
                    sh 'kubectl set image deployment/backend-deployment backend=${ECR_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER} -n staging'
                    sh 'kubectl rollout status deployment/frontend-deployment -n staging'
                    sh 'kubectl rollout status deployment/backend-deployment -n staging'
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                script {
                    sh 'aws eks update-kubeconfig --region ${AWS_REGION} --name ${EKS_CLUSTER}'
                    sh 'kubectl apply -f k8s/production/ -n production'
                    sh 'kubectl set image deployment/frontend-deployment frontend=${ECR_REGISTRY}/${FRONTEND_IMAGE}:${BUILD_NUMBER} -n production'
                    sh 'kubectl set image deployment/backend-deployment backend=${ECR_REGISTRY}/${BACKEND_IMAGE}:${BUILD_NUMBER} -n production'
                    sh 'kubectl rollout status deployment/frontend-deployment -n production'
                    sh 'kubectl rollout status deployment/backend-deployment -n production'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
