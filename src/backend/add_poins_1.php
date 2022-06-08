<?php 
    $name=$_POST['inputNameAddedStation1'];
    $longitude=$_POST['inputLongitudeAddedStation1'];
    $latitude=$_POST['inputLatitudeAddedStation1'];
    $numberDepths=$_POST['inputDepthAddedStation1'];

    header("Content-Type: application/json");
    $filename = 'jsonFolder/added_points.json';

    
    $data = file_get_contents($filename);
    // flock($filename, LOCK_EX);
	$stations = json_decode($data);
    for($i=0;$i<sizeof($stations);$i++){
        if($stations[$i]->name == $name){
            echo json_encode(array('success' => 0));
            return 0;
        }
    }
    $numDep = [];
    for ($i=0;$i<(int)$numberDepths;$i++){
        $dep=$_POST['addedPointDepth'.(string)$i];
        $sal=$_POST['addedPointSalinit'.(string)$i];
        $doc=$_POST['addedPointDoc'.(string)$i];
        array_push($numDep,(object)[
            'depth'=>(float)$dep,
            'salinity'=>(float)$sal,
            'DOC'=>(float)$doc
        ]);
    }
    $obj = (object)[
        'name'=>$name,
        'lat'=>(float)$latitude,
        'lon'=>(float)$longitude,
        'depths'=>$numDep
    ];
    
    array_push($stations,$obj);
    file_put_contents('jsonFolder/added_points.json',json_encode($stations));
    // flock($filename, LOCK_UN);
    echo json_encode(array('success' => 1));
    // $name="hh";
    // $sur="878787";
    // $obj = (object) [
    //     'hj'=>[
    //     'aString' => $name,
    //     'anArray' => $sur
    //     ]
    // ];
    
    // echo json_encode($obj);


?>