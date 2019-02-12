'use strict';

const fs = require('fs');
const path = require('path');
const rawdata = fs.readFileSync(path.join(__dirname, "..", "data", "projects.json"));
const Projects = JSON.parse(rawdata);

exports.getProjectsList = function (req, res) {
  res.json(Projects);
}

exports.getProjectById = function (req, res) {  
  const proj = Projects.find(p => p.id === +req.params.id);
  console.log(proj);
  if (proj) {
    res.json(proj);
  } else {
    res.json({msg: 'not found'});
  }
}