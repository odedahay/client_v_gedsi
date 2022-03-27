$(document).ready(function() {
    var active = $('.collapse.show');
    var selected;
    if (active.length !== 0) {
        addIndicators(active);
    }

    updateBorders();

    var timespanAccordionLastChild = $('.accordion.ts .au-card-panel:last-child');
    timespanAccordionLastChild.prepend('<div class="last-item"></div>');
    var timespanAccordionFirstChild = $('.accordion.ts .au-card-panel:last-child');
    $('<div class="indicator-border"></div>').insertBefore(timespanAccordionFirstChild);


    function addIndicators(active) {
        for (var i = 0; i < active.length; i++) {
            var id = active[i].id;
            var parent = $(`*[data-target="#${id}"]`);
            if (parent.hasClass('sidebar-header')) {
                $('<div class="right-triangle indicator"></div>').insertBefore(parent);
            }
        }
    }

    function updateBorders() {
        var elements = $('.accordion.ts .card-header');

        setTimeout(function() {
            elements.each(function() {
                var collapsed = $(this).find('button.collapsed');
                var header = $(this).find('.tl-radius');
                var content = $(this).find('button').find('small');
                var icon = $(this).find('button i');

                console.log(collapsed);

                if (collapsed.length !== 0) {
                    $(this).addClass('collapsed');
                    header.addClass('collapsed');
                    content.text('Show Details');
                    icon.removeClass('fa-chevron-up');
                    icon.addClass('fa-chevron-down');
                } else {
                    $(this).removeClass('collapsed');
                    header.removeClass('collapsed');
                    content.text('Hide Details');
                    icon.removeClass('fa-chevron-down');
                    icon.addClass('fa-chevron-up');
                }
            });
        }, 10);
    }

    $('#accordion .btn-link.sidebar-header').on('click', function() {
        selected = $(this);
        var prev = $(this).prev();
        $('.right-triangle.indicator').remove();
        if (prev.length !== 0) {
            prev.remove();
        } else {
            $('<div class="right-triangle indicator"></div>').insertBefore($(this));
        }
    });

    $('.accordion.ts').on('click', function() {
        updateBorders();
    });
});