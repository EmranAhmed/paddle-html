<?php


function log_it( $message ) {
	$log_dir = dirname( __FILE__ ) . "/debug.log";
	error_log( $message, 3, $log_dir );
}

log_it( 'POST:' . print_r( $_POST, 1 ) );
log_it( 'GET:' . print_r( $_GET, 1 ) );