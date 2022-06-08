<?php
    // $name=$_POST['inpuk'];
    header("Content-Type: application/json");

	$filename1 = 'jsonFolder/added_poins.json';
	$data1 = file_get_contents($filename1);
    $filename0 = 'jsonFolder/oldStations.json';
	$data0 = file_get_contents($filename0);

    // echo json_encode(array_merge(json_decode($data0), json_decode($data1)));
    echo json_encode(array('success' => array_merge(json_decode($data0), json_decode($data1))));
?>
