window.addEventListener('load',function(){
    const detectElem = document.querySelector("#ch-detect");
    const adBlockPopup = document.querySelector(".ch-popup-box");
    const dismissBtn = adBlockPopup.querySelector(".dismiss-btn");
    const BgEffect = document.querySelector(".ch-bg-effect");
    let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
    for(let item of adClasses){
      detectElem.classList.add(item);
    }
    let getProperty = window.getComputedStyle(detectElem).getPropertyValue("display");
    if(!adBlockPopup.classList.contains("show")){
      getProperty == "none" ? adBlockPopup.classList.add("show") : adBlockPopup.classList.remove("show");
      getProperty == "none" ? BgEffect.classList.add("show") : BgEffect.classList.remove("show");
    }
    dismissBtn.addEventListener("click", ()=>{
      adBlockPopup.classList.remove("show");
	  BgEffect.classList.remove("show");
    });
})
