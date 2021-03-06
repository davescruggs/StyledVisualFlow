if (typeof jQuery === 'undefined') { throw new Error('Starscream JavaScript requires jQuery') }

   var j$ = jQuery.noConflict();

j$(document).ready(function () {
    // style all buttons
    j$('button').addClass("btn btn-default");
    //style all form controls
    j$('input').addClass("form-control");
    // try to style the select lists
    j$('select').addClass("dropdown-toggle");
    //try text areas
    j$('textarea').addClass("form-control");

    //redo the detail table into an unordered list
    j$('div.pbSubsection table').each(function () {
        var list = j$("<ul/>").addClass("list-group");

        j$(this).find("tr").each(function () {
            var p = j$(this).children().map(function () {
                if (j$(this).find('table').length > 0) {
                    var subList = j$("<ul/>").addClass("list-group");
                    subList.attr("id", j$(this).find('table').attr("id")) // assign the id from the table
                    // remove the flow ".empty" table cells
                    j$(".empty").remove();
                    j$("td:empty").remove();

                    var sP = j$(this).find('table').children().map(function () {
                        var tmpPara = "<p>" + j$(this).html().trim() + "</p>";
                        tmpPara.addClass(this.attr("class"));

                        if (tmpPara.trim() ===  "<p></p>"){
                            tmpPara = "";
                        }
                        return tmpPara;
                    });

                    subList.append("<li>" + j$.makeArray(sP).join("") + "</li>");

                    return j$('<div />').append(j$('<p />').append(subList)).html();
                }
                else {
                    return "<p>" + j$(this).html().trim() + "</p>";
                }
            });

            list.append("<li>" + j$.makeArray(p).join("") + "</li>");
        });
        // remove empty paragraphs
        list.find('p:empty').remove();
        list.find('p').each(function(index, item) {
            if(j$.trim(j$(item).text()) === "" && j$(item).children().length === 0) {
                j$(item).slideUp();
                j$(item).remove();
            }
        });


        j$(this).replaceWith(list);
    });
});