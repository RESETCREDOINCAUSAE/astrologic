<?php
// Aquí van los datos de la conexión 
$servername = "localhost";
$database = "id17628488_prueba";
$username = "id17628488_reset";
$password = "1233895437Babalon510.";
// Crear la conexion a la base de datos 
$conn = mysqli_connect($servername, $username, $password, $database);
// Comprobar la conexión
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Conectado con la BD perfectamente <br>";
 $name = $lastname= $email= "";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
    $lastname = test_input($_POST["lastname"]);
  $email = test_input($_POST["email"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
 

$sql = "INSERT INTO Students (name, lastname, email) VALUES ('$name', '$lastname', '$email')";
if (mysqli_query($conn, $sql)) {
      echo "Revisa tu correo electrónico <br>" ;
      echo "<a href='index.html'>INICIO </a> \n";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>