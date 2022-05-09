$(document).ready(
    function()
    {
        $("#slider").bxSlider(
            {
                auto: true,
                maxSlides: 1,
                moveSlides: 1,
                slideWidth: 1027,
                slideMargin:20,
                captions: true,
                pager: true,
                pagerType: 'long',
                autoDelay: 3000,
                stopAutoOnClick: true,
                autoControls: true,
                randomStart: true
            }
        )
    }
    
    )