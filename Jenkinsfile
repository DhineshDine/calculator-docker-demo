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
withCredentials([string(credentialsId: 'docker-pwd', variable: 'docker-pwd')]) {

                            sh "docker login -u dhineshdine -p ${Docker-calc}"


              dir ('.'){


                  sh 'docker build -t dhineshdine/cal-demo-jenkins:latest .'
              sh 'docker push dhineshdine/cal-demo-jenkins:latest'

              }
}
                        echo "Deployment Copleted"

        }

        
        }

    }


    
}
