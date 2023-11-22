<?php

session_start();

if (isset($_SESSION["user_id"])) {

	$mysqli = require __DIR__ . "/database.php";

	$sql = "SELECT * FROM user
	        WHERE id={$_SESSION["user_id"]}";

	$result = $mysqli->query($sql);

	$user = $result->fetch_assoc();
}

?>



<!DOCTYPE html>

<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Home</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
</head>

<body id="index">



    <h1>Home</h1>


    <?php if(isset($user)):   ?>

    	 <script>
       
        setTimeout(function() {
            window.location.href = "user_profile.html";
        }, 1); 
    </script>


    	

    <?php else:  ?>	

    	<p> <a href="login.php">Log in</a> or <a href="signup.html">sign up</a></p>

    <?php endif; ?>	



</body>
</html>    