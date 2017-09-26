var wrap = document.getElementsByClassName('wrap')[0]
var lis = document.getElementsByTagName('li')

var start = {};
for(let i =0;i<lis.length;i++){
    lis[i].addEventListener('touchstart', function(e){
        start.x = e.touches[0].pageX
        start.y = e.touches[0].pageY
    })


    // lis[i].addEventListener('touchmove',function(e){
    //     var end = {}
    //     end.x = e.touches[0].pageX
    //     end.y = e.touches[0].pageY
    //     var obj = {}
    //     // 判断方向是水平还是垂直 向上向下还是向左向右
    //     // obj
    // })


    lis[i].addEventListener('touchend',function(e){
        // console.log(start)
        var small = document.documentElement.clientWidth / 6 //设置最小的滑动范围
        var end = {}
        end.x = e.changedTouches[0].pageX
        end.y = e.changedTouches[0].pageY
        var last = {}
        last.x = end.x - start.x
        last.y = end.y - start.y
        if(Math.abs(last.x) > small){  // 判断能否滑出按钮
            if(Math.abs(last.x) > Math.abs(last.y)){
                console.log('水平')
                if(last.x < 0){
                    console.log('左滑')
                    this.style.marginLeft = '-70px'
                    var sp = this.getElementsByTagName('span')[0]
                    var that = this
                    sp.onclick = function(){
                        that.remove()
                    }
                } else{
                    console.log('右滑')
                    this.style.marginLeft = '0px'
                }
            }else{
                console.log('垂直')
            }
            
             console.log(last)
             console.log(small)
        }
       
    })
}