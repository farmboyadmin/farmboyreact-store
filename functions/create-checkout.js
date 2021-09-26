/*
 * This function creates a Stripe Checkout session and returns the session ID
 * for use with Stripe.js (specifically the redirectToCheckout method).
 *
 * @see https://stripe.com/docs/payments/checkout/one-time
 */
console.log(process.env.STRIPE_SECRET_KEY);

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-03-02',
  maxNetworkRetries: 2,
});

/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
const inventory = require('../static/storedata.json');

exports.handler = async (event) => {
  const { sku, quantity,total ,package,shipping,name} = JSON.parse(event.body);
  const product = inventory.find((p) => p.id === sku);

  // ensure that the quantity is within the allowed range
  const validatedQuantity = quantity > 0 && quantity < 11 ? quantity : 1;
  if(shipping>0){
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      /*
       * This env var is set by Netlify and inserts the live site URL. If you want
       * to use a different URL, you can hard-code it here or check out the
       * other environment variables Netlify exposes:
       * https://docs.netlify.com/configure-builds/environment-variables/
       */
      success_url: `${process.env.URL}/success.html`,
      cancel_url: process.env.URL,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: total,
            product_data: {
              name: name,
              description: package,
              images: [product.image],
            },
          },
          quantity: 1,
        },
      ],
      // We are using the metadata to track which items were purchased.
      // We can access this meatadata in our webhook handler to then handle
      // the fulfillment process.
      // In a real application you would track this in an order object in your database.
      metadata: {
        items: JSON.stringify([
          {
            sku: product.sku,
            name: product.name,
            quantity: 1,
          },
        ]),
      },
    });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
   }else {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',

  
      /*
       * This env var is set by Netlify and inserts the live site URL. If you want
       * to use a different URL, you can hard-code it here or check out the
       * other environment variables Netlify exposes:
       * https://docs.netlify.com/configure-builds/environment-variables/
       */
      success_url: `${process.env.URL}/success.html`,
      cancel_url: process.env.URL,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: total,
            product_data: {
              name: name,
              description: package,
              images: [product.image],
            },
          },
          quantity: 1,
        },
      ],
      // We are using the metadata to track which items were purchased.
      // We can access this meatadata in our webhook handler to then handle
      // the fulfillment process.
      // In a real application you would track this in an order object in your database.
      metadata: {
        items: JSON.stringify([
          {
            sku: product.sku,
            name: product.name,
            quantity: 1,
          },
        ]),
      },
    });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
  };
  }
 

};
