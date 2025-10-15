pipeline {
    agent any 

   tools {
  nodejs 'Node_home'
}

    stages {
        stage('Build time ') {
           steps {
            bat 'npm install'
            bat 'npm run build' 

           }
        }
    }
}