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
		stage("test") {
			steps {
				echo 'test'
				sh '''
					docker-compose up --force-recreate --exit-code-from sumatest sumatest
					docker-compose up --force-recreate --exit-code-from bibliotecatest bibliotecatest
					docker-compose up --force-recreate --exit-code-from cursotest cursotest
					docker-compose up --force-recreate --exit-code-from profesorestest profesorestest
				'''
			}
		}
		stage("deploy") {
			steps {
				echo 'deploy'
				sh '''
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