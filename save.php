<?php
//include the information needed for the connection to MySQL data base server. 
// we store here username, database and password 
include("dbconfig.php");
 
// connect to the MySQL database server 
$db = mysql_connect($dbhost, $dbuser, $dbpassword) or die("Connection Error: " . mysql_error()); 
 
// select the database 
mysql_select_db($database) or die("Error connecting to db."); 

$invid = (int)$_POST['id'];
$note = $_POST['note'];

//UPDATE  `jqgrid`.`invheader` SET  `note` =  'This is Record 2' WHERE  `invheader`.`invid` =3;
$result = mysql_query("UPDATE  `invheader` SET  `note` =  '$note' WHERE  `invheader`.`invid` =$invid"); 
echo mysql_affected_rows();

?>
