## Create transaction:

- get **API keys** from : https://sandbox-vendors.paddle.com/authentication-v2
- get **Client-side tokens** from : https://sandbox-vendors.paddle.com/authentication-v2
- create transaction
- pass trans id to checkout
- process from webhook

- POST https://sandbox-api.paddle.com/transactions
- POST https://paddle.com/transactions

- https://github.com/PaddleHQ/paddle-php-sdk
- https://developer.paddle.com/build/transactions/bill-create-custom-items-prices-products
- API: https://developer.paddle.com/api-reference/transactions/get-invoice-pdf

- SEND Body:

```json5
{
  "items": [
    {
      "quantity": 1,
      "price": {
        "description": "New user price (FTUE)", // Internal description for this price, not shown to customers. Typically notes for your team.
        "name": "Welcome price", // Monthly | LifeTime // NULL // Name of this price, shown to customers at checkout and on invoices. Typically describes how often the related product bills.
        "billing_cycle": {
          "interval": "month", // day | week | month | year
          "frequency": 1
        },
        "tax_mode" : "account_setting",
        "quantity": {
            "minimum": 1,
            "maximum": 1
        },
        "unit_price": {
          "amount": "4900", // Amount in the lowest denomination for the currency, e.g. 10 USD = 1000 (cents).
          "currency_code": "USD" // Supported three-letter ISO 4217 currency code.
        },
        "product": {
          "name": "Invigaron Berries Hoard",
          "tax_category": "standard",
          "description": "Start the game with 20 extra seconds play time!",
          "image_url": "https://ps.w.org/woo-variation-swatches/assets/icon-256x256.gif?rev=2741308",
          "custom_data": {
              "wc_product_id": 12345
          }
        },
        "custom_data": {
          "wc_order_id":99223
        }
      }
    }
  ],
  "currency_code": "USD",
  "checkout": {
    "url": "http://sites.local/paddle-html/thank-you.php?re"
  }
}
```

- PHP Example

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://sandbox-api.paddle.com/transactions',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "items": [
    {
      "quantity": 1,
      "price": {
        "description": "New user price (FTUE)", 
        "name": "Welcome price", 
        "tax_mode" : "account_setting",
        "quantity": {
            "minimum": 1,
            "maximum": 1
        },
        "unit_price": {
          "amount": "4900",
          "currency_code": "USD"
        },
        "product": {
          "name": "Invigaron Berries Hoard",
          "tax_category": "standard",
          "description": "Start the game with 20 extra seconds play time!",
          "image_url": "https://ps.w.org/woo-variation-swatches/assets/icon-256x256.gif?rev=2741308",
          "custom_data": {
              "wc_product_id": 12345
          }
        }
      }
    }
  ],
  "currency_code": "USD",
  "checkout": {
    "url": "http://sites.local/paddle-html/thank-you.php?re"
  }
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    // API key from https://sandbox-vendors.paddle.com/authentication-v2
    'Authorization: Bearer 07ee559eed44e44f6283961102e21f2968e764e3e1373bf64e'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

```

GET `https://sandbox-api.paddle.com/transactions/TRANSACTION_ID`

