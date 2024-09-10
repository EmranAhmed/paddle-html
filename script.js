const settings = {
  // allowedPaymentMethods: ['alipay', 'apple_pay', 'bancontact', 'card', 'google_pay', 'ideal', 'paypal'],
  displayMode: 'overlay', // inline | overlay
  theme: 'light',
  locale: 'en', // Language for the checkout.
  allowLogout: false,
  showAddDiscounts: false,
  showAddTaxId: true,

  frameTarget: 'checkout-container',
  frameInitialHeight: '450',
  frameStyle: 'width: 100%; min-width: 312px; background-color: transparent; border: 1px solid red;',
  // successUrl: 'http://sites.local/paddle-html/thank-you.php'// URL to redirect to on checkout completion. Must start with http:// or https://.
}


// define customer details
const customerInfo = {
  email: 'sam@example.com',
  address: {
    countryCode: 'US',
    postalCode: '10021',
    region: 'New York', // State, county, or region of this address. Required if business is passed.
    city: 'New York', // City of this address. Required if business is passed.
    firstLine: '4050 Jefferson Plaza, 41st Floor', // First line of this address. Required if business is passed.
  },
  business: {
    name: 'ChatApp Inc.',
    taxIdentifier: '555952383', // Tax or VAT Number of the customer business.
  },
}

const rawItems = {
  "items": [
    {
      "quantity": 1,
      "price": {
        "description": "New user price (FTUE)", // Internal description for this price, not shown to customers. Typically notes for your team.
        "name": "Welcome price", // NULL // Name of this price, shown to customers at checkout and on invoices. Typically describes how often the related product bills.
        "tax_mode" : "account_setting",
        "billing_cycle":{ // null if price is non-recurring (one-time).
          "frequency":1,
          "interval": "day"
        },
        "quantity": {
          "minimum": 3,
          "maximum": 3
        },
        "unit_price": {
          "amount": "4900", // e.g. 10 USD = 1000 (cents).
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
  "custom_data":{
    "wc_order_id":1234
  },
  "currency_code": "USD",
  "checkout": {
    "url": "http://sites.local/paddle-html/thank-you.php?re"
  }
  // "status": "billed",
}

Paddle.Environment.set('sandbox')

Paddle.Initialize({
  // JS API Token. Client-side tokens from https://sandbox-vendors.paddle.com/authentication-v2
  token: 'test_051a40da80390db511f71b18bb1', // replace with a client-side token
  // prints events to console for debugging

  checkout: {
    settings: settings,
  },

  eventCallback: function (data) {
    console.log(data)
  },
})

// open checkout

const transactionId = "txn_01j64qkkcsvefjwj74w1zxqw5p";

function openCheckout (transactionId) {

  if( !transactionId ){
    return;
  }

  Paddle.Checkout.open({
    // items: itemsList2,
     transactionId,

    customer: customerInfo,
    settings: {
       ...settings,
      successUrl: `https://storepress.dev/paddle-html/thank-you.php?_ptxn=${transactionId}&re=`
    },
    customData: {
      'utm_medium': 'social',
      'utm_source': 'linkedin',
      'utm_content': 'launch-video',
      'integration_id': 'AA-123',
    },
  })
}

document.getElementById('pay-button').addEventListener('click', (event) => {
  event.preventDefault()

  const transactionId = document.getElementById('transactionId').value
  openCheckout(transactionId)
})
