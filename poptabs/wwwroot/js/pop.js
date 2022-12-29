const mainChannel = new BroadcastChannel("channel");

mainChannel.onmessage = (e) => {
  alert(e.data);
  dotNetHelperCache.forEach(helper =>
    helper.invokeMethodAsync('BlazorSample', 'InvokeAction')
  );
}

var dotNetHelperCache = [];

window.SendStateOfLastButtonClicked = () => {
  tempChannel = new BroadcastChannel("channel");
  tempChannel.postMessage("test message");
  tempChannel.close();
}

window.updateMessageCaller = (dotNetHelper) => {
  dotNetHelperCache.push(dotNetHelper);
}
