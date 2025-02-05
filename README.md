
<h1>Start sys service</h1>
sudo systemctl start mysql   
brew services start mysql

nest start




<h1>Settingup Database</h1>
sudo mysqld_safe --skip-grant-tables &

mysql -u root


UPDATE mysql.user SET authentication_string = PASSWORD('fk9lratv') WHERE User = 'root';

ALTER USER 'root'@'localhost' IDENTIFIED BY 'fk9lratv';

FLUSH PRIVILEGES;


CREATE DATABASE student_db;
SHOW DATABASES;


EXIT;




<h1>Endpoints</h1>


Create Student: POST /students

Get All Students: GET /students

Get Student by ID: GET /students/:id

Update Student: PUT /students/:id

Delete Student: DELETE /students/:id




<h1>Create request</h1>

curl -X POST http://localhost:3000/students \
     -H "Content-Type: application/json" \
     -d '{"firstName": "Blaze", "lastName": "Condero", "email": "Sample@example.com", "enrollmentDate": "2025-02-04"}'






===

Sample Requests


{
  "firstName": "Username-ng-user",
  "lastName": "Surname-ng-user",
  "email": "samp@example.com",
  "enrollmentDate": "2023-10-01"
}





{
  "firstName": "Username-ng-user",
  "lastName": "Surname-ng-user"
}
