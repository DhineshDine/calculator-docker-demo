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

    }


    
}
