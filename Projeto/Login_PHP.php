<?php
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Conecçao com o database
  $conn = mysqli_connect("localhost", "username", "password", "database_name");

  // Ver se a conecçao foi bem sucedida
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Verificar se o utilizador existe
  $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
  $result = mysqli_query($conn, $query);

  // Retornar resultados
  if (mysqli_num_rows($result) > 0) {
    // Se o utilizador existir, defiir sessão e redirecione para a página de favoritos
    session_start();
    $_SESSION['username'] = $username;
    header("location: favorites.php");
  } else {
    // Se o utilizador nao existir, mostrar o ecra mensagem de erro
    echo "Invalid username or password";
  }

  // Fechar conecçao com database
  mysqli_close($conn);
?>