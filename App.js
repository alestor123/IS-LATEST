var axios = require('axios'),
{readFileSync} = require('fs');
module.exports = async (path,name) => {
if(!(name&&name)) throw new Error('Please enter the path and name')
return JSON.parse(readFileSync(path+'node_modules/'+name+'/package.json').toString()).version==(await axios.get('http://registry.npmjs.org/'+name+'/latest')).data.version
}