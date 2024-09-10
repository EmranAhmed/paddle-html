<?php


function log_it( $message ) {
	$log_dir = dirname( __FILE__ ) . "/debug.txt";
	error_log( $message, 3, $log_dir );
}

log_it( 'REQUEST:' . print_r( $_REQUEST, 1 )."\n\n\n" );