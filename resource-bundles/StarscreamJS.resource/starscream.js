if (typeof jQuery === 'undefined') { throw new Error('Starscream JavaScript requires jQuery') }

   var j$ = jQuery.noConflict();

j$(document).ready(function () {
    // style all buttons
    j$('button').addClass("btn btn-default");
    //style all form controls
    j$('input').addClass('form-control');

    //redo the detail table into an unordered list
    j$('div.pbSubsection table').each(function () {
        var list = j$("<ul/>").addClass("list-group");

        j$(this).find("tr").each(function () {
            var p = j$(this).children().map(function () {
                if (j$(this).find('table').length > 0) {
                    var subList = j$("<ul/>").addClass("list-group");
                    subList.attr("id", j$(this).find('table').attr("id")) // assign the id from the table

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