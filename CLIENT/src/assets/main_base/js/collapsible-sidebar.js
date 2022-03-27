var sidebar = $('#mySidebar');
var body = $('.collapsible-content');
var icon = $('#mySidebar .navigation i');
var sidebarBody = $('#mySidebar .sidebar-body');
var fixedFooter = $('.fixed-search-footer');
var sidebarPanel = $('#mobilepanel');
var parent = $('.search-result');
var width = window.matchMedia("(min-width: 768px)");
var filterId = $('.applied-filters a').attr('href');
var filter = $(filterId);

if (width.matches) {
    toggleNav();
    $('.applied-filters a').removeClass('collapse');
    filter.addClass('show');
}

function toggleNav() {
    sidebar.toggleClass('expanded');
    icon.toggleClass('expanded');
    body.toggleClass('expanded');
    parent.toggleClass('expanded');
    fixedFooter.toggleClass('expanded');
    if (sidebarBody.hasClass('expanded'))
        sidebarBody.removeClass('expanded');
    else
        setTimeout(() => {
            sidebarBody.addClass('expanded');
        }, 500);
}

function togglePanel() {
    sidebarPanel.toggleClass('expanded');
}