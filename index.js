// add share option support, so not creat mask element every time
var $ = require('jquery');
var uuid = window.__masker_uuid = window.__masker_uuid ? window.__masker_uuid++ : 1;
var isIE6 = /msie 6/i.test(navigator.userAgent);
var defaults = {
    opacity: .5,
    backgroundColor: '#000',
    zIndex: 38
};
var Masker = function(option) {
    this.o = $.extend({}, defaults, option);
    this.$target = $(option.target);
    this.$target.data('mk-masker-uuid', uuid);
    // get position
    // for document or window, return zero
    var offset = this.$target.offset() ? this.$target.offset() : {
        top: 0,
        left: 0
    };
    // get width
    this.dimensions = {
        width: this.$target.outerWidth(),
        height: this.$target.outerHeight()
    };


    // create a mask
    this.$mask = $('<div/>')
        .attr('id', 'mk-masker-' + uuid)
        .css({
            transition: 'all 0.5s linear',
            position: 'absolute',
            top: offset.top,
            left: offset.left,
            width: this.dimensions.width,
            height: this.dimensions.height,
            backgroundColor: this.o.backgroundColor,
            opacity: this.o.opacity,
            display: 'none',
            zIndex: this.o.zIndex
        });


    // if element is document or body and not in IE6
    if (!isIE6 && (this.$target.is(document) || this.$target.is('body'))) {
        this.$mask.css({
            position: 'fixed',
            width: '100%',
            height: '100%'
        });
    }

    this.$mask.appendTo('body');
    return this;
};

Masker.prototype.show = function(doUpdate) {
    if (doUpdate) {
        this.dimensions = {
            width: this.$target.outerWidth(),
            height: this.$target.outerHeight()
        };
        this.$mask.css({
            width: this.dimensions.width,
            height: this.dimensions.height
        });
    }
    this.$mask.show();
    this.trigger('show');
    return this;
};

Masker.prototype.hide = function() {
    this.$mask.css({
        //opacity:0
    }).hide();
    this.trigger('hide');
    return this;
};


var Events = require('eventor');
// mixin
Events.mixTo(Masker);

// static function
function unmask(target) {
    var maskerUid = $(target).data('mk-masker-uuid');
    if (maskerUid && $('#mk-masker-' + maskerUid) && $('#mk-masker-' + maskerUid).is(':visible')) {
        $('#mk-masker-' + maskerUid).hide();
    }
}


module.exports = Masker;
module.exports.unmask = unmask;