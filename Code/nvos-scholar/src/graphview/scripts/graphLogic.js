var drag, force, graph, height, l, links, n, nodes, vis, width, _i, _j, _len, _len2, _ref, _ref2;
    width = 1200;
    height = 700;
    //border=1;
    bordercolor='black';
    /* create the SVG*/
    vis = d3.select('#graph').append('svg').attr('width', width).attr('height', height).append("g");
    $("svg").css({margin: 'auto', width: '100%', padding: '5px'});
  /*border of the svg*/
  /*
  var borderPath = vis.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", height)
            .attr("width", width)
            .style("stroke", bordercolor)
            .style("fill", "none")
            .style("stroke-width", border);
        */

    /* prepare nodes and links selections*/
    nodes = vis.selectAll('.node');
    links = vis.selectAll('.link');

  /*build the arrow*/
  vis.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
    .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 110)
    .attr("refY", -0.35)
    .attr("markerWidth", 8)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
    .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");
  //.style("fill", "black");


    /* initialize the force layout*/
    force = d3.layout.force().size([width, height]).charge(-1000).linkDistance(300).on('tick', (function() {
      /* update nodes and links*/
    //var k =6 * force.alpha();

    nodes.attr('transform', function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      return links.attr('x1', function(d) {
        return d.source.x;
      }).attr('y1', function(d) {
        return d.source.y;
      }).attr('x2', function(d) {
        return d.target.x;
      }).attr('y2', function(d) {
        return d.target.y;
      });
    }));
    /* define a drag behavior to drag nodes*//* dragged nodes become fixed*/
    drag = force.drag().on('dragstart', function(d) {
   d3.event.sourceEvent.stopPropagation();
      return d.fixed = true;
    //d3.event.sourceEvent.stopPropagation();

    });

  restart();

  //===========If Graph gets to messy user can press reset button=======/
  function resetGraph(){

    nodesArray = graph.nodes;
    for (_i = 0, _len = nodesArray.length; _i < _len; _i++) {
      graph.nodes.splice(0,1);
    }
    linksArray = graph.links;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      graph.links.splice(0,1);
    }
    restart();


  }
  //=======================================================================/

  function searchConcept(item){


   //===========When searching for a concept, first reset visualization to acomodate new graph=========/
    nodesArray = graph.nodes;
    for (_i = 0, _len = nodesArray.length; _i < _len; _i++) {
      graph.nodes.splice(0,1);
    }
    linksArray = graph.links;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      graph.links.splice(0,1);
    }
    restart();
//====================================================================================

  var input, filter;
  filter = item; //gets input data
  //console.log(filter);
  var filter = item.replace("_", ":");

  //check if searched word is already in the visualization
  if((graph.nodes.find(node => node.id == filter))== undefined ){
      n = graphStruct.nodes.find(node => node.id == filter);//if not present in vis, find nodes info and push to graph.
      graph.nodes.push(n);
    //  console.log(n.id);
      }

    _ref = graphStruct.links;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];

       //--------------add related child nodes when searching------------------
       if (n.id === l.target) {/*if id of Searched node matches target in a link. Push that link into the graph*/

      graph.links.push({source: l.source, target: l.target});
          nodeTofind = l.source;
      //console.log(nodeTofind);


      if((graph.nodes.find(node => node.id == nodeTofind))== undefined ){
      nd = graphStruct.nodes.find(node => node.id == nodeTofind);//find nodes info and push to graph.

          graph.nodes.push(nd);
      //console.log(nd);
        }

      }
      //Figure out why is breaking the graph
      /*
       //--------------add related parent nodes when searching------------------
       if (n.id === l.source) {/*if id of Searched node matches target in a link. Push that link into the graph*/
/*
        graph.links.push({source: l.source, target: l.target});
            nodeTofindParent = l.target;
        console.log(nodeTofindParent);


        if((graph.nodes.find(node => node.id == nodeTofindParent))== undefined ){
        nd2 = graphStruct.nodes.find(node => node.id == nodeTofindParent);//find nodes info and push to graph.

            graph.nodes.push(nd2);
        console.log(nd2);
          }

        }
      */

        }

  restart();

  }

 function clickNode(d, i) {

 if (d3.event.defaultPrevented) return; // ignore dragged

  clickedNode = d.id;
  //console.log(clickedNode);
  /*
  a= graph.links.find(link => link.source.id == d.id);
  b= graph.links.find(link => link.target.id == d.id);

  if(typeof a !== "undefined" || typeof b !=="undefined"){
  console.log("im here");
  /*remove nodes*/
  //graph.nodes.splice(i, 1);
//  graph.nodes.splice(i, 1);
  /*remove links*/
/*  graph.links = links.filter(function(l) {
    return l.source !== d && l.target !== d;});
  console.log(graph);

  d3.event.stopPropagation();

  } else{*/
   /* find nodes and links to push into graph then restart vis. */
    _ref = graphStruct.links;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
   // console.log(l);

        if (clickedNode === l.target) {/*if id of clicked node matches target in a link. Push that link into the graph*/

      graph.links.push({source: l.source, target: l.target});
          nodeTofind = l.source;
      //console.log(nodeTofind);

          //continue;
      if((graph.nodes.find(node => node.id == nodeTofind))== undefined ){
      n = graphStruct.nodes.find(node => node.id == nodeTofind);//find nodes info and push to graph.

          graph.nodes.push(n);
     // console.log(n);
    //  }

      }

        }
  //  console.log(graph);
        }

  restart();
   }

   /*remove nodes on dbclick*/
   function dbclickNode(d,i){
   //console.log("double clicked");
   graph.nodes.splice(i, 1);
  graph.links = links.filter(function(l) {
    return l.source !== d && l.target !== d;
  });
  d3.event.stopPropagation();

  restart();

   }

   /*define tooltip*/
    var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
  .style("opacity",0);


  function mousemove() {

  tooltip.style("left", vis.node().getBoundingClientRect().top + 10 + "px");
           // .style("top", vis.node().parentNode.offsetLeft + 270 + "px");
  }

  function mouseOverNode(d,i){
  // t_text = content in html
  tooltip.transition()
       .duration(200)
       .style("opacity",.9);


    t_text = "<strong>" + d.id + "</strong>"+ "<br>Name: " + d.name
    if(d.def !== undefined){
             //only add definition if it is defined
             t_text += "<br>Definition: " + d.def}

    if(d.synonym !== undefined){
             //only add synonym if it is defined
             t_text += "<br>Synonym: " + d.synonym}

    if(d.relationship !== undefined){
            //only add relationship if it is defined
            t_text += "<br>Relationship: " + d.relationship}
  /*
  tooltip.html(t_text)
      .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");*/

  tooltip.html(t_text);/*
      .style("left", svg.node().parentNode.offsetTop + 10 + "px")
            .style("top", svg.node().parentNode.offsetLeft + 270 + "px");*/


   // return tooltip.style("visibility", "visible");

  }

  /*mouse out of the node, change visibility to be hidden*/
  function mouseOutNode(d){
  tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  }
 //------refresh to update vis when using searching functionality-------//
 /*
  function refresh(){
  /* resolve node IDs (not optimized at all!)*/
  /*
    _ref = graphSearch.links;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
      _ref2 = graphSearch.nodes;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        n = _ref2[_j];
        if (l.source === n.id) {
          l.source = n;
          continue;
        }
        if (l.target === n.id) {
          l.target = n;
          continue;
        }
      }
    }

/*
  links = links.data(graphSearch.links);
  links.enter().append('line').attr('class', 'link').attr("marker-end", "url(#end)");
  //links.append('tittle').text(function(d) { return "IS_A";});
  links.exit().remove();

  nodes = nodes.data(graphSearch.nodes);
  nodes.exit().remove();
  nodesEnter = nodes.enter().append('g').attr('class', 'node').call(drag);
    //nodesEnter.append('circle').attr('r', 25).on("click", clickNode).on("mouseover", mouseOverNode).on("mousemove",mousemove).on("mouseout", mouseOutNode).on("dblclick",dbclickNode);
    nodesEnter.append('rect')
        .attr('x', 0)
        .attr('y',1)
        .attr('width',10)
        .attr('height',10)
        .on("click", clickNode).on("mouseover", mouseOverNode).on("mousemove",mousemove).on("mouseout", mouseOutNode).on("dblclick",dbclickNode);

    /* draw the label*/
    /*
    nodes.append('text')
        .attr('x',0)
        .attr("y", 10)
        .attr('dy', '0.35em')
        .attr("text-anchor", "start")
              .text(function (d) {
              return d.name
      })
      /*text(function(d) {
      return d.name;
    }).attr('dy', '0.35em')*/
/*
  nodes.selectAll('rect')
    .attr("width", function(d) {return this.parentNode.getBBox().width;})
  .attr("height", function(d) {return this.parentNode.getBBox().height;})


    /* run the force layout*/
    /*
    force.nodes(graphSearch.nodes).links(graphSearch.links).start();
/*
  }
  */

  //--------------for regular expanding on click-------//
  function restart(){
  /* resolve node IDs (not optimized at all!)*/
    _ref = graph.links;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
      _ref2 = graph.nodes;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        n = _ref2[_j];
        if (l.source === n.id) {
          l.source = n;
          continue;
        }
        if (l.target === n.id) {
          l.target = n;
          continue;
        }
      }
    }


  links = links.data(graph.links);
  links.enter().append('line').attr('class', 'link').attr("marker-end", "url(#end)");
  //links.append('tittle').text(function(d) { return "IS_A";});
  links.exit().remove();

  nodes = nodes.data(graph.nodes);
  nodes.exit().remove();
  nodesEnter = nodes.enter().append('g').attr('class', 'node').call(drag);
    //nodesEnter.append('circle').attr('r', 25).on("click", clickNode).on("mouseover", mouseOverNode).on("mousemove",mousemove).on("mouseout", mouseOutNode).on("dblclick",dbclickNode);
    nodesEnter.append('rect')
        .attr('x', 0)
        .attr('y',1)
        .attr('width',10)
        .attr('height',10)
        .on("click", clickNode).on("mouseover", mouseOverNode).on("mousemove",mousemove).on("mouseout", mouseOutNode).on("dblclick",dbclickNode);

    /* draw the label*/
    nodes.append('text')
        .attr('x',0)
        .attr("y", 10)
        .attr('dy', '0.35em')
        .attr("text-anchor", "start")
              .text(function (d) {
              return d.name
      })
      /*text(function(d) {
      return d.name;
    }).attr('dy', '0.35em')*/

  nodes.selectAll('rect')
    .attr("width", function(d) {return this.parentNode.getBBox().width;})
  .attr("height", function(d) {return this.parentNode.getBBox().height;})


    /* run the force layout*/
    force.nodes(graph.nodes).links(graph.links).start();

  }
