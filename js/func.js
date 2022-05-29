

    jQuery(document).ready(function() {


//        $('#my_little_fox').draggable();



      $(".fox_home_kitchen h2").click(function(e) {
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-btm-open');
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-top-open');
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-fire-open');

      });


      $("#top_box").click(function(e) {
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-fire-open');
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-btm-open');
        $(".fox_home_kitchen .kitchen-bg").addClass('box-top-open');

      });

      $("#btm_box").click(function(e) {
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-fire-open');
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-top-open');
        $(".fox_home_kitchen .kitchen-bg").addClass('box-btm-open');

      });

      $("#fire_box").click(function(e) {
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-top-open');
        $(".fox_home_kitchen .kitchen-bg").removeClass('box-btm-open');
        $(".fox_home_kitchen .kitchen-bg").addClass('box-fire-open');

      });



    });

