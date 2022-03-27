var storyTab = $("#aas");
var content = storyTab.find('.aas-content');
var form = storyTab.find('.my-story-form');

function toggleStoryForm() {
    if (form.hasClass('hide')) {
        content.addClass('hide');
        form.removeClass('hide');
        window.scrollTo(0, 0);
    } else {
        form.addClass('hide');
        content.removeClass('hide');
        window.scrollTo(0, 0);
    }
}

$(document).ready(function() {
    var $nav = $('#nav');
    var $body = $('body');
    var wrapper = $('.container.main-wrapper');
    var hasHeaderImg = $('.header-img');
    var hasMarineHeaderImg = $('.header-img-marine');
    var sidebar = $('.sidebar.v-nav.sticky-top');
    if (hasHeaderImg.length === 0 && hasMarineHeaderImg.length === 0) {
        $nav.addClass('navbar-scrolled');
        wrapper.addClass('no-header-img');
    } else {
        $(document).scroll(function() {
            $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > 0);
            sidebar.toggleClass('scrolled', $(this).scrollTop() > 200)
            if ($(this).scrollTop() < 200) {
                $body.removeClass('isScrolled');
            }
        });
    }

    //variables
    var isCollapsed = false;
    var isLoading = false;
    var menuLayer = 0;
    toggleNavigation();

    if (menuLayer === 0) {
        $('.nav--tab-header').addClass('hide');
        $('.nav--mobile-footer').addClass('hide');
        $('#navbarNavDropdown').addClass('no-header');
        $('.menu-container').addClass('no-header');
        $('.previous-btn').addClass('hide');
        $('.main-menu-btn').addClass('hide');
    }

    $('.navbar-toggler').click(function() {
        var icon = $('.navbar-toggler i');
        var label = $('.navbar-toggler span');
        var menuBar = $('#navbarNavDropdown');
        if (!menuBar.hasClass('collapsing')) {
            if (isCollapsed == false && !menuBar.hasClass('show')) {
                isCollapsed = true;
                icon.removeClass('fa-bars');
                icon.addClass('fa-times');
                label.text('Close');
                icon.addClass('orange-yellow');
                label.addClass('orange-yellow');
                $(window).scrollTop(0);
            } else if (isCollapsed == true && menuBar.hasClass('show')) {
                isCollapsed = false;
                icon.removeClass('fa-times');
                icon.addClass('fa-bars');
                label.text('Menu');
                icon.removeClass('orange-yellow');
                label.removeClass('orange-yellow');
            }
        }
    });

    $('.nav--link-container .nav-item').click(function() {
        var items = $('.nav--link-container .nav-item');
        if (isLoading === false) {
            isLoading = true;
            items.removeClass('active');
            $(this).addClass('active');
        }
        isLoading = false;
    });

    let mainMenuId = 'mainMenu';
    let secondLayerMenuId = 'secondLayerMenu';
    let thirdLayerMenuId = 'thirdLayerMenu';
    let back = $('.previous-btn');
    let main = $('.main-menu-btn');
    let header = $('.nav--tab-header');
    let menus = $('.menu-container').children();
    $('.menu-container a').click(function() {
        console.log("isLoading: " + isLoading);
        if (!isLoading) {
            menuLayer++;
            navigate();
            isLoading = true;
        }
        isLoading = false;
    });

    $('.previous-btn').click(function() {
        if (menuLayer > 1) {
            menuLayer--;
            navigate();
        }
    });

    $('.main-menu-btn').click(function() {
        if (menuLayer > 0) {
            menuLayer = 0;
            navigate();
        }
    });

    $('.dropdown-item').click(function() {
        if (isLoading === false) {
            isLoading = true;
            $(this).toggleClass('active');
            isLoading = false;
        }
    });

    function toggleNavigation() {
        if (menuLayer > 0) {
            $('.nav--tab-header').removeClass('hide');
            $('.nav--mobile-footer').removeClass('hide');
            $('.main-menu-btn').removeClass('hide');
            $('#navbarNavDropdown').removeClass('no-header');
            $('.menu-container').removeClass('no-header');
            if (menuLayer > 1) {
                $('.previous-btn').removeClass('hide');
            }
        } else {
            $('.nav--tab-header').addClass('hide');
            $('.nav--mobile-footer').addClass('hide');
            $('#navbarNavDropdown').addClass('no-header');
            $('.menu-container').addClass('no-header');
            $('.previous-btn').addClass('hide');
            $('.main-menu-btn').addClass('hide');
        }
    }

    function navigate() {
        switch (menuLayer) {
            case 0:
                menus.each(function() {
                    if (this.id === mainMenuId) {
                        this.style.display = 'block';
                    } else {
                        this.style.display = 'none';
                    }
                });
                break;
            case 1:
                $('.previous-btn').css('display', 'none');
                $('.main-menu-btn').css('display', 'inline-block');
                menus.each(function() {
                    if (this.id === secondLayerMenuId) {
                        this.style.display = 'block';
                    } else {
                        this.style.display = 'none';
                    }
                });
                break;
            case 2:
                $('.previous-btn').css('display', 'inline-block');
                $('.main-menu-btn').css('display', 'inline-block');
                menus.each(function() {
                    if (this.id === thirdLayerMenuId) {
                        this.style.display = 'block';
                    } else {
                        this.style.display = 'none';
                    }
                });
                break;
            default:
                // code block
        }
        toggleNavigation();
    }

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass('show');
        });

        return false;
    });

    $('.scholarships .sidebar a.parent').on('click', function(e) {
        $(this).tab('show');
        window.scrollTo(0, 0);
        var elems = $('.sidebar a.active');
        elems.removeClass('show active');
        $(this).addClass('show active');
    });

    $('.scholarships .sidebar a.child').on('click', function(e) {
        var parentId = $(this).attr('data-for');
        var parent = $(parentId);
        var parents = $('.sidebar a.parent.active');
        if (!parent.hasClass('active') && parents.length !== 0) {
            parent.click();
        } else {
            setTimeout(function() {
                window.scrollBy({
                    top: -120,
                    left: 0,
                    behavior: 'smooth'
                });
            }, 0);
        }
    });

    $('.scroll-spy a.child').on('click', function(e) {
        setTimeout(function() {
            window.scrollBy({
                top: -186,
                left: 0,
                behavior: 'smooth'
            });
        }, 0);
    });

    $(window).on('activate.bs.scrollspy', function(event) {
        var activeChildren = $('.scroll-spy.child .active');
        if (activeChildren.length !== 0) {
            activeChildren.each(function() {
                var parentId = $(this).parents().find('.scroll-spy').attr('parent');
                var parent = $(parentId);
                parent.addClass("active");
            });
        }
    });
});