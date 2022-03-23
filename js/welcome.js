var Space = {
    init: function(){
      var self = this;
      this.config = {
        perspective: 3,
        star_color: '255, 255, 255',
        speed: 10,
        stars_count: 2
      };
      this.canvas = document.getElementById('canvas');
      this.context = canvas.getContext('2d');
      this.start();
      console.log('start')
      window.onresize = function(){
        self.start();
      };
    },
  
    start: function(){
      var self = this;
  
      this.canvas.width  = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.canvas_center_x = this.canvas.width / 2;
      this.canvas_center_y = this.canvas.height / 2;
  
      this.stars_count = this.canvas.width / this.config.stars_count;
      this.focal_length = this.canvas.width / this.config.perspective;
      this.speed = this.config.speed * this.canvas.width / 2000;
  
      this.stars = [];
  
      for(i = 0; i < this.stars_count; i++){
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          z: Math.random() * this.canvas.width,
        });
      }
  
      window.cancelAnimationFrame(this.animation_frame);
      this.canvas.style.opacity = 1;
  
      this.cow = new Image();
      this.cow.src = 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Hamburger_PNG_Vector_Picture.png?m=1507172108';
      this.cow.onload = function(){
        self.render();
      }
    },
  
    render: function(){
      var self = this;
      this.animation_frame = window.requestAnimationFrame(function(){
        self.render();
      });
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for(var i = 0, length = this.stars.length; i < length; i += 1){
        var star = this.stars[i];
        star.z -= this.speed;
        if(star.z <= 0) {
          this.stars[i] = {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            z: this.canvas.width,
          };
        }
  
        var star_x = (star.x - this.canvas_center_x) * (this.focal_length / star.z) + this.canvas_center_x;
        var star_y = (star.y - this.canvas_center_y) * (this.focal_length / star.z) + this.canvas_center_y;
        var star_radius  = Math.max(0, 1.4 * (this.focal_length / star.z) / 2);
        var star_opacity = 1.2 - star.z / this.canvas.width;
        var cow_width = Math.max(0.1, 100 * (this.focal_length / star.z) / 2);
  
        if(star.cow){
          this.context.save();
          this.context.translate((star_x-cow_width)+(cow_width/2), (star_y-cow_width)+(cow_width/2));
          this.context.rotate(star.z/star.rotation_speed);
          this.context.translate(-((star_x-cow_width)+(cow_width/2)), -((star_y-cow_width)+(cow_width/2)));
          this.context.globalAlpha = star_opacity;
          this.context.drawImage(this.cow, 0, 0, this.cow.width, this.cow.width, star_x-cow_width, star_y-cow_width, cow_width, cow_width);
          this.context.restore();
        } else {
          this.context.fillStyle = 'rgba(' + this.config.star_color + ',' + star_opacity + ')';
          this.context.beginPath();
          this.context.arc(star_x, star_y, star_radius, 0, Math.PI * 2);
          this.context.fill();
        }
      }
    }
  };
  
  window.onload = function(){
    Space.init();
  };
  
  $('.button--bubble').each(function() {
    var $circlesTopLeft = $(this).parent().find('.circle.top-left');
    var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
  
    var tl = new TimelineLite();
    var tl2 = new TimelineLite();
  
    var btTl = new TimelineLite({ paused: true });
  
    tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
    tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
    tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
    tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
    tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
    tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
    tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');
  
    var tlBt1 = new TimelineLite();
    var tlBt2 = new TimelineLite();
    
    tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
    tlBt1.add(tl);
  
    tl2.set($circlesBottomRight, { x: 0, y: 0 });
    tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
    tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
    tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
    tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
    tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
    tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
    tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
    
    tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
    tlBt2.add(tl2);
  
    btTl.add(tlBt1);
    btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);
  
    btTl.timeScale(2.6);
    console.log('test')
    $(this).on('mouseover', function() {
      btTl.restart();
    });
  });