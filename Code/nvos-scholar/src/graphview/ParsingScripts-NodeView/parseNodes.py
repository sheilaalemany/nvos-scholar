from __future__ import print_function, division

import json
from collections import defaultdict

fname = "C:\\Users\\Carlos Bravo\\Documents\\SPRING 2019\\envo.obo"
term_head = "[Term]"

#Keep the desired object data here
#all_objects = {}
all_objects = []

def add_object(d):
    dict = {}
    #print(json.dumps(d, indent = 4) + '\n')
    #Ignore obsolete objects
    if "is_obsolete" in d:
        return

    #Gather desired data into a single list,
    # and store it in the main all_objects dict
    key = d["id"]
   # dict["name"] = d["name"]
    dict["id"]= key
    dict["x"] = "469"
    dict["y"] = "410"
    dict["z"] = d["name"]
    all_objects.append(dict)
    #dict = {}
    is_a = d["is_a"]
    #Remove the next line if you want to keep the is_a description info
    is_a = [s.partition(' ! ')[0] for s in is_a]
   # all_objects[key] = d["name"]
                       #+ is_a


#A temporary dict to hold object data
current = defaultdict(list)

with open(fname, encoding="utf-8") as f:
    #Skip header data
    for line in f:
        if line.rstrip() == term_head:
            break

    for line in f:
        line = line.rstrip()
        if not line:
            #ignore blank lines
            continue
        if line == term_head:
            #end of term
            add_object(current)
            current = defaultdict(list)
        else:
            #accumulate object data into current
            key, _, val = line.partition(": ")
            current[key].append(val)

if current:
    add_object(current)

print("\nall_objects =")
json.dump(all_objects,open('data.json','w'), indent = 4, sort_keys=True)
#json.dump(terms,open('file.json','w'))