pipeline {
    agent any 

   tools {
  nodejs 'Node_home'
}

    stages {
        stage('Build maven') {
           steps {
            bat 'npm install'
            bat 'npm run build'
            echo "Build Successful"

           }
        }
    }
}