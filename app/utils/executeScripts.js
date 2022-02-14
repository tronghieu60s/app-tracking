export const VN_POST_INJECTED_JAVASCRIPT = `(function() {
    setTimeout(async function() {
      const packageCode = document.querySelector('.package-code > strong').innerText;
      const packageWeight = document.querySelector('.package-weight > strong').innerText;
      const packageLocation = document.querySelector('.package-location > strong').innerText;

       window.ReactNativeWebView.postMessage(packageCode);
       window.ReactNativeWebView.postMessage(packageWeight);

      const timeline = document.querySelectorAll('.timeline-list-item > ul > li');
      const packageTimeline = [];
      for (int i = timeline.length - 1; i >= 0; i -= 1) {
        const timelineItem = timeline[i];
        const labelTime = timelineItem.querySelector('.label-time').innerText;
        const labelStatus = timelineItem.querySelector('.block-span').firstChild.data;
        const labelLocation = timelineItem.querySelector('.block-span .label-location').innerText;
        packageTimeline.push({labelTime, labelStatus, labelLocation});
      }

      const packageInfo = {packageCode, packageWeight, packageLocation, packageTimeline};
      window.ReactNativeWebView.postMessage(packageInfo);
    }, 3000);
  })();`;
