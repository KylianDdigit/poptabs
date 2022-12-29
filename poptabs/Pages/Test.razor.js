const mainChannel = new BroadcastChannel("channel");

mainChannel.onmessage = (e) => {
  alert(e.data);
  if (dotNetHelper) {
    dotNetHelper.invokeMethodAsync('BlazorSample', 'InvokeAction');
  }
}

var dotNetHelper = null;

window.updateMessageCaller = (dotNetHelper) => {
  dotNetHelper = dotNetHelper;
}