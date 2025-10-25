pipeline {
    agent any 

   tools {
  nodejs 'NodeJS_home'
}

    stages {
        stage('Build time ') {
           steps {
            bat 'npm install'
            bat 'npm run build' 
            echo 'Build is successful'

           }
        }

        stage('Test Time'){
            steps {
                echo 'runnning the test '
                bat 'npm test'
                echo 'Test is successful'
            }
        }
    }
}
