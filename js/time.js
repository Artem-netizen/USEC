$.mask.definitions['H'] = "[0-2]";
$.mask.definitions['h'] = "[0-9]";
$.mask.definitions['M'] = "[0-5]";
$.mask.definitions['m'] = "[0-9]";
$("#time_start").mask("Hh:Mm", {
    completed: function() {
        var currentMask = $(this).mask();
        if (isNaN(parseInt(currentMask))) {
            $(this).val("");
        } else if (parseInt(currentMask) > 2359) {
            $(this).val("23:59");
        };
    }
});