<?php

$log_dir = dirname( __FILE__ ) . "/debug.txt";
$data = print_r( $_REQUEST, 1 );
file_put_contents( $log_dir, $data, FILE_APPEND );