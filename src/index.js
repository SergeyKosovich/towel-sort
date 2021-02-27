


module.exports = function towelSort (matrix) {
  if(!matrix){return []};
  let s=[];
  matrix.forEach( function(item,index){
    if( index%2===0 ){
            for(let i=0; i<item.length;i++){
             s.push(item[i])
            }
     }
    else{        
           for(let i=item.length-1; i>=0;i--){
            s.push(item[i])
          }
    }
  })
return s;
}
