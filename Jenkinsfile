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
withCredentials([string(credentialsId: 'docker-pwd', variable: 'DINE_PWD')]) {

                            bat "docker login -u dhineshdine -p ${DINE_PWD}"


          


              bat 'docker build -t dhineshdine/cal-demo-jenkins:latest .'
              bat 'docker push dhineshdine/cal-demo-jenkins:latest'

              
}
                        echo "Deployment Copleted"

        }

        
        }

    }


    
}
