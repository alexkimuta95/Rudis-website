const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators:false,
  height:500,
  transition:500,
  interval:6000
});
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data:{
    "Diani": null,
    "Pemba Tanzania": null,
    "Ukunda": null,
    "Zanzibar": null,
    "Uyoma": null,
    "Busabal Uganda ": null,
    "Durban South Africa": null
  }
});
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {})

const mb = document.querySelectorAll('.materialboxed');
M.materialbox.init(mb, {

});


