<?php


function log_it( $message ) {
	$log_dir = dirname( __FILE__ ) . "/debug.txt";

	file_put_contents( $log_dir, $message, FILE_APPEND );
}

log_it( 'REQUEST:' . print_r( $_REQUEST, 1 ) . "\n\n\n" );