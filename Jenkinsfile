pipeline {
    agent any 

   tools {
  nodejs 'Node_home'
}

    stages {
        stage('Build maven') {
           steps {
            bat 'mvn clean install'

           }
        }
    }
}