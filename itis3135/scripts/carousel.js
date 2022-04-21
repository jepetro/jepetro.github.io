$(document).ready(
function()
{
    $("#slider").bxSlider(
        {
            auto: true,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: 480,
            slideMargin:20,
            captions: true,
            pager: true,
            pagerSelector:'#id_pager',
            pagerType: 'short',
            autoDelay: 3000,
            randomStart: true
        }
    )
}

)