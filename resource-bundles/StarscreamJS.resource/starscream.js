$(document).ready(function () {
    $('div.productTable table').each(function () {
        var list = $("<ul/>");

        $(this).find("tr").each(function () {
            var p = $(this).children().map(function () {
                if ($(this).find('table').length > 0) {
                    var subList = $("<ul/>");

                    var sP = $(this).find('table').children().map(function () {
                        return "<p>" + $(this).html() + "</p>";
                    });

                    subList.append("<li>" + $.makeArray(sP).join("") + "</li>");

                    return $('<div />').append($('<p />').append(subList)).html();
                }
                else {
                    return "<p>" + $(this).html() + "</p>";
                }
            });

            list.append("<li>" + $.makeArray(p).join("") + "</li>");
        });

        $(this).replaceWith(list);
    });
});