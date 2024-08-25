<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Paddle HTML</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="page-container">
	<h1>Sign up now</h1>
	<div class="grid">
		<div>
			<h3><code>Paddle.Checkout.open()</code></h3>
			<a id="pay-button" href="#"><b>Pay Now</b></a>
		</div>
	</div>
</div>
<div class="checkout-container"></div>
<footer>
	<hr>
	<p><small>
		For the tutorial, check out:
		<a href="https://developer.paddle.com/build/checkout/build-overlay-checkout">Build overlay checkout</a> -
		<a href="https://developer.paddle.com/build/checkout/build-branded-inline-checkout">Build inline checkout</a> -
		<a href="https://developer.paddle.com/">
			developer.paddle.com
		</a>
	</small></p>
</footer>

<script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
<script src="script.js?<?php echo rand(29, 988798989) ?>"></script>
</body>
</html>