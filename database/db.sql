describe users:

+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| name      | varchar(150) | YES  |     | NULL    |                |
| email     | varchar(150) | YES  |     | NULL    |                |
| direccion | varchar(100) | YES  |     | NULL    |                |
| ciudad    | varchar(100) | YES  |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+


-----------------------business-------------------------

CREATE TABLE business(

    id int(11),
    name varchar(100) NOT NULL,
    CUIT varchar (13) NOT NULL,
    domicilio varchar(100),
    iduser int(11) not null,
    created_at timestamp default current_timestamp,
       constraint fk_bussUser foreign key (iduser) references users(id) 


);

alter table business 
    modify id int(11) not null primary key  auto_increment;





