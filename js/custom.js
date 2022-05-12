  $('document').ready(function () {
      $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 3000,
          nav: false,
          dots: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      });
      $(".pool-healer #accordion").accordion({

          icons: {
              header: "fas fa-chevron-down",
              activeHeader: "fas fa-chevron-up"
          }
      });
      $(".question #accordion").accordion({
          classes: {
              "ui-accordion-header": "ui-accordion-custom-header",
              "ui-accordion-header-active": "ui-accordion-custom-header-active",
              "ui-accordion-header-collapsed": "ui-accordion-custom-header-collapsed",
              "ui-accordion-content": "ui-accordion-custom-content",
              "ui-accordion-header-icon": "ui-accordion-custom-header-icon"
          },
          animate: 200,
          active: false,
          collapsible: true,
          heightStyle: "content",
          icons: {
              header: "fas fa-chevron-down",
              activeHeader: "fas fa-chevron-up"
          }
      });
  });
