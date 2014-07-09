if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

var j$ = jQuery.noConflict();

j$(document).ready(function () {
    j$('div.productTable table').each(function () {
        var list = j$("<ul/>");

        j$(this).find("tr").each(function () {
            var p = j$(this).children().map(function () {
                if (j$(this).find('table').length > 0) {
                    var subList = j$("<ul/>");

                    var sP = j$(this).find('table').children().map(function () {
                        return "<p>" + j$(this).html() + "</p>";
                    });

                    subList.append("<li>" + j$.makeArray(sP).join("") + "</li>");

                    return j$('<div />').append(j$('<p />').append(subList)).html();
                }
                else {
                    return "<p>" + j$(this).html() + "</p>";
                }
            });

            list.append("<li>" + j$.makeArray(p).join("") + "</li>");
        });

        j$(this).replaceWith(list);
    });
});