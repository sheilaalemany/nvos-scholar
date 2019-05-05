*parseNodes.py contains the script that parses the Envo Ontology
in OBO to json format.This parses the nodes for the graph(the concept info in the ontology)
e.g:
	'nodes':[
	{
	"id": "BFO:0000001",  
	"name": "entity"
	}
	]
*parseLinks.py contains the script that parses the Envo Ontology
in OBO to json format.
This parses the IS_A relationships between concepts in the ontology as follows:
e.g:
	'links':[
	{
        "source": "BFO:0000002",
        "target": "BFO:0000001"
    	}
	]

Note:
The entire Envo Ontology parsed data is stored in complete-graph-struct.js 
under the Node graph view Folder and is proccessed
by D3.js library in graphLogic.js.
	