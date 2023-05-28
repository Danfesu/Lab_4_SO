pipeline {
	agent any
	stages {
		stage("build") {
			steps {
				echo 'build'
				sh '''
					docker-compose build
				'''
			}
		}
		stage("deploy") {
			steps {
				echo 'deploy'
				sh '''
					docker-compose up -d --force-recreate estudiantes
					docker-compose up -d --force-recreate profesores
					docker-compose up -d --force-recreate curso
					docker-compose up -d --force-recreate biblioteca
					docker-compose up -d --force-recreate suma
					docker-compose up -d --force-recreate sitioweb
				'''
			}
		}
	}
}