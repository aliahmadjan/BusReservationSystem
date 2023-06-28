use TMS
create table Routs(ID int Primary Key, Bus_ID int, Driver_Name char(225), Destination char(225));
create table Buses(ID int Primary Key, Driver_ID int, No_of_Seats int, Available_Seats int);
create table Users(ID char(225) Primary Key, Name char(225), Designation char(225), Password char(225), Starting_Date datetime, Ending_Date datetime, Destination char(225), Type_Of_Service char(50), Route_ID int, Contact char(225), Emergency_Contact char(225));
create table Drivers(ID int Primary Key, Driver_Name char(225), CNIC char(225), Liscence_No char(225), Driver_Status char(50));
create table message (ID int Primary Key, Name char(225), Registration_ID char(225), Contact char(225), Message char (225));

drop table Routs;
drop table Buses;
drop table Users;
drop table Drivers;
drop table message;

select * from Routs;
select * from Buses;
select * from Users;
select * from Drivers;
select * from message;

