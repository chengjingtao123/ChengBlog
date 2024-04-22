<?php
header('Content-Type:application/json');
$ke=$_POST['str'];
$id=$_POST['id'];
$data = file_get_contents('https://www.duitang.com/napi/blog/list/by_search/?&after_id='.$id.'&kw='.$ke);
print_r($data); 
?>
