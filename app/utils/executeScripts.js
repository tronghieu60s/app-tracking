export const GHN_INJECTED_JAVASCRIPT = `(function() {
    setTimeout(async function() {
      const packageCode = document.querySelector(".order-tracking-customer .header-order div:nth-child(1) .value > span").innerText;
      const packageWeight = 0;
      const packageLocation = 
    }, 3000);
  })();`;

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
        const labelStatus = timeline[i].querySelector('.block-span').innerText.replace(labelLocation, "").trim();
        packageTimeline.push({labelTime, labelLocation, labelStatus});
      }

      const packageInfo = {packageCode, packageWeight, packageLocation, packageTimeline};
      const packageInfoText = JSON.stringify(packageInfo);
      window.ReactNativeWebView.postMessage(packageInfoText);
    }, 3000);
  })();`;
