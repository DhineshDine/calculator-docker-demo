pipeline {
    agent any 

   tools {
  nodejs 'Node_home'
}

    stages {
        stage('Build stage') {
           steps {
            bat 'npm init -y'
            bat 'npm install'
            bat 'npm run build' 

           }
        }
    }
}