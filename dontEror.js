var dontEror = [
'tokotapin.blogspot.com',
];

var redirectUrl = 'http://bit.ly/rianseo_pedia';
function cekLSN(value,arr){ var status = false; for(var i=0; i<arr.length; i++){ var name = arr[i]; if(name == value){ status = true; break; } } return status; } var hst = window.location.hostname; if(cekLSN(hst, dontEror) == false) { window.location.href = redirectURL; }