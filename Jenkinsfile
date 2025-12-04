pipeline {
    agent any 

   tools {
  nodejs 'NodeJS_Home'
}

    stages {
        stage('Build app ') {
           steps {
            bat 'npm install'
            bat 'npm run build' 
            echo 'Build is successful'

           }
        }


        stage ('Deploy the app'){
        steps {
withCredentials([string(credentialsId: 'docker_token', variable: 'CALC')]) {

                            bat "docker login -u dhineshdine -p ${CALC}"


          


              bat 'docker build -t dhineshdine/cal-demo-jenkins:latest .'
              bat 'docker push dhineshdine/cal-demo-jenkins:latest'

              
}
                        echo "Deployment Copleted"

        }

        
        }

        stage('argo'){
            steps{

withCredentials([file(credentialsId: 'DOCKER_K8S_KUBECONFIG', variable: 'KUBECONFIG_FILE')]) {
           bat """
                echo "1. Setting KUBECONFIG environment variable..."
                 set KUBECONFIG=%KUBECONFIG_FILE% // Use single quotes and batch syntax for variable access                
                echo "2. Running Kubectl Application Deployment (create/apply)..."
                
                // Use 'apply' instead of 'create' for idempotent deployments (best practice)
                kubectl apply -f calculator-application.yaml
                kubectl apply -f calculator-deployment.yaml
                kubectl apply -f calculator-service.yaml

                echo "Deployment Complete!"
            """
}
            }
        }

    }


    
}
