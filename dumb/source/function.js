
Macro.add('fadein', {
    tags : null,
    handler : function () {

     var $wrapper = $(document.createElement('span'));
     var content  = this.payload[0].contents, time, delay;

     if (this.args.length === 0) {
         return this.error('no arguments given');
     }
     
     time  = Util.fromCssTime(this.args[0]);
     delay = (this.args.length > 1) ?  Util.fromCssTime(this.args[1]) : 0;

     $wrapper
         .wiki(content)
         .addClass('macro-' + this.name)
         .appendTo(this.output)
         .hide()
         .delay(delay)
         .fadeIn(time);

 }
});

Macro.add('fadeout', {
    tags : null,
    handler : function () {

     var $wrapper = $(document.createElement('span'));
     var content  = this.payload[0].contents, time, delay;

     if (this.args.length === 0) {
         return this.error('no arguments given');
     }
     
     time  = Util.fromCssTime(this.args[0]);
     delay = (this.args.length > 1) ?  Util.fromCssTime(this.args[1]) : 0;

     $wrapper
         .wiki(content)
         .addClass('macro-' + this.name)
         .appendTo(this.output)
         .delay(delay)
         .fadeOut(time);
 }
});