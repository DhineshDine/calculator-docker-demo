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

                withCredentials([file(credentialsId: 'DOCKER_K8S_KUBECONFIG', variable: 'DOCKER_K8S_KUBECONFIG')]) {

                    bat 'set KUBECONFIG = "${DOCKER_K8S_KUBECONFIG}"'
                    echo " Running Kubectl Application "
                    bat 'kubectl create -f calculator-application.yaml'
                    echo " Running Kubectl Deployment "
                    bat 'kubectl create -f calculator-deployment.yaml'
                     echo " Running Kubectl Service "
                    bat 'kubectl create -f calculator-service.yaml'
}
            }
        }

    }


    
}
