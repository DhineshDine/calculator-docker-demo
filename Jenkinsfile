pipeline {
    agent any 

    tool {
        name 'maven-3.6.3'
        type 'maven'
        name 'node-14.15.1'
        type 'nodejs'
    }
    stages {
        stage('Build maven') {
           steps {
            bat 'mvn clean install'
            
           }
        }
    }
}