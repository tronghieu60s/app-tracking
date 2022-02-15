// Example: https://donhang.ghn.vn/?order_code=GANH64B4

export const GHN_INJECTED_JAVASCRIPT = `(function() {
    setTimeout(async function() {
      const packageCode = document.querySelector('.order-tracking-customer .header-order div:nth-child(1) .value > span').innerText.trim();
      const packagePickDate = document.querySelector('.order-tracking-customer .header-order div:nth-child(3) .value > span')
      .innerText.split(",")?.[1].trim();
      const packageDeliveryDate = document.querySelector('.order-tracking-customer .header-order div:nth-child(4) .value > span')
      .innerText.split(",")?.[1].trim();
      const packageLocation = document.querySelector('.order-tracking-customer .header-order div:nth-child(5) .value > div').innerText.trim();

      const timeline = document.querySelectorAll('.table-log-item');
      const packageTimeline = [];
      for (let i = timeline.length - 1; i >= 0; i -= 1) {
        const getTime = timeline[i].parentElement
          .previousElementSibling.querySelector(".table-col.block-center-between")
          .innerText.split(",")?.[1].trim();
        const labelTime = getTime + " " + timeline[i].querySelector('.table-row.block-align-top > div:nth-child(3)').innerText.trim();
        const labelStatus = timeline[i].querySelector('.table-row.block-align-top > div:nth-child(2)').innerText.trim();
        packageTimeline.push({labelTime: new Date(labelTime), labelStatus});
      }

      const packageInfo = {
        packageCode, 
        packagePickDate: new Date(packagePickDate), 
        packageDeliveryDate: new Date(packageDeliveryDate), 
        packageLocation, 
        packageTimeline
      };
      const packageInfoText = JSON.stringify(packageInfo);
      window.ReactNativeWebView.postMessage(packageInfoText);
    }, 3000);
  })();`;

// Example: http://www.vnpost.vn/vi-vn/dinh-vi/buu-pham?key=CE373808865VN

export const VN_POST_INJECTED_JAVASCRIPT = `(function() {
    setTimeout(async function() {
      const packageCode = document.querySelector('.package-code > strong').innerText.trim();
      const packageWeight = document.querySelector('.package-weight > strong').innerText.trim();
      const packageLocation = document.querySelector('.package-location > strong').innerText.trim();

      const timeline = document.querySelectorAll('.timeline-list-item > ul > li');
      const packageTimeline = [];
      for (let i = timeline.length - 1; i >= 0; i -= 1) {
        const labelTime = timeline[i].querySelector('.label-time').innerText.trim();
        const labelLocation = timeline[i].querySelector('.block-span .label-location').innerText.trim();
        const labelStatus = timeline[i].querySelector('.block-span').innerText.replace(labelLocation, '').trim();
        packageTimeline.push({labelTime: new Date(labelTime), labelLocation, labelStatus});
      }

      const packageInfo = {packageCode, packageWeight, packageLocation, packageTimeline};
      const packageInfoText = JSON.stringify(packageInfo);
      window.ReactNativeWebView.postMessage(packageInfoText);
    }, 3000);
  })();`;
