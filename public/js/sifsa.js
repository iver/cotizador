'use strict';
(function (sifsa, $, undefined) {

    sifsa.remote = function (ajaxOptions) {
        $.ajax({
            url: ajaxOptions.url,
            type: ajaxOptions.type || 'POST',
            datatype: ajaxOptions.datatype || 'json',
            global: ajaxOptions.global || true,
            contentType: 'application/json',
            data: ajaxOptions.data,
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader('Accept','application/json');
                if($.isFunction(ajaxOptions.beforeSend)) {
                    ajaxOptions.beforeSend(xhr, settings);
                }
            },
            success: ajaxOptions.success,
            fail: ajaxOptions.fail,
            error: function (jqXHR, textStatus, errorThrown) {
                if ($.isFunction(ajaxOptions.error)) {
                    ajaxOptions.error(jqXHR, textStatus, errorThrown);
                } else {
                    console.log("error " + errorThrown);
                }
            },
            complete: function (jqXHR, textStatus) {
                if ($.isFunction(ajaxOptions.complete)) {
                    ajaxOptions.complete(jqXHR, textStatus);
                }
            }
        });
    };

    sifsa.message = {
        base: function (action, message, msgType) {
            return [
                '<div class="alert alert-', msgType, '">',
                '<a href="#" class="close" data-dismiss="alert">&times;</a>',
                '<strong>', action, '</strong> ', message,
                '</div>'
            ].join('');
        },
        success: function (action, message) {
            return this.base(action, message, "success");
        },
        error: function (action, message) {
            return this.base(action, message, "danger");
        },
        info: function (action, message) {
            return this.base(action, message, "info");
        },
        warning: function (action, message) {
            return this.base(action, message, "warning");
        }
    };

    var output = $('#output');

    sifsa.showError = function (action, message) {
        var html = sifsa.message.error(action, message);
        output.append(html);
    };
    sifsa.showSuccess = function (action, message) {
        var html = sifsa.message.success(action, message);
        output.append(html);
    };
    sifsa.showInfo = function (action, message) {
        var html = sifsa.message.info(action, message);
        output.append(html);
    };
    sifsa.showWarning = function (action, message) {
        var html = sifsa.message.warning(action, message);
        output.append(html);
    };

}(window.sifsa = window.sifsa || {}, jQuery));
