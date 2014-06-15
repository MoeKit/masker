var $ = require('jquery');
var uuid = window.__masker_uuid = window.__masker_uuid ? window.__masker_uuid++ : 1;
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
    var dimensions = {
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
            width: dimensions.width,
            height: dimensions.height,
            backgroundColor: this.o.backgroundColor,
            opacity: this.o.opacity,
            display: 'none',
        })
        .appendTo('body');
    return this;
};

Masker.prototype.show = function() {
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


var Events = require('events');
// mixin
Events.mixTo(Masker);


module.exports = Masker;