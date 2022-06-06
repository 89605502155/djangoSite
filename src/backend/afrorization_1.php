<?php
	$name=$_POST['inputUserName1'];
	$password=$_POST['inputPassword1'];
	echo "user name: ".$name."<br>"."Password: ".$password."<br>";
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


	$filename = 'jsonFolder/users.json';

	$data = file_get_contents($filename);
	$users = json_decode($data);
	echo $users[0]->username;
	?>

	<html>
	<table>
	    <tbody>
	        <tr>
	            <th>Name</th>
	            <th>Password</th>
	        </tr>
	        <?php foreach ($users as $user) { ?>
	        <tr>
	            <td> <?= $user->username; ?> </td>
	            <td> <?= $user->password; ?> </td>
	        </tr>
	        <?php } ?>
	    </tbody>
	</table>
	</html>