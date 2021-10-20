// Useful Utilities
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

export const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
}).format(value);