import React from 'react';
import * as d3 from 'd3';
import { ProgressBar,Badge , Button , ButtonGroup , DropdownButton , MenuItem , Modal} from 'react-bootstrap';
import _ from 'lodash';


class Greetings extends React.Component {

  constructor(props){
    super(props);
    // this.state = { margin : {top: 20 , right :20 , left :20 , bottom : 20 } } ;
      

  }

  componentWillMount() {
   // this.yScale = d3.scale.linear();
    // svg.style("fill", "steelblue");
    // svg.attr("r",30)
   
 

  }

  componentDidMount(){

     // const svg = d3.select("svg").append("text").text("Pss").attr("height",100).attr("width",30);
     
     // this.xScale = d3.scaleLinear();
    
     // svg.append("g").attr("r",300);

 const margin = { top: 30 , right :40 , left :40 , bottom : 30 };
 const padding ={ top: 30 , right :40 , left :40 , bottom : 30 };
 const svgsize ={ width: window.innerWidth , height : window.innerHeight}
 const innerHeight = svgsize.height - margin.top - margin.bottom -10;
 const innerWidth = svgsize.width - margin.left - margin.right ;
 const heighty = innerHeight-margin.top;
 console.log(window.innerWidth);
 console.log(window.innerWidth);
 const svg = d3.select("#d3_line").append("svg").attr("width", svgsize.width-padding.left-padding.right)
    .attr("height", svgsize.height-padding.top-padding.bottom);
     // svg.append("text").text("sdffs").attr("font-size","34px").attr("y", 79)
     //                  .attr("x", 40);
     // svg.append("circle").attr("cx", 30)
     //                     .attr("cy", 30)
     //                     .attr("r", 20);


  // svg.append("g").attr("transform", "translate(0,30)").attr("className"," axis axis--y")
  //   .call(d3.axisBottom(x));

  const x = d3.scaleBand().rangeRound([0, innerWidth-margin.left*2-margin.right]);

  const y = d3.scaleLinear().rangeRound([ innerHeight-margin.top-margin.bottom  , 0]).domain([0,1]);


  x.domain([ "201","202","203","204","205","206","207","208","209","210","212"]);//[ "201","202","203","204","205","206","207","208","209","210","212"]
  svg.append("g").attr("className","axis--y")
                 .attr("transform", "translate("+ margin.left +","+margin.top+")")
                 .call(d3.axisLeft(y).ticks(10,"%"))
                    .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", "0.71em")
                    // .attr("color","white")
                    .attr("text-anchor", "end").text("Frequencydsad");
                    // .attr("font-size","34px");



  svg.append("g").attr("className","axis--x")
                 .attr("transform","translate( "+margin.left+","+ heighty+ ")").call(d3.axisBottom(x));
 
  // svg.append("rect").attr("x",margin.left).attr("y",heighty-100).attr("width", 50).attr("height", 100);
  
const data = [
  {letter: "201", frequency: .8},
  {letter: "202", frequency: .9},
  {letter: "203", frequency: .77},
  {letter: "204", frequency: .87},{letter: "205", frequency: .87},{letter: "206", frequency: .87},
  {letter: "207", frequency: .87},{letter: "208", frequency: .87},{letter: "209", frequency: .87},{letter: "210", frequency: .87},
  {letter: "212", frequency: .87}];

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter)+margin.left; })
      .attr("width", x.bandwidth()/0.9)
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return heighty - y(d.frequency); })
      .attr("fill","steelblue");
// const scaleX = d3.scale.linear()
//       .range([0, width])
//       .domain([0, 9]);



  }

  render() {
 
    // this.xScale = d3.scaleLinear();

const form = (

                <ButtonGroup justified>
                    <Button href="#">Left</Button>
                    <Button href="#">Middle</Button>
                    <DropdownButton title="Dropdown" id="bg-justified-dropdown">
                      <MenuItem eventKey="1">Dropdown link</MenuItem>
                      <MenuItem eventKey="2">Dropdown link</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
  );

    return (


      <div className="jumbotron hidden-xs">
            <h1>KCR_報表</h1>
           <ProgressBar active now={45} label={`${45}%`}/>
    		 <p>完成率 <Badge>42</Badge>  / <Badge>70</Badge> </p>

    
          		
                <hr/>
               <div className="d3_line" id="d3_line"></div>
          


      
      </div>


      


    
     
      

    
    );
  }
}

export default Greetings;
