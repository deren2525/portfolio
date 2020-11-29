/* eslint-disable */
// Global site tag (gtag.js) - Google Analytics
export default () => {
  const scriptSrc = document.createElement('script');
  scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=G-H30D9CGLP8`;
  scriptSrc.async = true;
  document.head.appendChild(scriptSrc);

  scriptSrc.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag () { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-H30D9CGLP8');
  };
};