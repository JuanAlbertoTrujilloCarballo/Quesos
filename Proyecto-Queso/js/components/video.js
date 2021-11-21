AFRAME.registerComponent('play-super-video', {

    init: function () {
      const el = this.el;
      el.addEventListener("mouseenter", function(){
        el.play;
      })
      },
  
    update: function () {
      // Do something when component's data is updated.
    },
  
    remove: function () {
      // Do something the component or its entity is detached.
    },
  
    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
  });