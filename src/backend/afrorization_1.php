<?php
	$name=$_POST['inputUserName1'];
	$password=$_POST['inputPassword1'];
	// echo "user name: ".$name."<br>"."Password: ".$password."<br>";
	// $fd = fopen("jsonFolder/users.json", 'r') or die("не удалось открыть файл");
	// while(!feof($fd))
	// {
	//     $str = htmlentities(fgets($fd));
	//     echo $str."<br>string<br>";
	// }
	// fclose($fd);


	// $strJsonFileContents = file_get_contents("jsonFolder/users.json");
	// $array = json_decode($strJsonFileContents, true);
	// var_dump($array);


	// $people_json = file_get_contents('jsonFolder/users.json');

	// $decoded_json = json_decode($people_json, false);
	// echo $decoded_json;


//sqlite brovze
//записать интерфейс, который сервер будет предоставлять пользователю
	header("Content-Type: application/json");

	$filename = 'jsonFolder/users.json';
//flock
	$data = file_get_contents($filename);
	$users = json_decode($data);
	$trueUserPass=false;
	for($i=0;$i<sizeof($users);$i++){
		if($users[$i]->username == $name){
			if($users[$i]->password == $password){
				// echo $users[$i]->password;
				// echo $users[$i]->username;
				$trueUserPass=true;
			}
		}
	}
	if ($trueUserPass==true) {
		// выполните аутентификацию пользователя в соответствии с вашими требованиями   
		// ...
		// ...
		// на основе успешной аутентификации
		echo json_encode(array('success' => 1));
	} else {
		echo json_encode(array('success' => 0));
	}
	?>

