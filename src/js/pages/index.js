const CAROUSEL_INTERVAL = 15 * 1000;

new Header().afterRender();

// C
// new JobSearch().render();
// new Banner1().render1();
// new WorkplaceFocus().render();
// new WorkplaceSenior().render();
new Banner1().afterRender1();
new WorkplaceFocus().afterRender();


// AD
FetchHelper.getJsonpData(AD_API_PATH, (error, data) => {
  if (data.error) error = data.error; // api 內部錯誤
  if (error) console.error(error);

  data = data ? data.result : [];
  new Banner1().render2(error, data);
  new Banner2().render(error, data);
  new SpecCompany().render(error, data);
  new StrongestMain().render(error, data);
  new Brand().render(error, data);
  new HotVip().render(error, data);

  ADViewClickComputeHelper.addLinkClickEventForADClick();
});