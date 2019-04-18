import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PayPal extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log('The payment was succeeded!', payment);
      this.props.clearCart();
    };

    const onCancel = data => {
      console.log('The payment was cancelled!', data);
    };

    const onError = err => {
      console.log('Error!', err);
    };

    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'EUR'; // or you can set this value from your props or state
    let total = this.props.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
      sandbox: 'AVg3FY1QbIch2YKQ0-w9SSr-ncP_QxLHUchsfiE9KnNkg562IrN7gb7DQduq8lD0_n5LmEmfgSl3pUMN',
      production: 'YOUR-PRODUCTION-APP-ID',
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
