pipeline {
    agent any 

   tools {
  nodejs 'NodeJS_Home'
}

    stages {
        stage('Build time ') {
           steps {
            bat 'npm install'
            bat 'npm run build' 
            echo 'Build is successful'

           }
        }

    }
}
