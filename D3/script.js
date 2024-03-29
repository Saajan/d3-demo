var myStyles = [
  { width: 30,
    name: 'monday',
    color: '#A57706'},
  { width: 230,
    name: 'b',
    color: '#BD3613'},
  { width: 220,
    name: 'c',
    color: '#D11C24'},
  { width: 290,
    name: 'd',
    color: '#C61C6F'},
  { width: 236,
    name: 'e',
    color: '#595AB7'},
  { width: 230,
    name: 'f',
    color: '#2176C7'}
];

d3.selectAll('#chart').selectAll('div')
  .data(myStyles)
  .enter().append('div')
  .classed('item', true)
  .text(function(d) {
    return d.name;
  })
  .style({
    'color': 'white',
    'background' : function(d) {
      return d.color;
    },
    width : function(d) {
      return d.width + 'px';
    } 
  })